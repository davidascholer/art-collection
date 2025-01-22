import React from "react"
import { SidebarContext } from "../utils/utils"

export default function useSidebar() {
    const context = React.useContext(SidebarContext)
    if (!context) {
      throw new Error("useSidebar must be used within a SidebarProvider.")
    }
  
    return context
  }
  
  