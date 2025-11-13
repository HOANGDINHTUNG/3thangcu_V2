import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { toggleTheme } from "../../stores/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed bottom-6 left-6 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100 p-2 rounded-full shadow-md text-lg"
      aria-label="Toggle theme"
    >
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
