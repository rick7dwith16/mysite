'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Lock, MessageCircle, Heart, Eye } from 'lucide-react'

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'media'>('posts')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-4 px-2">
      {/* Tabs */}
      <div className="flex w-full max-w-md rounded-md overflow-hidden text-sm mb-4 shadow-sm border">
        <button
          onClick={() => setActiveTab('posts')}
          className={`w-1/2 py-2 text-center transition-all ${
            activeTab === 'posts'
              ? 'bg-orange-50 text-orange-500 font-medium'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          93 postagens
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`w-1/2 py-2 text-center transition-all ${
            activeTab === 'media'
              ? 'bg-orange-50 text-orange-500 font-medium'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          412 mídias
        </button>
      </div>

      {/* Post */}
      <div className="bg-white rounded-xl shadow-sm w-full max-w-md overflow-hidden border">
        {/* Header do Post */}
        <div className="flex items-center px-4 py-3 gap-3">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-black">Maya Alencar</span>
            <span className="text-black text-xs">@mayaalencar</span>
          </div>
          <div className="ml-auto text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6-2a2 2 0 100 4 2 2 0 000-4zm6 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* Conteúdo do post */}
        <div className="relative w-full h-[480px] bg-black">
          <video
            src="/video-capa.mp4"
            className="w-full h-full object-cover blur-x3"
            autoPlay
            muted
            loop
          />

          {/* Ícone cadeado central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 rounded-full p-2">
              <Lock className="text-gray-700 h-6 w-6" />
            </div>
          </div>

          {/* Reações sobrepostas */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-3 py-1 flex items-center gap-4 text-xs shadow-md">
            <div className="flex items-center gap-1 text-gray-700">
              <Eye className="h-4 w-4" /> <span>258</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <MessageCircle className="h-4 w-4" /> <span>154</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <Heart className="h-4 w-4" /> <span>269</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}