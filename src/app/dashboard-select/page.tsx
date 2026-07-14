'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DashboardSelectPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ff20ea227b1e1b6181d6e9ae82ad4247.jpg"
          alt="Atria EduEats Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10">
        <nav className="bg-white/80 shadow-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-indigo-600">Atria EduEats</h1>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => router.push('/')}
                  className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-white/80 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to Atria EduEats
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Choose your dashboard to continue
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Academic Dashboard Card */}
            <div 
              onClick={() => router.push('/education')}
              className="relative group bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Dashboard</h3>
                  <p className="text-gray-500">
                    Access your academic resources, track your progress, and manage your educational journey
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600">
                      Enter Academic Dashboard
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Dashboard Card */}
            <div 
              onClick={() => router.push('/food')}
              className="relative group bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Dashboard</h3>
                  <p className="text-gray-500">
                    Order food, explore menus, and track your orders from campus food outlets
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600">
                      Enter Food Dashboard
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 