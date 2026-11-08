
import "./global.css";

import { View } from "react-native";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
  SafeAreaProvider,
  SafeAreaView
} from "react-native-safe-area-context";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";

import LatestPage from "./pages/categories/LatestPage";
import TopRatedPage from "./pages/categories/TopRatedPage";
import PopularPage from "./pages/categories/PopularPage";
import RecommendPage from "./pages/categories/RecommendPage";

import TopBar from "./components/TopBar";

const Tab = createBottomTabNavigator();

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
            screenOptions={{
              headerShown: false,

              tabBarStyle: {
                backgroundColor: "#15152A",
                borderTopColor: "#292943",
                height: 60,
                paddingBottom: 8,
                paddingTop: 6,
              },

              tabBarActiveTintColor: "#A78BFA",
              tabBarInactiveTintColor: "#888899",
            }}
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
              options={{
                tabBarButton: () => null,
              }}
            />

            <Tab.Screen
              name="TopRated"
              component={TopRatedPage}
              options={{
                tabBarButton: () => null,
              }}
            />

            <Tab.Screen
              name="Popular"
              component={PopularPage}
              options={{
                tabBarButton: () => null,
              }}
            />

            <Tab.Screen
              name="Recommended"
              component={RecommendPage}
              options={{
                tabBarButton: () => null,
              }}
            />

          </Tab.Navigator>

        </NavigationContainer>

      </SafeAreaView>

    </SafeAreaProvider>
  );
}
