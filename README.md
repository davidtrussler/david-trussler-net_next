# david-trussler-net_next

## Recreates david-trussler-net as a next.js app

See [next.js official documentation](https://nextjs.org/docs/) for detailed decription of the process involved. 

This work is based on [david-trussler-net_react](https://github.com/davidtrussler/david-trussler-net_react) and repurposes it as a next app to facilitate server side deployment. 

### Set up
- run `npm install`
- run `npm run dev` to set up and run the development server
- to build a production version of the site locally

### Deployment

The app is currently hosted on Heroku [here](https://davidtrusslernet-next.herokuapp.com/)

The deployment process is
- run `heroku login` to open a browser to sing in to Heroku
- run `git push heroku master` to deploy from the master branch or `git push heroku master:<branch-name>` to deploy from another branch
