import html from '@/assets/skills-image/html-svgrepo-com.svg'
import css from '@/assets/skills-image/css-svgrepo-com.svg'
import javascript from '@/assets/skills-image/javascript-svgrepo-com.svg'
import typescript from '@/assets/skills-image/typescript-svgrepo-com.svg'
import react from '@/assets/skills-image/react.svg'
import nextjs from '@/assets/skills-image/nextjs-icon.svg'
import tailwind from '@/assets/skills-image/tailwind-svgrepo-com.svg'
import nodejs from '@/assets/skills-image/nodejs-icon-svgrepo-com.svg'
import postgresql from '@/assets/skills-image/postgresql-svgrepo-com.svg'
import drizzle from '@/assets/skills-image/drizzle.svg'
import git from '@/assets/skills-image/git-svgrepo-com.svg'
import postman from '@/assets/skills-image/postman-icon-svgrepo-com.svg'

const skillImageMap: Record<string, any> = {
    "html": html,
    "css": css,
    "javascript": javascript,
    "typescript": typescript,
    "react": react,
    "next.js": nextjs,
    "tailwind css": tailwind,
    "node.js": nodejs,
    "postgresql": postgresql,
    "drizzle orm": drizzle,
    "git": git,
    "postman": postman,
}

export const skillImage = (id: string) => {
    return skillImageMap[id.toLowerCase()] || null
}