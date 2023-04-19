# GPTutor

## Setup
```shell
yarn
yarn dev
```

1. Run chrome
2. Go to chrome://extensions
3. Enable developer mode
4. Load unpacked -> select the 'dist' folder in the repo
5. Go to poe.com
6. You should see the message
7. Click the extension button
9. You should see the popup

## Basic structure

Manifest file: The manifest.json file is the heart of a Chrome extension. It contains information about the extension, such as its name, version, permissions, and scripts.

Background script: This is a JavaScript file that runs in the background of the extension and handles events such as user clicks, page loads, and message passing between the extension and web pages.

Content script: This is a JavaScript file that runs in the context of a web page and can modify the page's DOM, interact with the user, and communicate with the extension's background script.

Popup HTML: This is the HTML file that appears when the user clicks on the extension's icon in the browser toolbar. It can contain buttons, forms, and other UI elements.

Options page HTML: This is the HTML file that appears when the user clicks on the "Options" button in the extension's popup. It allows the user to configure the extension's settings.

Icons: The extension requires a set of icons in different sizes to display in the browser toolbar and other places.

Permissions: The extension needs to request certain permissions from the user to access browser features such as tabs, bookmarks, and history.

To develop a Chrome extension, you need to have knowledge of HTML, CSS, JavaScript, and Chrome's extension APIs. You can use a code editor such as Visual Studio Code or Sublime Text to write the code.

To test your extension, you can load it as an unpacked extension in Chrome by going to chrome://extensions and enabling "Developer mode". Then, click on "Load unpacked" and select the folder containing your extension files.

Once you're satisfied with your extension, you can publish it on the Chrome Web Store for others to download and use.
