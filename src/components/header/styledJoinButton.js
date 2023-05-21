const { styled } = require("styled-components");

export const StyledJoinButton = styled.div` 
    padding-left: 5px;
    padding-bottom: 4px;

    button {
        font-size: 15px;
        font-style: 'Roboto';
        background: #34bf59;
        width: 100px;
        height: 42px;
        border-radius: 5px;
    }

    button:hover {
        background: #148c34;
    }
`