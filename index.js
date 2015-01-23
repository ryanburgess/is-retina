// retinaCheck
//
// Use: Determines whether or not the given device is retina
//
// Returns: Boolean
// ------------------------------------------------------------

module.exports = function retinaCheck(){
  if (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)').matches) {
    return true;
  }
  return false;
};