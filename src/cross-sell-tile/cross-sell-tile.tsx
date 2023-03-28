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
  const width: number =
    props.size === Size.small ? 33 : props.size === Size.medium ? 66 : 100;
  const largeFont: number =
    props.size === Size.small ? 3 : props.size === Size.medium ? 4 : 6;
  const radius: number =
    props.size === Size.small ? 4 : props.size === Size.medium ? 10 : 20;
  const ratio: number =
    props.ratio === AspectRatio.square
      ? 1
      : props.ratio === AspectRatio.fullscreen
      ? 4 / 3
      : 16 / 9;

  return (
    <div
      className={"container"}
      style={{ width: width.toString() + "%", aspectRatio: ratio }}
    >
      <a
        className={"tilecontainer"}
        href={props.targetUrl}
        style={{ borderRadius: radius, aspectRatio: ratio }}
      >
        <div
          className={"gradiantoverlay"}
          style={{ borderRadius: radius, aspectRatio: ratio }}
        >
          <div className={"topwrapper"}>
            <img
              className={"imagecontainer"}
              src={props.imageUrl}
              style={{
                aspectRatio: ratio * 2,
                borderRadius: radius,
              }}
              alt="crosssell-image"
            />
          </div>
          <div className={"bottomwrapper"}>
            <div
              className={"textwrapper"}
              style={{
                color: props.titleColor,
                fontSize: largeFont.toString() + "vw",
              }}
            >
              {props.title}
            </div>
            {props.size != Size.small && (
              <div
                className={"textwrapper"}
                style={{
                  color: props.straplineColor,
                  fontSize: (largeFont * 0.66).toString() + "vw",
                }}
              >
                {props.strapline}
              </div>
            )}
            {((props.size != Size.medium && props.size != Size.small) ||
              props.ratio === AspectRatio.square) && (
              <div
                className={"textwrapper"}
                style={{
                  color: props.descriptionColor,
                  fontSize: (largeFont * 0.5).toString() + "vw",
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
