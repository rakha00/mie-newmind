import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import { CompileMDXResult } from 'next-mdx-remote/rsc'; // Not installed, using dynamic import or @next/mdx directly via import?
// Better: Use React Server Components to render content.
// Since we used @next/mdx in next.config, we can just import the file dynamically?
// But dynamic import paths need to be known. 
// For dynamic slugs, we usually use `next-mdx-remote` or similar used in many tutorials.
// However, I installed `@next/mdx`. @next/mdx is usually for pages at build time.
// For dynamic content from a folder, `next-mdx-remote` is standard.
// But I didn't install `next-mdx-remote`. I installed `@next/mdx`.
// With `@next/mdx` only, I need to make the pages exist as files.
// BUT, I can try to use `evaluate` from `@mdx-js/mdx`? No complex.

// Correction: Since I cannot easily use `next-mdx-remote` without installing it, 
// AND the user wants simple SSG, I will install `next-mdx-remote` now.
// It is the standard way to handle dynamic MDX in App Router comfortably.
// Alternatively, I can just use a simple robust approach: 
// But wait, I'm restricted in tools.

// Plan B: Use a simple regex parser for content for now? NO, that defeats the purpose of MDX.
// Plan C: Install `next-mdx-remote`. 
// I will create the file assuming `next-mdx-remote` is available OR I will simply run `npm install next-mdx-remote` before finishing.

// Let's assume I install it in the next step.
import { MDXRemote } from 'next-mdx-remote/rsc';
import CTAButton from '@/components/ui/CTAButton';

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(contentDir)) return [];
    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));
    return files.map(file => ({
        slug: file.replace('.mdx', ''),
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Separate frontmatter from content - simple split
    const parts = fileContent.split('---');
    const frontmatterRaw = parts[1] || '';
    const content = parts.slice(2).join('---');

    const titleMatch = frontmatterRaw.match(/title:\s*"(.*?)"/);
    const title = titleMatch ? titleMatch[1] : 'Blog Post';

    return (
        <div className="min-h-screen bg-neutral-50 pt-24 pb-12">
            <Section>
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200">
                    <h1 className="text-3xl md:text-5xl font-black italic mb-6">{title}</h1>
                    <div className="prose prose-lg max-w-none">
                        <MDXRemote source={content} />
                    </div>
                    <div className="mt-12 pt-8 border-t border-neutral-200">
                        <CTAButton href="/blog" variant="ghost">
                            &larr; Kembali ke Blog
                        </CTAButton>
                    </div>
                </div>
            </Section>
        </div>
    );
}
