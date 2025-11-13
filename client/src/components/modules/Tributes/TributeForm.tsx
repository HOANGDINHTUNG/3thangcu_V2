import { type FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/UseCustomeRedux";
import { createTribute } from "../../../stores/tributes/tributesSlice";


const TributeForm = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    dispatch(
      createTribute({
        senderName: name || "Một người học trò",
        message: message.trim(),
      })
    );
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3"
    >
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-xs mb-1">Tên bạn (tuỳ chọn)</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900"
            placeholder="VD: Minh, Hương..."
          />
        </div>
      </div>
      <div>
        <label className="block text-xs mb-1">Lời tri ân</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900 min-h-[90px]"
          placeholder="Viết đôi lời gửi tới thầy cô..."
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-semibold shadow-sm transition disabled:opacity-60"
          disabled={!message.trim()}
        >
          🖱️ Click gửi lời tri ân
        </button>
      </div>
    </form>
  );
};

export default TributeForm;
