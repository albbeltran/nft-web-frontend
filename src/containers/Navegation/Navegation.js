import styled from "styled-components";

const Nav = styled.nav`

    .unicorn-full {
        display: inline-block;
        z-index: 0;
        width: 85%;
        margin-top: 120px;
        margin-left: 60px;
        animation: fadeIn 0.25s;
    }
    
    .link {
        display: inline-block;
        position: fixed;
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-family: 'Courier New', Courier, monospace;
        z-index: 1;
    }

    .about {
        position: fixed;
        margin-top: 90px;
        margin-left: -10px;
    }

    .roadmap {
        position: fixed;
        margin-top: 265px;
        margin-left: -20px;
    }

    .faq {
        position: fixed;
        margin-top: 257px;
        margin-left: 460px;
    }

    .join {
        position: fixed;
        margin-top: 300px;
        margin-left: 205px;
    }

    .design {
        position: fixed;
        margin-top: 390px;
        margin-left: 12px;
    }

    .team {
        position: fixed;
        margin-top: 410px;
        margin-left: 380px;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

export { Nav };