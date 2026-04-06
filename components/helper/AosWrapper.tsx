"use client"

import { useEffect } from "react"
import AOS from "aos"

const AosWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 500, // animation duration in ms
            easing: "ease-in-out", // easing function
            once: true, // animate only once
            mirror: false, // animate again on scroll up
        })
    }, [])

    return <>{children}</>
}

export default AosWrapper