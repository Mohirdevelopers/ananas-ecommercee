import React from "react";
import { Input } from "../ui/input";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsLogin: (isLogin: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  setIsLogin,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content !w-[450px] p-10 rounded-2xl">
        <button
          className="close-button text-gray-500 h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full font-light text-xl ml-auto mb-8"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold">Telefon raqamini kiriting</h2>
        <p className="text-gray-500 mb-8">
          Tasdiqlash kodini SMS orqali yuboramiz
        </p>
        <Input
          className="mb-4 rounded-full h-12 bg-gray-200"
          placeholder="+998 00 000-00-00"
        />
        <Input
          className="mb-4 rounded-full h-12 bg-gray-200"
          type="password"
          placeholder="Parol"
        />
        <button
          type="submit"
          className="submit-button rounded-full w-full text-center p-4 bg-yellow-400"
          onClick={() => {
            setIsLogin(true);
            onClose();
          }}
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
