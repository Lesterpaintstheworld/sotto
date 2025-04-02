'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthButton() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#505A64]">
          {user.name}
        </span>
        <button
          onClick={handleLogout}
          className="text-sm text-[#D47D5A] hover:text-[#D47D5A]/80 transition-colors"
        >
          Déconnexion
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="text-sm text-[#D47D5A] hover:text-[#D47D5A]/80 transition-colors"
    >
      Connexion
    </Link>
  );
}
