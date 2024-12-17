import React from "react";
import "../styles/Wave.css";

function Wave() {
  return (
    <svg
      width="100%"
      height="100%"
      aria-hidden="true"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="12%" y1="18%" x2="88%" y2="82%">
          <stop offset="5%" stop-color="#F78DA7"></stop>
          <stop offset="95%" stop-color="#8ed1fc"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,100 C 95.5023923444976,78.1531100478469 191.0047846889952,56.30622009569379 288,71 C 384.9952153110048,85.69377990430621 483.48325358851685,136.92822966507177 580,145 C 676.5167464114832,153.07177033492823 771.0622009569377,117.98086124401912 877,107 C 982.9377990430623,96.01913875598088 1100.267942583732,109.14832535885168 1196,112 C 1291.732057416268,114.85167464114832 1365.8660287081339,107.42583732057416 1440,100 L 1440,400 L 0,400 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="0.53"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="12%" y1="18%" x2="88%" y2="82%">
          <stop offset="5%" stop-color="#F78DA7"></stop>
          <stop offset="95%" stop-color="#8ed1fc"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,233 C 95.42583732057417,232.36842105263156 190.85167464114835,231.73684210526315 287,228 C 383.14832535885165,224.26315789473685 480.01913875598086,217.42105263157893 569,219 C 657.9808612440191,220.57894736842107 739.0717703349283,230.57894736842104 845,223 C 950.9282296650717,215.42105263157896 1081.6937799043062,190.26315789473685 1185,189 C 1288.3062200956938,187.73684210526315 1364.153110047847,210.36842105263156 1440,233 L 1440,400 L 0,400 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
}

export default Wave;
