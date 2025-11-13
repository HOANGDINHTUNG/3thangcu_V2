import { useEffect, useState } from "react";
import HeroSection from "../../components/modules/Home/HeroSection";
import AboutSection from "../../components/modules/Home/AboutSection";
import MemorySlider from "../../components/modules/Home/MemorySlider";
import GratitudeTree from "../../components/modules/Home/GratitudeTree";
import FallingLetter from "../../components/modules/Home/FallingLetter";
import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { fetchMemories } from "../../stores/memories/memorySlice";
import { fetchTreeNotes } from "../../stores/gratitude/gratitudeSlice";
import { openModal } from "../../stores/ui/modalSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { items: memories } = useAppSelector((s) => s.memories);
  const { notes } = useAppSelector((s) => s.gratitude);

  const [fallLetter, setFallLetter] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchMemories());
    dispatch(fetchTreeNotes());
  }, [dispatch]);

  const handleClickNote = (note: { title: string; message: string }) => {
    // hiện lá thư rơi
    setFallLetter(note.message);

    // sau 1.2s thì mở modal, ẩn lá thư rơi
    setTimeout(() => {
      dispatch(
        openModal({
          title: note.title,
          content: note.message,
        })
      );
      setFallLetter(null);
    }, 1200);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-6 space-y-10">
        <MemorySlider images={memories} />
        <HeroSection />
        <AboutSection />
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12 relative">
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          Cây Tri Ân Thời Đại Số
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4">
          Mỗi biểu tượng trên cành cây là một lời cảm ơn, một kỷ niệm, một trái
          tim dành cho thầy cô. Chạm nhẹ vào cây hoặc các biểu tượng để lắng
          nghe những lời tri ân ấy.
        </p>

        <div className="relative">
          <GratitudeTree
            notes={notes.map((n) => ({
              ...n,
              onClick: () => handleClickNote(n),
            }))}
          />
          {fallLetter && <FallingLetter text={fallLetter} />}
        </div>
      </section>
    </>
  );
};

export default HomePage;
