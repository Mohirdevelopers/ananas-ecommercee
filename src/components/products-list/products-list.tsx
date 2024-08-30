import { Product } from "@/utils/interfaces/product.interface";
import ProductCard from "./product-card/product-card";

interface ProductsListProps {
  products: Product[];
  title: string;
}

const ProductsList = ({ products, title }: ProductsListProps) => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
