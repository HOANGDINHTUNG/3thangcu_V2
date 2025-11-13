interface Props {
  text: string;
}

const FallingLetter = ({ text }: Props) => {
  return (
    <div
      className="
        pointer-events-none
        absolute left-1/2 top-1/4 -translate-x-1/2
        animate-letter-drop
      "
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl max-w-xs px-4 py-3 text-xs md:text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line">
        {text}
      </div>
    </div>
  );
};

export default FallingLetter;
