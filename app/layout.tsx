import LayoutProvider from "@/contexts/LayoutProvider";
import AuthProvider from "@/contexts/AuthProvider";
import ProtectedRoute from "@/contexts/ProtectedRoute";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          <AuthProvider>
            <ProtectedRoute>
            <ToastContainer
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
              {children}
            </ProtectedRoute>
          </AuthProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
