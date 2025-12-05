import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Send, Loader2, MessageCircle } from "lucide-react"

export default function ContactCTA() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
    const [status, setStatus] = useState("idle")

    const submit = async (e) => {
        e.preventDefault()
        setStatus("submitting")
        try {
            await axios.post(import.meta.env.VITE_API_URL + "/api/leads", form)
            setStatus("success")
            setForm({ name: "", email: "", phone: "", message: "" }) // Clear form
        } catch (err) {
            console.error(err)
            setStatus("error")
        }
    }

    return (
        <section className="py-24 bg-transparent relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">

                    <div className="p-10 md:w-1/2 text-white flex flex-col justify-between relative bg-indigo-900/50">
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full -mr-16 -mb-16 blur-3xl"></div>

                        <div>
                            <h3 className="text-3xl font-extrabold mb-4">Start Your Project Today</h3>
                            <p className="text-indigo-200 mb-8">
                                Have an idea? We're ready to help. Send us a message or chat with us on WhatsApp for instant support.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/15550000000" // Replace with real number
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold inline-flex items-center w-max transition-colors shadow-lg"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                        </a>
                    </div>

                    <div className="p-10 md:w-1/2 bg-transparent">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400 text-3xl">✓</div>
                                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                                <p className="text-slate-300 mt-2">We'll get back to you shortly.</p>
                                <button onClick={() => setStatus("idle")} className="mt-4 text-indigo-400 text-sm font-bold underline">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Name</label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                        placeholder="Your Name"
                                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Email</label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all text-white placeholder-slate-500"
                                        placeholder="john@example.com"
                                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Message</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all resize-none text-white placeholder-slate-500"
                                        placeholder="Tell us about your project..."
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center shadow-lg transform hover:translate-y-px"
                                >
                                    {status === "submitting" ? <Loader2 className="animate-spin h-5 w-5" /> : "Send Request"}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
