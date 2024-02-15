# figma-sim
A simulation of designs using the Figma API

## The Plan

Achieve the following:

**Programmatic Screen Generation**
1. Generate screenshots of frames in figma
2. extract elements data from Figma frames
3. Modify elements inside frames
4. Do all of the above with a programatic API.


**Internal Requirements (For AskUI employees only)**: https://www.notion.so/askui/Requirements-Figma-Simulator-a8c3380917794fdf8e35c73dc7232d8c?pvs=4

## State of Development

Currently, you can call the Figma API to extract data by providing the following:

`FIGMA_ACCESS_TOKEN`
`FILE_ID`
`FRAME_ID`

in the `getter_script.py`

You can also load up the plugin from the `manifest.json` and select elements to reveal some of their properties in it's UI.

>> https://share.cleanshot.com/99wHDSbS

Known issues:
- finding element by id doesn't wrk yet
- changing properties doesn't work yet

## Jump Back In

To get back on track with the Figma-Sim Project and focus on the next steps:

**1. Resolve TypeScript Compilation Issues**: The immediate task was troubleshooting TypeScript errors related to the Figma API's figma global object not being recognized. This involves ensuring @figma/plugin-typings are correctly installed and configured in your tsconfig.json.
                - This task was resolved, by using the compilation command `tsc -p "tsconfig.json"` which points to the config.
                - I was also able to get me UI to show up.

**2. Enhance Plugin Functionality**: After resolving TypeScript issues, the next step involves enhancing your plugin's functionality based on the last successful iteration. This might include refining the movement logic, improving the UI interaction, or expanding the plugin to support more complex manipulations within Figma.
                - I'm currently in the middle of building the `code.ts` and `ui.html`, so that a user can view the properties of a selected element inside the plugins UI.
                - My next step will be to do two more things with the ui
                                1. Select an element based on it's node id
                                2. Change an elements properties based on user input through the UI.
                - Admittedly, this is not very cool (yet), but it's a sort-of precursor for the programmatic API, which will also read and write to the elements properties

That's about it. See ya.