'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ff20ea227b1e1b6181d6e9ae82ad4247.jpg"
          alt="Atria EduEats Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10 text-center bg-white/80 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to Atria EduEats</h1>
        <Link 
          href="/login" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Login to Continue
        </Link>
      </div>
    </main>
  );
} 