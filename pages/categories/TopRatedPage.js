import MovieList from "../../components/MovieList";

export default function TopRatedPage({ navigation }) {
  return (
    <MovieList
      title="Top Rated Movies"
      category="Top Rated"
      navigation={navigation}
    />
  );
}