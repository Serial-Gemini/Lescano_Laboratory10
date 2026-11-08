
import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function MovieCard({ movie, navigation }) {
  const scale = useRef(new Animated.Value(1)).current;
  const entrance = useRef(new Animated.Value(0)).current;
  const hovered = useRef(false);

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 450,
      useNativeDriver: true,
    }).start();
  }, [entrance]);

  const animateScale = (value) => {
    Animated.spring(scale, {
      toValue: value,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleHoverIn = () => {
    hovered.current = true;
    animateScale(1.07);
  };

  const handleHoverOut = () => {
    hovered.current = false;
    animateScale(1);
  };

  const handlePressIn = () => animateScale(0.97);

  const handlePressOut = () => {
    animateScale(hovered.current ? 1.07 : 1);
  };

  return (
    <Animated.View
      style={{
        opacity: entrance,
        transform: [
          {
            translateY: entrance.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 0],
            }),
          },
          { scale },
        ],
        marginBottom: 18,
        zIndex: hovered.current ? 2 : 1,
        shadowColor: "#A855F7",
        shadowOpacity: 0.22,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 5 },
        elevation: 6,
      }}
    >
      <Pressable
        onPress={() =>
          navigation?.navigate("MovieDetails", { movie })
        }
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ borderRadius: 20 }}
      >
        <LinearGradient
          colors={["#A855F7", "#3730A3", "#2563EB"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 20,
            padding: 1.5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#111020",
              borderRadius: 18,
              padding: 12,
              overflow: "hidden",
            }}
          >
            <Image
              source={movie.image}
              style={{
                width: 115,
                height: 165,
                borderRadius: 12,
                resizeMode: "cover",
                backgroundColor: "#25203A",
              }}
            />

            <View
              style={{
                flex: 1,
                minWidth: 0,
                justifyContent: "center",
                marginLeft: 15,
              }}
            >
              <Text
                className="text-white text-lg font-bold"
                numberOfLines={2}
              >
                {movie.title}
              </Text>

              <View className="flex-row items-center flex-wrap mt-2">
                <Text className="text-purple-300 text-sm font-semibold">
                  {movie.year}
                </Text>

                <Text className="text-gray-500 mx-2">•</Text>

                <Text className="text-yellow-400 text-sm font-bold">
                  ★ {movie.rating}
                </Text>
              </View>

              <Text
                className="text-gray-400 text-sm mt-3 leading-5"
                numberOfLines={3}
              >
                {movie.desc.trim()}
              </Text>

              <View className="flex-row flex-wrap mt-3">
                {movie.categories.slice(0, 2).map((category) => (
                  <View
                    key={category}
                    style={{
                      backgroundColor: "rgba(168,85,247,0.13)",
                      borderWidth: 1,
                      borderColor: "rgba(168,85,247,0.3)",
                      paddingHorizontal: 9,
                      paddingVertical: 4,
                      borderRadius: 20,
                      marginRight: 6,
                      marginBottom: 4,
                    }}
                  >
                    <Text className="text-purple-300 text-xs">
                      {category}
                    </Text>
                  </View>
                ))}
              </View>

              <Text className="text-purple-300 text-xs font-bold mt-2">
                VIEW DETAILS →
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}
