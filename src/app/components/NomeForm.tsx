'use client';

import { useState } from 'react';

type Props = {
  onNext: () => void; // função para avançar para a próxima etapa
  setNome: (nome: string) => void; // salva o nome no estado global/contexto
};

export default function NomeForm({ onNext, setNome }: Props) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Por favor, insira seu nome.');
      return;
    }

    setError('');
    setNome(name);
    onNext(); // avança para a próxima etapa (ex: confirmação de idade)
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <label htmlFor="name" className="text-lg font-medium">Digite seu nome:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2"
        placeholder="Ex: João"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}
