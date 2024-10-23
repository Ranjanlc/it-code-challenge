import styles from "./Svg.module.css";
function Left() {
  return (
    <svg
      className={styles.leftsvg} // Replaced "className" with "className={styles.leftsvg}"
      xmlns="http://www.w3.org/2000/svg"
      width="476"
      height="493"
      viewBox="0 0 476 493"
      fill="none"
    >
      <path
        d="M247.5 39.993C325.434 64.5198 408.343 89.9086 446.504 149.015C486.381 210.778 485.077 286.655 447.117 349.171C411.403 407.989 332.813 437.167 256.513 461.913C182.794 485.822 104.31 504.225 28.4532 484.955C-51.7304 464.586 -122.68 419.632 -153.758 357.69C-183.996 297.424 -156.765 232.551 -128.761 171.613C-99.8341 108.668 -71.5419 37.4185 5.86649 10.3402C83.3652 -16.7697 168.765 15.2141 247.5 39.993Z"
        fill="#B16767"
        fillOpacity="0.03"
      />
    </svg>
  );
}

export default Left;
