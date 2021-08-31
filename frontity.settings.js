const settings = {
	name: 'MSBB',
	state: {
		frontity: {
			url: 'http://msbb-api.test',
			title: 'MSBB',
			description: 'WordPress Theme for MSBB'
		}
	},
	packages: [
		{
			name: 'msbb-theme'
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					url: 'http://msbb-api.test/'
				}
			}
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
