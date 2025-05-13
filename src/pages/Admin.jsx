import { SiteHeader } from "@/components/Sidebar components/site-header";
import { AppSidebar } from "@/components/Sidebar components/app-sidebar";
import { BChart } from "@/components/Charts/BarCharts";
import { Component } from "@/components/Charts/Chart";
import { PieLabel } from "@/components/Charts/PieLabel";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PChart } from "../components/Charts/PieChart";
import { TableDemo } from "@/components/Tables/Table";

const Admin = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))] min-h-screen bg-gray-50">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64">
            <AppSidebar />
          </div>

          <SidebarInset className="flex-1  px-24 py-6">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
                <PieLabel />
                <BChart />
                <PChart />
              </div>

              <div className="w-full p-3 overflow-x-auto">
                <TableDemo />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
