import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/UseCustomeRedux";
import { fetchTimeline } from "../../stores/timeline/timelineSlice";
import TimelineSection from "../../components/modules/Journey/TimelineSection";

const JourneyPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.timeline);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchTimeline());
    }
  }, [dispatch, items.length]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Hành trình 80 năm giáo dục Việt Nam
      </h1>
      <p className="text-sm md:text-base text-brand-textSoft dark:text-slate-300 mb-6">
        Một vài cột mốc tiêu biểu từ ngày đầu giành độc lập, qua những năm tháng
        chiến tranh, đổi mới, đến thời đại chuyển đổi số trong giáo dục.
      </p>

      {loading && <div>Đang tải hành trình...</div>}
      {error && <div className="text-red-500 text-sm">{error}</div>}

      {!loading && !error && <TimelineSection items={items} />}
    </div>
  );
};

export default JourneyPage;
