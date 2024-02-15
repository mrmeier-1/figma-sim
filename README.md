# figma-sim
A simulation of designs using the Figma API

## A. The Plan

Achieve the following:

**Programmatic Screen Generation**
1. Generate screenshots of frames in figma
2. extract elements data from Figma frames
3. Modify elements inside frames
4. Do all of the above with a programatic API.

**Internal Requirements (For AskUI employees only)**: https://www.notion.so/askui/Requirements-Figma-Simulator-a8c3380917794fdf8e35c73dc7232d8c?pvs=4

## B. How to use

To set up the Figma plugin and VSCode project from a GitHub repository on your machine, follow these straightforward steps:

1. **Clone the Repository**: First, clone the GitHub repository to your local machine using Git. Open your terminal, navigate to the directory where you want the project to be saved, and run `git clone <repository-url>`. Replace `<repository-url>` with the actual URL of the GitHub repository.

2. **Install Node.js and npm**: Ensure you have Node.js and npm (Node Package Manager) installed. These are essential for managing the project's dependencies and running the build process. You can download them from [nodejs.org](https://nodejs.org/).

3. **Open the Project in VSCode**: Open Visual Studio Code (VSCode), go to `File > Open Folder`, and select the cloned project directory. This will open the project in VSCode, allowing you to edit files and use VSCode's integrated terminal.

4. **Install Dependencies**: Open the integrated terminal in VSCode by going to `View > Terminal` and run `npm install`. This command installs all the necessary dependencies defined in the project's `package.json` file.

5. **Set Up TypeScript**: This project uses TypeScript, so ensure you have the TypeScript compiler installed globally by running `npm install -g typescript` in the terminal. You can compile TypeScript to JavaScript by running `tsc` in the terminal.

6. **Build the Plugin**: If the project includes a build script in the `package.json` file (commonly under a script named `build`), run `npm run build` to compile your TypeScript code and any other build steps defined.

7. **Load the Plugin into Figma**: To test the plugin in Figma, open Figma, go to `Plugins > Development > New Plugin...`, and choose to link an existing plugin. Navigate to your project directory and select the `manifest.json` file. After linking, you can run your development version of the plugin directly in Figma.

This process sets up the development environment, allowing you to start working on the plugin and test changes within Figma. Remember to commit and push your changes to GitHub regularly to keep your repository up to date.

##C. State of Development

Currently, this project has two main features:
    1. Extract visual data from a figma file
    2. Manipulate element properties (WIP)

### Visual Data Extraction
This feature uses the Figma API to extract data from any frame in any figma file. Moreover users can take high-res screenshots in variable screen sizes, resolutions and aspect ratios.

To do this by provide the following information in the `getter_script.py`:

`FIGMA_ACCESS_TOKEN`: Your personal figma access token. [Learn more](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
`FILE_ID`: The id of the figma file that contains the content, that you want to access. [Learn more](https://help.figma.com/hc/en-us/articles/360052378433-Bubble-and-Figma#:~:text=The%20file%20ID%20is%20the,from%20your%20browser's%20address%20bar.)
`FRAME_ID` The node id of a frame that you want to specify in your request.[Learn more](https://www.figma.com/plugin-docs/api/FrameNode/)

Run the script in your terminal with `python getter_script.py`.

As a response you will get a json of the entire scene, as well as a link from figma that contains the generated image.

### Element_Mover (might change to "Element_Configurator")

You can also load up the plugin from the `manifest.json` and select elements to reveal some of their properties in it's UI.

>> https://share.cleanshot.com/99wHDSbS

**Known issues:**
- finding element by id doesn't wrk yet.
- changing properties doesn't work yet.

##D. Jump Back In

Here's a short guide to get back on track with the Figma-Sim Project and focus on the next steps:

[x] Resolve TypeScript Compilation Issues**: The immediate task was troubleshooting TypeScript errors related to the Figma API's figma global object not being recognized. This involves ensuring @figma/plugin-typings are correctly installed and configured in your tsconfig.json.
    [x] This task was resolved, by using the compilation command `tsc -p "tsconfig.json"` which points to the config.
    [x] I was also able to get me UI to show up.
    [x] added documentation in readme.

[] Enhance Plugin Functionality**: After resolving TypeScript issues, the next step involves enhancing your plugin's functionality based on the last successful iteration. This might include refining the movement logic, improving the UI interaction, or expanding the plugin to support more complex manipulations within Figma.
    [x] I'm currently in the middle of building the `code.ts` and `ui.html`, so that a user can view the properties of a selected element inside the plugins UI.
    [] My next step will be to do two more things with the ui.
        [] Select an element based on it's node id.
        [] Change an elements properties based on user input through the UI.          
    [] Admittedly, this is not very cool (yet), but it's a sort-of precursor for the programmatic API, which will also read and write to the elements properties.
    [] Eventually, we should be able to generate screen data incredibly fast.

# GLHF; 🫡
