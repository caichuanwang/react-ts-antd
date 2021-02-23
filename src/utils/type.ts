export interface Course {
  id: number;
  courseType: string;
  courseName: string;
  courseCount: string;
  courseNum: string;
  courseAddress: string;
}
export interface addCourse {
  label: string;
  value: string;
}

export type Response = {
  data: Course[] | addCourse[];
  success?: boolean;
  keywords?: '';
};
