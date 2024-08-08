'use client'

import { PaymentLink } from '@/components/payment-link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@zapperbot/ui'
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
            <Button size="lg" asChild>
              <PaymentLink plan="start" recurrence={planType}>
                Quero este plano
              </PaymentLink>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
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
            <Button className="uppercase" disabled size="lg">
              Em breve
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
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
            <Button className="uppercase" disabled size="lg">
              Em breve
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
