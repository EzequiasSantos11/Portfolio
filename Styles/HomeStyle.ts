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
				span{
					color: #1769FF;
				}
			}
			h2{
				font-size: 2.5rem;
				color: #10176C;
				font-weight: 800;
			}
			p{
				font-size: 1.3rem;
				color: gray;
				font-weight: 600;
			}
			a{
				height: 48px;
				padding: 0 16px;
				width: 60%;
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
				height: 60%;
				width: 80%;
				gap: 10px;
				padding: 0 20px;
				border-radius: 10px;
				background: rgba(0,0,0,0.2);
				h1, h2, p, a{
					color: #FFF;
					font-size: 18px;
				}
				h1{
					font-size: 20px;
				}
				h2{
					font-size: 24px;
				}
				p{
					font-size: 12px;
				}
				a, button{
					height: 40px;
					width: 90%;
					font-size: 12px;
				}
			}
		}
	}
`;

export const About = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding-top: 7.5rem;
	margin-bottom: 3rem;
	h2{
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 4rem;
		text-align: center;
		span{
			color: rgb(23,105,255);
		}
	}
	.wrapper{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
		.card{
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 350px;
			width: 90%;
			padding: 15px;
			border-radius: 10px;
			margin: 0 auto;
			margin-bottom: 30px;
			box-shadow: 0 0 4px rgba(23,105,255,0.4);
			position: relative;
			h3{
				position: absolute;
				color: white;
				padding: 10px;
				left: 15px;
				top: -20px;
				border-radius: 10px;
				background: #1769FF;
			}
      p{
				font-size: 1.2rem;
				margin-top: 10px;
				margin-left: 10px;
			}
			img{
				height: 150px;
				box-shadow: 0 0 8px #FFF;
				margin-top: 25px;
			}
		}
	}
	@media (max-width: 800px) {
		h2{
			font-size: 1.5rem;
			width: 80%;
		}
		.wrapper{
			.card{
				display: flex;
				flex-direction: column;
				align-items: center;
				height: 330px;
				width: 90%;
				padding: 10px;
				border-radius: 10px;
				margin: 0 auto;
				margin-bottom: 40px;
				box-shadow: 0 0 4px rgba(23,105,255,0.4);
				position: relative;
				h3{
					font-size: 14px;
					position: absolute;
					color: white;
					padding: 5px 10px;
					left: 15px;
					top: -15px;
					border-radius: 10px;
					background: #1769FF;
				}
				p{
					font-size: 18px;
					margin-top: 10px;
					margin-left: 10px;
				}
				img{
					height: 130px;
					box-shadow: 0 0 8px #FFF;
				}
			}
		}
	}
`;

export const Portfolio = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding-top: 7.5rem;
	margin-bottom: 3rem;
	h2{
		font-size: 2.5rem;
		font-weight: 400;
		margin-bottom: 1rem;
		span{
			color: #2C69FF;
			font-weight: 600;
		}
	}
	p{
		font-size: 1.2rem;
		margin-bottom: 2.5rem;
	}
	.alice-carousel__prev-btn{
		display: flex;
		position: absolute;
		top: -60px;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 100%;
		margin-left: 40px;
		opacity: 0;
		transition: all .4s;
		&:hover{
			opacity: 1;
		}
		.alice-carousel__prev-btn-wrapper{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40%;
			width: 100%;
			.alice-carousel__prev-btn-item{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 4rem;
				width: 100%;
				height: 100%;
				background: #1769FF;
				padding: 0 30px;
				margin: 0;
				border-radius: 10px;
				span{
					color: #FFF;
				}
			}
		}
	}
	.alice-carousel__next-btn{
		display: flex;
		position: absolute;
		top: -60px;
		right: 0;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 100%;
		margin-right: 40px;
		opacity: 0;
		transition: all .4s;
		&:hover{
			opacity: 1;
		}
		.alice-carousel__next-btn-wrapper{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40%;
			width: 100%;
			.alice-carousel__next-btn-item{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 4rem;
				width: 100%;
				height: 100%;
				background: #1769FF;
				padding: 0 30px;
				margin: 0;
				border-radius: 10px;
				span{
					color: #FFF;
				}
			}
		}
	}
	.alice-carousel{
		position: relative;
		&:hover{
			.alice-carousel__next-btn{
				opacity: 0.5;
			}
			.alice-carousel__prev-btn{
				opacity: 0.5;
			}
		}
	}
	
	.projeto{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 260px;
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
		img{
			height: 150px;
			width: 100%;
			border-radius: 5px;
			box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
			&:hover{
				cursor: pointer;
				transform: scale(1.02);
			}
			transition: all .2s ease-in-out;
		}
		h3{
			font-size: 1.3rem;
			width: 90%;
			margin: 10px auto;
		}
		p{
			font-size: 0.9rem;
		}
	}
	@media (max-width: 800px) {
		h2{
			font-size: 24px;
		}
		p{
			font-size: 14px;
			width: 90%;
			margin: 0 auto;
			text-align: center;
		}
		.alice-carousel{
			background: #FFF;
			position: relative;
			&:hover{
				.alice-carousel__next-btn{
					opacity: 0;
				}
				.alice-carousel__prev-btn{
					opacity: 0;
				}
			}
		}
		.projeto{
			margin-top: 40px;
			img{
				width: 100%;
			}
			h3{
				font-size: 24px;
			}
			p{
				font-size: 18px;
			}
		}
	}
`;

export const Planos = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	margin-bottom: 3rem;
	padding-top: 7.5rem;
	h2{
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 3rem;
	}
	p{
		width: 80%;
		margin: 0 auto;
	}
	.wrapper{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 90%;
		max-width: 1000px;
		margin: 0 auto;
		.plano{
			display: flex;
			flex-direction: column;
			width: 80%;
			height: 100%;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
			margin: 0 auto;
			border-radius: 10px;
			.title{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				padding: 20px;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				h3{
					margin-bottom: 10px;
					font-size: 1.3rem;
				}
				h3, h4{
					color: #f0f0f0;
				}
				&.basic{
					background: #1769FF;
				}
				&.master{
					background: #10176C;
				}
			}
			.description{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				text-align: left;
				padding: 20px 0;
				height: 100%;
				gap: 10px;
				strong{
					font-size: 1rem;
					margin: 0 auto;
				}
				button{
					width: 50%;
					height: 40px;
					border-radius: 8px;
					outline: none;
					border: none;
					font-size: 1.2rem;
					font-weight: 500;
					color: #f0f0f0;
					cursor: pointer;
					margin: 0 auto;
					box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
					margin-top: 10px;
					text-transform: uppercase;
					&.basic{
						background: #1769FF;
					}
					&.master{
						background: #10176C;
					}
				}
			}
		}
	}
	@media (max-width: 800px){
		h2{
			font-size: 24px;
			width: 90%;
		}
		.wrapper{
			gap: 40px;
		}
	}
`;