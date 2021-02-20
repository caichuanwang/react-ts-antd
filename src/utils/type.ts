export interface Course {
  id: number;
  courseType: string;
  courseName: string;
  courseCount: string;
  courseNum: string;
  courseAddress: string;
}
export type Response = {
  data: Course[];
  success: boolean;
  keywords: '';
};
