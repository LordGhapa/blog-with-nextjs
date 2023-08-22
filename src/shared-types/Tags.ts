export type Tags = {
	data: tag[];
};
type tag = {
	id: string;
	attributes: {
		slug: string;
		displayName: string;
	};
};
