import { ImageWithFallback } from './figma/ImageWithFallback';

interface TrailDecorationProps {
  className?: string;
}

export function TrailDecoration({ className = "" }: TrailDecorationProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Trilha principal */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-25 dark:opacity-15" 
        viewBox="0 0 800 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M-50 300 Q200 100 400 250 Q600 400 850 200" 
          stroke="url(#gradient1)" 
          strokeWidth="4" 
          strokeDasharray="12,8"
          fill="none"
        />
        <path 
          d="M-50 450 Q300 250 500 400 Q700 550 850 350" 
          stroke="url(#gradient2)" 
          strokeWidth="3" 
          strokeDasharray="8,6"
          fill="none"
        />
        <path 
          d="M-100 150 Q250 50 450 180 Q650 300 900 120" 
          stroke="url(#gradient3)" 
          strokeWidth="2" 
          strokeDasharray="6,4"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(249 115 22)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(249 115 22)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(249 115 22)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(249 115 22)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="rgb(249 115 22)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="rgb(249 115 22)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(251 146 60)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(251 146 60)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(251 146 60)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}