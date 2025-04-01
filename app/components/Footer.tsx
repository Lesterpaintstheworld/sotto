import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A2A40] text-[#F5F5F0] px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-bold mb-4">SOTTO</h3>
          <p className="text-[#F5F5F0]/70">
            Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel : l'humain et la gastronomie.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-[#F5F5F0]/70">info@sotto.ai</p>
          <p className="text-[#F5F5F0]/70">+33 1 23 45 67 89</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">LinkedIn</Link>
            <Link href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">Twitter</Link>
            <Link href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F5F5F0]/10 pt-6 text-center text-[#F5F5F0]/50">
        <p>© {new Date().getFullYear()} Sotto. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
