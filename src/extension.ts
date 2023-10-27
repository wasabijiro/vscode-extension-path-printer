// src/extension.ts
import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "path-printer" is now active!');
  let disposable = vscode.commands.registerCommand(
    "path-printer.insertPath",
    async () => {
      vscode.window.showInformationMessage("Hello World from vscode-wasabi!");
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let folder = vscode.workspace.getWorkspaceFolder(document.uri);
        if (folder) {
          let relativePath = path.relative(
            folder.uri.fsPath,
            document.fileName
          );
          let formattedPath = `// ${relativePath}`;
          await editor.edit((editBuilder) => {
            let firstLine = document.lineAt(0);
            editBuilder.insert(firstLine.range.start, formattedPath + "\n");
          });
        } else {
          vscode.window.showErrorMessage("File is not in the workspace.");
        }
      } else {
        vscode.window.showErrorMessage("No active editor found.");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
