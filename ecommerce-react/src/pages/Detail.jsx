import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsActionDetail } from "../redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productsCard } from "../redux/actions/card";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  const increment = (stock) => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addCard = () => {
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };
  return (
    <div className="w-full items-center flex justify-center">
      <img className="w-1/3" src={product?.image} alt="" />

      <div className="w-2/3 space-y-5">
        <div className="font-bold text-2xl">{product?.title}</div>
        <div className="opacity-70 text-xl">{product?.description}</div>
        <div className="opacity-70 text-xl">Category: {product?.category}</div>
        <div className="opacity-70 text-xl">
          Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}
        </div>
        <div className="font-bold text-xl">Fiyat: {product?.price}</div>
        <div className="flex items-center space-x-4">
          <CgMathMinus
            onClick={decrement}
            className="hover:border-blue-900 cursor-pointer border rounded-full p-1"
            size={30}
          />
          <span className="text-2xl">{count}</span>
          <CgMathPlus
            onClick={() => increment(product?.rating?.count)}
            className="hover:border-blue-900 cursor-pointer border rounded-full p-1"
            size={30}
          />
        </div>
        <button
          onClick={addCard}
          style={{ backgroundColor: "#191f2e" }}
          className="w-full p-2 rounded-lg text-white text-lg"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Detail;
