
import { View, Text, Pressable } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View className="flex-1 bg-background justify-center items-center px-6">

      <Text className="text-purple-300 text-sm tracking-widest">
        WELCOME TO
      </Text>

      <Text className="text-white text-4xl font-bold mt-3">
        GEMINI MOVIES
      </Text>

      <Text className="text-gray-400 text-center mt-4">
        Scour through our catalog of movies to find what you're looking for...
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Movies")}
        className="bg-purple-500 px-8 py-4 rounded-xl mt-8"
      >

        <Text className="text-white font-bold">
          Explore Movies
        </Text>

      </Pressable>

    </View>
  );
}
