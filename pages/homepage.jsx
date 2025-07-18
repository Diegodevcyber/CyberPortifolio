import React, { useContext } from "react";
import dynamic from "next/dynamic"; // <-- ADD THIS IMPORT

//Third's librarys
import styled from "styled-components";
import Typed from "react-typed";
import { useTheme } from "styled-components";
import ProgressBar from "react-progressbar-on-scroll";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
// import LandingAnimation from "@/components/LandingPageAnimation"; // <-- REMOVE OR COMMENT OUT THIS LINE
import FloatNavigationBar from "@/components/FloatNavigationBar";
// import ScrollDownAnimation from "@/components/ScrollDownAnimation"; // <-- REMOVE OR COMMENT OUT THIS LINE
import { scrollToSection } from "@/components/SmoothScroll";

//Context
import { SettingsContext } from "@/context/SettingsContext";

// --- ADD THESE DYNAMIC IMPORTS ---
const DynamicLandingAnimation = dynamic(
  () => import("@/components/LandingPageAnimation"),
  { ssr: false } // Crucial: Render only on the client
);

const DynamicScrollDownAnimation = dynamic(
  () => import("@/components/ScrollDownAnimation"),
  { ssr: false } // Crucial: Render only on the client
);
// --- END DYNAMIC IMPORTS ---

const LandingPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 930px) {
        flex-direction: column;
    }

    @media (max-width: 850px) {
        margin-bottom: 60px;
    }
`;

const TitleLandingContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 10px;

    .grid-exp {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        transition: all 0.3s ease;
        gap: 20px;
        justify-items: center;
        //background-color: #ccc;
        width: 100%;
    }

    .type-string {
        font-size: 60px;
        font-weight: 800;
        color: ${(props) => props.theme.colors.branding};

        @media (max-width: 1400px) {
            font-size: 40px;
        }

        @media (max-width: 1200px) {
            font-size: 36px;
        }

        @media (max-width: 601px) {
            font-size: 26px;
            text-align: center;
            width: 100%;
        }
    }

    @media (max-width: 601px) {
        align-items: center;
    }
`;

const SubTitleLanding = styled.div`
    font-weight: 400;
    color: ${(props) => props.theme.colors.body};
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;

    span {
        font-weight: 800;
        color: ${(props) => props.theme.colors.branding};
    }

    @media (max-width: 1980px) {
        font-size: ${(props) => props.theme.fontSizes.lg};
    }

    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSizes.md};
    }

    @media (max-width: 900px) {
        font-size: ${(props) => props.theme.fontSizes.md};
    }

    @media (max-width: 600px) {
        text-align: center;
    }
`;

const ContainerAnimation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: 930px) {
        order: -1;
    }
`;

const ButtonSaibaMais = styled.button`
    z-index: 1;
    position: relative;
    width: 200px;
    height: 44px;
    margin-top: 15px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    font-size: ${(props) => props.theme.fontSizes.lg};
    border: none;
    color: ${(props) => props.theme.colors.background};
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.branding};
    font-weight: 700;
    

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media (max-width: 601px) {
        width: 70%;
        padding-left: 20px;
        padding-right: 20px;
        
    }

    @media (max-width: 425px) {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 70px;
        margin-top: 40px;
    }
`;

const SectionHomePage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-height: 100vh;
`;

export default function HomePage() {
    const theme = useTheme();
    const { language } = useContext(SettingsContext);

    return (
        <SectionHomePage id="section-home">
            <FloatNavigationBar />
            <ProgressBar color={theme.colors.branding} height={5} />
            <Head
                title="Diego CyberSec | Portfolio"
                metaDescription="Portfolio de Diego CyberSec, projetos e competencias"
                keywords="Diego CyberSec, Cybersecurity, Promgamação, CSIRT, Pentesting"
            />
            <LandingPageContainer>

                <TitleLandingContainer>
                    <SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding>
                    <Typed strings={["Diego CyberSec"]} typeSpeed={80} className="type-string " />
                    <SubTitleLanding>{language.landingPage.resumeText}</SubTitleLanding>
                    <a href="#section-a-propos" onClick={scrollToSection}>
                        <ButtonSaibaMais>{language.landingPage.buttonText}</ButtonSaibaMais>
                    </a>
                    <SocialNetworkRowStack />
                </TitleLandingContainer>
                <ContainerAnimation>
                    {/* Use the dynamically imported component here */}
                    <DynamicLandingAnimation />
                </ContainerAnimation>
            </LandingPageContainer>
            {/* Use the dynamically imported component here */}
            <DynamicScrollDownAnimation />
        </SectionHomePage>
    );
}