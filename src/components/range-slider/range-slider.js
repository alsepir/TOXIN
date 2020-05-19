import './range-slider.scss';
import 'jquery-ui/ui/widgets/slider';

$(function() {
  $('.range-slider__movement').slider({
    classes: {
      "ui-slider": "ui-custom-slider",
      "ui-slider-handle": "ui-custom-handle",
      "ui-slider-range": "ui-custom-header"
    },
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide(event, ui) {
      $('.range-slider__amount').text('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });

  let getValue = function(index) {
    return $('.range-slider__movement').slider('values', index)
  }

  $('.range-slider__amount')
    .text(`${getValue(0)}₽ - ${getValue(1)}₽`);
});