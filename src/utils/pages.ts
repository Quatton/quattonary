export const pages = Array.from({ length: 21 }, (_, i) => ({
	id: i + 1,
	cover: null as string | null,
	slug: "notyet",
	color: null as string | null,
	name: (i + 1).toString(),
}));
pages[17] = {
	...pages[17],
	cover: "logos:astro",
	slug: "astrabout",
	name: "Astrabout",
};
pages[0] = {
	...pages[0],
	cover: "noto:books",
	slug: "https://books.quattonary.com",
	name: "Quatton Books",
};
pages[1] = {
	...pages[1],
	cover: "noto:party-popper",
	slug: "hny/facts",
	name: "HNY",
};
pages[2] = {
	...pages[2],
	cover: "logos:flutter",
	slug: "https://github.com/Quatton/intune",
	name: "Intune",
};
pages[10] = {
	...pages[10],
	cover: "teenyicons:flag-solid",
	color: "#c41230",
	slug: "https://qtnbd.notion.site/CTF-Write-ups-Archives-ed5a5ac875a54862bb330b1b4a5e0521",
	name: "CTF Archives",
};
for (const idx of [4, 8, 9, 13, 14, 15, 19]) {
	pages[idx - 1] = {
		...pages[idx - 1],
		slug: "toosmall",
		name: "",
	};
}
