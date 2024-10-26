import axios from "axios";
import React, { useEffect } from "react";

const Contoh = () => {
  const ambilFilmTrending = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/collection?query=inside",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDkwNDYyYTk2ZjU2NTkwNDM4NjA0OTlmYWRmMsGY2ZSIsIm5iZiI6MTcyODM1ODIyMC44MTYyMzQsInN1YiI6IjY3MDRhNDJmNWY5NTg5MjQ4OGMwMDAwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hL12Kq7z1FZZz_G6ThB-PmpikVQS5giHoMlsh3iLKtg",
        },
      }
    );
    const data = await response.data;
    console.log(data);
  };

  useEffect(() => {
    ambilFilmTrending();
  }, []);
  return <div>Contoh</div>;
};

export default Contoh;



import { useEffect, useState } from "react";
import BerandaView from "./BerandaView";
import axios from "axios";

const Beranda = () => {
  const [movies, setMovies] = useState();
  const [topRated, setTopRated] = useState();
  const [upcoming, setUpcoming] = useState();
  const apiKey = "34411c20ab1bdb2899f390620d15edb3"; // Replace with your TMDB API Key

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}
      );

      console.log(response.data); //sudah pasti isinya array
      setMovies(response.data.results);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  const fetchTopRated = async () => {
    try {
      const response = await axios.get(
        https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}
      );

      console.log(response.data); //sudah pasti isinya array
      setTopRated(response.data.results);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  const fetchUpcoming = async () => {
    try {
      const response = await axios.get(
        https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}
      );

      console.log(response.data); //sudah pasti isinya array
      setUpcoming(response.data.results);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchTopRated();
    fetchUpcoming();
  }, [apiKey]);

  return (
    <BerandaView
      upcoming={upcoming}
      topRated={topRated}
      movies={movies}
    />
  );
};

export default Beranda;





import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import Card from "../../components/Card";

const BerandaView = ({ movies, topRated, upcoming }) => {
  try {
    return (
      <div className="bg-base-100 shadow-xl dark:bg-stone-950">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/* Slide 2 */}
          <SwiperSlide className="w-full">
            <div className="slide-content">
              <span>ALAM</span>
            </div>
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Alam"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="w-full">
            <div className="slide-content">
              <span>PANTAI</span>
            </div>
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Pantai"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <br />

        import React from "react";
import Card from "../../Component/Card.jsx";

const BerandaView = ({ ubahSearch, hasilFilter, movies, topRated, upcoming }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="container mx-auto py-1 px-8">
        <label className="input input-bordered flex items-center gap-2 dark:bg-black dark:text-white">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(input) => ubahSearch(input.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Popular</h2>
        <div className="Card flex w-full overflow-x-auto">
          {hasilFilter?.map((item) => (
            <div key={item.id}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Trending</h2>
        <div className="Card flex w-full overflow-x-auto">
          {movies?.map((item, index) => (
            <div key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Top Rated</h2>
        <div className="Card flex w-full overflow-x-auto">
          {topRated?.map((item, index) => (
            <div key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Up Coming</h2>
        <div className="Card flex w-full overflow-x-auto">
          {upcoming?.map((item, index) => (
            <div key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerandaView;

      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default BerandaView;