"use client"

import { useEffect } from "react"
import AOS from "aos"

const AosWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 650,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        })
    }, [])

    return <>{children}</>
}

export default AosWrapper