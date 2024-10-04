import React from "react";
import { Link } from "react-router-dom";

const NegaraView = ({ ubahSearch, dataSearch, hasilSearch, hasilFilter }) => {
  return (
    <div>
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

      {dataSearch && (
        <p>
          Hasil dari: {dataSearch}, ditemukan: {hasilSearch.founded || 0}
        </p>
      )}

      <div className="grid md:grid-cols-3 lg:grid-cols-3">
        {hasilFilter?.map((data) => (
          <div className="" key={data?.name}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={data.flag} alt={data.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="line-clamp-3">{data.currency}</p>
                <div className="card-actions justify-end">
                  <Link to={"/Rincian/" + data.id} className="btn btn-primary">
                    Details
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

export default NegaraView;
