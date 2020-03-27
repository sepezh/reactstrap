import React from "react";
import "./BuildAndPriceImageRotator.css";
import Numeral from "numeral";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class BuildAndPriceImageRotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.buildItems = this.buildItems.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  buildItems() {
    const selectedGameData = this.props.gameData.filter(
      game => game.detailKey === this.props.selectedGame
    )[0];
    let items = [];
    for (let i = 0; i < 21; i++) {
      let url = "/images/thumbnails/" + this.props.selectedGame;
      url += "/" + this.props.selectedGame;
      url += "-thumbnails" + Numeral(i).format("00") + ".png";
      items.push({ src: url, altText: "", caption: "" });
    }

    return items;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.buildItems().length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.buildItems().length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items = this.buildItems();
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            className={"buildAndPriceImage"}
            src={item.src}
            alt={item.altText}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        slide={false}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default BuildAndPriceImageRotator;
