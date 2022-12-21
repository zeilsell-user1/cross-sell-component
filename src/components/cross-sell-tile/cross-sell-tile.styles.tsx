import styled from "styled-components";
import { Size } from "./cross-sell-tile.types";

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
export const TileContainer = styled.div<{ width:number }>`
  width: ${(props) => props.width}%;
  margin: 2vh;
  border: 2vh;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 40%) 3px 5px 6px 1px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
 
export const ImageContainer = styled.div<{ imageUrl?: string, aspectRatio:number }>`
  width: 100%;
  color: black;
  border-radius: 20px 20px 0 0;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  aspect-ratio: ${(props) => props.aspectRatio};
  background: url('${(props) => props.imageUrl ? props.imageUrl : ''}');
`;
 
export const ImageTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: 'flex-start';
`;
 
export const TextWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: 'center';
  justify-content: 'center';
`;
 
export const TopWrapper = styled.div`
  height: 40%;
  width: 100%;
  padding: 10px;
`;
 
export const BottomWrapper = styled.div`
  height: 60%;
`;
 
export const MainText = styled.h3<{color?:string}>`
text-align: center;
margin: 0;
color: ${(props) => props.color ? props.color : '#fff'};
font-size: 2vw;
`;

export const MainSubText = styled.h4<{color?:string}>`
  text-align: center;
  margin: 0;
  color: ${(props) => props.color ? props.color : '#fff'};
  font-size: 1vw;
`;
 
export const CtaButton = styled.div <{size:Size}>`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 25px;
  background-color: #fff;
  width: fit-content;
  display: flex;
  flex-direction: flex-start;
`;
 
export const CtaText = styled.h4<{color?:string}>`
  margin: 5px 0;
  text-align: center;
  color: ${(props) => props.color ? props.color : '#fff'};
  font-size: 2vw;
`;
export const GradiantOverlay = styled.div`
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, #000 100%);
  border-radius: 15px;
  height: 100%;
`;
 
