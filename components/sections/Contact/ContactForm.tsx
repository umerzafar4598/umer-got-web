'use client'

import { FiSend } from "react-icons/fi";
import { useActionState, useEffect } from "react"
import { motion } from 'motion/react'
import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"
import { sendContact } from "@/actions/contactAction";


const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <motion.button
            whileHover={{ y: -2.5 }}
            type="submit"
            disabled={pending}
            className={`w-full flex items-center justify-center gap-2 ${pending
                ? 'bg-gray-600/5 text-white text-center px-6 py-3 rounded-xl font-medium'
                : ' btn-primary'}`}
        >
            <FiSend size={20} />
            {pending ? 'Sending...' : 'Send Message'}
        </motion.button>
    )
}


const ContactForm = () => {
    const [state, formAction] = useActionState(sendContact, {
        success: null,
        message: '',
    })
    useEffect(() => {
        if (state.success === true) {
            toast.success(state.message);
        }
        if (state.success === false) {
            toast.error(state.message);
        }
    }, [state]);
    return (
        <div className="bg-white/5 rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form
                action={formAction}
                className="space-y-6"
            >
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Message Input */}
                <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Hello Umer, I'd like to discuss..."
                    />
                </div>
                {/* Submit Button */}
                <SubmitButton />
            </form>
        </div>
    )
}

export default ContactForm
