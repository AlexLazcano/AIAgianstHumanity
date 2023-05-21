const { styled } = require("styled-components");

export const StyledDcButton = styled.div` 
    //padding-right: 25px;
    display: flex;
    justify-content: right;
    align-items: right;

    
    button {
        font-size: 15px;
        background: #d42626;
        width: 100px;
        height: 50px;
        border-radius: 5px;
    }

    button:hover {
        background: #961414;
    }
`