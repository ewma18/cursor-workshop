"use client";

import { Box, Text, Icon, Card, Button, Tag, Link, Input, Select, Checkbox, Radio } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import {
  ExternalLinkIcon,
  CopyIcon,
  QuestionCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@nimbus-ds/icons";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

// Mock application data
const mockApp = {
  id: "22351",
  name: "Teste Migração Aurora",
  email: "ewma18+testemigracaoaurora@gmail.com",
  category: "Gestão",
  redirectUrl: "https://partners.nuvemshop.com.br/applications/authentication/22351",
};

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box
      borderColor="neutral-surfaceHighlight"
      borderStyle="solid"
      borderWidth="1"
      borderRadius="2"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="4"
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text fontSize="base" fontWeight="medium" color="neutral-textHigh">
          {title}
        </Text>
        <Icon
          source={isOpen ? <ChevronUpIcon size="small" /> : <ChevronDownIcon size="small" />}
          color="neutral-textLow"
        />
      </Box>
      {isOpen && (
        <Box padding="4" paddingTop="0">
          {children}
        </Box>
      )}
    </Box>
  );
}

export default function BasicDataPage() {
  const [appName, setAppName] = useState(mockApp.name);
  const [category, setCategory] = useState(mockApp.category);
  const [email, setEmail] = useState(mockApp.email);
  const [siteUrl, setSiteUrl] = useState("");
  const [redirectUrl, setRedirectUrl] = useState(mockApp.redirectUrl);
  const [distributionType, setDistributionType] = useState("app-store");
  const [embedToAdmin, setEmbedToAdmin] = useState(false);
  const [webhookUsersRedact, setWebhookUsersRedact] = useState("");
  const [webhookCustomersRedact, setWebhookCustomersRedact] = useState("");
  const [webhookCustomersDataRequest, setWebhookCustomersDataRequest] = useState("");

  // Permission states
  const [writeContent, setWriteContent] = useState(false);
  const [readContent, setReadContent] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <PageLayout
      activeItem="aplicativos"
      breadcrumb={{ label: "Teste Migração Aurora", href: "/applications/22351" }}
    >
      {/* Page Title */}
      <Title as="h1" fontSize="h1" color="neutral-textHigh">
        Dados básicos
      </Title>

      {/* Informações Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            Informações
          </Title>

          <Box
            display="grid"
            gap="4"
            gridTemplateColumns={{
              xs: "1fr",
              md: "2fr 1fr",
            }}
          >
            <Box display="flex" flexDirection="column" gap="1">
              <Text fontSize="caption" color="neutral-textLow">
                Nome do aplicativo
              </Text>
              <Input
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
              />
              <Text fontSize="caption" color="neutral-textLow" textAlign="right">
                21/20
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" gap="1">
              <Text fontSize="caption" color="neutral-textLow">
                Categoria
              </Text>
              <Select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <Select.Option value="Gestão" label="Gestão" />
                <Select.Option value="Marketing" label="Marketing" />
                <Select.Option value="Vendas" label="Vendas" />
                <Select.Option value="Logística" label="Logística" />
                <Select.Option value="Pagamentos" label="Pagamentos" />
              </Select>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              E-mail de contato
            </Text>
            <Box display="flex" gap="2" alignItems="center">
              <Box flex="1">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Button appearance="transparent" onClick={() => copyToClipboard(email)}>
                <Icon source={<CopyIcon size="small" />} color="currentColor" />
              </Button>
            </Box>
            <Text fontSize="caption" color="neutral-textLow">
              Será usado como User-Agent
            </Text>
          </Box>

          <Link as="a" href="#" appearance="primary">
            <Icon source={<ExternalLinkIcon size="small" />} color="currentColor" />
            Como incluir User-Agent na API
          </Link>
        </Box>
      </Card>

      {/* Como você quer distribuir seu aplicativo? Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            Como você quer distribuir seu aplicativo?
          </Title>

          <Box display="flex" flexDirection="column" gap="4">
            <Box
              display="flex"
              flexDirection="column"
              gap="2"
              padding="4"
              borderColor={distributionType === "app-store" ? "primary-interactive" : "neutral-surfaceHighlight"}
              borderStyle="solid"
              borderWidth="1"
              borderRadius="2"
              backgroundColor={distributionType === "app-store" ? "primary-surface" : "neutral-background"}
              cursor="pointer"
              onClick={() => setDistributionType("app-store")}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap="2">
                  <Radio
                    name="distribution"
                    id="app-store"
                    checked={distributionType === "app-store"}
                    onChange={() => setDistributionType("app-store")}
                  />
                  <Text fontSize="base" fontWeight="medium" color="neutral-textHigh">
                    Loja de aplicativos
                  </Text>
                </Box>
                {distributionType === "app-store" && (
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="full"
                    backgroundColor="primary-interactive"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="caption" color="neutral-background">✓</Text>
                  </Box>
                )}
              </Box>
              <Text fontSize="caption" color="neutral-textLow">
                Disponível para todos os lojistas.
              </Text>
              <Tag appearance="primary">Recomendado</Tag>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap="2"
              padding="4"
              borderColor={distributionType === "clients" ? "primary-interactive" : "neutral-surfaceHighlight"}
              borderStyle="solid"
              borderWidth="1"
              borderRadius="2"
              backgroundColor={distributionType === "clients" ? "primary-surface" : "neutral-background"}
              cursor="pointer"
              onClick={() => setDistributionType("clients")}
            >
              <Box display="flex" alignItems="center" gap="2">
                <Radio
                  name="distribution"
                  id="clients"
                  checked={distributionType === "clients"}
                  onChange={() => setDistributionType("clients")}
                />
                <Text fontSize="base" fontWeight="medium" color="neutral-textHigh">
                  Para os seus clientes
                </Text>
              </Box>
              <Text fontSize="caption" color="neutral-textLow">
                Disponível apenas para as lojas escolhidas por você.
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* URLs Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            URLs
          </Title>
          <Text fontSize="caption" color="neutral-textLow">
            Insira as URLs para conectar seu aplicativo ou integração com a Nuvemshop.
          </Text>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              Site do aplicativo
            </Text>
            <Input
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
              placeholder="https://"
            />
          </Box>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              URL de redirecionamento após instalação
            </Text>
            <Input
              value={redirectUrl}
              onChange={(e) => setRedirectUrl(e.target.value)}
            />
          </Box>
        </Box>
      </Card>

      {/* Aplicativos incorporados ao administrador Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            Aplicativos incorporados ao administrador
          </Title>

          <Checkbox
            name="embed-to-admin"
            id="embed-to-admin"
            label="Incorporar ao administrador do lojista"
            checked={embedToAdmin}
            onChange={(e) => setEmbedToAdmin(e.target.checked)}
          />

          <Text fontSize="caption" color="neutral-textLow">
            Selecione esta opção se você quer que os seus clientes tenham uma aba dentro do Administrador dos Lojistas. Eles poderão configurar e administrar suas atividades, sem ser redirecionado por um link externo.
          </Text>

          <Box display="flex" alignItems="center" gap="2">
            <Icon source={<QuestionCircleIcon size="small" />} color="primary-interactive" />
            <Text fontSize="caption" color="neutral-textLow">
              Confira os requisitos necessários para desenvolver um aplicativo incorporado ao administrador. Acesse a{" "}
              <Link as="a" href="#" appearance="primary">
                documentação
              </Link>
              .
            </Text>
          </Box>
        </Box>
      </Card>

      {/* Permissões Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            Permissões
          </Title>
          <Text fontSize="caption" color="neutral-textLow">
            Escolha as permissões de acesso que seu aplicativo precisa para funcionar.
          </Text>

          <Box display="flex" flexDirection="column" gap="2">
            <AccordionItem title="Charges">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar cobranças e pagamentos.
              </Text>
            </AccordionItem>

            <AccordionItem title="Contents" defaultOpen>
              <Box display="flex" flexDirection="column" gap="3">
                <Checkbox
                  name="write-content"
                  id="write-content"
                  label="Write content"
                  checked={writeContent}
                  onChange={(e) => setWriteContent(e.target.checked)}
                />
                <Text fontSize="caption" color="neutral-textLow" paddingLeft="6">
                  Modificar, eliminar e criar as páginas de conteúdo da loja.
                </Text>

                <Checkbox
                  name="read-content"
                  id="read-content"
                  label="Read content"
                  checked={readContent}
                  onChange={(e) => setReadContent(e.target.checked)}
                />
                <Text fontSize="caption" color="neutral-textLow" paddingLeft="6">
                  Apenas leitura (não poderá alterar) as páginas de conteúdo da loja.
                </Text>
              </Box>
            </AccordionItem>

            <AccordionItem title="Coupons">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar cupons de desconto.
              </Text>
            </AccordionItem>

            <AccordionItem title="Customers">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar informações de clientes.
              </Text>
            </AccordionItem>

            <AccordionItem title="Discounts">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar descontos e promoções.
              </Text>
            </AccordionItem>

            <AccordionItem title="Domains">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar domínios da loja.
              </Text>
            </AccordionItem>

            <AccordionItem title="Logistics">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar logística e envios.
              </Text>
            </AccordionItem>

            <AccordionItem title="Manual orders">
              <Text fontSize="caption" color="neutral-textLow">
                Criar e gerenciar pedidos manuais.
              </Text>
            </AccordionItem>

            <AccordionItem title="Notifications">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar notificações.
              </Text>
            </AccordionItem>

            <AccordionItem title="Orders">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar pedidos da loja.
              </Text>
            </AccordionItem>

            <AccordionItem title="Plans">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar planos e assinaturas.
              </Text>
            </AccordionItem>

            <AccordionItem title="Products">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar produtos e catálogo.
              </Text>
            </AccordionItem>

            <AccordionItem title="Scripts">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar scripts da loja.
              </Text>
            </AccordionItem>

            <AccordionItem title="Shipping">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar configurações de frete.
              </Text>
            </AccordionItem>

            <AccordionItem title="Subscriptions">
              <Text fontSize="caption" color="neutral-textLow">
                Gerenciar assinaturas recorrentes.
              </Text>
            </AccordionItem>
          </Box>
        </Box>
      </Card>

      {/* LGPD Section */}
      <Card padding="base">
        <Box display="flex" flexDirection="column" gap="4">
          <Title as="h2" fontSize="h4" color="neutral-textHigh">
            LGPD
          </Title>
          <Text fontSize="caption" color="neutral-textLow">
            Atendendo a nova lei de LGPD em vigor, é necessário configurar os webhooks no seu aplicativo.
          </Text>

          <Link as="a" href="#" appearance="primary">
            <Icon source={<ExternalLinkIcon size="small" />} color="currentColor" />
            Documentação de orders webhooks
          </Link>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              URL webhook users redact
            </Text>
            <Input
              value={webhookUsersRedact}
              onChange={(e) => setWebhookUsersRedact(e.target.value)}
              placeholder="https://"
            />
          </Box>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              URL webhook customers redact
            </Text>
            <Input
              value={webhookCustomersRedact}
              onChange={(e) => setWebhookCustomersRedact(e.target.value)}
              placeholder="https://"
            />
          </Box>

          <Box display="flex" flexDirection="column" gap="1">
            <Text fontSize="caption" color="neutral-textLow">
              URL webhook customers data request
            </Text>
            <Input
              value={webhookCustomersDataRequest}
              onChange={(e) => setWebhookCustomersDataRequest(e.target.value)}
              placeholder="https://"
            />
          </Box>
        </Box>
      </Card>

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

      {/* Save Button */}
      <Box display="flex" justifyContent="flex-end">
        <Button appearance="primary">Salvar</Button>
      </Box>
    </PageLayout>
  );
}
