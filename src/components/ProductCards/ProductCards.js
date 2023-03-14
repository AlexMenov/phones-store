import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { ProductCard } from "./ProductCard";

const ProductCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  height: 400px;
`;

const AnimatedProductCard = animated(ProductCard);

export const ProductCards = () => {
  const props1 = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 250,
  });

  const props2 = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 250,
  });

  const props3 = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 250,
  });

  const phones = [
    {
      style: props2,
      image:
        "https://entertel.ru/image/catalog/iphone/13/iphone-13-pro-family-select.jpg",
      name: "iPhone",
      id: "iphones"
    },
    {
      style: props1,
      image:
        "https://laybyshop.com/wp-content/uploads/2022/08/71PvHfUpwL._SL1500_.jpg",
      name: "Samsung",
      id: "samsung"
    },
    {
      style: props3,
      image:
        "https://nibbl.ru/wp-content/uploads/2022/11/huawei-mate-x2-kv-2x.jpg",
      name: "Huawei",
      id: "huawei"
    },
  ];

  const apiUrl = `http://localhost:3000/phones/`;

  return (
    <ProductCardsContainer>
      {phones.map(({ style, image, name, id }) => (
        <AnimatedProductCard
          style={style}
          image={image}
          name={name}
          link={apiUrl + id}
          key={id + name}
        />
      ))}
    </ProductCardsContainer>
  );
};
