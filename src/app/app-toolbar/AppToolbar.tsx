import { cn } from "@/ui/lib/utils";
import { Toolbar, ToolbarAvatar, ToolbarBadge, ToolbarGroup } from "@/ui/components/toolbar/Toolbar";

type AppToolbarProps = {
  sidbarTrigger?: React.ReactNode;
  className?: string;
};

export const AppToolbar = ({
  className,
  sidbarTrigger = null,
}: AppToolbarProps) => {
  return (
    <Toolbar
      className={cn(
        "w-screen fixed h-14 flex justify-between px-4 py-2",
        className
      )}
    >
      <ToolbarGroup>{sidbarTrigger}</ToolbarGroup>
      <ToolbarGroup>
        <ToolbarBadge count={0} href="/mail" iconSize={28} />
        <ToolbarAvatar
          imageSrc="https://github.com/shadcn.png"
          href="/account"
        />
      </ToolbarGroup>
    </Toolbar>
  );
};
