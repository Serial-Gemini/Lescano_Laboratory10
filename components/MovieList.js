
import { View, Text, ScrollView } from "react-native";

import { MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList({ title, category, navigation }) {

  const filtered = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View className="flex-1 bg-background px-4 pt-4">

      <Text className="text-white text-2xl font-bold mb-4">
        {title}
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >

        {filtered.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </ScrollView>

    </View>
  );
}
