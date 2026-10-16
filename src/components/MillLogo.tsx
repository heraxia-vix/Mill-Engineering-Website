import React from 'react';

interface MillLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  variant?: 'full' | 'horizontal' | 'mark';
  showSubtitle?: boolean;
}

/**
 * Official Mill Engineering logo supplied by the company.
 * The artwork is used as an image rather than recreated in SVG so the
 * production site always uses the approved mark, wordmark and tagline.
 */
export const MillLogo: React.FC<MillLogoProps> = ({
  className = 'h-11',
  theme = 'auto',
  variant = 'horizontal',
  showSubtitle = true,
}) => {
  const source = variant === 'full'
    ? '/mill-engineering-logo-full.png'
    : variant === 'mark'
      ? '/mill-engineering-logo-mark.png'
      : '/mill-engineering-logo-lockup.png';

  const alt = variant === 'mark'
    ? 'Mill Engineering'
    : showSubtitle || variant === 'full'
      ? 'Mill Engineering — Bridging Industrial Challenges with Global Technologies'
      : 'Mill Engineering';

  // The supplied artwork is designed on a white background. On the dark
  // hero navbar, keep the approved artwork intact inside a clean white tile.
  const frame = theme === 'dark' && variant !== 'mark'
    ? 'bg-white rounded-sm px-2 py-1'
    : '';

  return (
    <span className={`inline-flex items-center justify-center select-none ${frame} ${className}`}>
      <img
        src={source}
        alt={alt}
        className="block h-full w-auto max-w-full object-contain"
        draggable={false}
      />
    </span>
  );
};
