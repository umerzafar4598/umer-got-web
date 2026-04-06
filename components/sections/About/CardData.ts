
export interface CardDataType {
    title: string
    content: string
    icon: "code" | "rocket" | "target"
    color: 'primary' | 'accent'
}
const cardData: CardDataType[] = [
    {
        title: 'Clean Code Advocate',
        content: "I write readable, maintainable code that follows best practices and industry standards. Quality over quantity, always.",
        icon: "code",   // ✅ string instead of component
        color: 'primary'
    },
    {
        title: 'Fast Learner',
        content: "Technology evolves rapidly, and so do I. I'm constantly learning new tools, frameworks, and techniques to stay ahead of the curve.",
        icon: "rocket",
        color: 'accent'
    },
    {
        title: 'Problem Solver',
        content: "Every bug is a puzzle, every feature is a challenge. I thrive on finding elegant solutions to complex problems.",
        icon: "target",
        color: 'primary'
    },
]

export default cardData