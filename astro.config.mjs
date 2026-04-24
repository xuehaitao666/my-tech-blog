// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

/** 在 GitHub Actions 里会设 GITHUB_REPOSITORY=owner/name；项目页在 https://owner.github.io/name/ */
const repoFull = process.env.GITHUB_REPOSITORY ?? '';
const m = repoFull.match(/^([^/]+)\/([^/]+)$/);
const ghOwner = m ? m[1] : '';
const ghRepo = m ? m[2] : '';
const inGithubCI = process.env.CI === 'true' && Boolean(ghOwner && ghRepo);
const isUserOrOrgPage = inGithubCI && ghRepo === `${ghOwner}.github.io`;
// 非 CI（本地）默认 '/'；CI 时项目仓库要带 /reponame，用户/组织主页仓库则根路径
// Vite 的 import.meta.env.BASE_URL 以 / 结尾，保持与之一致
const base =
	inGithubCI && !isUserOrOrgPage && ghRepo ? `/${ghRepo}/` : '/';
// 在仓库 Settings → Pages 用 GitHub Actions 发布后，公网域名为 owner.github.io（子路径由 base 决定）
const site =
	inGithubCI && ghOwner
		? `https://${ghOwner}.github.io`
		: (process.env.SITE ?? 'https://example.com');

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
