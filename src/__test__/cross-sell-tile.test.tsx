import React from "react";
import { render, screen } from "@testing-library/react";
import CrossSellTile, { AspectRatio, Size } from "../components/cross-sell-tile";

describe("CrossSellTile component", () => {
  it("should render", () => {
    const container = render(<CrossSellTile 
      targetUrl="https://www.bbc.co.uk"
      title="small"
      titleColor="red"
      strapline="cool cross-sell offer"
      straplineColor="#45af67"
      ctaText="press"
      ctaTextColour="#ad6521"
      size={Size.small}
      ratio={AspectRatio.widescreen} />);
    expect(container).toMatchSnapshot();
  });
});
