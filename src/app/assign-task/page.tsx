"use client";

import Link from "next/link";

export default function AssignTaskPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex items-center gap-4">
        <Link href="/supervisor" className="text-blue-600 hover:underline">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Assign a New Task</h1>
      </header>

      <main className="bg-white p-6 rounded shadow max-w-lg mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Task Assigned!");
          }}
        >
          <div className="mb-4">
            <label htmlFor="taskName" className="block text-gray-700 mb-1">
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              required
              placeholder="Enter task name"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="assignedTo" className="block text-gray-700 mb-1">
              Assign To
            </label>
            <input
              id="assignedTo"
              type="text"
              required
              placeholder="Staff member name"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Assign Task
          </button>
        </form>
      </main>
    </div>
  );
}
