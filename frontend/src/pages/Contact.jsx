import { useState } from "react"
import axios from "axios"

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    await axios.post(import.meta.env.VITE_API_URL + "/api/leads", form)
    setDone(true)
  }

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      {done ? (
        <p className="mt-6 text-green-600">Thank you! We’ll contact you soon.</p>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className="w-full border p-3" placeholder="Name"
            value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />

          <input className="w-full border p-3" placeholder="Email"
            value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />

          <input className="w-full border p-3" placeholder="Phone"
            value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />

          <textarea className="w-full border p-3" placeholder="Message"
            value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />

          <button className="bg-indigo-600 text-white px-6 py-3 rounded">
            Send
          </button>
        </form>
      )}
    </div>
  )
}
