"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Demo() {
  // État pour suivre l'index actif du carousel
  const [activeSlide, setActiveSlide] = useState(0);
  
  // État pour le chat
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour, je suis prêt à prendre votre commande." }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Référence pour faire défiler automatiquement vers le bas
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Fonction pour faire défiler vers le bas
  const scrollToBottom = () => {
    // Vérifier si l'utilisateur est déjà en bas de la conversation
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      const { scrollHeight, scrollTop, clientHeight } = chatContainer;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100; // Marge de 100px
      
      // Ne faire défiler que si l'utilisateur est déjà proche du bas
      if (isAtBottom && messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  // Effet pour faire défiler vers le bas quand les messages changent
  useEffect(() => {
    // Ajouter une classe au conteneur de chat pour pouvoir le sélectionner
    const chatContainer = document.querySelector('.flex-1.p-4.bg-\\[\\#F5F5F0\\].overflow-y-auto');
    if (chatContainer) {
      chatContainer.classList.add('chat-container');
    }
    
    // Appeler scrollToBottom uniquement lors de l'ajout d'un nouveau message de l'assistant
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === "assistant") {
      scrollToBottom();
    }
  }, [messages]);
  
  // Ajouter cet effet pour empêcher le défilement automatique au chargement
  useEffect(() => {
    // Désactiver temporairement le défilement automatique au chargement
    const preventInitialScroll = () => {
      window.scrollTo(0, 0);
    };
    
    // Appliquer immédiatement et après un court délai pour s'assurer que ça fonctionne
    preventInitialScroll();
    const timer = setTimeout(preventInitialScroll, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };
  
  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };
  
  // Fonction pour envoyer un message à l'API Claude
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Ajouter le message de l'utilisateur à l'état
    const userMessage = { role: "user", content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    
    // Réinitialiser l'input et activer l'état de chargement
    setInputMessage("");
    setIsLoading(true);
    
    // Ne pas défiler automatiquement ici
    
    try {
      // Appeler notre API qui communique avec Claude
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: inputMessage,
          model: 'claude-3-7-sonnet-latest',
          mode: 'restaurant_assistant',
          addSystem: "Tu es Sotto, un assistant vocal pour restaurant. Tu dois répondre comme si tu étais un système de prise de commande vocal dans un restaurant. Sois concis mais naturel, précis et professionnel. Confirme les commandes et modifications clairement. Limite tes réponses à 1-2 phrases maximum."
        }),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la communication avec l\'API');
      }
      
      const data = await response.json();
      
      // Ajouter la réponse de l'assistant à l'état
      setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error('Erreur:', error);
      // Ajouter un message d'erreur
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Désolé, j'ai rencontré un problème. Pourriez-vous répéter votre commande ?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Essayez Sotto maintenant !</h1>
          
          <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Partie gauche - Commande à prendre (transformée en carousel) */}
            <div className="md:w-1/2 p-8 bg-[#1A2A40]/5">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-between">
                <span>Commande à prendre</span>
                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center hover:bg-[#D47D5A]/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center hover:bg-[#D47D5A]/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </h2>
              
              {/* Carousel d'exemples de commandes */}
              <div className="relative overflow-hidden">
                {/* Premier exemple de commande */}
                <div className={`bg-white p-6 rounded-lg border-l-4 border-[#D47D5A] shadow-sm transition-opacity duration-300 ${activeSlide === 0 ? 'block' : 'hidden'}`}>
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center text-sm mr-2">1</span>
                    Table 7 - 4 personnes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D47D5A] font-bold">•</span>
                      <span className="font-medium">2 menus du jour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#87A28F] font-bold">•</span>
                      <span className="font-medium">1 burger végétarien <span className="text-[#D47D5A] text-sm">(sans gluten)</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1A2A40] font-bold">•</span>
                      <span className="font-medium">1 salade César poulet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4B483] font-bold">•</span>
                      <span className="font-medium">2 verres de vin rouge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#87A28F] font-bold">•</span>
                      <span className="font-medium">1 eau gazeuse + 1 carafe d'eau</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-[#505A64] italic">Dictez cette commande dans l'interface à droite →</p>
                </div>
                
                {/* Deuxième exemple de commande */}
                <div className={`bg-white p-6 rounded-lg border-l-4 border-[#87A28F] shadow-sm transition-opacity duration-300 ${activeSlide === 1 ? 'block' : 'hidden'}`}>
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center text-sm mr-2">2</span>
                    Table 12 - 2 personnes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D47D5A] font-bold">•</span>
                      <span className="font-medium">1 pizza margherita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#87A28F] font-bold">•</span>
                      <span className="font-medium">1 risotto aux champignons <span className="text-[#D47D5A] text-sm">(sans parmesan)</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4B483] font-bold">•</span>
                      <span className="font-medium">1 bouteille de vin blanc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1A2A40] font-bold">•</span>
                      <span className="font-medium">2 tiramisus</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-[#505A64] italic">Dictez cette commande dans l'interface à droite →</p>
                </div>
                
                {/* Troisième exemple de commande */}
                <div className={`bg-white p-6 rounded-lg border-l-4 border-[#D4B483] shadow-sm transition-opacity duration-300 ${activeSlide === 2 ? 'block' : 'hidden'}`}>
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#D4B483] text-white flex items-center justify-center text-sm mr-2">3</span>
                    Table 3 - 6 personnes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D47D5A] font-bold">•</span>
                      <span className="font-medium">3 plateaux de fruits de mer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#87A28F] font-bold">•</span>
                      <span className="font-medium">2 entrecôtes <span className="text-[#D47D5A] text-sm">(saignantes)</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1A2A40] font-bold">•</span>
                      <span className="font-medium">1 poisson du jour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4B483] font-bold">•</span>
                      <span className="font-medium">2 bouteilles de champagne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#87A28F] font-bold">•</span>
                      <span className="font-medium">1 jus d'orange pressé</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-[#505A64] italic">Dictez cette commande dans l'interface à droite →</p>
                </div>
                
                {/* Indicateurs de position du carousel */}
                <div className="flex justify-center gap-2 mt-4">
                  <div 
                    onClick={() => setActiveSlide(0)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${activeSlide === 0 ? 'bg-[#D47D5A]' : 'bg-[#1A2A40]/20'}`}
                  ></div>
                  <div 
                    onClick={() => setActiveSlide(1)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${activeSlide === 1 ? 'bg-[#D47D5A]' : 'bg-[#1A2A40]/20'}`}
                  ></div>
                  <div 
                    onClick={() => setActiveSlide(2)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${activeSlide === 2 ? 'bg-[#D47D5A]' : 'bg-[#1A2A40]/20'}`}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Partie droite - Interface de chat */}
            <div className="md:w-1/2 p-8 bg-white border-l border-[#1A2A40]/10">
              <h2 className="text-2xl font-bold mb-6">Interface Sotto</h2>
              <div className="flex flex-col h-[400px] border border-[#1A2A40]/20 rounded-lg overflow-hidden">
                {/* En-tête du chat */}
                <div className="bg-[#1A2A40] text-white p-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D47D5A]"></div>
                  <span>Sotto Assistant</span>
                </div>
                
                {/* Corps du chat */}
                <div className="flex-1 p-4 bg-[#F5F5F0] overflow-y-auto space-y-4 chat-container">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`${
                        message.role === "assistant" 
                          ? "bg-[#1A2A40]/10 ml-auto" 
                          : "bg-white"
                      } p-3 rounded-lg max-w-[80%]`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="bg-[#1A2A40]/10 p-3 rounded-lg max-w-[80%] ml-auto">
                      <div className="flex space-x-2 justify-center items-center h-5">
                        <div className="w-2 h-2 bg-[#D47D5A] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#D47D5A] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-[#D47D5A] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Pied du chat avec input */}
                <div className="p-3 border-t border-[#1A2A40]/20 bg-white">
                  <form onSubmit={sendMessage} className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Dictez votre commande ici..." 
                      className="flex-1 p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      disabled={isLoading}
                    />
                    <button 
                      type="submit" 
                      className="bg-[#D47D5A] text-white p-3 rounded-md hover:bg-[#D47D5A]/90 transition-colors disabled:opacity-50"
                      disabled={isLoading || !inputMessage.trim()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13"></path>
                        <path d="M22 2L15 22 11 13 2 9 22 2z"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#505A64] text-center">Cette démonstration simule l'interface vocale Sotto. Dans un environnement réel, vous utiliseriez une oreillette discrète.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-terracotta/10 text-terracotta text-sm font-medium mb-4">
                Démonstration
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Découvrez Sotto en action</h1>
              <p className="text-lg text-[#505A64] mb-6">
                Prêt à transformer votre restaurant ? Demandez une démonstration personnalisée et découvrez comment Sotto peut s'adapter à votre établissement.
              </p>
              <p className="text-lg text-[#505A64] mb-8">
                Notre équipe vous accompagnera à chaque étape de l'implémentation, de la configuration initiale à la formation de votre personnel.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#505A64]">Démonstration personnalisée selon vos besoins</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#505A64]">Installation et configuration incluses</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#505A64]">Formation complète de votre équipe</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#505A64]">Support technique 7j/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#505A64]">Essai sans engagement pendant 30 jours</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Demandez votre démonstration</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-[#505A64] mb-1">Nom de l'établissement</label>
                    <input
                      id="restaurant"
                      type="text"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="Le nom de votre restaurant"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#505A64] mb-1">Email professionnel</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#505A64] mb-1">Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-[#505A64] mb-1">Taille de l'établissement</label>
                    <select
                      id="size"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="small">Petit (moins de 50 couverts)</option>
                      <option value="medium">Moyen (50-100 couverts)</option>
                      <option value="large">Grand (plus de 100 couverts)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#505A64] mb-1">Message (optionnel)</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                      placeholder="Précisez vos besoins spécifiques..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-[#505A64]">
                      J'accepte de recevoir des informations de Sotto concernant ma demande de démonstration et les services associés.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#D47D5A] text-white px-6 py-3 font-medium hover:bg-[#D47D5A]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Demander une démo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  
                  <p className="text-xs text-[#505A64] text-center">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Comment se déroule une démonstration ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Prise de contact</h3>
                <p className="text-[#505A64]">
                  Après votre demande, un expert Sotto vous contacte sous 24h pour comprendre vos besoins spécifiques et planifier une démonstration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Démonstration personnalisée</h3>
                <p className="text-[#505A64]">
                  Nous organisons une démonstration dans votre établissement ou en visioconférence, adaptée à votre contexte et vos enjeux spécifiques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Proposition sur mesure</h3>
                <p className="text-[#505A64]">
                  Suite à la démonstration, nous vous proposons une offre adaptée à vos besoins avec un plan d'implémentation détaillé.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 bg-blue-dark text-white p-10 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Vous préférez nous parler directement ?</h2>
                <p className="text-lg mb-6 text-white/80">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans votre projet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+33123456789" className="flex items-center gap-2 text-terracotta hover:text-terracotta/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+33 1 23 45 67 89</span>
                  </a>
                  <a href="mailto:contact@sottohq.ai" className="flex items-center gap-2 text-terracotta hover:text-terracotta/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>contact@sottohq.ai</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <a
                  href="/contact"
                  className="rounded-full bg-terracotta text-white px-6 py-3 text-center hover:bg-terracotta/90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Contactez-nous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
