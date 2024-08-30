import ProductsList from "@/components/products-list/products-list";
import { BasketContext } from "@/context/basket.context";
import { useContext, useState } from "react";
import data from "../../mocks/recommended-products.json";
import { Product } from "@/utils/interfaces/product.interface";
import { Checkbox } from "@/components/ui/checkbox";
import { XIcon } from "lucide-react";
import PurchaseProductCard from "./purchase-product-card";
import SuccessModal from "@/components/success-modal/success-modal";
import { useNavigate } from "react-router-dom";

const products = data.products;

const PurchaseOverview = () => {
  const basketContext = useContext(BasketContext);
  const [selectAll, setSelectAll] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();
  const totalPrice = basketContext?.selectedProducts?.reduce((acc, product) => {
    return acc + Number(product.price) * product.count;
  }, 0);

  const handlePurchase = () => {
    setIsSuccessModalOpen(true);
    basketContext?.clearBasket();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container p-4 sm:p-8 md:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Savatingiz,{" "}
        <span className="text-gray-400">
          {basketContext?.selectedProducts?.length} mahsulot
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="my-8 flex items-center">
          <Checkbox
            id="selectAll"
            checked={selectAll}
            onCheckedChange={() => setSelectAll(!selectAll)}
          />
          <label
            htmlFor="selectAll"
            className="ml-2 text-lg font-medium text-gray-400"
          >
            Hammasini tanlash
          </label>
        </div>

        <div className="my-8 flex items-center">
          <XIcon className="w-10 h-10 text-gray-400" />
          <p className="text-lg font-medium text-gray-400">
            Tanlanganlarni o‘chirish
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row py-8 gap-8 lg:gap-20 mb-16 sm:mb-32">
        <div className="products w-full lg:w-8/12">
          {basketContext?.selectedProducts?.map((product) => (
            <PurchaseProductCard product={product} key={product.name} />
          ))}
        </div>
        <div className="w-full lg:w-4/12">
          <button
            onClick={handlePurchase}
            className="bg-yellow-400 whitespace-nowrap text-black font-semibold px-4 sm:px-8 md:px-24 py-3 rounded-full w-full"
          >
            Rasmiylashtirishga o'tish
          </button>
          <div className="border-2 mt-5 rounded-2xl border-gray-300 p-4 ">
            <p className="mb-5 font-medium">Buyurtmangiz</p>
            <p className="text-sm flex justify-between items-center">
              Mahsulotlar ({basketContext?.selectedProducts?.length}){" "}
              <span>{totalPrice?.toLocaleString()} so'm</span>
            </p>
            <p className="text-sm font-semibold flex mt-10 justify-between items-center">
              Jami:
              <span className="font-semibold text-xl">
                {totalPrice?.toLocaleString()} so'm
              </span>
            </p>
          </div>
        </div>
      </div>

      <ProductsList products={products.slice(0, 5) as Product[]} title="" />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
};

export default PurchaseOverview;
