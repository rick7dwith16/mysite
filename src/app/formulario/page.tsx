'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ['latin']
});
const PrivacyForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>(''); // estado para mensagem de erro
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Por favor, digite seu nome.');
      return;
    }

    setError('');
    localStorage.setItem('userName', name);
    router.push('/confirmacao');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-6">
        <div className="flex justify-center mb-4">
          <img
            alt="Privacy logo"
            className="w-70 h-25"
            src="privacy-logo.webp"
          />
        </div>
        <h1 className={`${roboto.className} text-center font-semibold text-gray-900 text-lg mb-4`}>
          Como podemos te chamar?
        </h1>



        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Seu nome
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Mensagem de erro */}
          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <button
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition-colors"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrivacyForm;
