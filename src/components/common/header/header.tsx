import { SearchIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Link } from "react-router-dom";
import { BasketContext } from "@/context/basket.context";
import { useContext } from "react";

interface HeaderProps {
  handleOpenAuthModal: () => void;
  isLogin: boolean;
}

const Header = ({ handleOpenAuthModal, isLogin }: HeaderProps) => {
  const basketContext = useContext(BasketContext);
  return (
    <div className="bg-white py-4 sm:py-6 max-w-[90rem] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="w-full md:w-[200px] flex justify-between items-center">
        <Link to="/">
          <img width={174} height={40} src="/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-4 sm:hidden">
          <div className="relative flex items-center justify-center">
            <Link to="/purchase-overview">
              <img
                src="/basket.png"
                alt="basket"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {basketContext?.selectedProducts?.length}
            </span>
          </div>
          <Button
            size="sm"
            onClick={handleOpenAuthModal}
            className="bg-gray-300 hover:text-white text-black rounded-3xl px-4 py-2"
          >
            Kirish
          </Button>
        </div>
      </div>
      <div className="flex items-start relative w-full   ">
        <SearchIcon className="absolute left-4 w-4 mt-3 h-4 text-gray-500" />
        <Input
          placeholder="Mahsulotlarni izlash"
          className="border-2 border-yellow-500 rounded-2xl focus:outline-none focus:ring-2 pl-10 w-full"
          type="search"
        />
      </div>
      <div className="hidden sm:flex items-center gap-4 w-[200px]">
        <div className="relative flex items-center justify-center">
          <Link to="/purchase-overview">
            <img
              src="/basket.png"
              alt="basket"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </Link>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {basketContext?.selectedProducts?.length}
          </span>
        </div>
        {isLogin ? (
          <img src="/user.png" alt="user" width={45} height={45} />
        ) : (
          <Button
            size="lg"
            onClick={handleOpenAuthModal}
            className="bg-gray-300 text-black rounded-3xl  hover:text-white px-6 sm:px-8 py-2 sm:py-4"
          >
            Kirish
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
