'use client';

import CreatorHeader from '../components/CreatorHeader'; // depende da estrutura de pastas
import SubscriptionPlans from '../components/SubscriptionPlans'; // ajuste o caminho conforme necessário
import LockedPost from '../components/LockedPost';
import { Plan } from '@types';

const plans: Plan[] = [
  {
    id: '1',
    label: '1 mês',
    price: 'R$ 29,90',
    highlight: true,
    checkoutUrl: 'https://seusite.com/checkout?plan=1',
  },
  {
    id: '2',
    label: '3 meses (Economize)',
    price: 'R$ 74,90',
    checkoutUrl: 'https://seusite.com/checkout?plan=3',
  },
  {
    id: '3',
    label: '12 meses (Melhor valor)',
    price: 'R$ 249,90',
    checkoutUrl: 'https://seusite.com/checkout?plan=12',
  },
];

export default function CreatorPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-2xl mx-auto px-4">
        <CreatorHeader />
        <SubscriptionPlans plans={plans} />
        <LockedPost />
      </div>
    </div>
  );
}
