"use client";

import * as React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

import { cn } from "../../lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar/Avatar";
import { User } from "lucide-react";
import { NotificationBadge } from "../notification/NotificationBadge";
import Searchbar from "../searchbar/Searchbar";

const Toolbar = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 w-full space-x-1 p-1 shadow-sm bg-sidebar",
      className
    )}
    {...props}
  >
    {props.children}
  </ToolbarPrimitive.Root>
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarButton = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ToolbarPrimitive.Button
    ref={ref}
    className={cn(
      "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-lg outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {props.children}
  </ToolbarPrimitive.Button>
));
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

const ToolbarIcon = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> & {
    icon: React.ReactElement<SVGElement>;
  }
>(({ icon, className, ...props }) => (
  <ToolbarPrimitive.Link
    className={cn(
      "relative flex items-center rounded-full outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {icon}
  </ToolbarPrimitive.Link>
));
ToolbarIcon.displayName = ToolbarPrimitive.Link.displayName;

const ToolbarBadge = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> & {
    count?: number;
    iconSize?: number;
  }
>(({ count = 0, iconSize = 24, className, ...props }) => (
  <ToolbarPrimitive.Link
    className={cn(
      "relative flex p-2 bg-none hover:bg-accent items-center rounded-full outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <NotificationBadge count={count} iconSize={iconSize} />
  </ToolbarPrimitive.Link>
));
ToolbarBadge.displayName = ToolbarPrimitive.Link.displayName;

const ToolbarSearchbar: React.FC<{
  menuItems: string[];
  className?: string;
}> = ({ className, menuItems }) => {
  return <Searchbar  className={className} menuItems={menuItems}/>;
};
ToolbarSearchbar.displayName = "ToolbarSearchbar";

const ToolbarAvatar = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> & {
    href: string;
    imageSrc: string;
  }
>(({ href, imageSrc, className, ...props }) => (
  <ToolbarPrimitive.Link
    className={cn(
      "relative flex items-center rounded-full outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    href={href}
    {...props}
  >
    <Avatar>
      <AvatarImage src={imageSrc} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  </ToolbarPrimitive.Link>
));
ToolbarAvatar.displayName = "ToolbarAvatar";

const ToolbarGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={cn(
      "flex flex-row items-center justify-between gap-5",
      className
    )}
  >
    {children}
  </div>
);
ToolbarGroup.displayName = "ToolbarGroup";

export {
  Toolbar,
  ToolbarButton,
  ToolbarIcon,
  ToolbarSearchbar,
  ToolbarAvatar,
  ToolbarBadge,
  ToolbarGroup,
};
