import React from 'react'
import { CardContainer, Header, ImageContainer, TextContainer, TextLink, Text, Rectangle } from './wide_card.styled'
type WideCardProps = {
    direction: string;
    imgBGColor: string;
    header: string;
    text: string;
    link: string;

}
function WideCardComponent({ direction, imgBGColor, header, text, link }: WideCardProps) {

        return (
            <CardContainer direction={direction}>
                <ImageContainer>
                    <Rectangle direction={direction} imgBGColor={imgBGColor} />
                </ImageContainer>
                <TextContainer>
                    <Header>{header}</Header>
                    <Text>{text}</Text>
                    <TextLink>{link}</TextLink>
                </TextContainer>
            </CardContainer>
        )
    }
   

export default WideCardComponent
