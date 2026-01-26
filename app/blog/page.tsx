import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { notFound } from 'next/navigation';

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

        return {
            slug: file.replace('.mdx', ''),
            title: titleMatch ? titleMatch[1] : 'No Title',
            date: dateMatch ? dateMatch[1] : '',
            excerpt: excerptMatch ? excerptMatch[1] : '',
        };
    });

    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="bg-primary text-white pt-24 pb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black italic mb-4">BLOG CERITA</h1>
                <p className="text-xl opacity-90">Baca-baca dikit biar pinteran dikit.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <Card
                                title={post.title}
                                className="h-full hover:border-primary border-transparent border-2"
                            >
                                <div className="text-sm text-neutral-500 mb-2">{post.date}</div>
                                <p className="text-neutral-600">{post.excerpt}</p>
                                <div className="mt-4 text-primary font-bold">Baca Selengkapnya &rarr;</div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
