const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container px-4 py-8 md:py-14">
        <img
          width={233}
          className="mx-auto mb-8 md:mb-12 max-w-full"
          src="/footer-logo.png"
          alt="logo"
        />
        <div className="flex flex-col md:flex-row justify-between max-w-[700px] mx-auto space-y-4 md:space-y-0">
          <span className="text-center md:text-left">Chegirmalar</span>
          <span className="text-center md:text-left">Yangiliklar</span>
          <span className="text-center md:text-left">Aksessuarlar</span>
          <span className="text-center md:text-left">Biz haqimizda</span>
        </div>
        <div className="flex justify-center md:justify-between max-w-[400px] mx-auto mt-8 md:mt-12 space-x-4 md:space-x-0">
          <img
            src="/instagram.png"
            alt="instagram"
            className="cursor-pointer w-8 h-8 md:w-auto md:h-auto"
          />
          <img
            src="/facebook.png"
            alt="facebook"
            className="cursor-pointer w-8 h-8 md:w-auto md:h-auto"
          />
          <img
            src="/telegram.png"
            alt="telegram"
            className="cursor-pointer w-8 h-8 md:w-auto md:h-auto"
          />
          <img
            src="/youtube.png"
            alt="youtube"
            className="cursor-pointer w-8 h-8 md:w-auto md:h-auto"
          />
        </div>
        <p className="text-gray-400 text-center md:text-left mt-8">
          © *ANANAS 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
