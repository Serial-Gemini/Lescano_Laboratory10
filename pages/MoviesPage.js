
import { View, Text, Pressable } from "react-native";

import { CATEGORIES } from "../data/movies";

export default function MoviesPage({ navigation }) {
  return (
    <View className="flex-1 bg-background px-4 pt-5">

      <Text className="text-white text-3xl font-bold mb-2">
        Explore Movies
      </Text>

      <Text className="text-gray-400 mb-6">
        Choose a category to start exploring.
      </Text>

      {CATEGORIES.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => navigation.navigate(item.screen)}
          className="bg-surface p-5 rounded-xl mb-4 border border-gray-800"
        >

          <Text className="text-purple-300 text-xl font-bold">
            {item.title}
          </Text>

          <Text className="text-gray-400 mt-1">
            {item.description}
          </Text>

          <Text className="text-white mt-3">
            Explore Category →
          </Text>

        </Pressable>
      ))}

    </View>
  );
}
