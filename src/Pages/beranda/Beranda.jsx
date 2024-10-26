import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { useDispatch, useSelector } from "react-redux";

const nilaiDefault = {
  movies: [],
  upcoming: [],
  hasilFilter: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        movies: action.payload.movies,
        upcoming: action.payload.upcoming,
        hasilFilter: action.payload.movies,
      };
    case "SET_FILTER":
      return {
        ...state,
        hasilFilter: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);
  const theme = useSelector((state) => state.theme);
  const dispatchRedux = useDispatch();
  const [search, setSearch] = useSearchParams();
  const dataSearch = search.get("dataSearch");

  const setMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c20cf69a36348d4f7abaccf0521da27b"
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      return [];
    }
  };

  const setUpComing = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=c20cf69a36348d4f7abaccf0521da27b"
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      return [];
    }
  };

  const ubahSearch = useCallback(
    async (input) => {
      try {
        setSearch({ dataSearch: input });
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=c20cf69a36348d4f7abaccf0521da27b&query=${input}`
        );
        const item = response.data.results;
        console.log("Search results:", item);
        dispatch({ type: "SET_FILTER", payload: item });
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    },
    [setSearch]
  );

  useEffect(() => {
    const fetchData = async () => {
      const movies = await setMovies();
      const upcoming = await setUpComing();

      dispatch({
        type: "FETCH_BERHASIL",
        payload: { movies, upcoming },
      });

      console.log("Fetched movies:", movies);
      console.log("Fetched upcoming:", upcoming);
    };

    if (!dataSearch) {
      fetchData();
    } else {
      ubahSearch(dataSearch);
    }
  }, [dataSearch, ubahSearch]);

  const hasilFilter = dataSearch ? state.hasilFilter : state.movies;
  console.log("Hasil Filter:", hasilFilter);

  return (
    <div>
      <BerandaView
        hasilFilter={hasilFilter}
        ubahSearch={ubahSearch}
        upcoming={state.upcoming}
        movies={state.movies}
      />
    </div>
  );
};

export default Beranda;
