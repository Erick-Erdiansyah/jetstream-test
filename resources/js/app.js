import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
  // fallback for the title
	title: (title) => `Demo ${title}`,
	resolve: (name) => {
		const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
		// default layout
		let page = pages[`./Pages/${name}.vue`];
		if (page.default.layout === undefined) {
			page.default.layout = Layout;
		}
		return page;
	},
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			// global component
			.component("Head",Head)
			.component("Link",Link)
			.use(plugin)
			.mount(el);
	},
	progress: true,
});
