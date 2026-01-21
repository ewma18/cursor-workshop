"use client";

import { Box, Text, Icon, Card, Button, Tag, Link, Input, Select } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import {
  CodeIcon,
  ExternalLinkIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  QuestionCircleIcon,
} from "@nimbus-ds/icons";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

// Mock application data
const mockApp = {
  id: "22351",
  name: "Teste Migração Aurora",
  status: "development",
  appId: "22351",
  clientSecret: "********************************",
  activeInstallations: 1,
  uninstallations30Days: 0,
};

function AccessKeysCard() {
  const [showSecret, setShowSecret] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4">
        <Title as="h3" fontSize="h5" color="neutral-textHigh">
          Chaves de acesso
        </Title>
        <Text fontSize="caption" color="neutral-textLow">
          Use estas chaves para autorizar as instalações do seu aplicativo nas lojas.
        </Text>

        <Box display="flex" flexDirection="column" gap="4">
          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              App ID
            </Text>
            <Box display="flex" gap="2" alignItems="center">
              <Box flex="1">
                <Input value={mockApp.appId} readOnly />
              </Box>
              <Button appearance="transparent" onClick={() => copyToClipboard(mockApp.appId)}>
                <Icon source={<CopyIcon size="small" />} color="currentColor" />
              </Button>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              Client Secret
            </Text>
            <Box display="flex" gap="2" alignItems="center">
              <Box flex="1">
                <Input
                  type={showSecret ? "text" : "password"}
                  value={mockApp.clientSecret}
                  readOnly
                />
              </Box>
              <Button appearance="transparent" onClick={() => setShowSecret(!showSecret)}>
                <Icon source={showSecret ? <EyeOffIcon size="small" /> : <EyeIcon size="small" />} color="currentColor" />
              </Button>
              <Button appearance="transparent" onClick={() => copyToClipboard(mockApp.clientSecret)}>
                <Icon source={<CopyIcon size="small" />} color="currentColor" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

function MetricCard({
  title,
  value,
  buttonLabel,
}: {
  title: string;
  value: number;
  buttonLabel: string;
}) {
  return (
    <Card padding="base">
      <Box display="flex" flexDirection="column" gap="4">
        <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
          {title}
        </Text>
        <Title as="h2" fontSize="h1" color="neutral-textHigh">
          {value}
        </Title>
        <Button appearance="neutral">{buttonLabel}</Button>
      </Box>
    </Card>
  );
}

export default function ApplicationDetailPage() {
  return (
    <PageLayout
      activeItem="aplicativos"
      breadcrumb={{ label: "Aplicativos", href: "/applications" }}
    >
      {/* Page Title */}
          <Box display="flex" alignItems="center" gap="4">
            <Title as="h1" fontSize="h1" color="neutral-textHigh">
              {mockApp.name}
            </Title>
          </Box>
          <Box marginBottom="4">
            <Tag appearance="neutral">Em desenvolvimento</Tag>
          </Box>

          {/* Desenvolver e integrar Section */}
          <Box display="flex" flexDirection="column" gap="4">
            <Title as="h2" fontSize="h3" color="neutral-textHigh">
              Desenvolver e integrar
            </Title>

            {/* Two-column layout: Main cards + Right sidebar */}
            <div
              style={{
                display: "flex",
                gap: "24px",
              }}
            >
              {/* Left Column - Main cards */}
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Iniciar desenvolvimento */}
                <Card padding="base">
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon source={<CodeIcon size="medium" />} color="neutral-textHigh" />
                      <Title as="h3" fontSize="h5" color="neutral-textHigh">
                        Iniciar desenvolvimento
                      </Title>
                    </Box>
                    <Text fontSize="base" color="neutral-textLow">
                      Encontre todos os recursos disponíveis e escolha a melhor forma de construir seu aplicativo.
                    </Text>
                    <Box>
                      <Button appearance="neutral">Ler a documentação</Button>
                    </Box>
                  </Box>
                </Card>

                {/* Loja demo & Pronto para desenvolvimento */}
                <Box
                  display="grid"
                  gap="4"
                  gridTemplateColumns={{
                    xs: "1fr",
                    md: "1fr 1fr",
                  }}
                >
                  {/* Loja demo */}
                  <Card padding="base">
                    <Box display="flex" flexDirection="column" gap="4">
                      <Title as="h3" fontSize="h5" color="neutral-textHigh">
                        Loja demo
                      </Title>
                      <Text fontSize="caption" color="neutral-textLow">
                        Escolha uma loja demo para instalar e testar seu aplicativo enquanto desenvolve.
                      </Text>
                      <Box display="flex" gap="2" alignItems="center">
                        <Box flex="1">
                          <Select name="demo-store" id="demo-store">
                            <Select.Option value="teste-migracao" label="Teste Migração Aurora" selected />
                          </Select>
                        </Box>
                        <Button appearance="transparent">
                          <Icon source={<ExternalLinkIcon size="small" />} color="currentColor" />
                        </Button>
                      </Box>
                    </Box>
                  </Card>

                  {/* Pronto para desenvolvimento */}
                  <Card padding="base">
                    <Box display="flex" flexDirection="column" gap="4">
                      <Title as="h3" fontSize="h5" color="neutral-textHigh">
                        Pronto para desenvolvimento
                      </Title>
                      <Tag appearance="success">API conectada</Tag>
                      <Text fontSize="caption" color="neutral-textLow">
                        Inicie a integração ou desenvolvimento no seu ambiente local. Consulte a documentação.
                      </Text>
                    </Box>
                  </Card>
                </Box>
              </div>

              {/* Right Sidebar - Access Keys */}
              <div
                style={{
                  width: "280px",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                }}
              >
                <AccessKeysCard />
              </div>
            </div>
          </Box>

          {/* Editar aplicativo Section */}
          <Box display="flex" flexDirection="column" gap="4">
            <Title as="h2" fontSize="h3" color="neutral-textHigh">
              Editar aplicativo
            </Title>
            <Text fontSize="base" color="neutral-textLow">
              Preencha os formulários e forneça os recursos que serão utilizados na sua página de produto na{" "}
              <Link as="a" href="#" appearance="primary">
                Loja de aplicativos
              </Link>
              .
            </Text>

            <Box
              display="grid"
              gap="4"
              gridTemplateColumns={{
                xs: "1fr",
                md: "1fr 1fr",
              }}
            >
              {/* Dados básicos */}
              <Card padding="base">
                <Box display="flex" flexDirection="column" gap="4">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
                      Dados básicos
                    </Text>
                    <Tag appearance="warning">Pendente</Tag>
                  </Box>
                  <Text fontSize="caption" color="neutral-textLow">
                    Preencha informações de categoria, tipo de publicação e URLs do aplicativo.
                  </Text>
                  <Box>
                    <Button appearance="neutral">Editar dados</Button>
                  </Box>
                </Box>
              </Card>

              {/* Dados de publicação */}
              <Card padding="base">
                <Box display="flex" flexDirection="column" gap="4">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
                      Dados de publicação
                    </Text>
                    <Tag appearance="warning">Pendente</Tag>
                  </Box>
                  <Text fontSize="caption" color="neutral-textLow">
                    Preencha os formulários e forneça os recursos que serão utilizados na sua página de produto na Loja de aplicativos.
                  </Text>
                  <Box>
                    <Button appearance="neutral">Editar dados</Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>

          {/* Scripts Section */}
          <Card padding="base">
            <Box display="flex" flexDirection="column" gap="4">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title as="h3" fontSize="h4" color="neutral-textHigh">
                  Scripts
                </Title>
                <Button appearance="primary">Criar script</Button>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="6"
                gap="2"
              >
                <Icon source={<CodeIcon size={32} />} color="neutral-textLow" />
                <Text fontSize="base" fontWeight="bold" color="neutral-textHigh" textAlign="center">
                  Acione scripts em toda loja ou no checkout
                </Text>
                <Text fontSize="caption" color="neutral-textLow" textAlign="center">
                  Gerencie versões, teste na loja demo e ative o script em todas as lojas com o app instalado ou parametrize por loja.
                </Text>
              </Box>
            </Box>
          </Card>

          {/* Solicitar Homologação Section */}
          <Card padding="base">
            <Box display="flex" flexDirection="column" gap="4">
              <Title as="h3" fontSize="h4" color="neutral-textHigh">
                Solicitar Homologação
              </Title>
              <Text fontSize="base" color="neutral-textLow">
                Preencha os formulários de dados básicos e de publicação.
              </Text>
              <Box>
                <Button appearance="neutral" disabled>
                  Solicitar homologação
                </Button>
              </Box>
            </Box>
          </Card>

          {/* Links do administrador Section */}
          <Card padding="base">
            <Box display="flex" flexDirection="column" gap="4">
              <Title as="h3" fontSize="h4" color="neutral-textHigh">
                Links do administrador
              </Title>
              <Text fontSize="base" color="neutral-textLow">
                Crie links que permitem realizar ações específicas do aplicativo sem sair do painel administrador.
              </Text>
              <Link as="a" href="#" appearance="primary">
                <Icon source={<ExternalLinkIcon size="small" />} color="currentColor" />
                Como criar links de administrador
              </Link>
              <Box>
                <Button appearance="neutral">Criar link</Button>
              </Box>
            </Box>
          </Card>

          {/* Métricas de acompanhamento Section */}
          <Box display="flex" flexDirection="column" gap="4">
            <Title as="h2" fontSize="h3" color="neutral-textHigh">
              Métricas de acompanhamento
            </Title>

            <Box
              display="grid"
              gap="4"
              gridTemplateColumns={{
                xs: "1fr",
                md: "1fr 1fr",
              }}
            >
              <MetricCard
                title="Instalações ativas"
                value={mockApp.activeInstallations}
                buttonLabel="Ver instalações"
              />
              <MetricCard
                title="Desinstalações (Últimos 30 dias)"
                value={mockApp.uninstallations30Days}
                buttonLabel="Ver motivos"
              />
            </Box>
          </Box>

          {/* Support Footer */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
            padding="4"
          >
            <Icon source={<QuestionCircleIcon size="small" />} color="neutral-textLow" />
            <Text fontSize="caption" color="neutral-textLow">
              Dúvidas? Fale com o suporte técnico:{" "}
              <Link as="a" href="mailto:parceiros@nuvemshop.com.br" appearance="primary">
                parceiros@nuvemshop.com.br
              </Link>
            </Text>
          </Box>
    </PageLayout>
  );
}
