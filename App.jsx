import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/components/MainScreen";
import ArticleShow from "./app/components/ArticleShow";

const Stack = createStackNavigator();

const App = () => {
  const { appTitle, currentArticle } = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={{
            title: appTitle,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 22,
              textAlign: "center"
            },
          }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
