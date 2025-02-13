"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { EditTaskProps } from "@/utils/types";
import { Task } from "@/utils/types";
import Link from "next/link";

const EditTaskForm = ({ loading, task, setTask, handleUpdate }: EditTaskProps) => {

  return (

    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900">EDit Task</h2>
        <p className="text-sm text-gray-600">Update fields for your task</p>

        <form className="mt-6 space-y-4" onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title<abbr title="required">*</abbr></label>
              <input type="text" value={task?.title || ""}
                onChange={(e) => setTask({ ...task!, title: e.target.value })} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-indigo-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status<abbr title="required">*</abbr></label>
              <div className="relative">
                <select value={task?.status || "pending"}
                  onChange={(e) => setTask({ ...task!, status: e.target.value as Task["status"] })}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md appearance-none focus:outline-indigo-500" required>
                  <option disabled>Please select task status</option>
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
            <textarea id="message" rows={4} value={task?.description || ""}
              onChange={(e) => setTask({ ...task!, description: e.target.value })} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-indigo-500" placeholder="Write your description here..."></textarea></div>


          <div className="flex justify-end mt-4 px-12 py-4">
            <Link className=" px-6 py-1 text-gray-600 hover:text-gray-900" href={"/tasks"}>Back</Link>
            <button type="submit" className="px-6 py-1  md-5  rounded-md mb-2 shadow bg-customDark text-white  hover:bg-blue-500" disabled={loading}>{loading ? "Updating..." : "Update"}</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default EditTaskForm;
