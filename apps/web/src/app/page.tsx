import { Logo } from '@/components/icons/logo'
import { EntrepreneurManagingBusiness } from '@/components/images/entrepreneur-managing-business'
import { ModeToggle } from '@/components/mode-toggle'
import { Plans } from '@/components/pages/index/plans'
import { PaymentLink } from '@/components/payment-link'
import {
  Avatar,
  AvatarFallback,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from '@zapperbot/ui'
import {
  BadgeInfoIcon,
  BotIcon,
  CogIcon,
  DollarSignIcon,
  FileChartColumnIncreasingIcon,
  HelpCircleIcon,
  InfoIcon,
  ListTodoIcon,
  LogInIcon,
  MenuIcon,
  MessagesSquareIcon,
  UserPlusIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 w-full border-2 border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-screen-2xl items-center">
          <div className="flex-1 md:grow-0">
            <Link href="/#">
              <Logo />
            </Link>
          </div>
          <div className="ml-6 hidden flex-1 gap-2 md:flex lg:ml-12">
            <Button variant="ghost" asChild>
              <Link href="#recursos">Recursos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#depoimentos">Depoimentos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#planos">Planos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contato">Contato</Link>
            </Button>
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <Button className="hidden lg:flex" asChild>
              <Link href="https://app.zapperbot.com/signin">Entrar</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="mr-2 flex cursor-pointer md:hidden"
              >
                <Button variant="outline" size="icon">
                  <MenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px]">
                <DropdownMenuItem asChild>
                  <Link href="#recursos" className="h-12">
                    <ListTodoIcon className="mr-4" />
                    <span>Recursos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#depoimentos" className="h-12">
                    <MessagesSquareIcon className="mr-4" />
                    <span>Depoimentos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#planos" className="h-12">
                    <DollarSignIcon className="mr-4" />
                    <span>Planos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#contato" className="h-12">
                    <BadgeInfoIcon className="mr-4" />
                    <span>Contato</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="icon" className="flex lg:hidden" asChild>
              <Link href="https://app.zapperbot.com/signin">
                <LogInIcon />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="h-screen w-full py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                  Impulsione suas vendas no WhatsApp com o ZapperBot
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  O ZapperBot é uma ferramenta poderosa que automatiza suas
                  interações de vendas no WhatsApp, aumentando sua produtividade
                  e conversões.
                </p>
                <div className="flex flex-col gap-4 min-[480px]:flex-row">
                  <Button size="lg" asChild>
                    <PaymentLink plan="start" recurrence="monthly">
                      Experimente Grátis por 7 dias
                    </PaymentLink>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <EntrepreneurManagingBusiness />
              </div>
            </div>
          </div>
        </section>
        <section
          id="recursos"
          className="min-h-screen w-full bg-muted py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="mb-12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Principais Recursos
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O ZapperBot oferece uma série de recursos avançados para
                  impulsionar suas vendas no WhatsApp. Chega de perder clientes
                  por não responder rapidamente, ou ficar enviando manualmente
                  mensagens de texto e áudio para seus leads.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-12 text-center sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
              <Card className="grid h-64 gap-1 p-6">
                <div className="flex justify-center">
                  <BotIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Automação Inteligente</h3>
                <p className="text-muted-foreground">
                  Crie fluxos de atendimento automatizados para uma experiência
                  de compra perfeita e diminua o tempo de resposta no WhatsApp.
                </p>
              </Card>
              <Card className="grid gap-1 p-6 sm:h-64">
                <div className="flex justify-center">
                  <InfoIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Análises Avançadas</h3>
                <p className="text-muted-foreground">
                  Crie campanhas, acompanhe métricas em tempo real e otimize
                  suas estratégias.
                </p>
              </Card>
              <Card className="grid gap-1 p-6 sm:h-64">
                <div className="flex justify-center">
                  <CogIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Integrações Poderosas</h3>
                <p className="text-muted-foreground">
                  Conecte o ZapperBot com os principais gateways de pagamento e
                  não perca nenhum carrinho abandonado.
                </p>
              </Card>
              <Card className="grid gap-1 p-6 sm:h-64">
                <div className="flex justify-center">
                  <UserPlusIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Múltiplos atendentes</h3>
                <p className="text-muted-foreground">
                  Precisa de atendimento pessoal? Direcione seus leads para
                  múltiplos atendentes em um único número de WhatsApp!
                </p>
              </Card>
              <Card className="grid gap-1 p-6 sm:h-64">
                <div className="flex justify-center">
                  <FileChartColumnIncreasingIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Relatórios Detalhados</h3>
                <p className="text-muted-foreground">
                  Obtenha insights valiosos sobre o desempenho de suas campanhas
                  de vendas.
                </p>
              </Card>
              <Card className="grid gap-1 p-6 sm:h-64">
                <div className="flex justify-center">
                  <HelpCircleIcon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Suporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Além de vídeo aulas, conte com uma equipe de especialistas
                  para ajudá-lo a alcançar seus objetivos.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="depoimentos"
          className="min-h-screen w-full py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="mb-12 flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  O que nossos clientes dizem
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O ZapperBot vem mudando a vida de centenas de empresários,
                  afiliados, infoprodutes, profissionais de marketing,
                  convertendo os leads com mais facilidade e trazendo mais
                  lucros para as empresas.
                </p>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja abaixo o que os usuários do ZapperBot têm a dizer sobre a
                  ferramenta.
                </p>
                <div className="grid gap-8 py-16 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            <Image
                              src="/assets/patricia-felix.jpeg"
                              height={64}
                              width={64}
                              alt="José Mendonça"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                          <CardTitle>Patrícia Felix</CardTitle>
                          <CardDescription>Empresária</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">
                        &ldquo; Desde que comecei a usar o ZapperBot, minhas
                        vendas no WhatsApp aumentaram em mais de 30%. Comecei a
                        atender meus leads com rapidez, não importando a hora
                        dia. A ferramenta é incrível e o suporte é excelente.
                        Recomendo a todos!&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            <Image
                              src="/assets/jose-mendonca.png"
                              height={64}
                              width={64}
                              alt="José Mendonça"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                          <CardTitle>José Mendonça</CardTitle>
                          <CardDescription>Gerente de vendas</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">
                        &ldquo; O ZapperBot transformou nossa estratégia de
                        vendas no WhatsApp. Agora conseguimos atender muito mais
                        clientes de forma automatizada e personalizada.&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            <Image
                              src="/assets/marta-soares.png"
                              height={64}
                              width={64}
                              alt="Marta Soares"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                          <CardTitle>Marta Soares</CardTitle>
                          <CardDescription>
                            Afiliada e infroprodutora
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">
                        &ldquo; Ferramenta essencial para qualquer negócio que
                        queira se destacar no WhatsApp. A principal vantagem que
                        vi sobre a concorrência é que ele não é um plugin do
                        Chrome, e sim um aplicativo de verdade, com uma ótima
                        experiência de uso no celular! Recomendo o ZapperBot
                        fortemente!&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section id="planos" className="min-h-screen w-full py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="mb-12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Conheça nossos planos
                </h2>
                <p className="items-center justify-center text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encontre o plano perfeito para você e sua empresa.
                  Experimente!
                </p>
                <Plans />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contato"
          className="min-h-[calc(100vh-12rem)] w-full bg-muted py-24 lg:pt-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="mb-12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Chama no ZapperBot!
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <strong>Quer saber mais?</strong> Entre em contato conosco e{' '}
                  <strong>
                    veja como funciona um fluxo de vendas do ZapperBot!
                  </strong>
                </p>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Você poderá{' '}
                  <strong>testar diretamente nossa ferramenta</strong> através
                  de uma conversa com o nosso Bot de vendas do próprio
                  ZapperBot! Vamos convencê-lo a comprar o ZapperBot através do
                  próprio ZapperBot, e verá o{' '}
                  <strong>poder de funcionamento</strong> da ferramenta ao vivo!
                </p>
              </div>
              <Button size="lg" className="font-semibold uppercase" asChild>
                <Link
                  href="https://wa.me/5512996291129?text=Quero+saber+mais+sobre+o+ZapperBot"
                  target="_blank"
                >
                  Quero testar o ZapperBot agora
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t-2 border-border/75 py-8">
        <div className="container p-2 text-center text-muted-foreground">
          <p className="mb-2">
            &copy; 2024 Felixtech Soluções em Tecnologia LTDA. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ 46.756.866/0001-28
          </p>
          <p>
            <Button variant="link" asChild>
              <Link href="/terms-of-use">Termos de uso</Link>
            </Button>
            |
            <Button variant="link" asChild>
              <Link href="/privacy-policy">Políticas de Privacidade</Link>
            </Button>
          </p>
        </div>
      </footer>
    </div>
  )
}
