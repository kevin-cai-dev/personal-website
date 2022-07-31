import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const pageContentDirectory = join(process.cwd(), 'src/page-content');

export const getPost = (slug: string) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(pageContentDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
        frontmatter,
        content,
    };
};

export const getPosts = (dirSlug: string) => {
    const dirPath = join(pageContentDirectory, dirSlug);
    const files = fs.readdirSync(dirPath);

    return files.map((file) => {
        const fullPath = join(dirPath, file);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const { data: frontmatter, content } = matter(fileContents);

        return {
            frontmatter,
            content,
        };
    });
};
