import { Dispatch, SetStateAction } from "react";

export interface User {
  _id: number;
  name: string;
  email: string;
  role: string;
}

export interface Task {
    _id?: string;
    title?: string;
    status?: "Pending" | "In-progress" | "Completed" | "";
    description?: string;
  }

  export interface ToastProps {
    message: string;
    type: string;
  }

export interface TaskListProps {
  tasks: any;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalTasks: number;
  handleDelete:(taskId: string | null) => Promise<void>;
}

export interface AddTaskProps {
  task: Partial<Task>;
  loading: boolean;
  handleSubmit:(e: React.FormEvent) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => Promise<void>;
  setTask: Dispatch<SetStateAction<Partial<Task>>>;
}

export interface EditTaskProps {
  task: Partial<Task> | null;
  loading: boolean;
  handleUpdate:(e: React.FormEvent) => Promise<void>;
  setTask: Dispatch<SetStateAction<Task | null>>;
}


export interface ConfModalProps {
  item: string;
  onDelete:(taskId: string) => Promise<void>;
}