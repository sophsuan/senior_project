# **senior_project**

## Getting Started with Development
1. Clone the repository to a folder on your machine.
2. Launch Google Chrome and go to [chrome://extensions/](chrome://extensions/).
3. Click `Load unpacked`.
4. Navigate to `/src` on the command line and run `yarn build`. This will build the frontend React app.
5. Select your `build` folder from the repository.
6. Activate the extension in your Google Chrome extension manager.
7. You may have to run the following command in the project directory: `npx tailwindcss -i ./src/App.css -o ./dist/output.css --watch`.
8. Navigate to `/src/backend` on the command line and run `node index.js`. This will start the backend server locally.
9. In order to authenticate with Google Cloud, the extension ID is needed to be added to the Google Cloud account. Navigate to [chrome://extensions/](chrome://extensions/) and copy the ID listed. Please send this ID to the owner of this application (Ethan) so that it cn be registered. (Unfortunately, it is unable to work otherwise until it is registered on the Chrome web store for a price.)