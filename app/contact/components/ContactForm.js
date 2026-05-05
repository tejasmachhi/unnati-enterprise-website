'use client'

import { useState } from 'react'
import './ContactForm.scss'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-form-wrapper">
      <h2 className="section-title">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">Full Name *</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="contact-form__input" />
      </div>
      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">Email Address *</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="contact-form__input" />
      </div>
      <div className="contact-form__group">
        <label htmlFor="phone" className="contact-form__label">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="contact-form__input" />
      </div>
      <div className="contact-form__group">
        <label htmlFor="subject" className="contact-form__label">Subject *</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="contact-form__input" />
      </div>
      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">Message *</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="contact-form__input" />
      </div>
      <button type="submit" className="contact-form__button">Send Message</button>
      </form>
    </div>
  )
}
