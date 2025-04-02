"use client";

import * as React from "react";
import {
  Landmark,
  Receipt,
  Clipboard,
  Frame,
  Map,
  PieChart,
  MessageSquareMore,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from 'next/image';

const data = {
  navMain: [
    {
      title: "Contact Us",
      url: "#",
      icon: MessageSquareMore,
      items: [
        {
          title: "View Contact",
          url: "/admin/view-contact",
        },
      ],
    },
    {
      title: "Student Placement",
      url: "#",
      icon: Receipt,
      items: [
        {
          title: "Add Student Placement",
          url: "/admin/add-student-placement",
        },
        {
          title: "View Student Placement",
          url: "/admin/view-student-placement",
        },
      ],
    },
    {
      title: "Notice Board",
      url: "#",
      icon: Clipboard,
      items: [
        {
          title: "Add Notice",
          url: "/admin/add-notice",
        },
        {
          title: "View Notice",
          url: "/admin/view-notice",
        },
      ],
    },
    {
      title: "Placement Update",
      url: "#",
      icon: Landmark,
      items: [
        {
          title: "Add Placement Update",
          url: "/admin/add-placement-update",
        },
        {
          title: "View Placement Update",
          url: "/admin/view-placement-update",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image src="/seglogo.png" height={60} width={60} alt='Saroj Educational Group Logo' />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Saroj Educational Group
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
