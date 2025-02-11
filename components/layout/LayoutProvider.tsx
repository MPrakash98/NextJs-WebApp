"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {isAuthPage ? (
        <div className="flex justify-center items-center w-full min-h-screen">
          {children}
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            <main className="flex-1 p-6">{children}</main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
