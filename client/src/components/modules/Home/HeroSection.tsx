import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 flex flex-col md:flex-row items-center gap-10">
      <div
        className={`flex-1 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-brand-primarySoft text-brand-textSoft mb-3">
          <span>✨</span>
          <span>Dấu ấn Việt Nam: 80 năm tự hào</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Bụi Phấn Thời Đại Số
        </h1>
        <p className="text-base md:text-lg text-brand-textSoft dark:text-slate-300 mb-4">
          Từ bảng phấn ngày xưa đến lớp học số hôm nay, mỗi cú{" "}
          <span className="font-semibold text-amber-500">click tri ân</span> đều
          là một lời cảm ơn gửi đến người lái đò thầm lặng của Việt Nam.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/click-tri-an")}
            className="px-5 py-2.5 rounded-full 
    bg-linear-to-r from-amber-400 via-orange-400 to-rose-400 
    text-slate-900 text-sm font-semibold
    shadow-lg shadow-amber-300/50
    hover:brightness-110 active:scale-95
    transition"
          >
            🎯 Click Tri Ân ngay
          </button>
          <button
            onClick={() => navigate("/hanh-trinh-80-nam")}
            className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-medium hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
          >
            Hành trình 80 năm
          </button>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-700 delay-150 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="relative mx-auto">
          <div className="aspect-square rounded-3xl bg-linear-to-tr from-amber-100 via-sky-100 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 shadow-lg flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 p-6">
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 p-3 text-center shadow float-soft">
                <div className="text-3xl mb-1">🧑‍🏫</div>
                <div className="text-xs font-semibold">Người lái đò</div>
              </div>

              <div className="rounded-2xl bg-amber-50 dark:bg-slate-800 p-3 text-center shadow">
                <div className="text-3xl mb-1">💻</div>
                <div className="text-xs font-semibold">Lớp học số</div>
              </div>
              <div className="rounded-2xl bg-sky-50 dark:bg-slate-800 p-3 text-center shadow">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-xs font-semibold">80 năm tri thức</div>
              </div>
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 p-3 text-center shadow">
                <div className="text-3xl mb-1">🖱️</div>
                <div className="text-xs font-semibold">Click Tri Ân</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 text-xs bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full shadow">
            “Từ bụi phấn đến màn hình – người thầy vẫn luôn ở đó.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
