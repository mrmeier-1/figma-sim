# figma-sim
A simulation of designs using the Figma API

## The Plan

Achieve the following:

**Programmatic Screen Generation**
1. Generate screenshots of frames in figma
2. extract elements data from Figma frames
3. Modify elements inside frames


**Internal Requirements (For AskUI employees only)**: https://www.notion.so/askui/Requirements-Figma-Simulator-a8c3380917794fdf8e35c73dc7232d8c?pvs=4

## State of Development

Currently, you can call the Figma API to extract data by providing the following:

`FIGMA_ACCESS_TOKEN`
`FILE_ID`
`FRAME_ID`

in the `getter_script.py`

Also, you can launch the `Element_Mover` Plugin in the Figma Desktop App.

        https://share.cleanshot.com/lxj6P5Yk

However, the `ui.html`is currently not finished and will just display some text.

        https://share.cleanshot.com/ltMsCxRw

In the future, this is meant to allow users to pass property changes to elements inside figma, either manually through the UI or a programmatic API.

That's it for now.