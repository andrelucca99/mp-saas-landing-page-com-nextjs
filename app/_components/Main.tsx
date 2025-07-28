import Image from "next/image";
import womanIMg from "../assets/woman.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TitleSection from "./Title";

export function Main() {
  return (
    <main>
      <section className="flex flex-col items-center text-center py-8 md:py-16">
		<TitleSection text="Simplifique Seus Estudos" element="h1" />
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>
        <form className="max-w-xs mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <Input className="border-gray-300 border" type="email" placeholder="Coloque seu e-mail" />
            <Button className="cursor-pointer">Assine Agora</Button>
          </div>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          Comece sua assinatura agora mesmo.
          <br className="block sm:hidden" />
          Cancele quando quiser.
        </p>
      </section>
      <section className="bg-white py-8 md:py-16">
        <div className="container mx-auto">
		  <TitleSection text="Como funciona?" element="h2" />
          <div className="mx-24 flex flex-col md:flex-row items-center justify-center gap-14">
            <Image src={womanIMg} alt="Mulher carregando caixas de livros." />
            <ul className="text-[16px] md:text-2xl text-muted-foreground space-y-6 flex-shrink-0">
              <li className="flex items-center justify-between gap-4">Acesso a 1 ebook por mês <Check className="text-green-600" /></li>
              <li className="flex items-center justify-between gap-4">Curadoria especial <Check className="text-green-600" /></li>
              <li className="flex items-center justify-between gap-4">Cancele quando quiser <Check className="text-green-600" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 text-center px-2 md:px-0">
		<TitleSection text="Preço Simples e Transparente" element="h2" customClass="font-bold text-xl md:text-6xl" />
        <p className="text-gray-500 mt-4 text-xl max-w-3xl mx-auto">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.
        </p>
        <Card className="w-[350px] mx-auto text-left mt-10 md:mt-20">
          <CardHeader>
            <CardTitle>Plano Pro Premium VIP</CardTitle>
            <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-8 mt-4">
              R$29
              <span className="font-normal text-muted-foreground text-lg">/mês</span>
            </p>
            <ul>
              <li className="flex gap-2 text-muted-foreground"><Check className="w-4 text-green-600" />Acesso a 1 ebook por mês</li>
              <li className="flex gap-2 text-muted-foreground"><Check className="w-4 text-green-600" />Curadoria especial</li>
              <li className="flex gap-2 text-muted-foreground"><Check className="w-4 text-green-600" />Acesso ilimitado</li>
              <li className="flex gap-2 text-muted-foreground"><Check className="w-4 text-green-600" />Cancele quando quiser</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="bg-white py-8 md:py-16 text-center px-2 md:px-0">
		<TitleSection text="Pronto Para Mudar Sua Vida?" element="h2" customClass="font-bold text-xl md:text-6xl" />
        <p className="text-gray-500 mt-4 text-xl max-w-3xl mx-auto">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
        <Button className="w-76 md:w-96 mt-14 cursor-pointer">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-2">
          Comece sua assinatura agora mesmo.
          <br className="block sm:hidden" />
          Cancele quando quiser.
        </p>
      </section>
    </main>
  );
}
