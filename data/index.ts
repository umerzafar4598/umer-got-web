export const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export type Skill = {
    name: string
    id: string
    category: "frontend" | "backend" | "tools" | "database"
}

export const skillsData: Skill[] = [
    { name: "HTML", id: "html", category: "frontend" },
    { name: "CSS", id: "css", category: "frontend" },
    { name: "JavaScript", id: "javascript", category: "frontend" },
    { name: "TypeScript", id: "typescript", category: "frontend" },
    { name: "React", id: "react", category: "frontend" },
    { name: "Next.js", id: "nextjs", category: "frontend" },
    { name: "Tailwind CSS", id: "tailwindcss", category: "frontend" },

    { name: "Node.js", id: "nodejs", category: "backend" },

    { name: "PostgreSQL", id: "postgresql", category: "database" },
    { name: "Drizzle ORM", id: "drizzle", category: "database" },

    { name: "Git", id: "git", category: "tools" },
    { name: "Postman", id: "postman", category: "tools" }
]