import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Section from '@/components/ui/Section';

export default async function BlogPage() {
    const contentDir = path.join(process.cwd(), 'content', 'blog');

    if (!fs.existsSync(contentDir)) {
        return (
            <Section className="text-center py-20">
                <h1 className="text-4xl font-bold mb-4">Belum Ada Artikel</h1>
                <p>Cek lagi nanti ya!</p>
            </Section>
        );
    }

    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));

    const posts = files.map(file => {
        const filePath = path.join(contentDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Simple frontmatter parser (regex based for simplicity without heavy libs)
        const titleMatch = content.match(/title:\s*"(.*?)"/);
        const dateMatch = content.match(/date:\s*"(.*?)"/);
        const excerptMatch = content.match(/excerpt:\s*"(.*?)"/);

        const rawDate = dateMatch ? dateMatch[1] : '';
        const formattedDate = rawDate
            ? new Date(rawDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            : '';

        return {
            slug: file.replace('.mdx', ''),
            title: titleMatch ? titleMatch[1] : 'No Title',
            date: formattedDate,
            excerpt: excerptMatch ? excerptMatch[1] : '',
        };
    });

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header Section from Menu Template */}
            <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-18 text-center text-white overflow-hidden border-b-4 border-primary">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="#e43b8a" />
                                <circle cx="0" cy="0" r="1.5" fill="#e43b8a" />
                                <circle cx="40" cy="0" r="1.5" fill="#e43b8a" />
                                <circle cx="0" cy="40" r="1.5" fill="#e43b8a" />
                                <circle cx="40" cy="40" r="1.5" fill="#e43b8a" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        #e43b8a 10px,
                        #e43b8a 11px
                    )`
                }}></div>

                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>

                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-black italic mb-3 tracking-tight drop-shadow-lg">
                        BLOG CERITA
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-neutral-300">
                        Baca-baca dikit biar pinteran dikit.
                    </p>
                </div>
            </div>

            <Section className="relative z-20 -mt-10 pt-20 pb-8 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                            <article className="h-full bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="mb-4">
                                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{post.date}</div>
                                    <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h2>
                                </div>
                                <p className="text-neutral-500 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                    Baca Selengkapnya
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
