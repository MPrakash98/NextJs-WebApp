"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import EditTaskForm from "@/components/tasks/EditTask";
import Notify from "@/components/common/Toast";
import { Task } from "@/utils/types";


const EditTask = () => {
  const router = useRouter();
  const params = useParams();
  const taskId = params.id as string;

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`/api/tasks/${taskId}`);
        if (!res.ok) throw new Error("Failed to fetch task");
        const data = await res.json();
        setTask(data);
      } catch (err) {
        Notify("Task not found", 'error')
      }
    };

    if (taskId) fetchTask();
  }, [taskId]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!task) return;

    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      if (!res.ok) throw new Error("Failed to update task");
      Notify('Task Updated Successfully', 'success')
      setTimeout(() => {
        router.push("/tasks");
      },2000)
    } catch (err) {
      Notify("Error updating task", 'error')
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
    <EditTaskForm loading={loading} task={task} setTask={setTask} handleUpdate={handleUpdate}/>
    </>
  );
};

export default EditTask;
