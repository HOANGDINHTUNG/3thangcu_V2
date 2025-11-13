import type { ITimelineItem } from "../../../interface/TimelineItem";

interface Props {
  items: ITimelineItem[];
}

const TimelineSection = ({ items }: Props) => {
  const sorted = [...items].sort((a, b) => a.year - b.year);

  return (
    <div className="relative border-l border-slate-200 dark:border-slate-700 pl-6 space-y-6">
      {sorted.map((item) => (
        <div key={item.id} className="relative">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white dark:border-slate-900 shadow" />
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-4">
            <div className="text-xs font-semibold text-amber-500 mb-1">
              {item.year}
            </div>
            <div className="text-sm font-semibold mb-1">{item.title}</div>
            <div className="text-xs text-brand-textSoft dark:text-slate-300">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;
