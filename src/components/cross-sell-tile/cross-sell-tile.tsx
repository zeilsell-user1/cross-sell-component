import React from "react";
import {
  BottomWrapper,
  Container,
  CtaText,
  CtaButton,
  GradiantOverlay,
  ImageContainer,
  ImageTextContainer,
  MainSubText,
  MainText,
  TextWrapper,
  TileContainer,
  TopWrapper,
} from "./cross-sell-tile.styles";
import { AspectRatio, Size } from "./cross-sell-tile.types";

export interface TileProps {
  imageUrl?: string;
  title: string;
  titleColor?: string;
  strapline: string;
  straplineColor?: string;
  ctaText: string;
  ctaTextColour?: string;
  targetUrl: string;
  size: Size;
  ratio: AspectRatio;
}

const CrossSellTile = (props: TileProps) => {
  const width: number =
    props.size === Size.small
      ? 25
      : props.size === Size.medium
      ? 50
      : 75;
  const ratio: number =
    props.ratio === AspectRatio.square
      ? 1
      : props.ratio === AspectRatio.fullscreen
      ? 4 / 3
      : 16 / 9;

  return (
    <Container href={props.targetUrl}>
      <TileContainer width={width} >
        <ImageContainer imageUrl={props.imageUrl} aspectRatio={ratio}>
          <GradiantOverlay>
            <ImageTextContainer>
              <TopWrapper>
                <CtaButton size={props.size}>
                  <CtaText color={props.ctaTextColour}>{props.ctaText}</CtaText>
                </CtaButton>
              </TopWrapper>
              <BottomWrapper>
                <TextWrapper>
                  <MainText color={props.titleColor}>{props.title}</MainText>
                </TextWrapper>
                <TextWrapper>
                  <MainSubText color={props.straplineColor}>{props.strapline}</MainSubText>
                </TextWrapper>
              </BottomWrapper>
            </ImageTextContainer>
          </GradiantOverlay>
        </ImageContainer>
      </TileContainer>
    </Container>
  );
};

export default CrossSellTile;
