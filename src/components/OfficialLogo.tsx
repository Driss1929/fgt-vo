import React from 'react';
import officialLogoImg from '../assets/images/fegt_official_user_logo.png';
import officialLogoTransparentImg from '../assets/images/fegt_official_user_logo_transparent.png';
import officialLogoWhiteImg from '../assets/images/fegt_official_user_logo_white.png';
import officialQrCodeImg from '../assets/images/fegt_portal_qr_code.png';

export interface FEGTOfficialLogoProps {
  variant?: 'white' | 'dark' | 'boxed' | 'transparent';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const FEGTOfficialLogo: React.FC<FEGTOfficialLogoProps> = ({
  variant = 'boxed',
  className = '',
  size = 'md'
}) => {
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-9 sm:h-11',
    lg: 'h-13 sm:h-16',
    xl: 'h-18 sm:h-22'
  }[size];

  // Boxed or white plate variant: ideal for navigation bars, covers, dark banners, and photographic backgrounds
  if (variant === 'boxed' || variant === 'white') {
    return (
      <div 
        className={`inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-100 transition-all select-none ${className}`}
        title="Faculté d'Économie et de Gestion de Taroudant · Université Ibn Zohr"
      >
        <picture>
          <source srcSet={officialLogoImg} type="image/png" />
          <img
            src={officialLogoImg}
            alt="Faculté d'Économie et de Gestion de Taroudant — Université Ibn Zohr"
            className={`${heightClasses} w-auto object-contain max-w-full`}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    );
  }

  // Dark variant for pure dark backgrounds without card
  if (variant === 'dark') {
    return (
      <div 
        className={`inline-flex items-center select-none ${className}`}
        title="Faculté d'Économie et de Gestion de Taroudant · Université Ibn Zohr"
      >
        <img
          src={officialLogoWhiteImg}
          alt="Faculté d'Économie et de Gestion de Taroudant — Université Ibn Zohr"
          className={`${heightClasses} w-auto object-contain max-w-full brightness-200 contrast-125`}
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // Transparent variant: directly uses transparent PNG for blending onto light neutral surfaces
  return (
    <div 
      className={`inline-flex items-center select-none ${className}`}
      title="Faculté d'Économie et de Gestion de Taroudant · Université Ibn Zohr"
    >
      <img
        src={officialLogoTransparentImg}
        alt="Faculté d'Économie et de Gestion de Taroudant — Université Ibn Zohr"
        className={`${heightClasses} w-auto object-contain max-w-full`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export const FEGTQrCode: React.FC<{ size?: number; className?: string }> = ({
  size = 110,
  className = ''
}) => {
  return (
    <div 
      className={`inline-flex flex-col items-center bg-white p-2 rounded-xl border border-stone-200 shadow-sm transition-transform hover:scale-105 ${className}`}
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
      <span className="text-[9px] font-mono font-bold text-stone-500 mt-1 uppercase tracking-wider">
        fegt.uiz.ac.ma
      </span>
    </div>
  );
};
