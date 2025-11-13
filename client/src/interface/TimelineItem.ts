export interface ITimelineItem {
  id: string;
  year: number;
  title: string;
  description: string;
  period: 'pre1975' | '1975_1986' | 'doiMoi' | '2000s' | 'digitalEra';
}
