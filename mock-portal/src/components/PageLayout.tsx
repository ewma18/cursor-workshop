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
  rightSidebar?: React.ReactNode;
  pageHeader?: React.ReactNode;
}

export default function PageLayout({ children, activeItem, breadcrumb, rightSidebar, pageHeader }: PageLayoutProps) {
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
        {pageHeader && (
          <div
            style={{
              backgroundColor: "#f6f6f9",
              padding: "24px",
              paddingBottom: "0",
            }}
          >
            <div
              style={{
                maxWidth: "1300px",
                margin: "0 auto",
                width: "100%",
              }}
            >
              {pageHeader}
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            gap: "24px",
            padding: "24px",
            maxWidth: "1300px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
            {children}
          </div>
          {rightSidebar && (
            <div
              style={{
                width: "280px",
                flexShrink: 0,
                position: "sticky",
                top: "24px",
                alignSelf: "flex-start",
                marginTop: "48px",
              }}
            >
              {rightSidebar}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}
