import { dataAuthors, loadAuthors } from '../api/load-authors';
import { dataCategories, loadCategories } from '../api/load-categories';
import { dataTags, loadTags } from '../api/load-tags';

export const loadMenuAllLinks = async (): Promise<loadMenuAllLinksProps> => {
	return {
		authors: await loadAuthors(),
		categories: await loadCategories(),
		tags: await loadTags(),
	};
};
export type loadMenuAllLinksProps = {
	authors: dataAuthors;
	categories: dataCategories;
	tags: dataTags;
};
