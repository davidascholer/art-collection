import { Home as HomeIcon, Search, Settings, LogIn } from "lucide-react";
import { Outlet } from "react-router";

import paths from "../paths";
import { AppSidebar } from "@/ui/components/sidebar/AppSidebar";
import { SidebarContentType } from "@/ui/components/sidebar/utils/types";

// Menu items.
const items: SidebarContentType[] = [
  {
    title: "Home",
    url: `/${paths.home}`,
    icon: HomeIcon,
  },
  {
    title: "Query",
    url: `/${paths.query}`,
    icon: Search,
  },
  {
    title: "Sign In",
    url: `/${paths.auth.root}`,
    icon: LogIn,
  },
  {
    title: "Settings",
    url: `/${paths.settings}`,
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <>
      <AppSidebar items={items} className="mt-14 border-none">
        <Outlet />
      </AppSidebar>
    </>
  );
}
