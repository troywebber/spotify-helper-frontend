[![Spotify Web Player Clone](https://i.ibb.co/Yb58hSp/project-screenshot.png)](https://spotify-helper-frontend.netlify.app/)

# Spotify Web Player Clone

A Spotify inspired interface complete with playlist, album, artist, liked songs and library pages.

## Description

This is my most recent project, currently working on replicating the Spotify web player app using their API. This project is using Next.js for the front-end, deployed on Netlify, and uses node.js for the back-end, which handles the user authentication, this is deployed with Heroku.

The demo can be viewed here : https://spotify-helper-frontend.netlify.app/

## Getting Started


### Installing

1. Install Node.js from https://nodejs.org/en/
2. Clone both this repo https://github.com/troywebber/spotify-helper-frontend.git
3. Also Clone this repo https://github.com/troywebber/spotify-helper-backend.git
4. Open both repositories in the integrated development environment ( preferably Visual Studio Code)
5. Paste in the code below for both the repositories.

    ```sh
    npm install
    ```
6. [Register a Spotify App](https://developer.spotify.com/dashboard/applications) and add `http://localhost:8888/callback` as a Redirect URI in the app settings
7. Create an `.env` file in the root of the project
9. Use the envirement variables below for both the front end deployment and back end deployment. you can recieve the CLIENT_ID and CLIENT_SECRET from your created application on the spotify dashboard 

   ```bash
   CLIENT_ID=XXXXX
   CLIENT_SECRET=XXXXX
   REDIRECT_URI=http://localhost:3000
   ```

### Executing program

* Run the command below for the Spotify front end repo
```
npm run dev
```
* Run the command below for the Spotify back end repo
```
npm run devStart
```
* If not automatically redirected on the browser, go to the following address.
```
http://localhost:3000
```

* Follow the login login prompts provided by spotify used for authentication.
## Authors

* Troy Webber  

## Version History

* 1
    * Various bug fixes and optimizations, initial user interface complete
* 0.1
    * Initial Release



## Acknowledgments

Inspiration, code snippets, etc.
* [node.js](https://nodejs.org/en/)
* [next.js](https://nextjs.org/)
* [react-icons](https://github.com/react-icons/react-icons)
* [spotify-web-node-api](https://github.com/thelinmichael/spotify-web-api-node)
* [recoil.js](https://recoiljs.org/)
