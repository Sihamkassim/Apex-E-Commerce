import React from "react";
import { SiteHeader } from "@/components/Sidebar components/site-header";

import { AppSidebar } from "@/components/Sidebar components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Component } from "@/components/Charts/Chart";
import { BChart } from "@/components/Charts/BarCharts";
import { PChart } from "../components/Charts/PieChart";
import { PieLabel } from "@/components/Charts/PieLabel";
import { DialogDemo } from "@/components/AdminProductbar/DialogProduct";
import { ProductSidebar } from "@/components/AdminProductbar/ProductSidebar";

const AdminPanel = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className=" flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col gap-4 p-4">
              {/* <ProductSidebar /> */}
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <PieLabel />

                <BChart />

                <PChart />
              </div>
              <Component />
              {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminPanel;
