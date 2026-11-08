import MovieList from "../../components/MovieList";

export default function RecommendPage({ navigation }) {
  return (
    <MovieList
      title="Recommended Movies"
      category="Recommended"
      navigation={navigation}
    />
  );
}