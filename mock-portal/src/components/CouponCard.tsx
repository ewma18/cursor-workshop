"use client";

import { Box, Card, Text, Button, IconButton, Input } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import { TagIcon, CopyIcon } from "@nimbus-ds/icons";
import { useState } from "react";

interface CouponCardProps {
  title: string;
  description: string;
  couponCode: string;
}

export default function CouponCard({
  title,
  description,
  couponCode,
}: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4">
        <Box display="flex" alignItems="center" gap="2">
          <Box
            backgroundColor="primary-surface"
            borderRadius="2"
            padding="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TagIcon size="medium" />
          </Box>
          <Title as="h3" fontSize="h5" color="neutral-textHigh">
            {title}
          </Title>
        </Box>
        <Text fontSize="base" color="neutral-textLow">
          {description}
        </Text>
        <Box display="flex" gap="2" alignItems="center">
          <Box flex="1">
            <Input value={couponCode} readOnly />
          </Box>
          <IconButton
            source={<CopyIcon size="medium" />}
            onClick={handleCopy}
            size="2.5rem"
          />
        </Box>
        {copied && (
          <Text fontSize="caption" color="success-textHigh">
            Código copiado!
          </Text>
        )}
      </Box>
    </Card>
  );
}
