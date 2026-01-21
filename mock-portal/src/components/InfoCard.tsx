"use client";

import { Box, Card, Text, Button, Link, Icon } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import React from "react";

interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    external?: boolean;
  };
}

export default function InfoCard({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
}: InfoCardProps) {
  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4" height="100%">
        <Box display="flex" alignItems="flex-start" gap="3">
          {icon && (
            <Box
              backgroundColor="primary-surface"
              borderRadius="2"
              padding="2"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {icon}
            </Box>
          )}
          <Box display="flex" flexDirection="column" gap="1" flex="1">
            <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
              {title}
            </Text>
            <Text fontSize="caption" color="neutral-textLow">
              {description}
            </Text>
          </Box>
        </Box>
        {(primaryAction || secondaryAction) && (
          <Box display="flex" gap="2" flexWrap="wrap" marginTop="auto">
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
                target={secondaryAction.external ? "_blank" : undefined}
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
