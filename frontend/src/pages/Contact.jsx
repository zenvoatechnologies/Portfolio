import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import Ballpit from "../components/Ballpit"
import SEO from "../components/SEO"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [status, setStatus] = useState("idle") // idle, submitting, success, error

  const submit = async (e) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await axios.post(import.meta.env.VITE_API_URL.replace(/\/$/, "") + "/api/leads", form)
      setStatus("success")
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#060712] py-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contact Us"
        description="Get in touch with Zenvoa Technologies. We are ready to bring your digital vision to life."
        url="https://zenvoatechnologies.com/contact"
      />
      <Ballpit />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-4 backdrop-blur-md">
            Get in Touch
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-400">We'd love to hear from you. Send us a message today.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 text-white border border-white/10 overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/20 rounded-full opacity-50 blur-3xl p-events-none"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-300">Email</p>
                  <p className="text-white font-semibold">zenvoatechnologies@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-300">Phone 1</p>
                  <p className="text-white font-semibold">+91 9363978578</p>
                  <p className="font-medium text-slate-300">Phone 2</p>
                  <p className="text-white font-semibold">+91 7904729229</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-300">Office</p>
                  <p className="text-white font-semibold">Karur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 sm:p-10"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/50">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-indigo-400 font-medium hover:text-white transition-colors underline decoration-indigo-400/30 hover:decoration-white/50">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed border border-white/5"
                >
                  {status === "submitting" ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>Send Message <Send className="ml-2 h-5 w-5" /></>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
