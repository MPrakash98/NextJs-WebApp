"use client"
import TaskForm from "@/components/tasks/AddTask"
import { Task, ToastProps } from "@/utils/types";
import { useState } from "react";
import Notify from "@/components/common/Toast";
import { useRouter } from "next/navigation";

export default function Tasks() {
    const [task, setTask] = useState<Partial<Task>>({
        title: "",
        status: "",
        description: ""
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                Notify('Failed to create task', 'error')
                return;
            } else {
                Notify('Task created', 'success')
                setTask({
                    title: "",
                    status: "",
                    description: ""
                })
                setTimeout(() => {
                    router.push('/tasks')
                }, 3000)
            }

        } catch (error) {
            console.log(error);
            // Notify(error?.message, 'error')
        } finally {
            setLoading(false);
        }


    };

    return (
        <TaskForm task={task} setTask={setTask} loading={loading} handleSubmit={handleSubmit} onChange={onChange} />
    )
}

