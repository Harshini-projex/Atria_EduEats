'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AcademicDashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg"
          alt="Study Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Overlay to make content more readable */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <nav className="bg-white bg-opacity-90 shadow-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-indigo-600">Academic Dashboard</h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push('/dashboard-select')}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Switch Dashboard
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* VTU Resources Card */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">VTU Resources</h3>
                  <div className="mt-4">
                    <a 
                      href="https://www.vturesource.com/vtu-question-papers/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 block mb-2"
                    >
                      • VTU Question Papers
                    </a>
                    <a 
                      href="https://www.vturesource.com/vtu-syllabus/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 block mb-2"
                    >
                      • VTU Syllabus
                    </a>
                    <a 
                      href="https://www.vturesource.com/vtu-results/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 block"
                    >
                      • VTU Results
                    </a>
                  </div>
                </div>
              </div>

              {/* Academic Progress */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Academic Progress</h3>
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Current CGPA</span>
                      <span className="text-sm font-medium text-indigo-600">8.5</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Attendance</span>
                      <span className="text-sm font-medium text-indigo-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600">Credits Completed</span>
                      <span className="text-sm font-medium text-indigo-600">96/120</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Assignments */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Assignments</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex justify-between">
                      <span className="text-sm text-gray-600">Data Structures Project</span>
                      <span className="text-sm text-red-600">Due Tomorrow</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-sm text-gray-600">Web Development Lab</span>
                      <span className="text-sm text-yellow-600">Due in 3 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-sm text-gray-600">Python Assignment</span>
                      <span className="text-sm text-green-600">Due in 1 week</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Course Materials */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Course Materials</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-sm text-gray-600">Data Structures Notes</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-sm text-gray-600">Web Development Slides</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-sm text-gray-600">Python Tutorial Videos</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Engineer4Free Resources */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow col-span-full">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Engineer4Free Resources</h3>
                    <a 
                      href="https://www.engineer4free.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Visit Website →
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Core Engineering */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Core Engineering</h4>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.engineer4free.com/statics.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Engineering Statics
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/dynamics.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Engineering Dynamics
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/mechanics-of-materials.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Mechanics of Materials
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/structural-analysis.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Structural Analysis
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Mathematics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Mathematics</h4>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.engineer4free.com/calculus.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Calculus 1
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/calculus-2.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Calculus 2
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/linear-algebra.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Linear Algebra
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/differential-equations.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Differential Equations
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Programming & Others */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Programming & Others</h4>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://www.engineer4free.com/cpp-programming.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • C++ Programming
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/circuits.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Circuits
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/chemistry.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Chemistry
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.engineer4free.com/project-management.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 text-sm block"
                          >
                            • Project Management
                          </a>
                        </li>
                      </ul>
                    </div>
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