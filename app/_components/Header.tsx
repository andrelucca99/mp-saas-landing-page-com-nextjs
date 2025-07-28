import Image from 'next/image';
import Logo from "../assets/Logo.png";
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="container mx-auto py-10 px-8 flex items-center justify-between">
	  <Image src={Logo} alt="Logo Livro Saas" />
	  <nav className="flex justify-between items-center py-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} className="md:hidden cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant={'bg-white'}>Login</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex">
            <Button variant={'link'}>Funcionamento</Button>
            <Button variant={'link'}>Preço</Button>
            <Button variant={'bg-white'}>Login</Button>
          </div>
        </nav>
    </header>
  );
}
