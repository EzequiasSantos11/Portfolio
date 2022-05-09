import styled, {keyframes} from "styled-components";


const AnimationApresentation = keyframes`
	from{
		transform: translateY(80px);
		opacity: 0;
	}
	to{
		transform: translateY(0);
		opacity: 1;
	}
`;



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
	width: 100%;
	height: 90vh;
	background: #313268;
	color: white;
	.wrapper{
		display: flex;
		position: relative;
		justify-content: center;
		height: 60%;
		width: 50%;
		margin: 0 auto;
		margin-top: 4rem;
		.textApresentation{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			height: 100%;
			top: 0;
			padding-left: 30px;
			position: absolute;
			border: 20px solid black;
			background: ${props => props.theme.colors.background};
			span{
				color: ${props => props.theme.colors.textColor};
				animation: ${AnimationApresentation} 1s;
			}
			h1{
				margin: 1rem 0;
				font-size: 2rem;
				color: ${props => props.theme.colors.textColor};
				animation: ${AnimationApresentation} 1.5s;
			}
			p{
			font-size: 1.3rem;
				color: ${props => props.theme.colors.textColor};
				animation: ${AnimationApresentation} 2s;
			}
			a{
				margin-top: 40px;
				width: 60%;
				height: 50px;
				animation: ${AnimationApresentation} 2.5s;
			}
		}
		.base{
			display: flex;
			height: 80px;
			width: 40px;
			background: black;
			position: absolute;
			bottom: -80px;
			&::before{
				content: "";
				position: absolute;
				bottom: -5px;
				left: -20px;
				width: 80px;
				height: 40px;
				background: black;
				border-top-left-radius: 20px;
				border-top-right-radius: 20px;
				box-shadow: 0 18px 6px rgba(0,0,0,0.4);
			}
		}
	}
	img{
		height: 200px;
		width: 200px;
		align-self: flex-end;
		margin-right: 10%;
		margin-bottom: 40px;
	}
	@media (max-width: 958px) {
		.wrapper{
			height: 80%;
			width: 90%;
			.textApresentation{
				background: transparent;
				border: none;
				span, h1, p{
					color: white;
				}
			}
			.base{
				display: none;
			}
		}
		img{
			display: none;
		}
	}
`;

export const Choece = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-top: 7rem;
	h2{
		font-size: 2rem;
		font-weight: 800;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		color: ${props => props.theme.colors.titleColor};
	}
	.cards{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 40px;
		height: 100%;
		width: 90%;
		margin: 0 auto;
		margin-top: 4rem;
		.card{
			display: flex;
			flex-direction: column;
			height: 380px;
			width: 100%;
			border-radius: 20px;
			background: ${props => props.theme.colors.primary};
			h3{
				color: ${props => props.theme.title == "light" ? "#FFF" : props.theme.colors.secondary};
				font-size: 1.5rem;
				width: 50%;
				margin: 0 auto;
				text-align: center;
				margin-top: 1.8rem;
			}
			p{
				width: 80%;
				margin: 20px auto;
				color: #f5f5f5;
				font-weight: 700;
			}
			a{
				height: 50px;
				width: 50%;
				margin: 0 auto;
				button{
					font-size: 18px;
					padding: 0;
					border-radius: 20px;
				}
			}
		}
	}
	@media (max-width: 800px) {
		padding-top: 2rem;
		h2{
			width: 90%;
		}
		.cards{
			padding-bottom: 20px;
			.card{
				width: 80%;
				margin: 0 auto;
			}
		}
	}
`;

export const Portifolio = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding-top: 7rem;
	h2{
		font-size: 3rem;
		font-weight: 800;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		color: ${props => props.theme.colors.titleColor};
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		margin-top: 6rem;
		margin-bottom: 80px;
		.card{
			display: flex;
			height: 320px;
			width: 100%;
			margin-bottom: 150px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			img{
				width: 50%;
				height: 100%;
			}
			.textCard{
				width: 60%;
				h3{
					color: ${props => props.theme.colors.secondary};
					font-size: 46px;
					width: 80%;
					margin: 0 auto;
					margin-top: 1.8rem;
					font-weight: 800;
				}
				p,a{
					font-size: 16px;
					width: 80%;
					margin: 20px auto;
					color: ${props => props.theme.colors.textColor};
					font-weight: 400;
				}
				a{
					display: flex;
					color: blue;
				}
			}
		}
	}
	@media (max-width: 800px) {
		padding-top: 6rem;
		h2{
			font-size: 25px;
		}
		.wrapper{
			.card{
				height: 100%;
				flex-direction: column;
				position: relative;
				padding-top: 50%;
				.textCard{
					width: 100%;					
					height: 100%;
					h3{
						font-size: 25px;
					}
					p{
						margin: 1rem auto;
						justify-content: stretch;
					}
				}
				img{
					position: absolute;
					top: 0;
					width: 100%;
					height: 45%;
				}
			}
		}
	}
	@media (max-width: 445px){
		h2{
			font-size: 20px;
			width: 90%;
		}
		.wrapper{
			.card{
				img{
					height: 30%;
				}
				.textCard{
					h3{
						font-size: 18px;
					}
					p{
						font-size: 14px;
					}
					a{
						font-size: 12px;
					}
				}
			}
		}
	}
`;