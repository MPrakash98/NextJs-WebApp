"use client"
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
    return (
      <div className="bg-white p-6 rounded shadow-md align-items: center">
        <h2 className="text-2xl font-semibold">Welcome to Your Dashboard {session?.user?.name}</h2>
        <p className="mt-2 text-gray-600">Manage your tasks efficiently.</p>
      </div>
    );
  }
  