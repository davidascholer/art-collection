"use client";

import * as React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

import { cn } from "../../lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar/Avatar";
import { User } from "lucide-react";
import { NotificationBadge } from "../notification/NotificationBadge";
import Searchbar from "../searchbar/Searchbar";

type ToolbarProps = {
  className?: string;
  children?: React.ReactNode;
};
const Toolbar = ({ className, children, ...props }: ToolbarProps) => (
  <ToolbarPrimitive.Root
    className={cn(
      "flex h-10 w-full space-x-1 p-1 shadow-sm bg-sidebar",
      className
    )}
    {...props}
  >
    {children}
  </ToolbarPrimitive.Root>
);
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

type ToolbarButtonProps = {
  inset?: boolean;
  className?: string;
  children?: React.ReactNode;
};
const ToolbarButton = ({
  inset,
  className,
  children,
  ...props
}: ToolbarButtonProps) => (
  <ToolbarPrimitive.Button
    className={cn(
      "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-lg outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
  </ToolbarPrimitive.Button>
);
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

type ToolbarIconProps = {
  icon: React.ReactElement<SVGElement>;
  className: string;
  href:string;
};
const ToolbarIcon = ({ icon, className, href, ...props }: ToolbarIconProps) => (
  <ToolbarPrimitive.Link
    className={cn(
      "relative flex items-center rounded-full outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
    href={href}
  >
    {icon}
  </ToolbarPrimitive.Link>
);
ToolbarIcon.displayName = ToolbarPrimitive.Link.displayName;

type ToolbarBadgeProps = {
  href:string;
  count?: number;
  className?: string;
  iconSize?: number;
};

const ToolbarBadge = ({
  href,
  count = 0,
  iconSize = 24,
  className,
  ...props
}: ToolbarBadgeProps) => (
  <ToolbarPrimitive.Link
    className={cn(
      "relative flex p-2 bg-none hover:bg-accent items-center rounded-full outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    href={href}
    {...props}
  >
    <NotificationBadge count={count} iconSize={iconSize} />
  </ToolbarPrimitive.Link>
);
ToolbarBadge.displayName = ToolbarPrimitive.Link.displayName;

type ToolbarSearchbarProps = {
  menuItems: string[];
  className?: string;
};

const ToolbarSearchbar = ({ className, menuItems }: ToolbarSearchbarProps) => {
  return <Searchbar className={className} menuItems={menuItems} />;
};

type ToolbarAvatarProps = {
  href: string;
  imageSrc: string;
  className?: string;
};

const ToolbarAvatar = ({
  href,
  imageSrc,
  className,
  ...props
}: ToolbarAvatarProps) => (
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
);
ToolbarAvatar.displayName = ToolbarPrimitive.Link.displayName;

type ToolbarGroupProps = {
  children: React.ReactNode;
  className?: string;
};

const ToolbarGroup = ({ children, className }: ToolbarGroupProps) => (
  <div
    className={cn(
      "flex flex-row items-center justify-between gap-5",
      className
    )}
  >
    {children}
  </div>
);

export {
  Toolbar,
  ToolbarButton,
  ToolbarIcon,
  ToolbarSearchbar,
  ToolbarAvatar,
  ToolbarBadge,
  ToolbarGroup,
};
