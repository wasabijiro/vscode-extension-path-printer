# Path Printer for VS Code - Enhance Question Precision with Path Display

"Path Printer for VS Code" is an extension designed to instantly clarify the file structure you're working on, especially within specific directory structures defined by frameworks or libraries. This tool is highly valuable when posing questions to ChatGPT, which thrives on detailed context to provide precise answers.

## Key Features

- **Intuitive Path Display**: Inserts the relative path of the file open in the active editor at the top of the document as a comment.
- **Immediate Confirmation**: Particularly for frameworks like Next.js, it allows for the immediate identification of the path of page components (e.g., `/src/app/home/page.js`).
- **Error Handling**: Notifies the user if the file is not within the workspace or if no editor is active.

## How to Use

1. Open a file in Visual Studio Code.
2. Open the Command Palette:
   - On Windows: `Ctrl+Shift+P`
   - On macOS: `Cmd+Shift+P`
3. Search for and execute the 'Insert Relative Path' command.
4. The relative path of the active file will be inserted as a comment at the beginning of the file.

## Specific Use Case

In a Next.js project, when working on files like `/src/app/home/page.jsx`, this extension is particularly helpful. From Next.js 13, directories placed within the `app` directory and their `page.jsx` files determine URL routing. Being able to instantly verify the file path enhances development efficiency and understanding of the routing structure. When preparing to ask ChatGPT a question, using Path Printer ensures you provide the full file path, giving ChatGPT the detail it needs to give a focused response. The extension facilitates code referencing and communication within a team.

## Installation Method

1. Open Visual Studio Code.
2. Display the Extensions view and search for 'Path Printer.'
3. Select the extension from the search results and click install.

## Available Commands

- `path-printer.insertPath`: Inserts the relative path of the file open in the editor at the beginning of the file.

## Configuration

No additional settings are required for this extension. It can be used immediately after installation.

## Developer

This extension was developed by [wasabijiro](https://github.com/wasabijiro) as a tool to provide technical support. The README.md was contributed by [sanji0219](https://github.com/sanji0219).

## Contributions

Feedback and contributions to this project are highly welcome. If there are any issues, please report them through GitHub issues. We also look forward to pull requests for new features or improvements.
