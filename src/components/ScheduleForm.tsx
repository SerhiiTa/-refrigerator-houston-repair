'use client'
import { useState } from 'react'

const TG_TOKEN = '7729286289:AAHLTyOGP7cs6K_GXCHsR1BFkMkOhzp3ovM'
const TG_CHAT_ID = '444284470'

export default function ScheduleForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    brand: '',
    issue: '',
    date: '',
    time: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const message = `
🔧 NEW SERVICE REQUEST — Refrigerator Houston Repair

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Address: ${form.address}
❄️ Brand: ${form.brand}
🗓 Date: ${form.date}
🕐 Time: ${form.time}
📝 Issue: ${form.issue}
    `.trim()

    try {
      const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', address: '', brand: '', issue: '', date: '', time: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-display font-bold text-green-800 text-xl mb-2">Request Sent!</h3>
        <p className="text-green-700">We will call you back shortly to confirm your appointment.</p>
        <button onClick={() => setStatus('idle')} className="btn-primary mt-4">Send Another Request</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            placeholder="(713) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Address *</label>
        <input
          type="text"
          name="address"
          required
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          placeholder="123 Main St, Katy, TX 77494"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Refrigerator Brand</label>
        <select
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select brand</option>
          {['Sub-Zero', 'Thermador', 'Viking', 'LG', 'Samsung', 'GE', 'Whirlpool', 'KitchenAid', 'Bosch', 'Other'].map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time</label>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            <option value="">Select time</option>
            <option value="7:00 AM - 10:00 AM">7:00 AM - 10:00 AM</option>
            <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
            <option value="1:00 PM - 4:00 PM">1:00 PM - 4:00 PM</option>
            <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Describe the Problem</label>
        <textarea
          name="issue"
          value={form.issue}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none"
          placeholder="What's happening with your refrigerator?"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please call us directly at (346) 512-3688.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center text-base py-4"
      >
        {status === 'sending' ? 'Sending...' : '📅 Schedule Service'}
      </button>
    </form>
  )
}
