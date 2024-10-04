import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import ProductView from "./ProductView";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [hasilSearch, setHasilSearch] = useState([]);
  const [search, setSearch] = useSearchParams();
  const dataSearch = search.get("dataSearch");
  const ambilProduct = async () => {
    const response = await axios.get("");
    const data = response.data;
    setProduct(data);
  };

  const ubahSearch = async (input) => {
    setSearch({ dataSearch: input });
    const response = await axios.get(
      "https://fakestoreapi.com/products/search?q=" + dataSearch
    );
    const data = await response.data;
    setHasilSearch(data);
  };

  useEffect(() => {
    if (!dataSearch) {
      ambilProduct();
    } else {
      ubahSearch(dataSearch);
    }
  }, [dataSearch]);

  const hasilFilter = dataSearch ? hasilSearch : product;

  return (
    <ProductView
      dataSearch={dataSearch}
      hasilSearch={hasilSearch}
      hasilFilter={hasilFilter}
      ubahSearch={ubahSearch}
    />
  );
};

export default Product;
