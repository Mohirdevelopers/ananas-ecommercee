import { Product } from "@/utils/interfaces/product.interface";
import { Link } from "react-router-dom";

const ProductCard = (props: Product) => {
  return (
    <Link to={`/product/${props.name}`}>
      <div className="p-2 flex  h-full flex-col items-center md:items-start cursor-pointer w-full">
        <img src={props.image} />
        <p className="font-medium mt-2">{props.name}</p>
        <p className="text-sm mt-auto text-gray-500 line-through">
          {props.original_price.toLocaleString()}
        </p>
        <p className="font-medium">{props.price.toLocaleString()} so'm</p>
      </div>
    </Link>
  );
};

export default ProductCard;
