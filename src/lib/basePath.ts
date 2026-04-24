/**
 * 与 import.meta.env.BASE_URL 相同，但保证以 `/` 结尾，便于与 `blog` 等片段安全拼接
 */
export function withTrailingBase(): string {
	const raw = import.meta.env.BASE_URL;
	if (raw == null || raw === '' || raw === '/') {
		return '/';
	}
	return raw.endsWith('/') ? raw : `${raw}/`;
}
