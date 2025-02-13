import { TaskListProps, User } from "@/utils/types";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import {
  BiEditAlt,
  BiChevronLeft,
  BiChevronRight,
  BiTrash,
  BiData,
} from "react-icons/bi";
import ConfirmationModal from "../common/ConfirmationModal";
import Modal from "../common/ConfirmationModal";


const Table = ({ tasks, currentPage, totalPages, setCurrentPage, totalTasks, handleDelete }: TaskListProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const onBtnclk = (id:string) => {
    setTaskId(id);
    setModalOpen(true);
  };
  const onConfirm = () => {
    handleDelete(taskId);
    setModalOpen(false);
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Task Management</h2>
        <Link className="px-4 py-2 shadow bg-customDark text-white rounded hover:bg-blue-500" href={"/tasks/add"}>
          + Create
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 border-b">Title</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Description</th>
              <th className="flex px-6 py-3 border-b justify-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: any, index: number) => (
              <tr
                key={task._id}
                className={
                  index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"
                }
              >
                <td className="px-6 py-4 border-b">{task.title ?? 'NA'}</td>
                <td className="px-6 py-4 border-b">{task.status ?? 'NA'}</td>
                <td className="px-6 py-4 border-b">{task.description ?? 'NA'}</td>
                <td className="flex px-6 py-4 border-b justify-end">
                  <Link title="Edit" className="px-3 py-1 mr-2 " href={`/tasks/edit/${task._id}`}>
                    <BiEditAlt color="blue" size={20} />
                  </Link>
                  <a title="Delete" className="px-3 py-1" onClick={() => onBtnclk(task._id)}>
                    <BiTrash color="red" size={20} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">Total Entries: {totalTasks}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            <BiChevronLeft />
          </button>
          <span className="px-3 py-1">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirm}
        title="Delete Confirmation"
        description="Are you sure you want to delete this item? This action cannot be undone."
      />
    </div>

  );
};

export default Table;
