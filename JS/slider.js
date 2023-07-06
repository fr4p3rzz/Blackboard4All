var slider = document.getElementById("stroke-dimension-slider");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    strokeDimension = this.value
    context.lineWidth = strokeDimension;
}