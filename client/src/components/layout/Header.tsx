import { NavLink } from "react-router-dom";

const navLinkClass =
  "text-sm font-medium px-3 py-2 rounded-full hover:bg-amber-100 hover:text-brand-text transition";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧑‍🏫</span>
          <div className="leading-tight">
            <div className="font-bold tracking-tight">
              Bụi Phấn Thời Đại Số
            </div>
            <div className="text-xs text-brand-textSoft dark:text-slate-400">
              Click Tri Ân – 80 năm tự hào
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-1 text-brand-textSoft text-sm">
          <NavLink to="/" className={navLinkClass}>
            Trang chủ
          </NavLink>
          <NavLink to="/hanh-trinh-80-nam" className={navLinkClass}>
            Hành trình 80 năm
          </NavLink>
          <NavLink to="/cau-chuyen-thay-co" className={navLinkClass}>
            Câu chuyện thầy cô
          </NavLink>
          <NavLink to="/thu-vien-anh" className={navLinkClass}>
            Thư viện ảnh
          </NavLink>
          <NavLink to="/click-tri-an" className={navLinkClass}>
            Click Tri Ân
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
