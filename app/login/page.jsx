'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Vérification simple pour la démo
    // En production, vous utiliseriez une API pour l'authentification
    if (email === 'team@sotto.ai' && password === 'password123') {
      login({
        email,
        name: 'Membre de l\'équipe',
        role: 'team'
      });
      router.push('/resources');
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#505A64] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#505A64] mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#D47D5A] text-white py-3 rounded-md hover:bg-[#D47D5A]/90 transition-colors"
            >
              Se connecter
            </button>
          </form>
          
          <p className="mt-4 text-sm text-center text-[#505A64]">
            Pour la démo: email = team@sotto.ai, mot de passe = password123
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
