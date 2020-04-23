module.exports = {
	base: '/jsx/',
	dest: 'docs/site',
	markdown: {
		lineNumbers: true
	},
	title: 'JSX',
	description: 'TODO',
	head: [
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'shortcut icon', type: 'image/png', href: '/favicon.ico' }],
		['meta', { name: 'theme-color', content: '#001935' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: 'icons/apple-touch-icon-152x152.png' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: 'icons/msapplication-icon-144x144.png' }
		],

		['meta', { name: 'msapplication-TileColor', content: '#001935' }]
	],
	plugins: [
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true
			}
		],
		'@vuepress/back-to-top',
		'@vuepress/nprogress'
	],
	themeConfig: {
		repo: 'yoriiis/jsx',
		repoLabel: 'Github',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Edit this page',
		smoothScroll: true,
		nextLinks: true,
		prevLinks: true,
		lastUpdated: 'Last Updated',
		searchPlaceholder: 'Search...',
		search: true,
		searchMaxSuggestions: 10,
		activeHeaderLinks: false,
		displayAllHeaders: false,
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Learn more',

				items: [
					{
						text: 'Miscellaneous',
						items: [
							{
								text: 'Changelog',
								link: 'https://github.com/yoriiis/jsx/blob/master/CHANGELOG.md'
							}
						]
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'',
						['getting-started', 'Getting started'],
						['how-it-works', 'How it works'],
						['jsx-features', 'JSX features']
					]
				}
			]
		}
	}
}
