import { title } from "process";
import { useState } from "react";
import { Task } from "@/utils/types";
import { AddTaskProps } from "@/utils/types";
import Link from "next/link";

const TaskForm = ({task, setTask, loading,handleSubmit, onChange} : AddTaskProps) => {


  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Add Task</h2>
        <p className="text-sm text-gray-600">Please add title, description and status for your task</p>
        
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title<abbr title="required">*</abbr></label>
              <input type="text" onChange={onChange} value={task.title} name="title" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-indigo-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status<abbr title="required">*</abbr></label>
              <div className="relative">
                <select onChange={onChange} value={task.status} name="status" className="w-full mt-1 p-2 border border-gray-300 rounded-md appearance-none focus:outline-indigo-500" required>
                  <option value="">Please select task status</option>
                  <option value='Pending'>Pending</option>
                  <option value='In-progress'>In-progress</option>
                  <option value='Completed'>Completed</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 absolute top-3 right-3 w-5 h-5 text-gray-500">
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Task Description</label>
            <textarea id="message" rows={4} onChange={onChange} value={task.description} name="description" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-indigo-500" placeholder="Write your description here..."></textarea></div>


          <div className="flex justify-end mt-4 px-12 py-4">
            <Link className=" px-6 py-1 text-gray-600 hover:text-gray-900" href={"/tasks"}>Back</Link>
            <button type="submit" className="px-6 py-1  md-5  rounded-md mb-2 shadow bg-customDark text-white  hover:bg-blue-500" disabled={loading}>{loading ? "Creating..." : "Create"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
