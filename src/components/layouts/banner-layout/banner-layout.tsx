interface BannerLayoutProps {
  children: React.ReactNode;
}

const BannerLayout = ({ children }: BannerLayoutProps) => {
  return (
    <div className="mt-3 sm:mt-5">
      <div className="banner-layout container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="banner-layout-content min-h-[15rem] sm:min-h-[20rem] border-2 rounded-xl sm:rounded-2xl overflow-hidden border-yellow-400 flex flex-col sm:flex-row flex-wrap items-center sm:items-end justify-center sm:justify-evenly bg-[#F5F5F7] p-4 sm:p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
