
import { View, Text, Image } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View className="flex-row bg-surface p-3 rounded-xl mb-3">

      <Image
        source={movie.image}
        style={{
          width: 110,
          height: 160,
          resizeMode: "cover",
          borderRadius: 12,
        }}
      />

      <View className="flex-1 ml-3 justify-center">

        <Text className="text-white text-lg font-bold">
          {movie.title}
        </Text>

        <Text className="text-purple-300 mt-1">
          {movie.year} • {movie.rating}
        </Text>

        <Text className="text-gray-400 text-sm mt-2">
          {movie.desc}
        </Text>

      </View>

    </View>
  );
}
