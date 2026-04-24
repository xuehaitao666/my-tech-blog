// 站点与作者信息；部署前请把 astro.config.mjs 里的 `site` 改为你的实际域名

export const SITE_TITLE = '技术随想';
export const SITE_DESCRIPTION = '记录学习与实践中的技术笔记与心得。';
export const PAGE_INDEX_TITLE = '首页';
export const PAGE_BLOG_TITLE = '文章';
export const PAGE_ABOUT_TITLE = '关于';

export const AUTHOR_NAME = '你的名字';

/** 选填。填写后页眉/页脚会显示对应链接；空字符串则隐藏该项 */
export const SOCIAL = {
	github: '' as string,
} as const;
