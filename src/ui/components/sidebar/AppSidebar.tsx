// import SidebarHeader from "./components/SidebarHeader"
// import SidebarFooter from "./components/SidebarFooter"
import { Sidebar } from "./components/Sidebar";
import { SidebarContent } from "./components/SidebarContent";
import { SidebarGroup } from "./components/SidebarGroup";
import { SidebarGroupLabel } from "./components/SidebarGroupLabel";
import { SidebarGroupContent } from "./components/SidebarGroupContent";
import { SidebarMenuItem } from "./components/SidebarMenuItem";
import { SidebarMenuButton } from "./components/SidebarMenuButton";
import { SidebarMenu } from "./components/SidebarMenu";
import SidebarProvider from "./SidebarProvider";
import SidebarTrigger from "./SidebarTrigger";
import { SidebarContentType, SidebarType } from "./utils/types";

export const AppSidebar = ({
  items,
  children,
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
}: {
  items: SidebarContentType[];
  children?: React.ReactNode;
} & SidebarType) => {
  return (
    <SidebarProvider>
      <Sidebar side={side} variant={variant} collapsible={collapsible}>
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
      <main className="w-full h-full">
        <SidebarTrigger className="relative" />
        {children}
      </main>
    </SidebarProvider>
  );
};
