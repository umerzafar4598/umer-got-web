
import { FaRegHeart } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-400 text-lg">
                        <span className="text-primary"> © </span> {currentYear} Umer Zafar. All rights reserved.
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-gray-400 text-lg">
                        <span>Built with</span>
                        <FaRegHeart size={16} className="text-primary fill-primary animate-pulse" />
                        <span>using Next.js, TypeScript & Tailwind CSS</span>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer