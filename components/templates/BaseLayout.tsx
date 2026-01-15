import { cloneElement, JSX } from "react";
import { ViewProps } from "@/types";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../molecules/AppSidebar";
import { NavBar } from "../molecules/NavBar";

interface Props extends ViewProps {
    children: JSX.Element
}

export default function BaseLayout({ children, masterData, t, isMobile }: Props) {
    return <SidebarProvider>
        <main className="bg-gray-900 w-screen h-screen text-white">
            {cloneElement(children, { masterData, isMobile })}
        </main>
    </SidebarProvider>
}