import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { fetchTeachers } from "../../stores/teachers/teachersSlice";
import TeacherList from "../../components/modules/Teachers/TeacherList";

const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.teachers);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchTeachers());
    }
  }, [dispatch, items.length]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Câu chuyện những người lái đò
      </h1>
      <p className="text-sm md:text-base text-brand-textSoft dark:text-slate-300 mb-6">
        Mỗi thầy cô là một hành trình, một ngọn lửa. Một vài câu chuyện nhỏ dưới
        đây chỉ là đại diện cho hàng triệu trái tim thầm lặng trên khắp Việt
        Nam.
      </p>

      {loading && <div>Đang tải danh sách thầy cô...</div>}
      {error && <div className="text-red-500 text-sm">{error}</div>}

      {!loading && !error && <TeacherList teachers={items} />}
    </div>
  );
};

export default TeachersPage;
