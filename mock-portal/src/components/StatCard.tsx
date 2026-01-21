"use client";

import { Box, Card, Text, Button, Link, Icon } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
  };
  backgroundColor?: string;
  highlighted?: boolean;
}

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundColor = "neutral-background",
  highlighted = false,
}: StatCardProps) {
  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4">
        <Box display="flex" alignItems="center" gap="2">
          {icon}
          <Text
            fontSize="base"
            fontWeight="bold"
            color={highlighted ? "neutral-background" : "neutral-textHigh"}
          >
            {title}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap="1">
          <Title
            as="h2"
            fontSize="h2"
            color={highlighted ? "neutral-background" : "neutral-textHigh"}
          >
            {value}
          </Title>
          <Box display="flex" alignItems="center" gap="1">
            <Text
              fontSize="caption"
              color={highlighted ? "neutral-background" : "neutral-textLow"}
            >
              {subtitle}
            </Text>
          </Box>
        </Box>
        {(primaryAction || secondaryAction) && (
          <Box display="flex" gap="2" flexWrap="wrap">
            {primaryAction && (
              <Button appearance="neutral" onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Link
                as="a"
                href={secondaryAction.href || "#"}
                appearance="primary"
              >
                {secondaryAction.label}
              </Link>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
}
