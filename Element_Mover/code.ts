// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// Define the type for the properties to update
interface UpdateProperties {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  fillColor: string;
  cornerRadius: number;
}


// Utility function to parse color input (e.g., "#ffffff") into Figma's RGBA format
function parseColor(hex: string) {
  if (hex.startsWith('#')) {
    hex = hex.substring(1);
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  return { r, g, b };
}

// Listen for selection changes in Figma
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  
  // Check if exactly one node is selected
  if (selection.length === 1) {
    const selectedNode = selection[0];
    
    // Send the selected node's ID to the UI
    figma.ui.postMessage({
      type: 'element-selected',
      id: selectedNode.id,
      properties: {
        width: selectedNode.width,
        height: selectedNode.height,
        x: selectedNode.x,
        y: selectedNode.y,
        fillColor: 'fills' in selectedNode && Array.isArray(selectedNode.fills) && selectedNode.fills.length > 0 ? selectedNode.fills[0].color : undefined,
        cornerRadius: 'cornerRadius' in selectedNode ? selectedNode.cornerRadius : 0,
      }
    });
  }
});

// Listen for messages sent from the UI
figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'find-element':
      const node = figma.getNodeById(msg.id);
     // Assuming we are within the 'find-element' case and node is a RECTANGLE
      if (node && node.type === 'RECTANGLE') {
        // If the node is found, select it and send its properties to the UI
        figma.currentPage.selection = [node];
        // Safely check if fills is an array and has at least one element
        const fillColor = Array.isArray(node.fills) && node.fills.length > 0 && 'color' in node.fills[0]
          ? node.fills[0].color
          : undefined; // Default or fallback color value
        figma.ui.postMessage({
          type: 'element-selected',
          id: node.id,
          properties: {
            width: node.width,
            height: node.height,
            x: node.x,
            y: node.y,
            fillColor: fillColor ? `rgba(${fillColor.r * 255}, ${fillColor.g * 255}, ${fillColor.b * 255}, ${fillColor.a})` : undefined,
            cornerRadius: node.cornerRadius
          }
        });
      }
      break;
    case 'update-properties':
      const { properties } = msg;
      const elementToUpdate = figma.getNodeById(properties.id);
      if (elementToUpdate && elementToUpdate.type === 'RECTANGLE') { // Check if it's a RectangleNode
        // Update the properties of the element
        elementToUpdate.resize(properties.width, properties.height);
        elementToUpdate.x = properties.x;
        elementToUpdate.y = properties.y;
        elementToUpdate.cornerRadius = properties.cornerRadius;
        if (properties.fillColor) {
          (elementToUpdate.fills = [{ type: 'SOLID', color: parseColor(properties.fillColor) }]);
        }
        figma.closePlugin(`Updated properties of element ${properties.id}.`);
      } else {
        figma.closePlugin('Element not found or does not support these properties.');
      }
      break;
  }
};

// Make sure to set the size of the UI
figma.showUI(__html__, { width: 300, height: 400 });
