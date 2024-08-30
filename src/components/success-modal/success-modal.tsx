import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content !w-[450px] p-4 rounded-2xl ">
        <button
          className="close-button text-gray-500 h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full font-light text-xl ml-auto "
          onClick={onClose}
        >
          ×
        </button>
        <div className="py-20">
          <img
            width={150}
            className="mx-auto"
            src="/success.png"
            alt="success"
          />
          <p className="text-center text-2xl  mt-10">
            Buyurtmangiz qabul qilindi
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
