export const excludeRoute = (path) => {
	const excludePaths = ["/", "/sspai", "/weaterDate", "/NewsFeed", "/Disease"];
	return excludePaths.includes(path);
};
