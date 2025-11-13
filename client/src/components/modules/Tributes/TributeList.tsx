import type { ITribute } from "../../../interface/Tribute";

interface Props {
  tributes: ITribute[];
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const TributeList = ({ tributes }: Props) => {
  if (!tributes.length) {
    return (
      <div className="text-sm text-brand-textSoft">
        Chưa có lời tri ân nào. Hãy là người đầu tiên nhé!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tributes.map((t) => (
        <div
          key={t.id}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold">{t.senderName}</span>
            <span className="text-[11px] text-brand-textSoft dark:text-slate-400">
              {formatDate(t.createdAt)}
            </span>
          </div>
          <div className="text-xs text-brand-textSoft dark:text-slate-200 whitespace-pre-line">
            {t.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TributeList;
