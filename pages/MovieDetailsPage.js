
import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function MovieDetailsPage({ route, navigation }) {
  const movie = route.params?.movie;

  if (!movie) {
    return (
      <View className="flex-1 bg-background items-center justify-center p-6">
        <Text className="text-white text-xl font-bold">
          Movie not found
        </Text>

        <Pressable onPress={() => navigation.goBack()}>
          <Text className="text-purple-300 mt-4">
            ← Go Back
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <LinearGradient
        colors={["#251044", "#100D20", "#080817"]}
        locations={[0, 0.55, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 500,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 45 }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 950,
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ alignSelf: "flex-start", paddingVertical: 12 }}
          >
            <Text className="text-purple-300 font-bold">
              ← BACK TO COLLECTION
            </Text>
          </Pressable>

          <View
            style={{
              borderRadius: 24,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(168,85,247,0.35)",
              marginTop: 15,
            }}
          >
            <Image
              source={movie.image}
              style={{
                width: "100%",
                height: 420,
                resizeMode: "cover",
              }}
            />

            <LinearGradient
              colors={[
                "transparent",
                "rgba(8,8,23,0.75)",
                "#080817",
              ]}
              locations={[0, 0.55, 1]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: 260,
              }}
            />

            <View
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                bottom: 22,
              }}
            >
              <Text className="text-purple-300 text-xs font-bold tracking-widest">
                CINEVAULT FEATURE
              </Text>

              <Text className="text-white text-3xl font-black mt-2">
                {movie.title}
              </Text>

              <Text className="text-gray-300 mt-3">
                {movie.year}  •  ★ {movie.rating}
              </Text>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-white text-2xl font-bold">
              About this movie
            </Text>

            <Text className="text-gray-300 text-base leading-7 mt-4">
              {movie.desc.trim()}
            </Text>
          </View>

          <View className="mt-8">
            <Text className="text-white text-xl font-bold mb-4">
              Categories
            </Text>

            <View className="flex-row flex-wrap">
              {movie.categories.map((category) => (
                <View
                  key={category}
                  style={{
                    backgroundColor: "rgba(168,85,247,0.15)",
                    borderColor: "rgba(168,85,247,0.35)",
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text className="text-purple-300 text-sm font-semibold">
                    {category}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#151326",
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(168,85,247,0.2)",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Text className="text-purple-300 text-xs font-bold tracking-widest">
              YOUR CINEVAULT PICK
            </Text>

            <Text className="text-white text-lg font-bold mt-2">
              {movie.title}
            </Text>

            <Text className="text-gray-400 text-sm mt-2">
              Explore more movies from the collection to discover
              your next favorite story.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
