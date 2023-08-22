import { BaseProps } from '.';
import { data } from '../../api/mock.json';

export default {
	setting: data.setting,
	children: 'Olá mundo',
	menuAllLinks: {
		authors: {
			authors: {
				data: [
					{
						id: '3',
						attributes: { displayName: 'Desconhecido', slug: 'desconhecido' },
					},
					{ id: '2', attributes: { displayName: 'felipe', slug: 'felipe' } },
				],
			},
		},
		categories: {
			categories: {
				data: [
					{
						id: '3',
						attributes: {
							displayName: 'CATEGORIA 2',
							slug: 'SEGUNDA-CATEGORIA',
						},
					},
					{
						id: '2',
						attributes: {
							displayName: 'categoria-Teste',
							slug: 'PRIMEIRA-CATEGORIA',
						},
					},
				],
			},
		},
		tags: {
			tags: {
				data: [
					{ id: '2', attributes: { displayName: 'ruby', slug: 'ruby' } },
					{ id: '3', attributes: { displayName: 'React', slug: 'react' } },
				],
			},
		},
	},
} as unknown as BaseProps;
