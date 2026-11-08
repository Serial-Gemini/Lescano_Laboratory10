
import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function ProfilePage() {
  return (
    <View className="flex-1 bg-background">

      <LinearGradient
        colors={["#251044", "#100D20", "#080817"]}
        locations={[0, 0.5, 1]}
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
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 750,
            alignSelf: "center",
            paddingHorizontal: 24,
            paddingTop: 45,
          }}
        >

          {/* Profile heading */}

          <Text className="text-purple-300 text-xs font-bold tracking-widest text-center">
            YOUR CINEVAULT IDENTITY
          </Text>

          {/* Profile picture */}

          <View className="items-center mt-10">

            <LinearGradient
              colors={["#E879F9", "#9333EA", "#4F46E5"]}
              style={{
                width: 190,
                height: 190,
                borderRadius: 100,
                padding: 5,
                shadowColor: "#A855F7",
                shadowOpacity: 0.8,
                shadowRadius: 25,
                elevation: 15,
              }}
            >
              <Image
                source={require("../assets/images/profile.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                  borderWidth: 3,
                  borderColor: "#100D20",
                }}
              />
            </LinearGradient>

            <Text className="text-white text-3xl font-black mt-7">
              Waylon Chester Lescano
            </Text>

            <Text className="text-purple-300 text-sm font-bold tracking-widest mt-2">
              MOVIE ENTHUSIAST
            </Text>

            {/* Profile badge */}

            <View
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.12)",
                borderWidth: 1,
                borderColor: "rgba(168, 85, 247, 0.35)",
                paddingHorizontal: 18,
                paddingVertical: 8,
                borderRadius: 30,
                marginTop: 18,
              }}
            >
              <Text className="text-purple-300 text-xs font-bold">
                ✦ CINEVAULT MEMBER
              </Text>
            </View>

          </View>

          {/* About section */}

          <View className="mt-12">

            <Text className="text-white text-xl font-bold mb-4">
              About Me
            </Text>

            <LinearGradient
              colors={["#211638", "#151326", "#111020"]}
              style={{
                padding: 22,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "rgba(168, 85, 247, 0.25)",
              }}
            >
              <Text className="text-purple-300 text-sm font-bold mb-3">
                MY PROFILE
              </Text>

              <Text className="text-gray-300 leading-6">
                Welcome to my Gemini Movie profile. Ughh.
                A place for discovering movies, exploring
                stories, and enjoying the world of cinema.
              </Text>
            </LinearGradient>

          </View>

          {/* Academic information */}

          <View className="mt-8">

            <Text className="text-white text-xl font-bold mb-4">
              Information
            </Text>

            <View
              style={{
                backgroundColor: "#151326",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "rgba(168, 85, 247, 0.2)",
                padding: 20,
              }}
            >

              <View className="flex-row justify-between items-center">
                <Text className="text-gray-400">
                  Course
                </Text>

                <Text className="text-white font-bold">
                  DCIT 26
                </Text>
              </View>

              <View
                style={{
                  height: 1,
                  backgroundColor: "#302443",
                  marginVertical: 16,
                }}
              />

              <View className="flex-row justify-between items-center">
                <Text className="text-gray-400">
                  Platform
                </Text>

                <Text className="text-purple-300 font-bold">
                  CineVault
                </Text>
              </View>

            </View>

          </View>

          {/* Footer */}

          <Text className="text-gray-600 text-xs text-center mt-12 tracking-widest">
            YOUR WORLD. YOUR STORIES. YOUR CINEVAULT.
          </Text>

        </View>
      </ScrollView>

    </View>
  );
}
