"use client";

import { Box } from "@nimbus-ds/components";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  activeItem?: string;
  breadcrumb?: BreadcrumbItem;
}

export default function PageLayout({ children, activeItem, breadcrumb }: PageLayoutProps) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar activeItem={activeItem} />

      <div
        style={{
          flex: 1,
          marginLeft: "260px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f6f6f9",
          minHeight: "100vh",
        }}
      >
        <Header breadcrumb={breadcrumb} />
        <Box padding="6" display="flex" flexDirection="column" gap="6">
          {children}
        </Box>
      </div>
    </Box>
  );
}
