import MovieList from "../../components/MovieList";

export default function PopularPage({ navigation }) {
  return (
    <MovieList
      title="Popular Movies"
      category="Popular"
      navigation={navigation}
    />
  );
}