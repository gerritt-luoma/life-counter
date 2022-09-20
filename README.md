# MTG Life Counter

## Setup
1. Clone repository and cd into directory

2. Install the most recent LTS version of Node from the [official Node site](https://nodejs.org/en/) or using the `Node Version Manager`

3. Install the dependencies for the project
```
$ npm i
```

## Running the App for Development
1. Start the expo server
```
$ npx expo start
```

## Contributing to project
- We will be following a development branch git model. 
- When creating PRs and new branches we will always create new branches from development and merge back into development.
- The only time we will merge into main is for releases.
- This will allow us to set up easier CI/CD where any PR/merge to development is tested on change and any merge to master is automatically built and released.
