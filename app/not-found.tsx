import Link from "next/link";
import { Home, Mail, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-[#0f172a] relative overflow-hidden">

            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle 600px at 50% 50%, rgba(17, 131, 89, 0.3), transparent)",
                }}
            />

            {/* Glow Effect */}
            <div className="absolute w-125 h-125 bg-accent/10 blur-[120px] rounded-full top-1/4 left-1/2 -translate-x-1/2 z-0" />

            {/* Content */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

                <div className="text-center max-w-2xl">

                    {/* 404 */}
                    <h1 className="text-7xl sm:text-9xl font-bold text-accent mb-6">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
                        Page Not Found
                    </h2>

                    {/* Text */}
                    <p className="text-white mb-10 text-lg">
                        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                        Let&apos;s get you back on track.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link
                            href="/"
                            className="btn-primary inline-flex items-center gap-2 justify-center"
                        >
                            <Home size={18} />
                            Back to Home
                        </Link>

                        <Link
                            href="/#contact"
                            className="border border-accent text-accent hover:bg-accent hover:text-white transition px-6 py-3 rounded-lg inline-flex items-center gap-2 justify-center"
                        >
                            <Mail size={18} />
                            Contact Me
                        </Link>

                    </div>

                    {/* Back link */}
                    <div className="mt-10">
                        <Link
                            href="/"
                            className="text-sm text-muted-foreground hover:text-accent transition inline-flex items-center gap-2"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}