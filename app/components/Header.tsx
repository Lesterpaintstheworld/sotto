import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">SOTTO</h1>
      <nav className="hidden md:flex gap-8">
        <Link href="#vision" className="hover:text-[#D47D5A] transition-colors">Vision</Link>
        <Link href="#valeur" className="hover:text-[#D47D5A] transition-colors">Valeur</Link>
        <Link href="#fonctionnalites" className="hover:text-[#D47D5A] transition-colors">Fonctionnalités</Link>
        <Link href="#contact" className="hover:text-[#D47D5A] transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
