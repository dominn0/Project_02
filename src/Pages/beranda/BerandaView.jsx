import React from "react";
import { Link } from "react-router-dom";

const BerandaView = ({ ubahSearch, dataSearch, hasilSearch, hasilFilter }) => {
  return (
    <div className="beranda dark:bg-black">
      <label className="input input-bordered flex items-center gap-2">
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

      <h2>
        Hasil dari Search: {dataSearch} | Ditemukan hasil:{" "}
        {hasilSearch?.founded}
      </h2>

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-3">
        {hasilFilter?.restaurants?.map((data) => (
          <div key={data.id}>
            <div className="card bg-base-100 w-95 dark:bg-slate-400 dark:text-white shadow-xl">
              <figure>
                <img
                  src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                  alt={data.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="line-clamp-2">{data.description}</p>
                <div className="card-actions justify-end">
                  <Link to={"/detail/" + data.id} className="btn btn-primary">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BerandaView;
