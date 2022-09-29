import React from 'react'
import { CardContainer, ImgContainer, HeaderContainer, Header, TextContainer, SubHeader, InfoContainer, StatusText, InfoText, StatusContainer } from './card.styled';
type CardProps = {
    key: string;
    element: {
        title: string;
        subcategory: string;
        description: string;
        status: string;
        img_cover_hex: string;
        img: string;
    }
}
function Card(props: CardProps) {
    return (
        <CardContainer>
            <ImgContainer color={props.element.img_cover_hex}>
                <h1>🐸</h1>
            </ImgContainer>
            <TextContainer>
                <HeaderContainer>
                    <Header>{props.element.title}</Header>
                    <SubHeader>{props.element.subcategory}</SubHeader>
                </HeaderContainer>
                <InfoContainer>
                    <InfoText>{props.element.description}</InfoText>
                </InfoContainer>
                
            </TextContainer>
            <StatusContainer>
                    <StatusText>{props.element.status}</StatusText>
                </StatusContainer>
        </CardContainer>
    )
}

export default Card