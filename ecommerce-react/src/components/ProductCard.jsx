import React from "react";
//38.35'TE KALDIM
const ProductCard = ({ prd }) => {
  return (
    <div className=" hover:border-blue-900 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2">
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        className="h-32 object-cover"
        src={prd?.image}
        alt=""
      />
      <div className="font-bold h-16 text-center mt-2">
        {(prd?.title).substring(0, 30)}...
      </div>
      <div className="text-center opacity-70 text-sm">
        {(prd?.description).substring(0, 45)} ...
      </div>
      <div className="font-bold text-lg">{prd?.price}</div>
      <button
        style={{ backgroundColor: "#191f2e" }}
        className="w-full p-2 rounded-lg text-white"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
