import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-3">🔍</div>
      <h1 className="text-2xl font-bold mb-2">Không tìm thấy trang</h1>
      <p className="text-sm text-brand-textSoft dark:text-slate-300 mb-4">
        Có vẻ như bạn đã lạc khỏi con thuyền tri thức. Hãy quay lại bến bờ
        chính nhé.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-semibold"
      >
        ⛵ Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
