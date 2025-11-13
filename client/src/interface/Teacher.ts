export interface ITeacher {
  id: string;
  name: string;
  title: string;
  quote?: string;
  avatarUrl?: string;
  era: 'past' | 'modern' | 'digital';
  story: string;
}
