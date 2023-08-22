import { MenuProps } from '.';

export default {
	menuLink: [
		{
			id: '1',
			link: '#link',
			text: 'link do menu',
			newTab: false,
		},
		{
			id: '2',
			link: '#li99',
			text: 'link do m99',
			newTab: true,
		},
	],
	blogName: 'meu blog',
	blogDescription: 'blog-descrição',
	logo: {
		data: {
			id: '2',
			attributes: {
				altText: 'sou o texto alternativo',
				url: 'https://res.cloudinary.com/duqhyfegq/image/upload/v1690917958/24ee2b3a_edb4_43ee_8a3f_442fd78dd9a3_d0d60705fc.jpg',
			},
		},
	},
} as unknown as MenuProps;
