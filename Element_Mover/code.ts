// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// Define an interface for the movement configuration
interface MovementConfig {
  movements: Array<{
    id: string;
    newX: number;
    newY: number;
  }>;
}

// This is the main plugin code file
const movementConfig = {
  "movements": [
    {"id": "element_id_1", "newX": 100, "newY": 100},
    {"id": "element_id_2", "newX": 200, "newY": 200}
  ]
};

function moveElements(config: MovementConfig) {
  config.movements.forEach(movement => {
    const node = figma.getNodeById(movement.id);
    if (node && node.type === "FRAME") {
      node.x = movement.newX;
      node.y = movement.newY;
    }
  });
}

moveElements(movementConfig);


figma.showUI(`ui.html`, {width: 240, height: 100});

// Listen for messages from the plugin UI
figma.ui.onmessage = msg => {
  // Check for a specific message
  if (msg.type === 'move-elements') {
    const nodes = figma.currentPage.selection;

    if (nodes.length > 0) {
      // Move each selected node
      nodes.forEach(node => {
        node.x += 100; // Move 100 units to the right
        node.y += 100; // Move 100 units down
      });
      
      figma.closePlugin('Elements moved successfully.');
    } else {
      figma.closePlugin('No elements selected.');
    }
  }
};

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();
