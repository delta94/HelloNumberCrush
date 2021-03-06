import React, { Component } from "react";
import ReactNative from "react-native";

import SwappableGrid from "../components/SwappableGrid";
//import {App} from './App';
import Dimensions from "Dimensions";

import {ImageTypes} from "../components/ImageTypes";

var HomeScreen = require("../components/HomeScreen");
var GameScreen = require("../components/GameScreen");

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} = ReactNative;

import { createBottomTabNavigator, createStackNavigator , createAppContainer} from "react-navigation";

let floatingClouds = require("../assets/FloatingClouds.png");
let justClouds = require("../assets/CloudsBackground.png");

const Game = ({ navigation }) => {
  return <GameScreen navigation={navigation}/>;
};

const Home = ({ navigation }) => {
  return <HomeScreen navigation={navigation} />;
};


const AppNavigator = createStackNavigator({
  Root: {
    screen: Home,
    navigationOptions: {
      title: "title",
      header: null
    }
  },
  GameScreen: {
    screen: Game,
    navigationOptions: {
      title: "Play!",
      header: null
    }
  }
});


let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 200,
    justifyContent: "center",
    backgroundColor: "#2c3e50"
  },
  backGroundImage: {
    width: "100%",
    height: "100%"
    //alignSelf: 'stretch'
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  dropZone: {
    flex: 1,
    height: 100,
    backgroundColor: "#2c3e50"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff"
  },

  container: {
    height: 350,
    width: 350,
    backgroundColor: "#f21859"
  },
  tabBarIcon: {
    width: 35,
    height: 35
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#f21859",
    borderWidth: 5,
    borderColor: "#ffffff"
  }
});

module.exports = AppNavigator
