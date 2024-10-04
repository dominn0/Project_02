import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NegaraView from "./NegaraView";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  const [search, setSearch] = useSearchParams();
  const dataSearch = search.get("dataSearch");
  const ambilProduct = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries"
    );

    const data = response.data;
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  const ubahSearch = useCallback(
    async (input) => {
      setSearch({ dataSearch: input });
      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries?search=q" + dataSearch
      );
      const data = await response.data;

      dispatch({ type: "SET_FILTER", payload: data });
    },
    [dataSearch]
  );

  useEffect(() => {
    if (!dataSearch) {
      ambilProduct();
    } else {
      ubahSearch(dataSearch);
    }
  }, [dataSearch]);

  const hasilFilter = dataSearch ? state.filterData : state.data;
  console.log(state);

  return (
    <NegaraView
      dataSearch={dataSearch}
      hasilSearch={state.filterData}
      hasilFilter={hasilFilter}
      ubahSearch={ubahSearch}
    />
  );
};
export default Negara;
