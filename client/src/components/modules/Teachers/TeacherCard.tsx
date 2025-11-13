import { useAppDispatch } from "../../../hooks/UseCustomeRedux";
import type { ITeacher } from "../../../interface/Teacher";
import { openModal } from "../../../stores/ui/modalSlice";

interface Props {
  teacher: ITeacher;
}

const eraLabel: Record<ITeacher["era"], string> = {
  past: "Thế hệ trước",
  modern: "Thời kỳ đổi mới",
  digital: "Thời đại số",
};

const TeacherCard = ({ teacher }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      openModal({
        title: teacher.name,
        content: teacher.story,
      })
    );
  };

  return (
    <div
      className="bg-white/90 dark:bg-slate-900/80 
    border border-amber-50 dark:border-sky-800/60 
    rounded-2xl shadow-md 
    p-4 flex flex-col h-full
    transition
    hover:-translate-y-1 hover:shadow-2xl
    hover:border-amber-300/80 dark:hover:border-sky-400/80"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-slate-700 flex items-center justify-center text-2xl">
          {teacher.avatarUrl ? (
            <img
              src={teacher.avatarUrl}
              alt={teacher.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            "🧑‍🏫"
          )}
        </div>
        <div>
          <div className="text-sm font-semibold">{teacher.name}</div>
          <div className="text-xs text-brand-textSoft dark:text-slate-400">
            {teacher.title}
          </div>
        </div>
      </div>
      <div className="text-xs text-brand-textSoft dark:text-slate-300 mb-3 line-clamp-3">
        {teacher.quote}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 dark:bg-slate-800 text-amber-700 dark:text-amber-300">
          {eraLabel[teacher.era]}
        </span>
        <button
          onClick={handleClick}
          className="text-xs font-semibold text-sky-600 dark:text-sky-300 hover:underline"
        >
          Xem câu chuyện →
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
