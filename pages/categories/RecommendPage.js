import MovieList from "../../components/MovieList";

export default function RecommendedPage({ navigation }) {
  return (
    <MovieList
      title="Recommended Movies"
      category="Recommended"
      navigation={navigation}
    />
  );
}