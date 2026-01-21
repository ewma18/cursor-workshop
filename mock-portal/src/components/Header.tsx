"use client";

import { Box, IconButton, Text, Button } from "@nimbus-ds/components";
import {
  NotificationIcon,
  QuestionCircleIcon,
  ChevronLeftIcon,
} from "@nimbus-ds/icons";
import { useRouter } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface HeaderProps {
  breadcrumb?: BreadcrumbItem;
}

export default function Header({ breadcrumb }: HeaderProps) {
  const router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="4"
      gap="4"
      borderColor="neutral-surfaceHighlight"
      borderStyle="solid"
      borderBottomWidth="1"
      backgroundColor="neutral-background"
    >
      {/* Left side - Breadcrumb navigation */}
      <Box display="flex" alignItems="center" gap="2">
        {breadcrumb && (
          <Button
            appearance="transparent"
            onClick={() => router.push(breadcrumb.href)}
          >
            <ChevronLeftIcon size="small" />
            {breadcrumb.label}
          </Button>
        )}
      </Box>

      {/* Right side - Actions and user */}
      <Box display="flex" alignItems="center" gap="4">
        <IconButton source={<NotificationIcon size="medium" />} size="2rem" />
        <IconButton source={<QuestionCircleIcon size="medium" />} size="2rem" />
        <Box display="flex" alignItems="center" gap="2">
          <Box
            backgroundColor="primary-interactive"
            borderRadius="full"
            width="32px"
            height="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="neutral-background" fontWeight="bold" fontSize="caption">
              T
            </Text>
          </Box>
          <Text fontSize="base" color="neutral-textHigh">
            Teste Agencia Edu
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
