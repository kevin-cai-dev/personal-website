import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const pageContentDirectory = join(process.cwd(), 'src/page-content');

export const getPost = (slug: string) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(pageContentDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
        data,
        content,
    };
};
