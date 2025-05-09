'use client';

import { Plan } from '@types';

interface Props {
  plans: Plan[]; // Definindo que o componente espera um array de objetos 'Plan'
}

export default function SubscriptionPlans({ plans }: Props) {
  return (
    <div className="card bg-white mt-4 rounded-lg shadow p-4">
      <div className="card-header mb-4">
        <h3 className="text-lg font-semibold text-black">Assinaturas</h3>
      </div>

      <div className="card-content space-y-4">
        {/* Botão para 1 mês (botão principal com animação pulsando infinitamente) */}
        <a href="https://global.tribopay.com.br/ldnzc5ruwg" className="block">
          <button className="w-full flex justify-between items-center px-4 py-3 rounded-md bg-orange-500 text-white font-semibold pulse-click-infinite transition hover:bg-orange-600">
            <span>1 mês</span>
            <span className="price">R$ 29,90</span>
          </button>
        </a>

        <div className="promotions mt-6 space-y-2">
          <div className="promotions-header flex items-center justify-between mb-2">
            <h4 className="font-medium text-black">Promoções</h4>
            <svg
              className="chevron"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Botão para 3 meses */}
          <a href="https://global.tribopay.com.br/6pmjhiuuj7" className="block mb-2">
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-md border border-orange-300 text-gray-700 hover:bg-gray-50 transition">
              <div className="flex items-center gap-2">
                <span>3 meses</span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Economia
                </span>
              </div>
              <span className="price text-orange-500 font-semibold">R$ 39,90</span>
            </button>
          </a>

          {/* Botão para 12 meses */}
          <a href="https://global.tribopay.com.br/h3cs4u43yh" className="block">
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-md border border-orange-300 text-gray-700 hover:bg-gray-50 transition">
              <div className="flex items-center gap-2">
                <span>12 meses</span>
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Melhor oferta
                </span>
              </div>
              <span className="price text-orange-500 font-semibold">R$ 59,90</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
