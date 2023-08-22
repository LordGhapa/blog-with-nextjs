import * as Styled from './styles';

export type DetailsProps = {
	nameDetails: string;
	children?: React.ReactNode;
};

export const Details = ({ nameDetails, children }: DetailsProps) => {
	return (
		<Styled.Wrapper>
			<details>
				<summary>{nameDetails}</summary>
				<div className="content">{children}</div>
			</details>
		</Styled.Wrapper>
	);
};
