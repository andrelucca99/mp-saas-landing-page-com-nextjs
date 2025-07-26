import Image from 'next/image';
import Logo from "../assets/Logo.png";

export function Header() {
  return (
    <header>
      <Image src={ Logo } alt="Logo Livro Saas" />
      <div>
        <button>Funcionamento</button>
        <button>Preço</button>
        <button>Login</button>
      </div>
    </header>
  );
}
 