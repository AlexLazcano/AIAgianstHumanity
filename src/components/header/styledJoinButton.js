const { styled } = require("styled-components");

export const StyledJoinButton = styled.div` 
    padding-left: 25px;

    
    button {
        font-size: 15px;
        background: #34bf59;
        width: 100px;
        height: 50px;
        border-radius: 5px;
    }
    &.gone {
        opacity: 0;
    }

    button:hover {
        background: #148c34;
    }
`