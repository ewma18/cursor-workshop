"use client";

import { useRouter } from "next/navigation";
import { Box, Text, Icon, Card, Button, Tag } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import { PlusCircleIcon, CodeIcon } from "@nimbus-ds/icons";
import PageLayout from "@/components/PageLayout";

interface Application {
  id: string;
  name: string;
  installationsCount: number;
  status: "development" | "published";
  thumbnail?: string;
}

const mockApplications: Application[] = [
  {
    id: "21631",
    name: "Teste Lock",
    installationsCount: 0,
    status: "development",
  },
  {
    id: "22351",
    name: "Teste Migração Aurora",
    installationsCount: 1,
    status: "development",
  },
];

function ApplicationCard({ app }: { app: Application }) {
  const router = useRouter();

  return (
    <Card padding="base" onClick={() => router.push(`/applications/${app.id}`)} style={{ cursor: "pointer" }}>
      <Box display="flex" gap="4" alignItems="flex-start">
        {/* App Thumbnail */}
        <Box
          width="80px"
          height="80px"
          borderRadius="2"
          backgroundColor="neutral-surfaceHighlight"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          flexShrink="0"
        >
          <Box
            as="svg"
            width="60px"
            height="60px"
            viewBox="0 0 60 60"
            fill="none"
          >
            <rect width="60" height="60" rx="8" fill="#E5E7EB" />
            <rect x="10" y="15" width="25" height="30" rx="2" fill="#D1D5DB" />
            <rect x="38" y="20" width="12" height="20" rx="2" fill="#9CA3AF" />
            <circle cx="22" cy="30" r="8" fill="#9CA3AF" />
            <path d="M15 45 L30 35 L45 45" stroke="#6B7280" strokeWidth="2" fill="none" />
          </Box>
        </Box>

        {/* App Info */}
        <Box display="flex" flexDirection="column" gap="2" flex="1">
          <Box display="flex" alignItems="center" gap="2">
            <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
              {app.name}
            </Text>
            <Text fontSize="caption" color="neutral-textLow">
              (#{app.id})
            </Text>
          </Box>
          <Text fontSize="caption" color="neutral-textLow">
            {app.installationsCount} instalações ativas
          </Text>
          <Box marginTop="1">
            <Tag appearance="neutral">Em desenvolvimento</Tag>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default function ApplicationsPage() {
  return (
    <PageLayout activeItem="aplicativos">
      {/* Page Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap="4"
      >
        <Title as="h1" fontSize="h1" color="neutral-textHigh">
          Aplicativos
        </Title>

        <Box display="flex" gap="2">
          <Button appearance="neutral">
            <Icon source={<CodeIcon size="small" />} color="currentColor" />
            Modo de desenvolvimento
          </Button>
          <Button appearance="primary">
            <Icon source={<PlusCircleIcon size="small" />} color="currentColor" />
            Criar aplicativo
          </Button>
        </Box>
      </Box>

      {/* Applications Grid */}
      <Box
        display="grid"
        gap="4"
        gridTemplateColumns={{
          xs: "1fr",
          md: "1fr 1fr",
        }}
      >
        {mockApplications.map((app) => (
          <ApplicationCard key={app.id} app={app} />
        ))}
      </Box>
    </PageLayout>
  );
}
