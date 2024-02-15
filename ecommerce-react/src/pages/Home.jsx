import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../redux/actions/products";
import ProductCard from "../components/ProductCard";
import { searchAction } from "../redux/actions/search";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAction());
    dispatch(searchAction());
  }, [dispatch]);
  return (
    <div className="flex flex-wrap justify-center p-10">
      {search.length > 0
        ? search.map((prd, i) => <ProductCard key={i} prd={prd} />)
        : products &&
          products.map((prd, i) => <ProductCard key={i} prd={prd} />)}
    </div>
  );
};

export default Home;
