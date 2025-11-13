import GalleryGrid from "../../components/modules/Gallery/GalleryGrid";


const GalleryPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Thư viện ảnh: Từ bụi phấn đến lớp học số
      </h1>
      <p className="text-sm md:text-base text-brand-textSoft dark:text-slate-300 mb-6">
        Một vài khoảnh khắc tượng trưng cho hành trình của thầy cô và học trò
        Việt Nam qua các thời kỳ.
      </p>
      <GalleryGrid />
    </div>
  );
};

export default GalleryPage;
