const { styled } = require("styled-components");

export const StyledCard = styled.div`

    width: 150px;
    background-color: ${({ isBlack }) => isBlack ? "black" : "white"};
    padding: 10px;
    color: ${({ isBlack }) => !isBlack ? "black" : "white"};
    border: 2px solid black;
    margin: 10px;
    aspect-ratio: 2/3;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        background-color: ${({ isBlack }) => isBlack ? "#0f0f0f" : "grey"};
    }

    &.selected {
        /* background-color: ${({ isBlack }) => isBlack ? "#0f0f0f" : "grey"}; */
        border: 4px solid ${({ isBlack }) => isBlack ? "red" : "green"};;
    }
`
