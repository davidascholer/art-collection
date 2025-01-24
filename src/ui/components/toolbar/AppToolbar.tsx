import {
  Toolbar,
  ToolbarAvatar,
  ToolbarBadge,
  ToolbarGroup,
} from "./Toolbar";

type AppToolbarProps = {
    sidbarTrigger?: React.ReactNode;
    };

export const AppToolbar = ({sidbarTrigger=null}:AppToolbarProps) => {
  return (
      <Toolbar className="w-screen fixed h-14 flex justify-between px-4 py-2">
      <ToolbarGroup>
        {sidbarTrigger}
      </ToolbarGroup>
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
