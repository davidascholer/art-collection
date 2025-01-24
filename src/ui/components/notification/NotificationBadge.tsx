import { Bell } from "lucide-react";
import React from "react";

interface NotificationBadgeProps {
  count: number;
  iconSize: number;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  iconSize,
}) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Bell size={iconSize} />
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "red",
            borderRadius: "50%",
            color: "white",
            padding: "2px 6px",
            fontSize: `${iconSize/3}px`,
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};
