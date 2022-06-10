import React from "react";
import MovieCard from "../movie-card/MovieCard";
import "./movieGrid.scss";
const movie = {
  adult: false,
  backdrop_path: "/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg",
  genre_ids: (3)[(14, 12, 28)],
  id: 338953,
  original_language: "en",
  original_title: "Fantastic Beasts: The Secrets of Dumbledore",
  overview:
    "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
  popularity: 5488.223,
  poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
  release_date: "2022-04-06",
  title: "Fantastic Beasts: The Secrets of Dumbledore",
  video: false,
  vote_average: 6.8,
  vote_count: 1592,
};

const MovieGrid = () => {
  return (
    <div className="movie-grid">
      <MovieCard movie={movie} category="movie" />
      <MovieCard movie={movie} category="movie" />
      <MovieCard movie={movie} category="movie" />
      <MovieCard movie={movie} category="movie" />
      <MovieCard movie={movie} category="movie" />
      <MovieCard movie={movie} category="movie" />

      <MovieCard movie={movie} category="movie" />

      <MovieCard movie={movie} category="movie" />
    </div>
  );
};

export default MovieGrid;