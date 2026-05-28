import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import AdminNav from "./AdminNav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session.isAdmin) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-space flex">
      <AdminNav />
      <main className="flex-1 min-w-0 p-6 lg:p-8">{children}</main>
    </div>
  );
}
