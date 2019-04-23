import * as $ from "jquery";
import "bootstrap";
import Slider from "./components/Slider";

$(() => {
  $(window).on("load", () => {
    console.log("Initiated");
  });

  const gallerySlider = new Slider(".gallery");
  gallerySlider.setSettings({
    autoplay: true,
    arrows: false
  });
});
