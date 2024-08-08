'use client'

import { PaymentLink } from '@/components/payment-link'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ToggleGroup,
  ToggleGroupItem,
} from '@zapperbot/ui'
import { ArrowLeftIcon, CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Plans() {
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    console.log(planType)
  })

  return (
    <div>
      <ToggleGroup
        type="single"
        value={planType}
        onValueChange={(value) => setPlanType(value as 'monthly' | 'yearly')}
        className="mb-6 gap-2"
      >
        <ToggleGroupItem value="monthly" aria-label="Mensal">
          Mensal
        </ToggleGroupItem>
        <ToggleGroupItem value="yearly" aria-label="Anual">
          Anual
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            {planType === 'monthly' ? (
              <Badge className="mx-auto mb-1 flex items-center justify-center bg-emerald-600 px-8 py-2 text-center text-base hover:bg-emerald-600/80">
                Experimente Grátis por 7 dias
              </Badge>
            ) : (
              <Badge className="mx-auto mb-1 flex items-center justify-center bg-zinc-200 px-8 py-2 text-center text-base text-black hover:bg-zinc-200/80">
                Perfeito para pequenos negócios
              </Badge>
            )}
            <CardTitle>Start</CardTitle>
            <CardDescription>
              Os principais recursos a um ótimo custo-benefício
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 text-left">
            <div className="space-y-4">
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />1 número de WhatsApp
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Painel de controle
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Criação de etiquetas
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Até 5 fluxos de conversas personalizados
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Gerenciamento de textos, mídias e documentos
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Vídeo aulas
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Suporte por e-mail
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">
              {planType === 'yearly' ? 'R$ 599/ano' : 'R$ 59/mês'}
            </p>
            <Button size="lg" className="uppercase" asChild>
              <PaymentLink plan="start" recurrence={planType}>
                Quero este plano
              </PaymentLink>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-primary-foreground">
          <CardHeader>
            <Badge className="mx-auto mb-1 flex items-center justify-center px-8 py-2 text-center text-base">
              Escolha recomendada
            </Badge>
            <CardTitle>Premium</CardTitle>
            <CardDescription>
              Coloque seu time de vendas na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 text-left">
            <div className="space-y-4">
              <p className="flex gap-1">
                <ArrowLeftIcon />
                Todas as funcionalidades do Start +
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                ILIMITADOS fluxos de conversas automatizados
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Até 5 atendentes
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Gerenciamento de campanhas
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Suporte por email ou WhatsApp
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">
              {planType === 'yearly' ? 'R$ 1.299/ano' : 'R$ 129/mês'}
            </p>
            <Button className="uppercase" size="lg">
              Quero este plano
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <Badge className="mx-auto mb-1 flex items-center justify-center bg-zinc-200 px-8 py-2 text-center text-base text-black hover:bg-zinc-200/80">
              A opção mais completa
            </Badge>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              Integre a ferramenta com seu checkout de pagamentos e não perca
              nenhuma venda!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 text-left">
            <div className="space-y-4">
              <p className="flex gap-1">
                <ArrowLeftIcon />
                Todas as funcionalidades do Pro +
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                ILIMITADOS atendentes
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Acesso à API completa
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Integração com Zapier
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Integração com Webhook
              </p>
              <p className="flex gap-1">
                <CheckIcon className="text-green-500" />
                Suporte por email, WhatsApp ou telefone/chamada de vídeo
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">
              {planType === 'yearly' ? 'R$ 1.999/ano' : 'R$ 199/mês'}
            </p>
            <Button className="uppercase" size="lg">
              Quero este plano
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
