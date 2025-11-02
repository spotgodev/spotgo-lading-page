import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ThemeToggle } from './components/theme-toggle';
import { TrailDecoration } from './components/trail-decoration';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useTheme } from './components/use-theme';
import { Zap, Star, Bell, Smartphone, Heart, MapPinCheck, Brain, Target, Globe, RotateCcw, Users, Clock } from 'lucide-react';
import spotgoLogo from 'figma:asset/0f2f868de2d28468d950e875df9010ba54f4f621.png';
import spotgoLogoDark from 'figma:asset/dc2673df091b647db35dd24441d6699b41eae185.png';
import pinIcon from 'figma:asset/d8358bb66382908baf1825648dc08a13de630b2e.png';

export default function App() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "IA Personalizada",
      description: "Algoritmo avançado que aprende suas preferências e evolui com seus gostos para sugestões cada vez mais precisas.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Locais Únicos",
      description: "Descubra restaurantes exclusivos, bares temáticos, cafés aconchegantes e eventos que combinam perfeitamente com você.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com pessoas que compartilham seus interesses e descubram juntos novos lugares incríveis.",
      gradient: "from-orange-500 to-pink-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Análise Personalizada",
      description: "Responda um quiz inteligente sobre seus gostos, preferências e estilo de vida.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Sugestões Inteligentes",
      description: "Nossa IA processa milhares de dados para encontrar locais perfeitos para seu perfil.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Experiências Únicas",
      description: "Visite os locais recomendados e viva momentos inesquecíveis.",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  const problems = [
    {
      icon: <RotateCcw className="h-12 w-12" />,
      problem: "Sempre nos mesmos lugares",
      description: "Você acaba indo sempre nos mesmos restaurantes e bares porque não sabe onde mais ir.",
      color: "text-red-500 dark:text-red-400"
    },
    {
      icon: <Users className="h-12 w-12" />, 
      problem: "Recomendações genéricas",
      description: "Apps tradicionais mostram os mesmos lugares para todo mundo, ignorando seu gosto único.",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      problem: "Perde tempo pesquisando",
      description: "Gasta horas procurando o lugar perfeito e ainda assim não tem certeza se vai gostar.",
      color: "text-blue-600 dark:text-blue-400"
    }
  ];

  const solutions = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Sugestões sob medida",
      description: "Receba recomendações baseadas na sua personalidade, não em rankings genéricos."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Decisões rápidas",
      description: "Pare de perder tempo. O SPOTGO encontra o lugar ideal em segundos."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Experiências memoráveis",
      description: "Descubra locais que realmente combinam com você e crie momentos únicos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <img src={isDark ? spotgoLogoDark : spotgoLogo} alt="SPOTGO" className="h-9 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <TrailDecoration />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-600 dark:text-orange-400">
              <Bell className="h-4 w-4" />
              <span>Em breve</span>
            </div>
            
            <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Descubra lugares{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  únicos
                </span>
              </span>
              {" "}para você
            </h1>
            
            <p className="mb-10 text-xl text-foreground/70 dark:text-foreground/80 md:text-2xl max-w-3xl mx-auto leading-relaxed">
              O SPOTGO usa inteligência artificial avançada para analisar sua personalidade e 
              descobrir locais extraordinários que combinam perfeitamente com seu estilo único.
            </p>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60 dark:text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Lançamento em breve</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Gratuito para sempre</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">iOS & Android</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="mt-20 px-4">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758762625193-daa853afccac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzb2NpYWxpemluZyUyMHJlc3RhdXJhbnQlMjBjYWZlfGVufDF8fHx8MTc1OTc1ODIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pessoas socializando em um ambiente moderno"
                className="relative w-full rounded-3xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          {/* Problems */}
          <div className="mb-20">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Cansado de sempre ir nos{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  mesmos lugares?
                </span>
              </h2>
              <p className="text-xl text-foreground/70 dark:text-foreground/80 leading-relaxed">
                Sabemos como é difícil encontrar o lugar perfeito para cada momento
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {problems.map((item, index) => (
                <Card key={index} className="border-2 border-dashed border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className={`mb-6 inline-flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{item.problem}</h3>
                    <p className="text-foreground/70 dark:text-foreground/80 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                O SPOTGO{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  resolve isso
                </span>
              </h2>
              <p className="text-xl text-foreground/70 dark:text-foreground/80 leading-relaxed">
                Tecnologia que entende você e encontra lugares únicos para sua personalidade
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {solutions.map((item, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-b from-orange-500/5 to-orange-500/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8 text-center">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Por que o SPOTGO é{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                diferente
              </span>
            </h2>
            <p className="text-xl text-foreground/70 dark:text-foreground/80 leading-relaxed">
              Tecnologia de ponta combinada com curadoria humana para experiências únicas
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-b from-background to-muted/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{
                  background: `linear-gradient(135deg, rgb(249 115 22), rgb(251 146 60))`
                }}></div>
                
                <CardContent className="relative p-8 text-center">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative bg-gradient-to-b from-muted/20 to-muted/40 py-16 md:py-24">
        <TrailDecoration className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Como funciona a{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                mágica
              </span>
            </h2>
            <p className="text-xl text-foreground/70 dark:text-foreground/80 leading-relaxed">
              Três passos simples para revolucionar suas experiências sociais
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-3xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-card p-2 rounded-full shadow-lg border border-border">
                    <div className="text-orange-500">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="md:col-span-1">
              <a href="https://www.instagram.com/spotgobrasil" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src={isDark ? spotgoLogoDark : spotgoLogo} alt="SPOTGO" className="mb-6 h-10 w-auto hover:opacity-80 transition-opacity" />
              </a>
              <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed mb-6">
                Conectando pessoas aos lugares perfeitos através da inteligência artificial 
                e curadoria especializada.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/spotgobrasil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-sm font-bold">@</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/108847969" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-6 font-bold text-foreground">Contato</h4>
              <p className="text-foreground/60 dark:text-foreground/70 leading-relaxed">
                Fique por dentro das novidades e seja o primeiro a saber quando o SPOTGO for lançado.
              </p>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60 dark:text-foreground/70 max-w-6xl mx-auto">
            <p>&copy; 2024 SPOTGO. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                Feito com <Heart className="h-4 w-4 fill-orange-500 text-orange-500" /> no Brasil
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}