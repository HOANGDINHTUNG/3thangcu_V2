import type { ITeacher } from "../../../interface/Teacher";
import TeacherCard from "./TeacherCard";


interface Props {
  teachers: ITeacher[];
}

const TeacherList = ({ teachers }: Props) => {
  if (!teachers.length) {
    return <div className="text-sm text-brand-textSoft">Chưa có dữ liệu.</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {teachers.map((t) => (
        <TeacherCard key={t.id} teacher={t} />
      ))}
    </div>
  );
};

export default TeacherList;
