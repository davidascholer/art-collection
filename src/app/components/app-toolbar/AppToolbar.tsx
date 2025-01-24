import { cn } from "@/ui/lib/utils";
import {
  Toolbar,
  ToolbarAvatar,
  ToolbarBadge,
  ToolbarGroup,
  ToolbarSearchbar,
} from "@/ui/components/toolbar/Toolbar";

type AppToolbarProps = {
  sidbarTrigger?: React.ReactNode;
  className?: string;
  menuItems?: string[];
};

export const AppToolbar = ({
  className,
  sidbarTrigger = null,
  menuItems,
}: AppToolbarProps) => {
  return (
    <Toolbar
      className={cn(
        "w-screen fixed flex justify-between px-4 py-2",
        className
      )}
    >
      <ToolbarGroup>{sidbarTrigger}</ToolbarGroup>
      <ToolbarGroup className="flex-1">
        {menuItems ? (
          <ToolbarSearchbar className="flex-1" menuItems={menuItems} />
        ) : null}
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarBadge count={0} href="/mail" iconSize={24} />
        <ToolbarAvatar
          imageSrc="https://github.com/shadcn.png"
          href="/account"
        />
      </ToolbarGroup>
    </Toolbar>
  );
};
