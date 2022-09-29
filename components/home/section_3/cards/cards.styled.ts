import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const Div = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
gap: 1rem;

@media screen and (max-width: ${theme.screen.tablet}) {
    width: 100%;
    gap: 1rem;
}
@media screen and (max-width: ${theme.screen.tablet}) {
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: ${theme.screen.phone}) {
    gap: 2rem;
    }

`