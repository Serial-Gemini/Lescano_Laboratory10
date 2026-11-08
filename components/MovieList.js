
import React from "react";

import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View className="flex-1 bg-background">
      <LinearGradient
        colors={["#17102F", "#080817", "#080817"]}
        locations={[0, 0.4, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 350,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 35 }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 1100,
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingTop: 30,
          }}
        >
          <Text className="text-purple-300 text-xs font-bold tracking-widest">
            CINEVAULT COLLECTION
          </Text>

          <Text className="text-white text-3xl font-black mt-3">
            {title}
          </Text>

          <Text className="text-gray-400 mt-2">
            Discover something worth watching.
          </Text>

          <View className="flex-row items-center mt-6 mb-5">
            <View
              style={{
                width: 5,
                height: 22,
                backgroundColor: "#A855F7",
                borderRadius: 5,
                marginRight: 10,
              }}
            />

            <Text className="text-white font-bold">
              {filtered.length}{" "}
              {filtered.length === 1 ? "Movie" : "Movies"}
            </Text>

            <Text className="text-gray-500 ml-2">
              in this collection
            </Text>
          </View>

          {filtered.length > 0 ? (
            filtered.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                navigation={navigation}
              />
            ))
          ) : (
            <View className="bg-surface rounded-2xl p-8 items-center">
              <Text className="text-purple-300 text-4xl">✦</Text>
              <Text className="text-white text-lg font-bold mt-4">
                Nothing here yet
              </Text>
              <Text className="text-gray-400 text-center mt-2">
                There are currently no movies in this category.
              </Text>
            </View>
          )}

          <Text className="text-gray-600 text-xs text-center mt-8">
            MORE STORIES. MORE WORLDS. MORE TO DISCOVER.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
