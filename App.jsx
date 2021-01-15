import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/components/MainScreen";
import ArticleShow from "./app/components/ArticleShow";
import {Button} from 'react-native'
import LoginScreen from "./app/components/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const { appTitle, currentArticle } = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={(props) => ({
            headerRight: () => {
              return <Button title='Click me' 
              onPress={() => props.navigation.navigate('Login')}
              />
            },
            title: appTitle,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 22,
              textAlign: "center"
            },
          })}
        />
        <Stack.Screen 
          name="ArticleShow"
          component={ArticleShow}
          options={{
            title: currentArticle.title,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 22,
              textAlign: "left"
            },
          }}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
