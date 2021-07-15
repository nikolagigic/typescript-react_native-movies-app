# typescript-react_native-movies-app

Instructions:
1. Clone and navigate into the repo
2. ```npm install``` / ```yarn```
3. ```npx react-native run-ios```

I designed in a way to be easy to use. Once logged in, there are two main components, which is the ScrollView where all the movies pulled through the API can be seen, and the details component which is used in the ScrollView and as standalone in details view.

As for the authentication I used AsyncStorage with react hooks and state management.
I used mobx to store all the movies pulled from the api.
I tried adding the video player for the trailers inside of details view but for some reason it failed to load up the video and frame altogether, so I didn't bother much about figuring it out as main functionalities are in place.

The whole project is written in Typescript.
