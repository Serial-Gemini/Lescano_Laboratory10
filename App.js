
import "./global.css";

import React from "react";
import { Text, View } from "react-native";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import LatestPage from "./pages/categories/LatestPage";
import TopRatedPage from "./pages/categories/TopRatedPage";
import PopularPage from "./pages/categories/PopularPage";
import RecommendPage from "./pages/categories/RecommendPage";

import TopBar from "./components/TopBar";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Home: "⌂",
  Movies: "▣",
  Profile: "◉",
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 bg-background"
        edges={["top", "left", "right"]}
      >
        <TopBar />

        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            

screenOptions={({ route }) => ({
  headerShown: false,

  tabBarStyle: {
    backgroundColor: "#100D20",
    borderTopColor: "rgba(168,85,247,0.3)",
    borderTopWidth: 1,
    height: 68,
    paddingBottom: 6,
    paddingTop: 6,
    elevation: 15,
    shadowColor: "#9333EA",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },

  tabBarActiveTintColor: "#C084FC",
  tabBarInactiveTintColor: "#77738D",

  tabBarItemStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabBarIconStyle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  tabBarLabelStyle: {
    width: "100%",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 2,
  },

  tabBarIcon: ({ color }) => (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color,
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {TAB_ICONS[route.name] || "✦"}
      </Text>
    </View>
  ),
})}


          >
            <Tab.Screen
              name="Home"
              component={HomePage}
            />

            <Tab.Screen
              name="Movies"
              component={MoviesPage}
            />

            <Tab.Screen
              name="Profile"
              component={ProfilePage}
            />

            <Tab.Screen
              name="Latest"
              component={LatestPage}
              options={{ tabBarButton: () => null }}
            />

            <Tab.Screen
              name="TopRated"
              component={TopRatedPage}
              options={{ tabBarButton: () => null }}
            />

            <Tab.Screen
              name="Popular"
              component={PopularPage}
              options={{ tabBarButton: () => null }}
            />

            <Tab.Screen
              name="Recommended"
              component={RecommendPage}
              options={{ tabBarButton: () => null }}
            />

            <Tab.Screen
              name="MovieDetails"
              component={MovieDetailsPage}
              options={{ tabBarButton: () => null }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}