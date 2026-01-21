"use client";

import { useRouter } from "next/navigation";
import { Menu } from "@nimbus-ds/patterns";
import { Box, Icon, Text } from "@nimbus-ds/components";
import {
  TiendanubeIcon,
  HomeIcon,
  CashIcon,
  StoreIcon,
  AppsIcon,
  UserGroupIcon,
  StatsIcon,
  FileAltIcon,
} from "@nimbus-ds/icons";

interface SidebarProps {
  activeItem?: string;
}

export default function Sidebar({ activeItem = "inicio" }: SidebarProps) {
  const router = useRouter();
  return (
    <Box
      display="flex"
      flex="0 0 auto"
      width="260px"
      height="100vh"
      borderColor="neutral-surfaceHighlight"
      borderStyle="solid"
      borderRightWidth="1"
      position="fixed"
      left="0"
      top="0"
      overflow="auto"
      backgroundColor="neutral-background"
    >
      <Menu>
        <Menu.Header>
          <Box display="flex" gap="2" alignItems="center" width="100%">
            <Icon
              color="primary-interactive"
              source={<TiendanubeIcon size="medium" />}
            />
            <Box display="inline-flex" flex="1" flexDirection="column">
              <Text fontSize="base" color="neutral-textHigh" fontWeight="bold">
                nuvemshop
              </Text>
              <Text fontSize="caption" color="neutral-textLow">
                partners
              </Text>
            </Box>
          </Box>
        </Menu.Header>
        <Menu.Body>
          <Menu.Section>
            <Menu.Button
              startIcon={HomeIcon}
              label="Início"
              active={activeItem === "inicio"}
              onClick={() => router.push("/")}
            />
            <Menu.Button
              startIcon={CashIcon}
              label="Comissões"
              active={activeItem === "comissoes"}
              onClick={() => router.push("/commissions")}
            />
          </Menu.Section>
          <Menu.Section title="Potencializar">
            <Menu.Button
              startIcon={StoreIcon}
              label="Lojas"
              active={activeItem === "lojas"}
              onClick={() => router.push("/stores")}
            />
            <Menu.Button
              startIcon={AppsIcon}
              label="Aplicativos"
              active={activeItem === "aplicativos"}
              onClick={() => router.push("/applications")}
            />
            <Menu.Button
              startIcon={UserGroupIcon}
              label="Especialistas"
              active={activeItem === "especialistas"}
              onClick={() => router.push("/specialists")}
            />
          </Menu.Section>
          <Menu.Section title="Acompanhar">
            <Menu.Button
              startIcon={StatsIcon}
              label="Status da plataforma"
              active={activeItem === "status"}
              onClick={() => router.push("/platform-status")}
            />
            <Menu.Button
              startIcon={UserGroupIcon}
              label="Programa de parceiros"
              active={activeItem === "programa"}
              onClick={() => router.push("/partners-program")}
            />
            <Menu.Button
              startIcon={FileAltIcon}
              label="Documentação"
              active={activeItem === "documentacao"}
              onClick={() => router.push("/documentation")}
            />
          </Menu.Section>
        </Menu.Body>
      </Menu>
    </Box>
  );
}
