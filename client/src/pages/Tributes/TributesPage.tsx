import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { fetchTributes } from "../../stores/tributes/tributesSlice";
import TributeForm from "../../components/modules/Tributes/TributeForm";
import TributeList from "../../components/modules/Tributes/TributeList";

const TributesPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.tributes);

  useEffect(() => {
    dispatch(fetchTributes());
  }, [dispatch]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Click Tri Ân Thời Đại Số
        </h1>
        <p className="text-sm md:text-base text-brand-textSoft dark:text-slate-300">
          Viết vài dòng gửi đến thầy cô đã đồng hành cùng bạn. Một cú click nhỏ,
          một lời cảm ơn lớn.
        </p>
      </div>

      <TributeForm />

      <div>
        <h2 className="text-lg font-semibold mb-3">
          Những lời tri ân đã được gửi
        </h2>
        {loading && <div>Đang tải lời tri ân...</div>}
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {!loading && !error && <TributeList tributes={items} />}
      </div>
    </div>
  );
};

export default TributesPage;
