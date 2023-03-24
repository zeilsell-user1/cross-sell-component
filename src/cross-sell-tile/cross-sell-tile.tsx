import "./styles.css";

import { AspectRatio, Size } from "./cross-sell-tile.types";

export interface TileProps {
  imageUrl: string;
  title: string;
  titleColor: string;
  strapline: string;
  straplineColor: string;
  description: string;
  descriptionColor: string;
  targetUrl: string;
  size: Size;
  ratio: AspectRatio;
}

export const CrossSellTile = (props: TileProps): JSX.Element => {
  const height: number =
    props.size === Size.small ? 100 : props.size === Size.medium ? 200 : 400;
  const largeFont: number =
    props.size === Size.small ? 15 : props.size === Size.medium ? 20 : 30;
  const radius: number =
    props.size === Size.small ? 2 : props.size === Size.medium ? 5 : 10;
  const ratio: number =
    props.ratio === AspectRatio.square
      ? 1
      : props.ratio === AspectRatio.fullscreen
      ? 4 / 3
      : 16 / 9;

  return (
    <div
      className={"container"}
      style={{ width: height * ratio, height: height }}
    >
      <a
        className={"tilecontainer"}
        href={props.targetUrl}
        style={{ borderRadius: radius }}
      >
        <div className={"gradiantoverlay"} style={{ borderRadius: radius }}>
          <div className={"topwrapper"}>
            <img
              className={"imagecontainer"}
              src={props.imageUrl}
              style={{
                width: height * 0.5 * ratio * 1.9,
                height: height * 0.5,
                borderRadius: radius * 2,
              }}
              alt="crosssell-image"
            />
          </div>
          <div className={"bottomwrapper"}>
            <div
              className={"textwrapper"}
              style={{ color: props.titleColor, fontSize: largeFont }}
            >
              {props.title}
            </div>
            {props.size != Size.small && (
              <div
                className={"textwrapper"}
                style={{
                  color: props.straplineColor,
                  fontSize: largeFont * 0.66,
                }}
              >
                {props.strapline}
              </div>
            )}
            {props.size != Size.medium && props.size != Size.small && (
              <div
                className={"textwrapper"}
                style={{
                  color: props.descriptionColor,
                  fontSize: largeFont * 0.5,
                }}
              >
                {props.description}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
