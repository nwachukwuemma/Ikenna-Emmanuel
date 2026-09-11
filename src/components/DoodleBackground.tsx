export const DoodleBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
      <svg 
        className="w-full h-full object-cover" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 600"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.6"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <g className="text-gray-400/70">
          {/* Row 1: Left */}
          {/* Laptop */}
          <rect x="60" y="40" width="70" height="46" rx="4" />
          <path d="M45 86h100" />
          <path d="M80 60h30" />

          {/* Rocket */}
          <path d="M220 30c10 20 10 40-5 60l-15-5c-5-20 5-45 20-55z" />
          <path d="M200 85l-10 15 15-5" />
          <circle cx="215" cy="55" r="3" />

          {/* Padlock */}
          <rect x="340" y="55" width="40" height="32" rx="4" />
          <path d="M350 55v-12a10 10 0 0 1 20 0v12" />
          <circle cx="360" cy="71" r="2.5" />

          {/* Code brackets */}
          <path d="M470 45l-12 15 12 15" />
          <path d="M495 45l12 15-12 15" />
          <path d="M485 40l-5 35" />

          {/* Cloud */}
          <path d="M600 70a16 16 0 0 1 2-30 20 20 0 0 1 38 6 14 14 0 0 1 12 24h-52z" />

          {/* Row 1: Right */}
          {/* Lightbulb */}
          <path d="M830 55a15 15 0 0 0-10-14 16 16 0 0 0-16 6 15 15 0 0 0 3 18c3 3 5 7 5 11h16c0-4 2-8 5-11a14 14 0 0 0 7-10z" />
          <path d="M814 90h12" />

          {/* Gear */}
          <circle cx="960" cy="65" r="12" />
          <path d="M960 47v36M942 65h36M947 52l26 26M947 78l26-26" />

          {/* Coffee cup */}
          <path d="M1070 50h40v25a12 12 0 0 1-12 12h-16a12 12 0 0 1-12-12v-25z" />
          <path d="M1110 58h8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-8" />
          <path d="M1075 42c0-3 3-5 3-7M1085 42c0-3 3-5 3-7M1095 42c0-3 3-5 3-7" />

          {/* Terminal / screen */}
          <rect x="1200" y="40" width="60" height="42" rx="4" />
          <path d="M1210 54l6 6-6 6M1222 66h12" />

          {/* Smartphone */}
          <rect x="1340" y="35" width="36" height="60" rx="6" />
          <circle cx="1358" cy="86" r="2.5" />
          <path d="M1352 42h12" />

          {/* Row 2: Mid-Left */}
          {/* Shield & check */}
          <path d="M40 160v25c0 30 35 45 40 50 5-5 40-20 40-50v-25l-40-15-40 15z" />
          <path d="M65 185l10 10 20-20" />

          {/* Desktop Monitor */}
          <rect x="160" y="160" width="80" height="52" rx="4" />
          <path d="M200 212v20M180 232h40" />
          <circle cx="200" cy="186" r="10" />

          {/* Chat bubbles */}
          <path d="M300 170h40a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6h-24l-12 10v-10h-4a6 6 0 0 1-6-6v-20a6 6 0 0 1 6-6z" />
          <path d="M312 184h16M312 190h10" />

          {/* Search magnifying glass */}
          <circle cx="430" cy="180" r="16" />
          <path d="M442 192l16 16" />

          {/* Headphones */}
          <path d="M530 190a25 25 0 0 1 50 0v20h-8v-20a17 17 0 0 0-34 0v20h-8v-20z" />
          <rect x="526" y="196" width="10" height="18" rx="3" />
          <rect x="574" y="196" width="10" height="18" rx="3" />

          {/* Row 2: Mid-Right */}
          {/* Target / Crosshairs */}
          <circle cx="890" cy="180" r="18" />
          <circle cx="890" cy="180" r="8" />
          <path d="M890 155v50M865 180h50" />

          {/* Folders & Documents */}
          <path d="M1000 170h20l6 8h24a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-50a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4z" />
          <path d="M1012 192h25M1012 200h18" />

          {/* Keyboard & Mouse */}
          <rect x="1120" y="180" width="70" height="34" rx="4" />
          <path d="M1128 190h8M1142 190h8M1156 190h8M1170 190h8" />
          <path d="M1135 202h40" />
          <rect x="1210" y="180" width="22" height="36" rx="10" />
          <path d="M1221 180v10" />

          {/* Globe / Network */}
          <circle cx="1320" cy="190" r="22" />
          <ellipse cx="1320" cy="190" rx="9" ry="22" />
          <path d="M1298 190h44" />

          {/* Row 3: Bottom Left */}
          {/* Cursor arrow */}
          <path d="M80 300l18 35-7 3-12-24-10 10v-34l22 10z" />

          {/* Briefcase */}
          <rect x="180" y="300" width="55" height="38" rx="5" />
          <path d="M198 300v-8a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v8" />
          <path d="M180 316h55" />
          <circle cx="207" cy="316" r="2" />

          {/* Database / Server stack */}
          <ellipse cx="320" cy="295" rx="25" ry="8" />
          <path d="M295 295v16c0 4.4 11.2 8 25 8s25-3.6 25-8v-16" />
          <path d="M295 311v16c0 4.4 11.2 8 25 8s25-3.6 25-8v-16" />

          {/* Badge / Medal */}
          <circle cx="450" cy="305" r="14" />
          <path d="M440 318l-8 20 14-6 14 6-8-20" />

          {/* Network nodes */}
          <circle cx="560" cy="300" r="5" />
          <circle cx="595" cy="285" r="5" />
          <circle cx="610" cy="325" r="5" />
          <path d="M565 298l25-10M597 290l10 30M564 303l42 20" />

          {/* Row 3: Bottom Right */}
          {/* Sound wave / Speaker */}
          <path d="M820 310l12-10h12v30h-12l-12-10h-8v-10h8z" />
          <path d="M852 300a16 16 0 0 1 0 30M860 293a26 26 0 0 1 0 44" />

          {/* Book / Guide */}
          <path d="M940 300c12-6 24-6 36 0v30c-12-6-24-6-36 0v-30z" />
          <path d="M976 300c12-6 24-6 36 0v30c-12-6-24-6-36 0v-30z" />
          <path d="M976 300v30" />

          {/* Wrench and Screwdriver */}
          <path d="M1080 300l25 25M1105 300l-25 25" />
          <circle cx="1080" cy="300" r="4" />
          <circle cx="1105" cy="325" r="4" />

          {/* Analytics bar chart */}
          <rect x="1190" y="320" width="8" height="25" rx="1" />
          <rect x="1204" y="305" width="8" height="40" rx="1" />
          <rect x="1218" y="295" width="8" height="50" rx="1" />
          <rect x="1232" y="312" width="8" height="33" rx="1" />

          {/* Checklist / Card */}
          <rect x="1310" y="295" width="50" height="48" rx="4" />
          <path d="M1320 310l4 4 8-8M1338 310h14M1320 326l4 4 8-8M1338 326h14" />

          {/* Row 4: Subtle Filler along bottom edge */}
          <circle cx="120" cy="450" r="16" />
          <path d="M112 450h16M120 442v16" />

          <rect x="250" y="430" width="48" height="32" rx="4" />
          <path d="M260 445h28" />

          <path d="M400 440l15-15 15 15-15 15z" />

          <path d="M920 435a12 12 0 0 0 12 12h20a12 12 0 0 0 0-24h-20a12 12 0 0 0-12 12z" />

          <rect x="1050" y="430" width="40" height="40" rx="8" />
          <circle cx="1070" cy="450" r="8" />

          <path d="M1200 430l20 20-20 20" />
          <path d="M1300 440c10-10 20-10 30 0" />
        </g>
      </svg>
      {/* Soft radial gradient mask to keep doodle visible on sides and clean in center */}
      <div 
        className="absolute inset-0 bg-radial-[at_50%_45%] from-white/95 via-white/80 to-white/40"
      />
    </div>
  );
};
