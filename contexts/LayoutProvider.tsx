// "use client";
// import { usePathname } from "next/navigation";
// import Sidebar from "@/components/layout/Sidebar";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// export default function LayoutProvider({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const pages = ["/login","/signup"]
//   const isAuthPage = pages.includes(pathname);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//     {isAuthPage ? (
//       <div className="flex justify-center items-center w-full min-h-screen">
//         {children}
//       </div>
//     ) : (
//       <>
//         <Sidebar />
//         <div className="flex flex-col w-full min-h-screen">
//           <Header />
//           <main className="flex-grow p-6">{children}</main>
//           <Footer/> 
//         </div>
//       </>
//     )}
//   </div>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup"; 

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); 
  }, []);

  if (!hydrated) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {isAuthPage ? (
        <div className="flex justify-center items-center w-full min-h-screen">{children}</div>
      ) : (
        <>
          <Sidebar />
          <div className="flex flex-col w-full min-h-screen">
            <Header />
            <main className="flex-grow p-6">{children}</main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

