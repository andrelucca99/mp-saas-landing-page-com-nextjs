import Image from 'next/image';
import Logo from "../assets/Logo.png";
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="container mx-auto py-10 px-8 flex items-center justify-between">
      <Image src={Logo} alt="Logo Livro Saas" />
      <nav className="hidden md:flex items-center gap-3">
        <Button variant={"link"}>Funcionamento</Button>
        <Button variant={"link"}>Preço</Button>
        <Button variant={"bg-white"}>Login</Button>
      </nav>
    </header>
  );
}
