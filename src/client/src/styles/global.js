import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }
    
    body {
        display: flex;
        flex-direction: column;
        background: white;
        height: 100%;
        width: 100%;
        position: relative;
    }
    
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
