"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Notify from "@/components/common/Toast";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, email, password}),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
        Notify('Failed to Register ', 'error')
        return;
    } else {
        Notify('User added successfully', 'success')
        setName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
            router.push('/login')
        }, 3000)
    }
    } catch(error) {
      console.log(error);
      // Notify(error?.message, 'error')
    } finally {
      setLoading(false);
    }
        
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-sm w-full">
        {/* Logo Section */}
        {/* <div className="flex justify-center mb-6">
          <Image
            src="https://source.unsplash.com/250x100/?technology,logo" // Replace with your logo URL
            alt="App Logo"
            width={50}
            height={50}
            className="mx-auto w-40 h-auto"
          />
        </div> */}

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Enter Your Details</h2>

        {/* Login Form */}
        <form onSubmit={handleRegister} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing you up..." : "Sign Up"}
          </button>
        </form>

        {/* Additional Links */}

        <div className="text-center mt-2 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
