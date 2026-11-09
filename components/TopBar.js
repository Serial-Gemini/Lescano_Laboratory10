
import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TopBar() {
  return (
    <LinearGradient
      colors={["#17102F", "#100D20", "#0B0B18"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        paddingHorizontal: 22,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(168, 85, 247, 0.25)",
      }}
    >
      <View className="flex-row items-center justify-between">

        <View className="flex-row items-center">
          {/* Brand icon */}

          <LinearGradient
            colors={["#C084FC", "#7C3AED", "#4F46E5"]}
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 11,
              shadowColor: "#A855F7",
              shadowOpacity: 0.6,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Text className="text-white text-xl font-black">
              G
            </Text>
          </LinearGradient>

          <View>
            <Text className="text-white text-lg font-black tracking-widest">
              Gemini Movies
            </Text>

            <Text className="text-purple-300 text-xs tracking-widest">
              It's better than Blockbuster, that's for sure!
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(168, 85, 247, 0.12)",
            borderWidth: 1,
            borderColor: "rgba(168, 85, 247, 0.3)",
            paddingHorizontal: 11,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text className="text-purple-300 text-xs font-bold">
            ✦ EXPLORE
          </Text>
        </View>

      </View>
    </LinearGradient>
  );
}
