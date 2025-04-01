import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#505A64] mb-1">Prénom</label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#505A64] mb-1">Nom</label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-[#505A64] mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#505A64] mb-1">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-[#505A64] mb-1">Sujet</label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="info">Informations générales</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[#505A64] mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#1A2A40] text-white px-6 py-3 font-medium hover:bg-[#D47D5A] transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D47D5A]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Téléphone</h3>
                      <p className="text-[#505A64]">+33 6 21 23 58 50</p>
                      <p className="text-[#505A64]">Du lundi au vendredi, 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D47D5A]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-[#505A64]">contact@sottohq.ai</p>
                      <p className="text-[#505A64]">support@sottohq.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D47D5A]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Adresse</h3>
                      <p className="text-[#505A64]">97B rue Pierre Valdo</p>
                      <p className="text-[#505A64]">69005 Lyon, France</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Suivez-nous</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A2A40] flex items-center justify-center text-white hover:bg-[#D47D5A] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A2A40] flex items-center justify-center text-white hover:bg-[#D47D5A] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A2A40] flex items-center justify-center text-white hover:bg-[#D47D5A] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
