import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-slate-900 px-4 py-2 rounded-full shadow-lg text-sm font-semibold transition"
    >
      ↑ Lên đầu trang
    </button>
  );
};

export default BackToTopButton;
