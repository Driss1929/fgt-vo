import React from 'react';
import officialQrCodeImg from '../../assets/images/fegt_portal_qr_code.png';

/**
 * Official FEGT - Université Ibn Zohr emblem & logo (vector)
 */
export const FEGTLogo: React.FC<{
  variant?: 'light' | 'dark' | 'transparent';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ variant = 'light', className = '', size = 'md' }) => {
  const isLightText = variant === 'light';
  
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Insignia / Seal */}
      <svg
        viewBox="0 0 100 100"
        className={size === 'lg' ? 'w-14 h-14 shrink-0' : size === 'sm' ? 'w-9 h-9 shrink-0' : 'w-11 h-11 shrink-0'}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="48" fill={isLightText ? '#03594E' : '#FFFFFF'} stroke={isLightText ? '#CD935A' : '#03594E'} strokeWidth="3" />
        <circle cx="50" cy="50" r="41" fill="none" stroke={isLightText ? '#CD935A' : '#03594E'} strokeWidth="1" strokeDasharray="3 2" />
        
        {/* Moroccan 8-pointed star in center */}
        <g transform="translate(50, 50)">
          <rect x="-18" y="-18" width="36" height="36" fill={isLightText ? '#FE8235' : '#03594E'} rx="2" />
          <rect x="-18" y="-18" width="36" height="36" fill={isLightText ? '#F8C62F' : '#FE8235'} rx="2" transform="rotate(45)" opacity="0.9" />
          <circle cx="0" cy="0" r="10" fill={isLightText ? '#03594E' : '#FFFFFF'} />
          
          {/* Stylized Open Book & Feather / Knowledge emblem */}
          <path
            d="M-6,2 Q0,-2 6,2 Q0,4 -6,2 Z M-6,2 Q-4,7 0,8 Q4,7 6,2"
            fill={isLightText ? '#F8C62F' : '#03594E'}
          />
          <circle cx="0" cy="-3" r="2" fill={isLightText ? '#CD935A' : '#FE8235'} />
        </g>
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span
            className={`font-serif tracking-widest text-xs uppercase font-bold ${
              isLightText ? 'text-[#CD935A]' : 'text-[#03594E]'
            }`}
          >
            UNIVERSITÉ IBN ZOHR · AGADIR
          </span>
          <span
            className={`text-[9px] font-medium opacity-80 ${
              isLightText ? 'text-amber-200' : 'text-stone-600'
            }`}
          >
            جامعة ابن زهر
          </span>
        </div>
        <span
          className={`font-serif font-bold tracking-tight leading-none text-base sm:text-lg ${
            isLightText ? 'text-white' : 'text-[#03594E]'
          }`}
        >
          Faculté d’Économie et de Gestion
        </span>
        <div className="flex items-center justify-between text-[10px] tracking-wider font-semibold uppercase mt-0.5">
          <span className={isLightText ? 'text-amber-300' : 'text-[#FE8235]'}>
            DE TAROUDANT (FEGT)
          </span>
          <span className={isLightText ? 'text-stone-300 opacity-90' : 'text-stone-500'}>
            كلية الاقتصاد والتدبير بتارودانت
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Panoramic Taroudant Ramparts & Oases artwork
 */
export const TaroudantRampartsArt: React.FC<{ className?: string; height?: string }> = ({
  className = '',
  height = 'h-64'
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-xl bg-gradient-to-b from-[#e6aa68]/40 via-[#d37b3e]/30 to-[#182a25]/90 ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7d498" />
            <stop offset="45%" stopColor="#f39c59" />
            <stop offset="85%" stopColor="#c85a2d" />
            <stop offset="100%" stopColor="#4a2518" />
          </linearGradient>
          <linearGradient id="mountainsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7a4e58" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#402832" />
          </linearGradient>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c96d39" />
            <stop offset="40%" stopColor="#a75027" />
            <stop offset="100%" stopColor="#562612" />
          </linearGradient>
          <linearGradient id="sandGround" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b46738" />
            <stop offset="100%" stopColor="#251a14" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1000" height="500" fill="url(#skyGrad)" />

        {/* Golden Sun / Sunset */}
        <circle cx="680" cy="180" r="90" fill="#fff7d6" opacity="0.85" />
        <circle cx="680" cy="180" r="140" fill="#fbd274" opacity="0.25" />

        {/* High Atlas Mountains backdrop */}
        <path
          d="M0,280 L140,210 L280,250 L420,180 L560,240 L700,160 L840,230 L1000,190 L1000,500 L0,500 Z"
          fill="url(#mountainsGrad)"
        />

        {/* Middle hill row */}
        <path
          d="M0,320 Q220,270 480,310 T1000,290 L1000,500 L0,500 Z"
          fill="#53312b"
          opacity="0.9"
        />

        {/* Palm silhouettes in distance */}
        <g fill="#2d1e18" opacity="0.85">
          {/* Palm 1 */}
          <path d="M120,380 Q122,320 125,260 Q126,260 128,380 Z" />
          <path d="M125,260 Q90,240 60,265 Q95,255 125,260" stroke="#2d1e18" strokeWidth="4" />
          <path d="M125,260 Q160,235 190,260 Q155,255 125,260" stroke="#2d1e18" strokeWidth="4" />
          <path d="M125,260 Q125,220 120,210 Q127,230 125,260" stroke="#2d1e18" strokeWidth="4" />

          {/* Palm 2 */}
          <path d="M155,390 Q160,330 162,280 Q164,280 166,390 Z" />
          <path d="M162,280 Q130,260 100,285" stroke="#2d1e18" strokeWidth="4" />
          <path d="M162,280 Q200,260 220,285" stroke="#2d1e18" strokeWidth="4" />

          {/* Cluster right */}
          <path d="M850,380 Q845,320 840,270" stroke="#2d1e18" strokeWidth="5" />
          <path d="M840,270 Q800,250 780,280" stroke="#2d1e18" strokeWidth="4" />
          <path d="M840,270 Q880,250 910,275" stroke="#2d1e18" strokeWidth="4" />
          <path d="M875,390 Q880,335 885,290" stroke="#2d1e18" strokeWidth="5" />
        </g>

        {/* Taroudant Historic Mudbrick Rampart Walls & Bastions */}
        <g>
          {/* Wall connecting line */}
          <path d="M0,350 L260,350 L260,310 L340,310 L340,350 L640,350 L640,300 L740,300 L740,350 L1000,350 L1000,450 L0,450 Z" fill="url(#wallGrad)" />

          {/* Crenellations / Merlons along wall */}
          {Array.from({ length: 42 }).map((_, i) => (
            <rect
              key={i}
              x={i * 24}
              y="336"
              width="14"
              height="15"
              fill="#bb6031"
            />
          ))}

          {/* Bastion 1 (Left Tower) */}
          <rect x="250" y="300" width="100" height="150" fill="#a75027" />
          {/* Bastion merlons */}
          <rect x="252" y="288" width="16" height="13" fill="#cf723d" />
          <rect x="274" y="288" width="16" height="13" fill="#cf723d" />
          <rect x="296" y="288" width="16" height="13" fill="#cf723d" />
          <rect x="318" y="288" width="16" height="13" fill="#cf723d" />
          <rect x="334" y="288" width="14" height="13" fill="#cf723d" />

          {/* Bastion Slits / Meurtrières */}
          <rect x="295" y="325" width="8" height="28" rx="3" fill="#381c10" />

          {/* Bastion 2 (Grand Gate / Bab Entrance) */}
          <rect x="630" y="290" width="120" height="160" fill="#9d4922" />
          {/* Gate crenellations */}
          <rect x="632" y="278" width="16" height="13" fill="#be6432" />
          <rect x="654" y="278" width="16" height="13" fill="#be6432" />
          <rect x="676" y="278" width="16" height="13" fill="#be6432" />
          <rect x="698" y="278" width="16" height="13" fill="#be6432" />
          <rect x="720" y="278" width="16" height="13" fill="#be6432" />

          {/* Horseshoe Moorish Arch (Bab Entrance) */}
          <path
            d="M665,450 L665,370 Q665,335 690,335 Q715,335 715,370 L715,450 Z"
            fill="#2c140a"
          />
          {/* Decorative arch border */}
          <path
            d="M660,450 L660,370 Q660,325 690,325 Q720,325 720,370 L720,450"
            fill="none"
            stroke="#f0a561"
            strokeWidth="4"
          />
        </g>

        {/* Foreground Sand & Desert Road */}
        <path d="M0,430 Q500,410 1000,430 L1000,500 L0,500 Z" fill="url(#sandGround)" />

        {/* Subtle Olive trees in foreground */}
        <g fill="#1f3629" opacity="0.95">
          <circle cx="80" cy="450" r="26" />
          <circle cx="105" cy="445" r="20" />
          <circle cx="480" cy="460" r="22" />
          <circle cx="505" cy="455" r="28" />
          <circle cx="920" cy="450" r="30" />
        </g>
      </svg>

      {/* Atmospheric label badge */}
      <div className="absolute bottom-3 left-4 bg-[#03594E]/90 text-white backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-serif border border-[#CD935A]/40 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FE8235] animate-pulse"></span>
        <span>Taroudant · Cité historique & remparts séculaires du Souss</span>
      </div>
    </div>
  );
};

/**
 * Modern University Campus FEGT Architectural Vector
 */
export const CampusBuildingArt: React.FC<{ className?: string; height?: string }> = ({
  className = '',
  height = 'h-56'
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-xl bg-gradient-to-br from-[#03594E] via-[#094139] to-[#01221e] ${className}`}>
      <svg
        viewBox="0 0 800 450"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="facadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f3efe8" />
            <stop offset="100%" stopColor="#dfd5c4" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#418579" />
            <stop offset="100%" stopColor="#1e4e46" />
          </linearGradient>
        </defs>

        {/* Sky with soft gradient */}
        <rect width="800" height="450" fill="#043831" />
        <circle cx="120" cy="90" r="60" fill="#FE8235" opacity="0.15" />

        {/* Distant palm trees */}
        <g fill="#022722">
          <rect x="50" y="240" width="6" height="80" />
          <circle cx="53" cy="235" r="25" />
          <rect x="740" y="240" width="6" height="80" />
          <circle cx="743" cy="235" r="25" />
        </g>

        {/* Main Campus Building Block */}
        <rect x="100" y="140" width="600" height="220" fill="url(#facadeGrad)" rx="4" />
        {/* Roof overhang */}
        <rect x="80" y="130" width="640" height="15" fill="#FE8235" rx="3" />

        {/* Modern Mashrabiya / Brise-soleil slats */}
        {Array.from({ length: 18 }).map((_, i) => (
          <rect
            key={i}
            x={130 + i * 30}
            y="160"
            width="18"
            height="85"
            fill="#03594E"
            rx="2"
            opacity="0.85"
          />
        ))}

        {/* Large glazed ground floor library & amphitheatres */}
        <rect x="130" y="260" width="540" height="95" fill="url(#glassGrad)" rx="2" />
        {/* Glass mullions */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={130 + i * 60}
            y1="260"
            x2={130 + i * 60}
            y2="355"
            stroke="#f3efe8"
            strokeWidth="3"
            opacity="0.6"
          />
        ))}

        {/* Entrance Portal */}
        <rect x="360" y="270" width="90" height="85" fill="#182A25" rx="2" />
        <path d="M375,355 L375,295 Q405,280 435,295 L435,355 Z" fill="#F8C62F" opacity="0.3" />
        {/* Sign on building */}
        <rect x="310" y="148" width="190" height="18" fill="#03594E" rx="3" />
        <text x="405" y="161" fill="#F8C62F" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" letterSpacing="2">
          FACULTÉ D’ÉCONOMIE ET DE GESTION
        </text>

        {/* Plazza, gardens, walkways */}
        <path d="M0,355 L800,355 L800,450 L0,450 Z" fill="#cfc2ad" />
        <path d="M280,355 L530,355 L650,450 L160,450 Z" fill="#e5dcce" />

        {/* Planters & Greenery */}
        <rect x="160" y="375" width="90" height="25" fill="#03594E" rx="4" />
        <circle cx="180" cy="370" r="14" fill="#669d34" />
        <circle cx="205" cy="368" r="16" fill="#84cc16" />
        <circle cx="230" cy="370" r="14" fill="#669d34" />

        <rect x="560" y="375" width="90" height="25" fill="#03594E" rx="4" />
        <circle cx="580" cy="370" r="14" fill="#669d34" />
        <circle cx="605" cy="368" r="16" fill="#84cc16" />
        <circle cx="630" cy="370" r="14" fill="#669d34" />

        {/* Students walking figures */}
        <g fill="#03594E">
          {/* Student 1 */}
          <circle cx="340" cy="385" r="6" />
          <path d="M334,393 L346,393 L344,418 L336,418 Z" />
          {/* Student 2 with backpack */}
          <circle cx="365" cy="390" r="5.5" />
          <path d="M360,397 L370,397 L368,422 L362,422 Z" />
          <rect x="368" y="399" width="4" height="10" fill="#FE8235" rx="1" />
          {/* Student 3 */}
          <circle cx="450" cy="395" r="5.5" />
          <path d="M445,402 L455,402 L453,425 L447,425 Z" />
        </g>
      </svg>

      <div className="absolute bottom-2.5 left-3.5 bg-black/60 text-stone-200 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-sans flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>Campus FEGT · Bâtiment académique & Espaces d’apprentissage</span>
      </div>
    </div>
  );
};

/**
 * Campus Courtyard / Patio & Student Life
 */
export const CampusCourtyardArt: React.FC<{ className?: string; height?: string }> = ({
  className = '',
  height = 'h-40'
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-xl bg-gradient-to-r from-[#03594E] to-[#1c4941] ${className}`}>
      <svg
        viewBox="0 0 600 300"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="600" height="300" fill="#043831" />
        {/* Traditional Moroccan patio arches */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(${40 + i * 110}, 40)`}>
            <rect x="0" y="40" width="85" height="160" fill="#ebdcc8" />
            <path d="M5,200 L5,90 Q42,50 80,90 L80,200 Z" fill="#08473e" />
            <path d="M2,90 Q42,42 83,90" fill="none" stroke="#FE8235" strokeWidth="4" />
          </g>
        ))}

        {/* Central Fountain / Water Mirror */}
        <ellipse cx="300" cy="240" rx="90" ry="25" fill="#CD935A" />
        <ellipse cx="300" cy="238" rx="80" ry="20" fill="#38bdf8" opacity="0.8" />
        <circle cx="300" cy="235" r="8" fill="#F8C62F" />

        {/* Ambient lighting */}
        <circle cx="300" cy="100" r="60" fill="#F8C62F" opacity="0.1" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
        <span className="text-white text-xs font-serif font-medium">
          Patio universitaire · Échanges et vie étudiante à Taroudant
        </span>
      </div>
    </div>
  );
};

/**
 * Student Sport & Creativity Vector Artwork
 */
export const StudentsSportArt: React.FC<{ className?: string; height?: string }> = ({
  className = '',
  height = 'h-44'
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-xl bg-gradient-to-br from-[#FE8235] via-[#cf5f1d] to-[#03594E] ${className}`}>
      <svg
        viewBox="0 0 600 300"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dynamic sport waves & energy lines */}
        <path d="M-50,220 Q150,120 350,260 T700,180 L700,350 L-50,350 Z" fill="#03594E" opacity="0.9" />
        <path d="M-50,250 Q200,160 400,280 T700,220 L700,350 L-50,350 Z" fill="#023b34" />

        {/* Sport silhouettes: Runner, Football player, Basketball */}
        {/* Athlete 1 - Runner */}
        <g fill="#FFFFFF" opacity="0.95" transform="translate(120, 70)">
          <circle cx="40" cy="25" r="9" />
          <path d="M35,38 L45,38 L55,75 L42,75 L35,55 L25,75 L15,70 L28,45 Z" />
          <path d="M50,45 L70,55 L65,65 L48,52 Z" />
          <path d="M30,45 L15,58 L18,65 L32,52 Z" />
        </g>

        {/* Athlete 2 - Ball player */}
        <g fill="#F8C62F" opacity="0.95" transform="translate(320, 60)">
          <circle cx="50" cy="20" r="9" />
          <path d="M45,34 L55,34 L65,80 L52,80 L48,58 L32,82 L20,78 L40,45 Z" />
          {/* Ball */}
          <circle cx="95" cy="35" r="14" fill="#FFFFFF" stroke="#03594E" strokeWidth="2" />
        </g>

        {/* Oratory / Podium Speaker Silhouette (Culture / UIZ Éloquence) */}
        <g fill="#FFFFFF" opacity="0.9" transform="translate(470, 75)">
          <circle cx="30" cy="25" r="8" />
          <path d="M22,38 L38,38 L35,80 L25,80 Z" />
          <path d="M35,42 L52,36 L55,44 L38,48 Z" />
          {/* Mic stand */}
          <line x1="58" y1="36" x2="58" y2="90" stroke="#F8C62F" strokeWidth="3" />
        </g>
      </svg>
      <div className="absolute bottom-2.5 left-3.5 bg-black/60 text-white backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-sans">
        Sports, éloquence et expressions artistiques
      </div>
    </div>
  );
};

/**
 * Authentic Vector QR Code for FEGT Official Portal
 */
export const QRCodeSVG: React.FC<{
  url?: string;
  size?: number;
  className?: string;
}> = ({ url = 'https://fegt.uiz.ac.ma/', size = 110, className = '' }) => {
  return (
    <div 
      className={`inline-flex flex-col items-center bg-white p-2.5 rounded-xl border border-stone-200 shadow-sm transition-transform hover:scale-105 ${className}`}
      title="Scannez pour accéder au portail officiel FEGT (https://fegt.uiz.ac.ma/)"
    >
      <img
        src={officialQrCodeImg}
        alt="QR Code officiel FEGT — https://fegt.uiz.ac.ma/"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px`, imageRendering: 'pixelated' }}
        className="rounded-lg object-contain bg-white"
        loading="eager"
        decoding="async"
      />
      <span className="text-[9px] font-mono font-bold text-stone-500 mt-1 uppercase tracking-wider text-center">
        fegt.uiz.ac.ma
      </span>
    </div>
  );
};
