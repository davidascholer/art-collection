import React from "react";
import { Menu } from "lucide-react";

import { cn } from "../../lib/utils";
import useSidebar from "./hooks/useSidebar";
import { Button } from "../button/Button";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      data-testid="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("p-1", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <Menu className="!w-7 !h-7"/>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

export default SidebarTrigger;
