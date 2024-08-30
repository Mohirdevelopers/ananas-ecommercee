import { Product } from "@/utils/interfaces/product.interface";
import React, { createContext, useState, ReactNode } from "react";

interface BasketContextProps {
  selectedProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string) => void;
  clearBasket: () => void;
}

export const BasketContext = createContext<BasketContextProps | undefined>(
  undefined
);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productName: string) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== productName)
    );
  };

  const clearBasket = () => {
    setSelectedProducts([]);
  };

  return (
    <BasketContext.Provider
      value={{ selectedProducts, addProduct, removeProduct, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
