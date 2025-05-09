'use client';

import Image from 'next/image';
import Head from 'next/head';
import { User, MessageSquare, Heart } from 'lucide-react';

export default function Privacy() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-site.png" type="image/png" />
        <title>Maya Alencar | Privacy</title>
      </Head>

      {/* LOGO */}
      <header>
        <div className="flex justify-center">
          <Image
            src="/privacy-logo.webp"
            alt="Logo do Privacy"
            width={90}
            height={28}
          />
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-md mx-auto px-4 mt-4">
        {/* BANNER COM STATUS */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/capa-maya.jpg"
            alt="Capa"
            width={800}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-4 text-white">
            <h2 className="text-xl font-bold drop-shadow">Maya Alencar</h2>
            <div className="flex gap-4 mt-1 text-sm drop-shadow">
              <div className="flex items-center gap-1">
                <User size={14} /> <span>258</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={14} /> <span>154</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={14} /> <span>282</span>
              </div>
            </div>
          </div>
        </div>

        {/* AVATAR SOBREPOSTO */}
        <div className="relative w-full -mt-10 flex justify-start pl-6 z-10">
          <div className="w-[104px] h-[104px] rounded-full border-4 border-white shadow-lg overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={104}
              height={104}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* CAIXA DE DESCRIÇÃO */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Maya Alencar</h3>
          <p className="text-sm text-gray-500">@mayaalencar</p>
          <p className="mt-4 text-sm text-gray-800 leading-relaxed">
            Fala, galera! Aqui é a Maya Alencar, e eu tô MUITO animada pra dividir com vocês uma nova fase super especial no meu Privacy.
            Esse é o meu espaço exclusivo, sem filtros, onde rola um conteúdo 100% real, feito com muita entrega e pensado pra quem realmente quer me conhecer de verdade.
            Tem vídeos íntimos, experiências intensas e momentos que você só vai ver por aqui.
            É uma conexão direta, sem censura, do jeito que você curte. Bora viver tudo isso juntos? Tá só começando...🔥
          </p>
        </div>
      </main>
    </>
  );
}
