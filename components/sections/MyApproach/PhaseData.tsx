
import { FiOctagon, FiDatabase } from "react-icons/fi";
import { LuDiamond } from "react-icons/lu";

export interface Phase {
    id: string;
    icon: React.JSX.Element;
    label: string;
    tag: string;
    headline: string;
    teaser: string;
    colors: number[][];
    dotSize: number;
    animationSpeed: number;
    modalContent: {
        sections: { title: string; body: string }[];
    };
}


export const phases: Phase[] = [
    {
        id: "frontend",
        icon: <FiOctagon className="text-accent" size={26} />,
        label: "Frontend",
        tag: "UI / UX",
        headline: "Structure Before Style",
        teaser:
            "Good frontend starts with a question: what does the user actually need to do?",
        colors: [[125, 211, 252]], // sky blue
        dotSize: 3,
        animationSpeed: 5,
        modalContent: {
            sections: [
                {
                    title: "Map the component tree first",
                    body: "Before writing a single line of CSS, I sketch the component tree — what's a container, what's presentational, where does state live. I ask: what's the minimum number of components I need for this to work? Then I build exactly that.",
                },
                {
                    title: "State lives as high as it needs to, no higher",
                    body: "I follow one rule: lift state only when two components genuinely need it. Global state (Redux, Context) is a last resort, not a default. Most state bugs come from state that escaped its rightful owner.",
                },
                {
                    title: "Styling is the last thing I think about",
                    body: "Styling is the last phase, not the first. A component that doesn't work yet has no business looking good. Once the logic is solid and the data flows correctly, I style it — utility-first with Tailwind, responsive from the start, accessible by default.",
                },
                {
                    title: "Performance is a feature",
                    body: "I lazy-load routes, memo expensive computations, avoid unnecessary re-renders, and keep bundle sizes honest. Users on slower connections deserve a fast experience too.",
                },
            ],
        },
    },
    {
        id: "backend",
        icon: <LuDiamond className="text-primary" size={26} />,
        label: "Backend",
        tag: "API / Server",
        headline: "Boring, Predictable Plumbing",
        teaser:
            "The backend is a gatekeeper — it decides what data goes in, what comes out, and who's allowed in.",
        colors: [[167, 243, 208]], // emerald green
        dotSize: 2,
        animationSpeed: 3,
        modalContent: {
            sections: [
                {
                    title: "Define the contract before writing routes",
                    body: "I design the API contract first — what endpoints exist, what they accept, what they return, and what errors they can produce. Routes are just the address; the contract is the promise. A well-designed contract makes the frontend and backend nearly independent.",
                },
                {
                    title: "Separate concerns ruthlessly",
                    body: "Routes handle HTTP. Controllers handle input validation and orchestration. Services handle business logic. The database layer handles persistence. I keep these boundaries strict. When they blur, every bug becomes a treasure hunt.",
                },
                {
                    title: "Auth is not an afterthought",
                    body: "Authentication and authorization are the first things I wire up, not the last. Who is this user? What are they allowed to do? These questions shape every route design. I use session-based auth or JWTs depending on the deployment model — and I never trust client-supplied data.",
                },
                {
                    title: "Error handling is the real product",
                    body: "Good backend code is 20% happy path and 80% handling what goes wrong. Every route has explicit error boundaries. I return meaningful status codes and messages — not just 500s with stack traces leaking into production.",
                },
            ],
        },
    },
    {
        id: "database",
        icon: <FiDatabase className="text-amber-500" size={26} />,
        label: "Database",
        tag: "SQL / PostgreSQL",
        headline: "Schema Design Is Product Design",
        teaser:
            "The database schema is a decision that lives forever. A bad one shapes every query, every API, and every feature that comes after.",
        colors: [[253, 186, 116]], // amber orange
        dotSize: 4,
        animationSpeed: 4,
        modalContent: {
            sections: [
                {
                    title: "Model the real world, not the current ticket",
                    body: "I start schema design by understanding the domain — the actual relationships between things in the real world — not just the immediate feature. A users table built only for login will need to be redesigned the moment profiles, roles, or teams enter the picture.",
                },
                {
                    title: "Normalize first, denormalize deliberately",
                    body: "I start normalized. 3NF by default — no redundant data, every fact in one place. If a query becomes genuinely painful after optimization, I denormalize that specific case consciously, document why, and keep the rest clean.",
                },
                {
                    title: "Indexes are not free, but neither is a slow query",
                    body: "I think about read vs. write patterns before adding indexes. Every index speeds up reads and slows down writes. I add indexes where query plans need them, measure with EXPLAIN ANALYZE, and don't guess.",
                },
                {
                    title: "Migrations are the changelog of your data model",
                    body: "Every schema change is a migration — never a manual ALTER TABLE in production. Migrations are reviewed, versioned, and reversible where possible. The history of a schema tells the story of a product.",
                },
            ],
        },
    },
];