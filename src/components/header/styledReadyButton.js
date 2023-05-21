const { styled } = require("styled-components");

export const StyledReadyButton = styled.div` 
    //padding-left: 25px;
    display: flex;
    justify-content: right;
    align-items: right;
    
    button {
        font-size: 15px;
        background: #34bf59;
        width: 100px;
        height: 50px;
        border-radius: 5px;
    }

    button:hover {
        background: #148c34;
    }
`