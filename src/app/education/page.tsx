'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChatBubbleLeftRightIcon, DocumentTextIcon, AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import AnimatedCard from '@/components/AnimatedCard'

interface Discussion {
  id: number
  title: string
  participants: number
  lastActive: string
  avatar: string
}

interface QuestionPaper {
  id: number
  subject: string
  year: string
  semester: string
  scheme: string
}

const schemes = [
  '2022 scheme',
  '2021 CBCS scheme',
  '2018 CBCS scheme',
  '2017 CBCS scheme',
  '2015 CBCS scheme',
]

const discussions: Discussion[] = [
  { 
    id: 1, 
    title: 'Calculus Problem Discussion', 
    participants: 15,
    lastActive: '2 mins ago',
    avatar: '👨‍🏫'
  },
  { 
    id: 2, 
    title: 'Programming Study Group', 
    participants: 23,
    lastActive: '5 mins ago',
    avatar: '👩‍💻'
  },
  { 
    id: 3, 
    title: 'Physics Lab Preparation', 
    participants: 12,
    lastActive: '15 mins ago',
    avatar: '🔬'
  },
]

const questionPapers: QuestionPaper[] = [
  { id: 1, subject: 'Machine Learning', year: '2023', semester: '7th', scheme: '2018 CBCS scheme' },
  { id: 2, subject: 'Cloud Computing', year: '2023', semester: '7th', scheme: '2018 CBCS scheme' },
  { id: 3, subject: 'Big Data Analytics', year: '2023', semester: '7th', scheme: '2018 CBCS scheme' },
  { id: 4, subject: 'Web Technology', year: '2023', semester: '5th', scheme: '2018 CBCS scheme' },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export default function EducationDashboard() {
  const [activeDiscussion, setActiveDiscussion] = useState<number | null>(null)
  const [selectedScheme, setSelectedScheme] = useState<string>('2018 CBCS scheme')

  const filteredPapers = selectedScheme === 'All' 
    ? questionPapers 
    : questionPapers.filter(paper => paper.scheme === selectedScheme)

  const handleVTUSourceAccess = () => {
    window.open('https://www.vturesource.com/vtu-question-papers/CS/', '_blank')
  }

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center mb-8">
        <AcademicCapIcon className="h-8 w-8 text-blue-500 mr-3" />
        <h1 className="text-3xl font-bold">Education Dashboard</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Question Papers Section */}
        <motion.div variants={itemVariants}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-bold">VTU Question Papers</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVTUSourceAccess}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Access VTU Source
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </motion.button>
            </div>

            <div className="mb-4">
              <select
                className="w-full p-2 border rounded"
                value={selectedScheme}
                onChange={(e) => setSelectedScheme(e.target.value)}
              >
                <option value="All">All Schemes</option>
                {schemes.map((scheme) => (
                  <option key={scheme} value={scheme}>{scheme}</option>
                ))}
              </select>
            </div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {filteredPapers.map((paper) => (
                <AnimatedCard
                  key={paper.id}
                  onClick={handleVTUSourceAccess}
                  className="border hover:border-blue-500"
                >
                  <h3 className="font-semibold">{paper.subject}</h3>
                  <p className="text-sm text-gray-600">
                    {paper.semester} Semester - {paper.year}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Scheme: {paper.scheme}</p>
                  <div className="mt-2 text-blue-500 text-sm flex items-center">
                    View on VTU Source
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </div>
                </AnimatedCard>
              ))}
            </motion.div>

            <div className="mt-4 text-sm text-gray-600">
              <p>✓ Access to 200+ question papers per scheme</p>
              <p>✓ Updated with latest 2023 papers</p>
              <p>✓ Includes solved question papers</p>
            </div>
          </div>
        </motion.div>

        {/* Discussion Section */}
        <motion.div variants={itemVariants}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-bold">Student Discussions</h2>
            </div>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {discussions.map((discussion) => (
                <AnimatedCard
                  key={discussion.id}
                  onClick={() => setActiveDiscussion(discussion.id)}
                  className={`border ${
                    activeDiscussion === discussion.id ? 'border-green-500 bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{discussion.avatar}</span>
                    <div>
                      <h3 className="font-semibold">{discussion.title}</h3>
                      <p className="text-sm text-gray-600">
                        {discussion.participants} participants
                      </p>
                      <p className="text-xs text-gray-500">Active {discussion.lastActive}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
              onClick={() => window.alert('Starting new discussion...')}
            >
              Start New Discussion
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 