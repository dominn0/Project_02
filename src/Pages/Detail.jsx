import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RatingMovies from "./RatingMovies";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.movie.detail);

  useEffect(() => {
    const getData = async () => {
      const item = await fetchMovieDetails(id);
      if (item) {
        dispatch({ type: "SET_MOVIE_DETAIL", payload: item });
      }
    };
    getData();
  }, [dispatch, id]);

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c20cf69a36348d4f7abaccf0521da27b`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movies data:", error);
      return null;
    }
  };

  const submitRating = async (rating) => {
    try {
      await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        { value: rating },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVhZDI3ZTkxOTgwMjE1NTM0MjBiMWVjZmZlNDkzNiIsIm5iZiI6MTcyOTQxMDcwOC4zMzgzMzMsInN1YiI6IjY3MDQ4MzQ3YmQ3Y2Q4NmRhNTFkMmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s6u89_KS9BN9YCS-Q4qLTPElAgreJfPLhSPM0R6SZU0",
          },
        }
      );
      dispatch({
        type: "ADD_RATING_HISTORY",
        payload: { movieId: id, value: rating },
      });
      alert("Rating berhasil disimpan ke history!");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim rating:", error.message);
    }
  };

  if (!detail?.title) {
    return (
      <div className="text-white text-center text-2xl mt-10">Loading...</div>
    );
  }

  const posterUrl = `https://image.tmdb.org/t/p/original${
    detail.poster_path || ""
  }`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${
    detail.backdrop_path || ""
  }`;

  return (
    <div
      className="flex flex-col items-center text-white bg-black min-h-screen justify-center"
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        <div className="w-full lg:w-1/3 flex justify-center">
          {detail.poster_path ? (
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src={posterUrl}
              alt="Movie Poster"
            />
          ) : (
            <div className="w-full h-auto flex items-center justify-center bg-gray-800 rounded-lg shadow-lg">
              <span className="text-white">No Poster Available</span>
            </div>
          )}
        </div>
        <div className="w-full lg:w-2/3 text-left space-y-4">
          <h1 className="text-4xl font-bold">{detail.title}</h1>
          <p className="text-lg leading-relaxed">{detail.overview}</p>
          <div className="text-md space-y-4 mt-4">
            <div>
              <span className="bg-gray-800 p-2 rounded text-center inline-block mr-2">
                Release Date: {detail.release_date}
              </span>
              <span className="bg-gray-800 p-2 rounded text-center inline-block">
                {detail.vote_average}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="mb-2">Your Rating:</p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => submitRating(rating)}
                      className="bg-orange-500 text-white px-2 py-1 rounded"
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium text-md mt-6 transition duration-300">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
