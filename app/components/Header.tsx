import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 md:p-10 sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-sm">
      <Link href="/" className="text-3xl md:text-4xl font-bold tracking-tight">SOTTO</Link>
      <nav className="hidden md:flex gap-8">
        <Link href="/about" className="hover:text-[#D47D5A] transition-colors">À propos</Link>
        <Link href="/demo" className="hover:text-[#D47D5A] transition-colors">Démo</Link>
        <Link href="/blog" className="hover:text-[#D47D5A] transition-colors">Blog</Link>
        <Link href="/contact" className="hover:text-[#D47D5A] transition-colors">Contact</Link>
      </nav>
      <button className="md:hidden text-2xl">☰</button>
    </header>
  );
}
