import AuthModal from "@/components/auth-modal/auth-modal";
import Categories from "../../categories/categories";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import { useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div>
      <Header isLogin={isLogin} handleOpenAuthModal={handleOpenAuthModal} />
      <Categories />
      {children}
      <Footer />
      <AuthModal
        setIsLogin={setIsLogin}
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuthModal}
      />
    </div>
  );
};

export default MainLayout;
