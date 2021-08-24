import React from "react";
import styled from "styled-components";
function Header() {
	return (
		<Nav>
			<Logo src="/image/logo.svg" alt="logo" />
			<NavMenu>
				<a>
					<img src="/image/home-icon.svg" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/image/search-icon.svg" />
					<span>Search</span>
				</a>
				<a>
					<img src="/image/watchlist-icon.svg" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/image/original-icon.svg" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="/image/movie-icon.svg" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/image/series-icon.svg" />
					<span>Series</span>
				</a>
			</NavMenu>
			<UserImg src="/image/me.jpg" />
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	cursor: pointer;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;
			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;

				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}
		&:hover {
			span: after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const UserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;
