import BannerLayout from "@/components/layouts/banner-layout/banner-layout";
import ProductsList from "@/components/products-list/products-list";
import { Product } from "@/utils/interfaces/product.interface";

import data from "../../mocks/recommended-products.json";

const products = data.products;
const Home = () => {
  return (
    <>
      <BannerLayout>
        <img
          className="w-full max-w-[548px] md:w-[648px]"
          src="/banner1.png"
          alt="banner"
        />
        <div className="my-auto text-center md:text-left">
          <p className="text-[#5D554D] text-lg sm:text-xl md:text-2xl lg:text-[26px] uppercase">
            bo'lib to'lash imkoniyati bilan
          </p>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-[#5D554D]">
            iPhone 15
          </h2>
        </div>
      </BannerLayout>
      <ProductsList products={products as Product[]} title="Siz uchun" />
      <BannerLayout>
        <div className="my-auto text-center md:text-left">
          <p className="text-[#003C67] text-lg sm:text-xl md:text-2xl lg:text-[26px] uppercase">
            har bir qurulmangiz uchun
          </p>
          <h2 className="text-[#003C67] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px]">
            Aksessuarlar
          </h2>
        </div>
        <img className="w-full max-w-[556px]" src="/banner2.png" alt="banner" />
      </BannerLayout>
      <ProductsList
        products={products.slice(3, 8) as Product[]}
        title="Chegirmalar"
      />
      <BannerLayout>
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[476px]"
          src="/banner3.png"
          alt="banner"
        />
        <div className="my-auto text-center md:text-left">
          <p className="text-[#72757E] text-lg sm:text-xl md:text-2xl lg:text-[30px] uppercase">
            3TA QURILMA XARIDI UCHUN
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[55px] text-[#72757E]">
            10% CHEGIRMA
          </h2>
        </div>
      </BannerLayout>
      <ProductsList
        products={products.slice(5, 10) as Product[]}
        title="Yangilikar"
      />
    </>
  );
};

export default Home;
