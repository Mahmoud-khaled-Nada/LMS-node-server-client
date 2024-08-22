import { ReactNode } from "react";

export interface Route {
  path?: string;
  icon?: ReactNode;
  name: string;
  routes?: Route[];
}

export type RoutesType = Route[];



export type LoginParams = {
  email: string;
  password: string;
};

export type UserParams = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  email_verified_at: null;
  created_at: string;
  updated_at: string;
};


export type AdminParams = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type CategoryParams = {
  category: string;
};

export type CourseParams = {
  category_id: string;
  name: string;
  price: string;
  hours: string;
  type: string;
  photo: File;
  video: File;
  requirements: string;
  description: string;
};

export type AdminPageProps = {
  admins: {
      data: User[];
      current_page: number;
      per_page: number;
      total: number;
  };
};

export type Course = {
  average_rate: number;
  category: string;
  category_id: string;
  created_at: string;
  description: string;
  hours: number;
  id: number;
  name: string;
  photo: string;
  price: string;
  requirements: string;
  type: string;
  updated_at: string;
  user_id: number;
  video: string;
};

export type CoursePageProps = {
  coursesData: {
      data: Course[];
      current_page: number;
      per_page: number;
      total: number;
  };
};
