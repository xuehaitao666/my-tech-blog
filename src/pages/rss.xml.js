import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { withTrailingBase } from '../lib/basePath';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const b = withTrailingBase();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `${b}blog/${post.id}/`,
		})),
	});
}
