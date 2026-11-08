
import React from "react";

import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { CATEGORIES, MOVIES } from "../data/movies";

const CATEGORY_STYLES = {
  Latest: {
    icon: "✦",
    colors: ["#7C3AED", "#4F46E5"],
    description: "Fresh additions to the collection.",
  },
  "Top Rated": {
    icon: "★",
    colors: ["#B45309", "#7C2D12"],
    description: "The highest-rated movies in the vault.",
  },
  Popular: {
    icon: "◈",
    colors: ["#BE185D", "#7E22CE"],
    description: "Movies everyone is talking about.",
  },
  Recommended: {
    icon: "✧",
    colors: ["#0369A1", "#4338CA"],
    description: "Stories worth adding to your watchlist.",
  },
};

function CategoryCard({ item, navigation }) {
  const categoryStyle = CATEGORY_STYLES[item.category] || {
    icon: "✦",
    colors: ["#7C3AED", "#3730A3"],
    description: item.description,
  };

  const movieCount = MOVIES.filter((movie) =>
    movie.categories.includes(item.category)
  ).length;

  return (
    <Pressable
      onPress={() => navigation.navigate(item.screen)}
      style={{
        marginBottom: 16,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <LinearGradient
        colors={categoryStyle.colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          padding: 1.5,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#111020",
            borderRadius: 19,
            padding: 20,
            overflow: "hidden",
          }}
        >
          {/* Decorative circle */}

          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              right: -30,
              top: -45,
              width: 150,
              height: 150,
              borderRadius: 100,
              backgroundColor: categoryStyle.colors[0],
              opacity: 0.13,
            }}
          />

          <View className="flex-row items-center justify-between">

            <View
              style={{
                width: 53,
                height: 53,
                borderRadius: 16,
                backgroundColor: `${categoryStyle.colors[0]}35`,
                borderWidth: 1,
                borderColor: `${categoryStyle.colors[0]}90`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text className="text-white text-2xl">
                {categoryStyle.icon}
              </Text>
            </View>

            <Text className="text-gray-500 text-2xl">
              →
            </Text>

          </View>

          <Text className="text-white text-2xl font-black mt-5">
            {item.title}
          </Text>

          <Text className="text-gray-400 text-sm mt-2">
            {categoryStyle.description}
          </Text>

          <View className="flex-row items-center mt-5">
            <View
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                borderRadius: 20,
                paddingHorizontal: 11,
                paddingVertical: 6,
              }}
            >
              <Text className="text-purple-300 text-xs font-bold">
                {movieCount} {movieCount === 1 ? "MOVIE" : "MOVIES"}
              </Text>
            </View>

            <Text className="text-gray-500 text-xs ml-3">
              EXPLORE COLLECTION
            </Text>
          </View>

        </View>
      </LinearGradient>
    </Pressable>
  );
}

export default function MoviesPage({ navigation }) {
  return (
    <View className="flex-1 bg-background">

      <LinearGradient
        colors={["#17102F", "#080817", "#080817"]}
        locations={[0, 0.45, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 400,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 850,
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingTop: 30,
          }}
        >

          <Text className="text-purple-300 text-xs font-bold tracking-widest">
            FIND YOUR NEXT FAVORITE
          </Text>

          <Text className="text-white text-4xl font-black mt-3">
            Explore Movies
          </Text>

          <Text className="text-gray-400 mt-3 leading-6">
            Browse through our collections and discover stories
            from different worlds.
          </Text>

          <View className="mt-8 mb-5 flex-row items-center">
            <View
              style={{
                width: 5,
                height: 22,
                backgroundColor: "#A855F7",
                borderRadius: 5,
                marginRight: 10,
              }}
            />

            <Text className="text-white text-lg font-bold">
              Browse Categories
            </Text>
          </View>

          {CATEGORIES.map((item) => (
            <CategoryCard
              key={item.id}
              item={item}
              navigation={navigation}
            />
          ))}

          <Text className="text-gray-600 text-xs text-center mt-6">
            FOUR COLLECTIONS. ENDLESS STORIES.
          </Text>

        </View>
      </ScrollView>
    </View>
  );
}
