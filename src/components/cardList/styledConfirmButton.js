const { styled } = require("styled-components");

export const StyledConfirmButton = styled.div` 
    padding: 5px;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: left;
    
    button {
        font-size: 15px;
        background: #56b5ba;
        width: 75px;
        height: 100%;
        border-radius: 10px;
        overflow-wrap:break-word;
    }

    button:hover {
        background: #49a8ad;
    }
`