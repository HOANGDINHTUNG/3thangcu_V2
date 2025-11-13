import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { closeModal } from "../../stores/ui/modalSlice";


const Modal = () => {
  const dispatch = useAppDispatch();
  const { modalOpen, modalTitle, modalContent } = useAppSelector(
    (s) => s.ui
  );

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60">
      <div className="bg-white dark:bg-slate-900 max-w-lg w-full mx-4 rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100"
        >
          ✕
        </button>
        {modalTitle && (
          <h2 className="text-lg font-semibold mb-3">{modalTitle}</h2>
        )}
        <div className="text-sm leading-relaxed text-brand-textSoft dark:text-slate-300 whitespace-pre-line">
          {modalContent}
        </div>
      </div>
    </div>
  );
};

export default Modal;
