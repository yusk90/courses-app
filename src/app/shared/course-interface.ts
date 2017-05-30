export interface Course {
  id?: number;
  title: string;
  duration: number;
  date: string;
  dateInMs?: number;
  displayDate?: string;
  description: string;
  authors: string[];
  formattedAuthors?: string;
}
