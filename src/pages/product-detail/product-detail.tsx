import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "@/components/products-list/products-list";
import SuccessModal from "@/components/success-modal/success-modal";
import { BasketContext } from "../../context/basket.context";
import data from "../../mocks/recommended-products.json";
import { Product } from "@/utils/interfaces/product.interface";

const ProductDetail = () => {
  const { name } = useParams();
  const basketContext = useContext(BasketContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("/color1.png");
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState("/ip3.png");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedSim, setSelectedSim] = useState<string | null>(null);
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);
  const product = data.products.find((product) => product.name === name);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToBasket = () => {
    if (name) {
      basketContext?.addProduct({
        ...product,
        count: quantity,
      } as Product);
      setIsAddedToBasket(true);
    }
  };

  const handleRemoveFromBasket = () => {
    if (name) {
      basketContext?.removeProduct(name);
      setIsAddedToBasket(false);
    }
  };

  const handleOpenSuccessModal = () => setIsSuccessModalOpen(true);

  const handleCloseSuccessModal = () => setIsSuccessModalOpen(false);

  const imageItems = ["/ip1.png", "/1p2.png", "/ip3.png", "/ip4.png"];
  const colorItems = [
    "/color1.png",
    "/color2.png",
    "/color3.png",
    "/color4.png",
  ];
  const memoryOptions = ["64", "128", "256", "512"];
  const simOptions = ["eSim", "Yagona SIM", "ikki SIM"];

  return (
    <>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start mb-10 gap-6">
          {/* Product Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6">
            <div className="flex z-50 flex-row md:flex-col items-center gap-2 mb-4 md:mb-0 mx-auto">
              {imageItems.map((item, index) => (
                <img
                  key={index}
                  className={`cursor-pointer rounded-md w-16 md:w-24 ${
                    selectedImage === item
                      ? "border-2 border-yellow-300"
                      : "border-2 border-transparent"
                  }`}
                  src={item}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
            <img src={selectedImage} className="w-[80%]" />
          </div>

          {/* Product Details */}
          <div className="font-medium w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold my-4">
              Apple iPhone 15 Pro 256 ГБ, Dual: nano SIM + eSIM Natural Titanium
            </h2>

            {/* Color Selection */}
            <p className="mb-2">Rang</p>
            <div className="flex items-center gap-2 mb-6">
              {colorItems.map((color) => (
                <div
                  key={color}
                  className={`w-20 h-20 rounded-md flex items-center mb-6 border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-yellow-400"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <img className="m-auto" src={color} />
                </div>
              ))}
            </div>

            {/* Memory Selection */}
            <p className="mb-2">Xotira</p>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {memoryOptions.map((memory) => (
                <div
                  key={memory}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 border-2 cursor-pointer ${
                    selectedMemory === memory
                      ? "border-yellow-400 bg-yellow-400"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMemory(memory)}
                >
                  {memory} GB
                </div>
              ))}
            </div>

            {/* SIM Selection */}
            <p className="mb-2">SIM</p>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {simOptions.map((sim) => (
                <div
                  key={sim}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 border-2 cursor-pointer ${
                    selectedSim === sim
                      ? "border-yellow-400 bg-yellow-400"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSim(sim)}
                >
                  {sim}
                </div>
              ))}
            </div>

            {/* Quantity Selection */}
            <p className="mb-2">Miqdori</p>
            <div className="flex items-center border  border-black rounded-full w-fit mt-2">
              <button
                onClick={handleDecrement}
                className="px-3 py-1 text-xl"
                aria-label="Decrease quantity"
                disabled={quantity === 1 || isAddedToBasket}
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 text-xl"
                aria-label="Increase quantity"
                disabled={isAddedToBasket}
              >
                +
              </button>
            </div>

            {/* Price and Actions */}
            <p className="mt-6">Narx</p>
            <p className="text-2xl font-bold flex items-end gap-2">
              16 083 000 so’m
              <span className="text-base font-normal text-gray-500 line-through">
                17 200 000
              </span>
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {isAddedToBasket ? (
                <button
                  onClick={handleRemoveFromBasket}
                  className="bg-white border-2 whitespace-nowrap border-black text-black font-semibold px-8 md:px-24 py-3 rounded-full w-full sm:w-auto"
                >
                  Savatdan olib tashlash
                </button>
              ) : (
                <button
                  onClick={handleAddToBasket}
                  className="bg-yellow-400 whitespace-nowrap text-black font-semibold px-8 md:px-24 py-3 rounded-full w-full sm:w-auto"
                >
                  Savatga qo'shish
                </button>
              )}
              <button
                onClick={handleOpenSuccessModal}
                className="bg-white border-2 whitespace-nowrap border-yellow-400 text-black font-semibold px-8 md:px-10 py-3 rounded-full w-full sm:w-auto"
              >
                Tugmani 1 bosishda xarid qilish
              </button>
            </div>
          </div>
        </div>

        <hr />

        {/* Product Features */}
        <h2 className="text-2xl font-bold my-4">Xususiyatlari</h2>
        <p>
          Displey: 6,7'', OLED, 2796×1290 piksellar (zichligi dyuym uchun 460
          nuqta), yorqinligi 2000 nit, yangilanish tezligi 1-120 Gs, ProMotion,
          HDR, Dolby Vision, Always On, Ceramic Shield shishasi; <br />
          Chipset: Apple A17 Pro; <br />
          Xotirasi: 256GB/512GB/1TB <br />
          Kameralar: asosiysi 48 Mp (24 mm, f/1.78, OIS), keng burchakligi 12 Mp
          (13 mm, ko'rish burchagi 120°, f/2.2, makro rejim), telefoto 12 Mp
          (120 mm, 5х kattalashtirish, f/2.8, OIS), old kamera 12 Mp. <br />
          Ulanish: 5G, Wi-Fi 6E, Bluetooth 5.3, GPS. <br />
          NFC moduli (Apple pay), USB Type-C. <br />
          Boshqalar: LiDAR, TrueDepth (Face ID), stereodinamiklar, IP68
          namlikdan himoya.
        </p>

        <br />

        {/* Similar Products */}
        <ProductsList
          products={data.products.slice(0, 5) as Product[]}
          title="Shunga o'xshash mahsulotlar"
        />
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </>
  );
};

export default ProductDetail;
