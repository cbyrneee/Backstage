# Audition Backend

Audition is a web application made with React that recommends artists on Spotify based on your music taste. 

This is the backend for Audition which handles authentication with Spotify. If you're interested in the frontend, see [here](https://github.com/dreamhopping/audition).

## Setup 
1. Make a new spotify app on the [dashboard](https://developer.spotify.com/dashboard/) and put the client id, client secret and redirect uri into a file called ``.env``. Make sure the redirect uri is set to ``http://localhost:3000`` in your app's settings

    **.env**:
    ```
    SPOTIFY_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    SPOTIFY_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    SPOTIFY_REDIRECT_URI=http://localhost:3000
    ```
2. Ensure that you have node.js and NPM (or Yarn) installed
3. Install the project's dependencies
   ```
   yarn install
   ```
   or
   ```
   npm install
   ```
4. Start the app
   ```
   yarn start:dev
   ```
   or
   ```
   npm run start:dev
   ```

   The server should now be running on ``localhost:3001``