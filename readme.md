# Frontegg chrome extension code sample

This sample shows how you can create Chrome extension (with manifest v3) with Frontegg.
The sample contains 2 folders:
1. **chrome-extension**: This is the Chrome extension which the user will install in their browser, it runs on react with typescript, and it shows how you can use only frontegg hooks.
2. **app**: This is the application that will do the authentication, it's a simple create react app wrapped with Frontegg provider.

Once you will install the Chrome extension on your browser, you can click on the extentsion and you will see a button with the description (click me to login). When you will click the button, a new tab with the application (running on http://localhost:3000) will be opened and it will take you to the hosted login box. After you complieted the authentication you can re-open the Chrome extension and you will be logged in.  


## Running the sample

1. Clone the project and run `npm i --prefix ./app && npm i --prefix ./chrome-extension` to install the required packages.
2. Once the installation completed, first build the Chrome extension by running `npm run build --prefix ./chrome-extension` and load the extension to your browser following [this guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked). The extension directory should be the build folder in the chrome-extension folder, for each time you would like to update it you will have to rebuild your Chrome extension.
3. Before starting to work with the Chrome extension, make sure to run the app by running `npm start --prefix ./app`. The app should run on port localhost:3000.
4. After you started the application, you should be able to click on the login button in the Chrome extension and you will be logged in!

## Using your own Frontegg environment

To make this code sample work with your own Frontegg environment, you will need to setup the following configuration:
1. Make sure hosted login is enabled, and it has the redirect URL: http://localost:3000/oauth/callback. you can set it by navigating to your environment in Frontegg portal -> Authentication -> Login methods.
2. Make sure the cookie policy configuration is NONE. you can set it by navigating to your environment in Frontegg portal -> Authentication -> JWT -> Cookie policy.
3. Add Chrome extensions to your allowed origins (`chrome-extension://*`). you can set it by navigating to your environment in Frontegg portal -> Settings -> Domains -> Allowed origins, and add to the list `chrome-extension://*`.
4. After you validated the configuration you can update the contextOptions object in both of the applications(app, chrome-extension) to use your client id and your frontegg domain (as base url).
