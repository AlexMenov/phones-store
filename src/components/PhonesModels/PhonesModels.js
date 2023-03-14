import { PhoneModel } from "./PhoneModel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PhonesModelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PhonesModels = () => {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const productsStore = useSelector((state) => state.product.products);
  console.log(productsStore)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/phones/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <PhonesModelsContainer>
      {products.map((product) => (
        <PhoneModel
          key={product.id}
          image={product.photo_address}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </PhonesModelsContainer>
  );
};
