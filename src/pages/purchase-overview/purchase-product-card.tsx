import { Checkbox } from "@/components/ui/checkbox";
import { BasketContext } from "@/context/basket.context";
import { Product } from "@/utils/interfaces/product.interface";
import { Trash2Icon } from "lucide-react";
import { useContext, useState } from "react";

interface PurchaseProductCardProps {
  product: Product;
}

const PurchaseProductCard = ({ product }: PurchaseProductCardProps) => {
  const [quantity, setQuantity] = useState(product.count);
  const basketContext = useContext(BasketContext);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center w-full min-h-[150px] gap-4 mb-8 sm:mb-20">
      <Checkbox className="mr-4 hidden sm:block" />
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
        <img width={150} src={product.image} className=" mb-4 sm:mb-0" />
        <div className="flex flex-col w-full">
          <h2 className="flex flex-col sm:flex-row text-center justify-between font-medium mb-4 sm:mb-0">
            <span className="mb-2 sm:mb-0">{product.name}</span>
            <span className="text-xl font-semibold">
              {product.price.toLocaleString()} so'm
            </span>
          </h2>

          <div className="mt-4 sm:mt-16 flex flex-col sm:flex-row justify-between items-center">
            <span
              onClick={() => {
                basketContext?.removeProduct(product.name);
              }}
              className="flex items-center gap-2 text-gray-500 mb-4 sm:mb-0"
            >
              <Trash2Icon /> Yo'q qilish
            </span>
            <div className="flex items-center border justify-between border-black rounded-full min-w-[150px]">
              <button
                onClick={handleDecrement}
                className="px-3 py-1 text-xl"
                aria-label="Decrease quantity"
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 text-xl"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProductCard;
