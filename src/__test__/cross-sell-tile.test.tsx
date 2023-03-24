import { render } from "@testing-library/react";

import { AspectRatio, CrossSellTile, Size } from "../cross-sell-tile";

describe("CrossSellTile component", () => {
  it("should render large and widescreen", () => {
    const containerLargeWide = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.large}
        ratio={AspectRatio.widescreen}
      />
    );
    expect(containerLargeWide).toMatchSnapshot();
  });

  it("should render large and fullscreen", () => {
    const containerLargeFull = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.large}
        ratio={AspectRatio.fullscreen}
      />
    );
    expect(containerLargeFull).toMatchSnapshot();
  });

  it("should render large and square", () => {
    const containerLargeSquare = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.large}
        ratio={AspectRatio.square}
      />
    );
    expect(containerLargeSquare).toMatchSnapshot();
  });

  it("should render medium and widescreen", () => {
    const containerMediumWide = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.medium}
        ratio={AspectRatio.widescreen}
      />
    );
    expect(containerMediumWide).toMatchSnapshot();
  });

  it("should render medium and fullscreen", () => {
    const containerMediumFull = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.medium}
        ratio={AspectRatio.fullscreen}
      />
    );
    expect(containerMediumFull).toMatchSnapshot();
  });

  it("should render medium and square", () => {
    const containerMediumSquare = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.medium}
        ratio={AspectRatio.square}
      />
    );
    expect(containerMediumSquare).toMatchSnapshot();
  });

  it("should render small and widescreen", () => {
    const containerSmallmWide = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.small}
        ratio={AspectRatio.widescreen}
      />
    );
    expect(containerSmallmWide).toMatchSnapshot();
  });

  it("should render small and fullscreen", () => {
    const containerSmallFull = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.small}
        ratio={AspectRatio.fullscreen}
      />
    );
    expect(containerSmallFull).toMatchSnapshot();
  });

  it("should render small and square", () => {
    const containerSmallSquare = render(
      <CrossSellTile
        imageUrl="https://picsum.photos/536/354"
        targetUrl="https://www.bbc.co.uk"
        title="Buy One - Get One Free!"
        titleColor="white"
        strapline="An offer you don't want to miss"
        straplineColor="white"
        description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
        descriptionColor="white"
        size={Size.small}
        ratio={AspectRatio.square}
      />
    );
    expect(containerSmallSquare).toMatchSnapshot();
  });
});
