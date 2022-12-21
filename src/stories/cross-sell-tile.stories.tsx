import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CrossSellTile, AspectRatio,  Size, } from "../components/cross-sell-tile";

export default {
  title: "CrossSellTile",
  component: CrossSellTile,
} as ComponentMeta<typeof CrossSellTile>;

export const small: ComponentStory<typeof CrossSellTile> = () => (
  <CrossSellTile
    targetUrl="https://www.bbc.co.uk"
    title="small"
    titleColor="red"
    strapline="cool cross-sell offer"
    straplineColor="#45af67"
    ctaText="press"
    ctaTextColour="#ad6521"
    size={Size.small}
    ratio={AspectRatio.widescreen}
  />
);

export const medium: ComponentStory<typeof CrossSellTile> = () => (
  <CrossSellTile
    targetUrl="https://www.bbc.co.uk"
    title="medium-square"
    titleColor="blue"
    strapline="cool cross-sell offer"
    straplineColor="#45a21"
    ctaText="touch"
    ctaTextColour="#ad6235"
    size={Size.medium}
    ratio={AspectRatio.square}
    imageUrl='https://testimages.org/img/testimages_screenshot.jpg'
    />
);

export const large: ComponentStory<typeof CrossSellTile> = () => (
  <CrossSellTile
    targetUrl="https://www.bbc.co.uk"
    title="large-"
    strapline="cool cross-sell offer"
    ctaText="clunk"
    size={Size.large}
    ratio={AspectRatio.fullscreen}
    />
);

export const show: ComponentStory<typeof CrossSellTile> = () => (
  <CrossSellTile
    targetUrl="https://www.bbc.co.uk"
    title="Great Offer!"
    titleColor="blue"
    strapline="cool cross-sell offer that your customer really wants!"
    straplineColor="white"
    ctaText="click here"
    ctaTextColour="#ad6235"
    size={Size.medium}
    ratio={AspectRatio.widescreen}
    imageUrl='https://learn.g2.com/hs-fs/hubfs/_learn-social-selling@2x.png?width=1480&name=_learn-social-selling@2x.png'
    />
);
