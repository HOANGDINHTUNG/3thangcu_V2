// src/layout/MainLayout.tsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";
import ThemeToggle from "./ThemeToggle";
import { useAppSelector } from "../../hooks/UseCustomeRedux";

const MainLayout = () => {
  const mode = useAppSelector((s) => s.theme.mode);

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div
      className=" min-h-screen 
    bg-linear-to-b from-amber-50 via-sky-50 to-white 
    dark:bg-linear-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
    text-slate-900 dark:text-slate-50
    transition-colors"
    >
      <Header />
      <main className="pt-20 pb-12">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <ThemeToggle />
    </div>
  );
};

export default MainLayout;
