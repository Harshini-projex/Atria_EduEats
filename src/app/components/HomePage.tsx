'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Education and Food"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6">Academic Harmony</h1>
            <p className="text-2xl mb-8">Empowering Atria IT Students</p>
            <Link
              href="/education"
              className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Atria Edueats Experience</h2>
          <h3 className="text-xl text-gray-600 mb-8">Our Story</h3>
          <p className="text-lg text-gray-700">
            Embark on a journey where academia meets dining excellence. Atria Edueats brings together the best of both worlds, 
            offering students a unique blend of academic support and culinary delights to enrich their learning experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Academic Services */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Academic Services</h3>
            <h4 className="text-xl font-semibold text-indigo-600 mb-4">BRAINBOARD</h4>
            <p className="text-gray-700">
              BRAINBOARD is a student-centered academic dashboard that provides comprehensive profiles, 
              result tracking, attendance monitoring, and resources tailored to enhance students' learning journeys.
            </p>
          </div>

          {/* Food Services */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Food Services</h3>
            <h4 className="text-xl font-semibold text-indigo-600 mb-4">CAMPUS BITES</h4>
            <p className="text-gray-700">
              CAMPUS BITES elevates the dining experience with menu access, seamless ordering, 
              secure payments, and real-time order tracking across four distinct food outlets.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Modern Design */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Modern Design</h3>
              <h4 className="text-xl mb-4">Sleek & User-friendly</h4>
              <p className="text-gray-700">
                Our platform features modern UI/UX design infused with 3D visual elements, 
                ensuring an immersive and interactive experience that is perfectly optimized for mobile use.
              </p>
            </div>

            {/* Enhanced Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Enhanced Experience</h3>
              <h4 className="text-xl mb-4">Student-Centric Approach</h4>
              <p className="text-gray-700">
                We are committed to transforming the academic and dining experiences of Atria IT students 
                through innovative solutions that prioritize convenience, efficiency, and overall satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Academic Excellence */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-gray-700">
              Achieving academic milestones and fostering a culture of continuous learning among students.
            </p>
          </div>

          {/* Food Satisfaction */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Culinary Delights</h3>
            <p className="text-gray-700">
              Delivering delicious meals and exceptional dining experiences to students, faculty, and staff.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
            <p className="text-gray-700">
              Embracing cutting-edge technologies to revolutionize the academic and dining landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 