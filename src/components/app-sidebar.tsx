"use client";

import {
  Briefcase,
  Code2,
  Home,
  Mail,
  User,
  Zap,
  GraduationCap,
  Newspaper,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Introduction",
    route: "/",
    icon: Home,
  },
  {
    title: "About Me",
    route: "/about",
    icon: User,
  },
  {
    title: "Projects",
    route: "/projects",
    icon: Code2,
  },
  {
    title: "Skills",
    route: "/skills",
    icon: Zap,
  },
  {
    title: "Experience",
    route: "/experience",
    icon: Briefcase,
  },
  {
    title: "Education",
    route: "/education",
    icon: GraduationCap,
  },
  {
    title: "Blogs",
    route: "/blogs",
    icon: Newspaper,
  },
  {
    title: "Contact",
    route: "/contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="mt-14 max-h-[calc(100vh-110px)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.route}>
                    <Link href={item.route}>
                      <item.icon />
                      <span
                        className={`text-sidebar-foreground ${pathname === item.route ? "font-semibold" : ""}`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
