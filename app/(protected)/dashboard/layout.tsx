
import Sidebar from "@/components/Sidebar";
import ReactQueryProvider from "@/providers/react-query-provider";
import Link from "next/link";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex">
        {/* Include shared UI here e.g. a header or sidebar */}
       <Sidebar/>
  
        <div className="ml-64 p-4 border">
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        </div>
      </section>
    );
  }