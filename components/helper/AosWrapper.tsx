"use client"

import { useEffect } from "react"
import AOS from "aos"

const AosWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)

        AOS.init({
            duration: 650,
            easing: "ease-in-out",
            once: true,
            mirror: false,
            offset: 0,
        })
    }, [])

    return <>{children}</>
}

export default AosWrapper