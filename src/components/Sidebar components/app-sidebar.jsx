import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal
} from "lucide-react";
import group from "../assets/icons/group.png";

import { NavMain } from "@/components/Sidebar components/nav-main";
import { NavProjects } from "@/components/Sidebar components/nav-projects";
import { NavSecondary } from "@/components/Sidebar components/nav-secondary";
import { NavUser } from "@/components/Sidebar components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

const data = {
  user: {
    name: "Apex",
    email: "Apex@example.com",
    avatar: group,
  },
  navMain: [
    {
      title: "Dashboard",
      url: "AdminPanel",
      icon: SquareTerminal,
      isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Product",
      url: "/AdminProduct",
      icon: Bot,
      // items: [
      //   {
      //     title: "Genesis",
      //     url: "#",
      //   },
      //   {
      //     title: "Explorer",
      //     url: "#",
      //   },
      //   {
      //     title: "Quantum",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Customer",
      url: "#",
      icon: BookOpen,
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Orders",
      url: "#",
      icon: Settings2,
      // items: [
      //   {
      //     title: "General",
      //     url: "#",
      //   },
      //   {
      //     title: "Team",
      //     url: "#",
      //   },
      //   {
      //     title: "Billing",
      //     url: "#",
      //   },
      //   {
      //     title: "Limits",
      //     url: "#",
      //   },
      // ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Inventory",
      url: "#",
      icon: Frame,
    },
    {
      name: "Category",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Shipping",
      url: "#",
      icon: Map,
    },
  ],
}
const handleclick=()=>{ className='bg-red-500'}
export function AppSidebar({
  ...props
}) {
  const [isSelected, setIsSelected] = useState(0);
  const handleClick = (index) => {
    setActiveSecondary(index);
  };
  
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <NavUser user={data.user} />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar">
                  <img src="./src/components/assets/icons/Logo.sng" alt="" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold  text-red-600">
                    ApexAD
                  </span>
                  <span className="truncate text-xs">Ecommerce</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} isSelected={isSelected} setIsSelected={setIsSelected}/>
        {/* <NavProjects projects={data.projects} />
        <NavSecondary
          items={data.navSecondary}
          
          onClick={handleClick}
          className="mt-auto"
        /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
