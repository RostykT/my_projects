import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.div`
	background-color: #101522;
`;

const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

const FooterLinkWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;
const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;
const FooterLinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover {
		color: #01bf71;
		transition: 0.3s ease-out;
	}
`;

//social media

const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 9 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;

const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

const WebSiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> About us</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle> Contact us</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> Video </FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle> Social Media us</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Portfolio</SocialLogo>
						<WebSiteRights>
							portfolio © {new Date().getFullYear()}. All rights
							reserved.
						</WebSiteRights>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="YouTube"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
