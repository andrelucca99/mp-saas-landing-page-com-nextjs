import Image from 'next/image';
import Logo from "../assets/Logo.png";

export function Footer() {
  return (
    <footer>
      <Image src={Logo} alt="Logo Livro Saas" />
      <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
    </footer>
  );
}
