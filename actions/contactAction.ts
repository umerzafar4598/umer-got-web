'use server'
import * as nodemailer from 'nodemailer'

type ContactState = {
    success: boolean | null;
    message: string;
};

export async function sendContact(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
        return { success: false, message: "All fields are required." }
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Message from ${name}`,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
        })

        return {
            success: true,
            message: 'Message sent successfully 🚀',
        }

    } catch (error) {
        console.error(error)
        return { success: false, message: 'Failed to send Email!' }
    }
}