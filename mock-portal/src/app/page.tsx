"use client";

import { useRouter } from "next/navigation";
import { Box, Text, Icon, Card, Button, Link } from "@nimbus-ds/components";
import { Title } from "@nimbus-ds/components";
import {
  AppsIcon,
  StoreIcon,
  LinkIcon,
  UserGroupIcon,
  QuestionCircleIcon,
} from "@nimbus-ds/icons";
import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import CommissionCard from "@/components/CommissionCard";
import CouponCard from "@/components/CouponCard";
import BadgeCard from "@/components/BadgeCard";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout activeItem="inicio">
      {/* Welcome Title */}
      <Title as="h1" fontSize="h1" color="neutral-textHigh">
        Olá, Teste
      </Title>

      {/* Stats Cards Row */}
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "450px 450px 350px",
        }}
      >
        {/* Aplicativos Card */}
        <Card padding="base">
          <Box display="flex" flexDirection="column" gap="4">
            <Box display="flex" alignItems="center" gap="2">
              <Icon
                source={<AppsIcon size="medium" />}
                color="neutral-textHigh"
              />
              <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
                Aplicativos
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" gap="1">
              <Title as="h2" fontSize="h2" color="neutral-textHigh">
                2
              </Title>
              <Box display="flex" alignItems="center" gap="1">
                <Text fontSize="caption" color="neutral-textLow">
                  aplicativos
                </Text>
                <Icon
                  source={<QuestionCircleIcon size="small" />}
                  color="neutral-textLow"
                />
              </Box>
            </Box>
            <Box display="flex" gap="2" flexWrap="wrap">
              <Button appearance="neutral">Criar aplicativo</Button>
              <Link
                as="a"
                appearance="primary"
                onClick={() => router.push("/applications")}
                style={{ cursor: "pointer" }}
              >
                Aplicativos
              </Link>
            </Box>
          </Box>
        </Card>

        {/* Lojas Card */}
        <Card padding="base">
          <Box display="flex" flexDirection="column" gap="4">
            <Box display="flex" alignItems="center" gap="2">
              <Icon
                source={<StoreIcon size="medium" />}
                color="neutral-textHigh"
              />
              <Text fontSize="base" fontWeight="bold" color="neutral-textHigh">
                Lojas
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" gap="1">
              <Title as="h2" fontSize="h2" color="neutral-textHigh">
                14
              </Title>
              <Box display="flex" alignItems="center" gap="1">
                <Text fontSize="caption" color="neutral-textLow">
                  lojas vinculadas
                </Text>
                <Icon
                  source={<QuestionCircleIcon size="small" />}
                  color="neutral-textLow"
                />
              </Box>
            </Box>
            <Box display="flex" gap="2" flexWrap="wrap">
              <Button appearance="neutral">Criar loja</Button>
              <Link as="a" href="#" appearance="primary">
                Lojas
              </Link>
            </Box>
          </Box>
        </Card>

        {/* Comissões Card */}
        <CommissionCard
          balance="R$ 0,00"
          minWithdraw="Resgate disponível a partir de R$ 100"
        />
      </div>

      {/* Info Cards Row */}
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "450px 450px 350px",
        }}
      >
        {/* Link de afiliado */}
        <InfoCard
          icon={<Icon source={<LinkIcon size="medium" />} color="primary-interactive" />}
          title="Link de afiliado"
          description="Divulgue o seu link de afiliado e receba comissão de cada loja criada através dele."
          primaryAction={{ label: "Copiar link" }}
          secondaryAction={{ label: "Saiba mais", href: "#", external: true }}
        />

        {/* Potencialize nossa parceria */}
        <InfoCard
          icon={<Icon source={<UserGroupIcon size="medium" />} color="primary-interactive" />}
          title="Potencialize nossa parceria"
          description="Veja como o programa de parceiros funciona e faça a diferença para milhares de lojistas."
          primaryAction={{ label: "Conheça o programa" }}
        />

        {/* Loja demo */}
        <InfoCard
          icon={<Icon source={<StoreIcon size="medium" />} color="primary-interactive" />}
          title="Loja demo"
          description="Teste temas e aplicações, e use como demonstração para seus clientes."
          primaryAction={{ label: "Acessar loja demo" }}
          secondaryAction={{ label: "Saiba mais", href: "#", external: true }}
        />
      </div>

      {/* Benefits Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Title as="h2" fontSize="h3" color="neutral-textHigh">
          Benefícios Nuvemshop especialistas
        </Title>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "1fr",
            width: "calc(450px + 450px + 16px)",
          }}
        >
          {/* Cupom de desconto */}
          <CouponCard
            title="Cupom de desconto"
            description="Saia na frente dos concorrentes. Use este código de especialista para oferecer 30 dias grátis na plataforma, válido para qualquer cliente que estiver criando uma loja com você."
            couponCode="PARTNER-NUVEM-5257"
          />

          {/* Selos de especialista */}
          <BadgeCard
            title="Selos de especialista"
            description="Mostre que você é um Especialista Nuvemshop para os seus clientes. Baixe o selo para usar no seu site, blog e redes sociais."
          />
        </div>
      </div>
    </PageLayout>
  );
}
