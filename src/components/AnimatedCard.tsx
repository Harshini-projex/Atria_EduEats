'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function AnimatedCard({ children, className = '', onClick }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
} 