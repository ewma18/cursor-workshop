"use client";

import { Box, Card, Text, Button } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import { StarIcon } from "@nimbus-ds/icons";

interface BadgeCardProps {
  title: string;
  description: string;
}

export default function BadgeCard({ title, description }: BadgeCardProps) {
  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4">
        <Box display="flex" alignItems="center" gap="2">
          <Box
            backgroundColor="warning-surface"
            borderRadius="2"
            padding="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StarIcon size="medium" />
          </Box>
          <Title as="h3" fontSize="h5" color="neutral-textHigh">
            {title}
          </Title>
        </Box>
        <Text fontSize="base" color="neutral-textLow">
          {description}
        </Text>
      </Box>
    </Card>
  );
}
