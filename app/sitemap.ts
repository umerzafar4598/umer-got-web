import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://umer-got-web.vercel.app";
    return [
        { url: base, lastModified: new Date(), priority: 1, changeFrequency: "monthly" },
        // add /projects, /about, /contact, etc.
    ];
}