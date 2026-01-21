"use client";

import { Box, Card, Text, Button, Icon } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import { CashIcon, CalendarIcon } from "@nimbus-ds/icons";

interface CommissionCardProps {
  balance: string;
  minWithdraw: string;
}

export default function CommissionCard({
  balance,
  minWithdraw,
}: CommissionCardProps) {
  return (
    <Box
      backgroundColor="primary-interactive"
      borderRadius="2"
      padding="4"
      display="flex"
      flexDirection="column"
      gap="4"
      height="100%"
    >
      <Box display="flex" alignItems="center" gap="2">
        <Icon source={<CashIcon size="medium" />} color="neutral-background" />
        <Text fontSize="base" fontWeight="bold" color="neutral-background">
          Comissões
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" gap="1">
        <Text fontSize="caption" color="neutral-background">
          Saldo disponível
        </Text>
        <Title as="h2" fontSize="h2" color="neutral-background">
          {balance}
        </Title>
        <Text fontSize="caption" color="neutral-background">
          {minWithdraw}
        </Text>
      </Box>
      <Box display="flex" gap="2" flexWrap="wrap" marginTop="auto">
        <Button appearance="neutral">Resgatar</Button>
        <Button appearance="transparent">
          <Icon source={<CalendarIcon size="small" />} color="neutral-background" />
          <Text color="neutral-background">Lançamentos</Text>
        </Button>
      </Box>
    </Box>
  );
}
