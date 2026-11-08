import MovieList from "../../components/MovieList";

export default function LatestPage({ navigation }) {
  return (
    <MovieList
      title="Latest Movies"
      category="Latest"
      navigation={navigation}
    />
  );
}