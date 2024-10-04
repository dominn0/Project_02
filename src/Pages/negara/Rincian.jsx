import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Rincian = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const ambilProduct = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/countries/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching the product data", error);
    }
  };

  useEffect(() => {
    if (id) {
      ambilProduct();
    }
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {product ? (
        <>
          <img src={data.flag} alt={data.name} />
          <div>{data.name}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rincian;
