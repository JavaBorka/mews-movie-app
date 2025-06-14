import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 40px;
    min-height: calc(100vh - (79.45px + 40px + 37.5px + 102.5px + 40px + 42.5px + 60px + 58.5px));
    //min-heigt: calc(100vh - (header + main margin-top + h2 + search-row + container margin-bottom + button + main margin-bottom + footer));

    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    @media screen and (min-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
    }
`