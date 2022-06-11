import styled, { keyframes } from "styled-components";


const AnimationApresentation = keyframes`
	from{
		transform: translateY(90px);
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
	width: 100%;
	padding-top: 4rem;
	.zap{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 9999;
		bottom: 50px;
		right: 30px;
		height: 50px;
		width: 50px;
		background: green;
		border-radius: 10px;
		svg{
			font-size: 2rem;
			fill: #FFF;
		}
	}
	.zap2{
		display: none;
	}
	@media (max-width: 800px){
		.zap1{
			display: none;
		}
		.zap2{
			display: flex;
		}
	}
`;

export const Apresentation = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	background: #FFF;
	color: #000;
	img{
		height: 100%;
		width: 50%;
		margin-top: -30px;
	}
	.right{
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
		width: 40%;
		margin: 0 auto;
		.textApresentation{
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: 20px;
			width: 90%;
			h1{
				font-size: 1.5rem;
			}
			h2{
				font-size: 2rem;
			}
			p{
				font-size: 1rem;
			}
			a{
				width: 50%;
				margin: 0 auto;
			}
		}
	}
	@media (max-width: 800px){
		position: relative;
		height: 90vh;
		img{
			width: 100%;
		}
		.right{
			position: absolute;
			z-index: 9999;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.4);
			.textApresentation{
				margin: 0 auto;
				gap: 10px;
				width: 80%;
				h1, h2, p, a{
					color: #FFF;
					font-size: 18px;
				}
				h1{
					font-size: 20px;
				}
				h2{
					font-size: 30px;
				}
				p{
					font-size: 14px;
				}
				a, button{
					height: 40px;
					font-size: 12px;
				}
			}
		}
	}
`;

export const Choece = styled.div`
	display: flex;
	flex-direction: column;
	height: 90vh;
	padding-top: 8rem;
	background: #FFF;
	&.animado{
		// .cards{
		// 	.card1{
		// 		transform: translateY(0);
		// 		opacity: 1;
		// 		transition: all .5s;
		// 	}
		// 	.card2{
		// 		transform: translateY(0);
		// 		transition: all 1s;
		// 		opacity: 1;
		// 	}
		// 	.card3{
		// 		transform: translateY(0);
		// 		transition: all 1.5s;
		// 		opacity: 1;
		// 	}
		// }
	}
	h2{
		font-size: 2rem;
		font-weight: 500;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		color: #020203;
	}
	.cards{
		display: flex;
		height: 300px;
		width: 90%;
		margin: 0 auto;
		margin-top: 2rem;
		.card{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 100%;
			border-radius: 4px;
			background: #FFF;
			h3{
				color:#000;
				font-size: 1.5rem;
				width: 50%;
				margin: 0 auto;
				text-align: center;
				margin-top: 1.8rem;
			}
			p{
				width: 80%;
				margin: 20px auto;
				text-align: center;
				color: #000;
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
		.card2{
			h3{ color: #FFF;}
			p{
				color: #FFF;
			}
			background: #1769FF;
			box-shadow: 0 0 10px rgba(0,0,0,0.9);
			margin-right: 10px;
		}
	}
	@media (max-width: 800px) {
		flex-direction: column;
		height: 100%;
		h2{
			font-size: 1.8rem;
			width: 90%;
		}
		.cards{
			flex-direction: column;
			height: 100%;
			margin-bottom: 40px;
			gap: 40px;
			.card1, .card3{
				background: #FFF;
				box-shadow: 0 0 10px rgba(0,0,0,0.9);
				margin-right: 10px;
			}
		}
	}
`;

export const Portifolio = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding-top: 6rem;
	background: #FFF;
	h2{
		font-size: 3rem;
		font-weight: 500;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		color: #020203;
	}
	.wrapper{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		width: 90%;
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 80px;
		gap: 20px;
		.card{
			display: flex;
			height: 320px;
			width: 100%;
			position: relative;
			.text{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
				top: 0;
				border-radius: 5px;
				background: rgba( 23, 105, 255, 0.4);
				backdrop-filter: blur(6px);
				-webkit-backdrop-filter: blur(5px);
				z-index: 999;
				transition: all .4s;
				h3{
					color: #FFF;
					font-size: 2rem;
				}
				p{
					display: flex;
					color: #FFF;
					font-size: 18px;
					width: 80%;
					margin: 10px auto;
				}
				button{
					width: 50%;
					margin: 0 auto;
					margin-top: 20px;
					height: 45px;
					border-radius: 20px;
					cursor: pointer;
					border: none;
					text-transform: uppercase;
					font-size: 18px;
					font-weight: 700;
					background: #1769FF;
					box-shadow: 0 0 20px #80ACF7;
					transform: scale(1.08);
					a{
						
						color: #FFF;
					}
					&:hover{
						transition: all .2s ease-in-out;
						transform: scale(1.1);
					}
				}
				a{
					margin-top: 10px;
					color: #FFF;
					cursor: pointer;
				}
				&:hover{
					opacity: 1;
				}
			}
			img{
				transform: scale(.98);
				box-shadow: 0 0 5px #000;
				border-radius: 5px;
				width: 100%;
				height: 100%;
				z-index: 1;
			
			}
		
		}
	}
	@media (max-width: 800px) {
		h2{
			font-size: 1.5rem;
		}
		.wrapper{
			.card{
				height: 200px;
			}
		}
	}
`;