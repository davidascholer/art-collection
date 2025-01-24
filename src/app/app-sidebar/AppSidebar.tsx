import { HomeIcon, Search, LogIn, Settings } from "lucide-react";
import { Outlet } from "react-router";

// import SidebarHeader from "./components/SidebarHeader"
// import SidebarFooter from "./components/SidebarFooter"
import { Sidebar } from "@/ui/components/sidebar/components/Sidebar";
import { SidebarContent } from "@/ui/components/sidebar/components/SidebarContent";
import { SidebarGroup } from "@/ui/components/sidebar/components/SidebarGroup";
import { SidebarGroupLabel } from "@/ui/components/sidebar/components/SidebarGroupLabel";
import { SidebarGroupContent } from "@/ui/components/sidebar/components/SidebarGroupContent";
import { SidebarMenuItem } from "@/ui/components/sidebar/components/SidebarMenuItem";
import { SidebarMenuButton } from "@/ui/components/sidebar/components/SidebarMenuButton";
import { SidebarMenu } from "@/ui/components/sidebar/components/SidebarMenu";
import SidebarProvider from "@/ui/components/sidebar/SidebarProvider";
import SidebarTrigger from "@/ui/components/sidebar/SidebarTrigger";
import { SidebarContentType, SidebarType } from "@/ui/components/sidebar/utils/types";
import { AppToolbar } from "@/app/app-toolbar/AppToolbar";
import paths from "../paths";

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

export const AppSidebar = ({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
}: {
  variant?: SidebarType["variant"];
  className?: string;
} & SidebarType) => {
  return (
    <SidebarProvider>
      <Sidebar
        side={side}
        variant={variant}
        collapsible={collapsible}
        className={className}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        {item.icon ? <item.icon /> : null}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <AppToolbar sidbarTrigger={<SidebarTrigger />} />  
      <main className="w-full mt-14 overflow-hidden bg-green-600"><Outlet /></main>
    </SidebarProvider>
  );
};
