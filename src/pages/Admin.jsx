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
import { TableDemo } from "@/components/Table";

const Admin = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex px-50 flex-col">
        <SiteHeader />
        <div className=" flex px-20 py-6 ">
          <AppSidebar />
          <SidebarInset className='px-20'>
            <div className="flex flex-col gap-4 py-9">
              <div className="grid auto-rows-min gap-4  md:grid-cols-3">
                <PieLabel className='p-' />

                <BChart />

                <PChart />
              </div>

              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
            {/* <BChart /> */}
            <TableDemo/>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
