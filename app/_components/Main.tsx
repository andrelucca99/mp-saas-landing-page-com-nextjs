import Image from "next/image";
import womanIMg from "../assets/woman.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Main() {
  return (
    <main>
      <section className="flex flex-col items-center justify-between text-center py-16">
        <h1 className="text-6xl font-bold">Simplifique Seus Estudos </h1>
        <p className="text-gray-500 mt-4 text-xl max-w-3xl">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>
        <form className="mt-16">
          <div className="flex gap-2 justify-center">
            <Input className="border-gray-300 border" type="email" placeholder="Coloque seu e-mail" />
            <Button className="cursor-pointer">Assine Agora</Button>
          </div>
        </form>
        <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
      </section>
      <section className="bg-white">
        <h2>Como funciona?</h2>
        <div>
          <Image src={womanIMg} alt="Mulher carregando caixas de livros." />
          <div>
            <ul>
              <li>Acesso a 1 ebook por mês</li>
              <li>Curadoria especial</li>
              <li>Cancele quando quiser</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Preço Simples e Transparente</h2>
        <p>
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.
        </p>
        <div>card</div>
      </section>
      <section className="bg-white">
        <h3>Pronto Para Mudar Sua Vida?</h3>
        <p>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
        <button>Assine Agora</button>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
      </section>
    </main>
  );
}
