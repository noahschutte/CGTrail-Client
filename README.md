# Crimson and Gold Trail - Client
www.CrimsonAndGoldTrail.com

## Server Repository
https://github.com/noahschutte/CGTrail-Server

## Setup Instructions
### Global dependencies:
    - node
    - npm

### Run Locally
1. `npm install`
1. `npm run start`
1. Open in browser: `localhost:3000`

### Add heroku to git remotes
1. `git pull origin master:master`
1. `heroku login`
1. Enter heroku username and password.
1. `git remote -v`
```
origin	https://github.com/noahschutte/CGTrail-Client.git (fetch)
origin	https://github.com/noahschutte/CGTrail-Client.git (push)
```
1. `git remote add staging-heroku https://git.heroku.com/staging-cgtrail-client.git`
1. `git remote add prod-heroku https://git.heroku.com/cgtrail-client.git`
1. `git remote -v`
```
origin	https://github.com/noahschutte/CGTrail-Client.git (fetch)
origin	https://github.com/noahschutte/CGTrail-Client.git (push)
prod-heroku	https://git.heroku.com/cgtrail-client.git (fetch)
prod-heroku	https://git.heroku.com/cgtrail-client.git (push)
staging-heroku	https://git.heroku.com/staging-cgtrail-client.git (fetch)
staging-heroku	https://git.heroku.com/staging-cgtrail-client.git (push)
```

### Open Site in Staging
`npm run open-staging`

### Open Site in Production
`npm run open-prod`

### Deploy your feature branch to staging env
`git push staging-heroku {{yourFeatureBranchName}}:master`

### Deploy to staging env
`npm run deploy-staging`

### Deploy to production env
`npm run deploy-prod`
