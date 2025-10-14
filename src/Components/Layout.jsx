import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { PageTransition } from "./PageTransition";
 

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> 
      <main className="flex-1 p-4">
        <PageTransition>
        <Outlet />
      </PageTransition>
      </main>
    </div>
  );
}
