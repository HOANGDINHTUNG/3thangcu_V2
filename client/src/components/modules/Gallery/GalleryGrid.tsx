const dummyImages = [
  { id: 1, label: "Lớp học làng những năm đầu", emoji: "🏫" },
  { id: 2, label: "Bụi phấn và bảng đen", emoji: "🧑‍🏫" },
  { id: 3, label: "Thời kỳ đổi mới", emoji: "📚" },
  { id: 4, label: "Phòng học hiện đại", emoji: "💻" },
  { id: 5, label: "Học trực tuyến", emoji: "🌐" },
  { id: 6, label: "Click Tri Ân", emoji: "🖱️" },
];

const GalleryGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dummyImages.map((item) => (
        <div
          key={item.id}
          className="aspect-4/3 rounded-2xl 
    bg-linear-to-br from-amber-50 via-sky-50 to-white 
    dark:from-slate-800 dark:via-slate-900 dark:to-slate-900
    shadow-sm flex flex-col items-center justify-center gap-2
    transition
    hover:-translate-y-1 hover:shadow-2xl 
    hover:scale-[1.02]"
        >
          <div className="text-4xl">{item.emoji}</div>
          <div className="text-xs font-medium text-brand-textSoft dark:text-slate-300 px-4 text-center">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
