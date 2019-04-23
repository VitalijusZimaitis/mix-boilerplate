import * as $ from "jquery";
import "slick-carousel";

class Slider {
  slider: JQuery;

  constructor(element: string) {
    this.slider = $(element).slick();
  }

  setSettings = (settings: JQuerySlickOptions): JQuery =>
    this.slider.slick("slickSetOption", settings, true);

  destroy = (): JQuery => this.slider.slick("unslick");
}

export default Slider;
