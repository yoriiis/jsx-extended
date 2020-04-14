module.exports = {
	themeConfig: {
		repo: 'yoriiis/jsx',
		repoLabel: 'Github',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		smoothScroll: true,
		nextLinks: true,
		prevLinks: true,
		lastUpdated: 'Last Updated',
		searchPlaceholder: 'Search...',
		search: false,
		searchMaxSuggestions: 10,
		activeHeaderLinks: false,
		displayAllHeaders: true,
		// algolia: {
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>'
		// },
		nav: [
			// { text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Learn more',

				items: [
					{
						text: 'Miscellaneous',
						items: [
							{
								text: 'Changelog',
								link: 'http://github.com/yoriiis/jsx/CHANGELOG.md'
							}
						]
					}
				]
			},
			{ text: 'Github', link: 'https://github.com/yoriiis/jsx' }
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					sidebarDepth: 3,
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
