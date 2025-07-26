import Image from 'next/image';
import Logo from "../assets/Logo.png";

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300 bg-white text-center">
      <Image src={Logo} alt="Logo Livro Saas" className="mx-auto" />
      <p className="text-muted-foreground">© 2024 LivroSaaS. Todos os direitos reservados.</p>
    </footer>
  );
}
