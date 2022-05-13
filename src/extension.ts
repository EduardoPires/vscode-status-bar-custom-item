import * as vscode from "vscode";

let myStatusBarItem: vscode.StatusBarItem;
let settings = vscode.workspace.getConfiguration('statusbarcustomitem');

export function activate(context: vscode.ExtensionContext) {
  myStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    10000
  );
  context.subscriptions.push(myStatusBarItem);

  updateStatusBarItem(context);
}

function updateStatusBarItem(context: vscode.ExtensionContext): void {
  let name = settings.get("text") as string;
  let icon = settings.get("icon") as string;
  
  myStatusBarItem.text = `${icon} ${name}`;
  myStatusBarItem.show();
}
