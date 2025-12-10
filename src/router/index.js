import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "For you",
			component: () => import("@/views/index.vue"),
		},
		{
			path: "/neteaseNews",
			name: "Netease News",
			component: () => import("@/views/neteaseNews.vue"),
		},
	],
});

export default router;
