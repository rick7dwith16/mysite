'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ['latin']
});

const ConfirmAge: React.FC = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      setName(userName.charAt(0).toUpperCase() + userName.slice(1));
    } else {
      router.push('/formulario');
    }
  }, [router]);

  const handleConfirm = () => {
    // Redireciona o usuário para uma nova página após a confirmação
    router.push('/privacy'); // substitua '/pagina-confirmada' pela rota desejada
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-6 text-center select-none">
        
        {/* Logo do Privacy */}
        <div className="flex justify-center mb-4">
          <img
            alt="Privacy logo"
            className="w-70 h-25"
            src="privacy-logo.webp"
          />
        </div>

        <h1 className={`${roboto.className} text-center font-semibold text-gray-900 text-lg mb-4`}>
          Olá, {name}!
        </h1>
        <p className="text-gray-500 text-xs leading-tight mb-6">
          Este conteúdo é destinado apenas para maiores<br />de 18 anos.<br />
          Você confirma que tem 18 anos ou mais?
        </p>
        <div className="flex gap-3 justify-center mb-4">
          <button
            className="flex-1 bg-white border border-gray-300 rounded-md py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
            onClick={() => router.push('/privacy')}
          >
            Não
          </button>
          <button
            className="flex-1 bg-orange-500 rounded-md py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
        <p className="text-xs text-gray-400 leading-tight">
          Ao continuar, você concorda com os<br />
          <a className="text-orange-500 underline" href="#">
            Termos de uso
          </a> e a <a className="text-orange-500 underline" href="#">
            Política de Privacidade
          </a> .
        </p>
      </div>
    </div>
  );
};

export default ConfirmAge;
