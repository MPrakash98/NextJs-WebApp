"use client"
import Notify from "@/components/common/Toast";
import Table from "@/components/tasks/TaskList"
import { dir } from "console";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [totalTasks, setTotalTasks] = useState<number>(0);
    const limit = 5; // Tasks per page
    const router = useRouter();

    async function fetchTasks() {
        const res = await fetch(`/api/tasks?page=${currentPage}&limit=${limit}`);
        const data = await res.json();
        setTasks(data.tasks);
        setTotalPages(data.totalPages);
        setTotalTasks(data.totalTasks);
    }

    useEffect(() => {
        fetchTasks();
    }, [currentPage]);

    const handleDelete = async (taskId: string | null) => {

        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete task");

            Notify("Task deleted successfully", 'success')
            // router.refresh();
           await fetchTasks();
        } catch (error) {
            console.error(error);
            Notify("Error deleting task:" + error, 'error')
        }
    };

    return (
        <Table tasks={tasks} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} totalTasks={totalTasks} handleDelete={handleDelete} />
    )
}
