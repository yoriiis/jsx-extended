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
		search: true,
		searchMaxSuggestions: 10,
		activeHeaderLinks: false,
		displayAllHeaders: true,
		algolia: {
			apiKey: '<API_KEY>',
			indexName: '<INDEX_NAME>'
		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Learn more',

				items: [
					{
						text: 'Contributing Guide',
						items: [
							{
								text: 'Contribute',
								link: 'http://github.com/yoriiis/jsx/CONTRIBUTING.md'
							}
						]
					},
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
		sidebar: [
			{
				title: 'Guide',
				path: '/guide/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					['/guide/introduction', 'Introduction'],
					['/guide/getting-started', 'Getting Started'],
					['/guide/how-it-works', 'How it works'],
					['/guide/jsx-features', 'JSX features']
				]
			}
		]
	}
}
