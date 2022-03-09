import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --green: #27ae60;
        --dark-green: #00A300;
        --white: #ffffff;
        --black: #000000;
        --light-gray: #eeeeee;
        --dark_gray: #666666;
        --transparent-white: rgba(240, 240, 240, 0.8);
        --transparent-black: rgba(0, 0, 0, 0.1);
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {   
        background: white;
        width: 100%;
        height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;
    }
    
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
