# KnowRegina

## Table of Contents
- [Introduction](#introduction)
	- [App Preview](#app-preview)
- [App Features](#app-features)
- [Manifest](#manifest)
	- [Screens](#screens)
	- [Components](#components)
- [Build Process](#buid-process)
	- [Requirements](#requirements)
	- [Getting Started](#getting-started)
- [Libraries](#libraries)
- [APK](#apk)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Feedback](#feedback)
- [Credits](#credits)
- [Author](#author)


​	

## Introduction
This App is built on [React Native](https://reactnative.dev/) using [Expo](https://expo.dev/).  Database is maintained on and fetched from [Firebase](https://firebase.google.com/).
This App is built as a university project to implement in practice the skills learned for building a mobile app using React Native.  KnowRegina is a tourism based app, in which places are categorized as recreational, restaurants or having historical significance/heritage value, . Also listing the Must-Dos of a place and any fun facts about the city. Features are discussed in detail in [App Features](#app-features).

### App Preview
add viedo here 
## App Features
Features of the app are discussed as below. 
1. User can choose to view different types of places in the city.

   <img src="assets\homeScreen.jpeg" alt="homeScreen" style="zoom:25%;" />

2. Based on the category chosen, a list of of places is displayed, showing basic information about the places.

   ​    <img src="assets\palceList.jpeg" alt="palceList" width="400" /><img src="assets\placeList2.jpeg" alt="placeList2" width="400" />
3. User can view pictures of the selected place, address and  a brief information about the place.

   <img src="assets\detailFav.jpeg" alt="detailFav" width="400" />
4. User can navigate to the maps from the address information.
5. User can also learn some fun-facts about the city. 

   <img src="assets\funFacts.jpeg" alt="funFacts" width="400" />
6. User can know which places are recommendation of the locals. If a place is recommended by the locals, a heart Icon is displayed for that place in the Details screen, not otherwise. 

   <img src="assets\detailFav.jpeg" alt="detailFav" width="400" /><img src="assets\detailNotFav.jpeg" alt="detailNotFav" width="400" />

## Manifest
- `App.js` This is the main file which layouts the screens used in the app using [React Navigation](https://reactnavigation.org/).  
- `firebase.js` Database configurations
-  `/components`
	-  `HomeScreen.js` This is the landing screen of the app. It displays different types of places. 
	- `HistoricalScreen.js` List of places displayed according to the category chosen by the user. 
	- `DetailScreen.js`Displays details of the selected place.
	- `FunFacts.js` The fun facts screen of the app.
	- `ListItem.js` A component displayed in the `HistoricalScreen.js`
	- `FactListItem.js` Component displayed in the `FunFacts.js` screen. 
- `/assets` Images folder. 
## Build Process
### Requirements
- Node
- Expo
- Expo Go (run on phone)
- Firebase
### Getting Started
- Install [Node](https://nodejs.org/en/)
- Install Expo `npm install expo-cli --global`
- You can clone this repo or create a new project `expo init *project_name*`
- `cd` to the project folder.
- Run `expo start`
- Set up [Firebase](https://docs.expo.dev/guides/using-firebase/) account and create a project. Run `expo install firebase`
## Libraries
- [React Navigation](https://reactnavigation.org/) 
	- `npm  install @react-navigation/native`
	- `npm  install react-native-screens react-native-safe-area-context`
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
	- `npm install react-native-vector-icons --save`
- [React Native Open Maps](https://bestofreactjs.com/repo/brh55-react-native-open-maps-react-react-native-awesome-components#query-property)
	- `npm install --save react-native-open-maps`
## APK Link
## Limitations/Fixes
Though the app is developed to be used on Android as well as iOS, but it is majorly tested on an Android device. 
## Improvements
Given the restricted timeline, the scope of the project was limited to fulfill the main features. However, in the future more features can be added. As it is tourism app the scope can be increased vastly. Some are listed below.
1. Building a community on the app, where people can interact.
2. Adding language translator for tourists who are not very familar with English.
3. Adding notifications of the up-coming events in the city.
4. Adding information local businees or locally made crafts. 
## Feedback
Your feedback is welcomed!  For any suggestions or contributions, free free to reach out at <sko505@uregina.ca>
## Credit
Inspiration of the UI is taken from a [Youtube tutorial](https://www.youtube.com/watch?v=-K0o_Bi48Xs&ab_channel=kymzTech) .
This template is modified from [Lyrics-King-React-Native](https://github.com/SKempin/Lyrics-King-React-Native#app-features)

## Author
[Sonia Kawish](https://github.com/SoniaKawish)

