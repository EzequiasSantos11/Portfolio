import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	padding-top: 4rem;
`;

export const Apresentation = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 50vh;
	background: #313268;
	color: white;
	.textApresentation{
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
		margin-top: 1.5rem;
		span{
			color: white;
		}
		h1{
			color: white;
		}
		p{
			color: white;
		}
	}
`;