'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEB3FORMS_ACCESS_KEY = '1d1567e8-21de-4bd4-b404-487d89b7630f'

// XSS Sanitization - escapes HTML entities and removes dangerous patterns
function sanitizeInput(input: string): string {
  if (!input) return ''

  return input
    // Remove null bytes
    .replace(/\0/g, '')
    // Escape HTML entities
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    // Remove javascript: and data: URLs
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    // Remove event handlers
    .replace(/on\w+\s*=/gi, '')
    // Trim whitespace
    .trim()
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(6)

  const resetForm = () => {
    setIsSubmitted(false)
    setCountdown(6)
    setError(null)
  }

  useEffect(() => {
    if (!isSubmitted) return
    setCountdown(6)
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          resetForm()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const rawFormData = new FormData(form)

    // Sanitize all form inputs
    const sanitizedData = new FormData()
    const name = sanitizeInput(rawFormData.get('name') as string)
    const email = sanitizeInput(rawFormData.get('email') as string)
    const company = sanitizeInput(rawFormData.get('company') as string)
    const service = sanitizeInput(rawFormData.get('service') as string)
    const budget = sanitizeInput(rawFormData.get('budget') as string)
    const message = sanitizeInput(rawFormData.get('message') as string)

    // Validate required fields
    if (!name || name.length < 2) {
      setError('Please enter a valid name (at least 2 characters).')
      setIsSubmitting(false)
      return
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    if (!message || message.length < 10) {
      setError('Please enter a message (at least 10 characters).')
      setIsSubmitting(false)
      return
    }

    // Build sanitized form data
    sanitizedData.append('name', name)
    sanitizedData.append('email', email)
    sanitizedData.append('company', company)
    sanitizedData.append('service', service)
    sanitizedData.append('budget', budget)
    sanitizedData.append('message', message)
    sanitizedData.append('access_key', WEB3FORMS_ACCESS_KEY)
    sanitizedData.append('subject', `New Contact Form Submission from ${name}`)
    sanitizedData.append('from_name', 'AFOT Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: sanitizedData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        {/* Success icon with pulse */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.4)]">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h3>
        <p className="text-gray-400 mb-2">We&apos;ll get back to you within 24 hours.</p>
        <p className="text-gray-500 text-sm mb-6">Form resets in <span className="text-violet-400 font-semibold">{countdown}s</span></p>

        {/* Progress bar */}
        <div className="w-48 h-1 mx-auto rounded-full bg-white/5 overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 6, ease: 'linear' }}
          />
        </div>

        <button
          onClick={resetForm}
          className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Honeypot field for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white focus:outline-none focus:border-neon-purple transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Cloud Solutions">Cloud Solutions</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Tech Consulting">Tech Consulting</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white focus:outline-none focus:border-neon-purple transition-colors"
        >
          <option value="">Select budget range</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
          <option value="$50,000+">$50,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-dark-deeper border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

