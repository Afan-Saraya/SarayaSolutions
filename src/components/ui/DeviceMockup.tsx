"use client";

import { useState, useEffect } from "react";
import { ExternalLink, MousePointer, Hand } from "lucide-react";

interface DeviceMockupProps {
  iframeUrl: string;
  className?: string;
}

export default function DeviceMockup({ iframeUrl, className = "" }: DeviceMockupProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (!isInteractive) {
      setShowOverlay(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isInteractive && !isMobile) {
      setShowOverlay(false);
    }
  };

  const enableInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsInteractive(true);
    setShowOverlay(false);
  };

  const shouldShowOverlay = isMobile ? !isInteractive : (showOverlay && !isInteractive);

  // Pre-calculated scales based on container widths
  // Desktop container: 300px -> 680px, iframe: 1920px
  // Mobile container: 70px -> 130px, iframe: 390px

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/15 via-pink-500/10 to-accent-green/15 rounded-full blur-3xl opacity-60" />
      
      {/* Open in new tab button */}
      <a
        href={iframeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-1 right-4 md:-top-2 md:-right-2 z-30 p-1.5 md:p-2 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all hover:scale-110"
        title="Otvori u novom tabu"
      >
        <ExternalLink size={12} className="md:w-[14px] md:h-[14px]" />
      </a>
      
      <div className="relative">
        {/* Desktop Mockup */}
        <div 
          className="relative"
          onMouseEnter={handleInteraction}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleInteraction}
        >
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-3 bg-black/30 blur-xl rounded-full" />

          <div className="relative w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[480px]">
            <div className="relative bg-[#1a1a1e] rounded-lg p-[3px] md:p-[5px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-md overflow-hidden">
                {/* Desktop screen */}
                <div className="relative w-full overflow-hidden bg-[#0d0d0f]" style={{ aspectRatio: '16/9' }}>
                  {/* Iframe wrapper with percentage-based scaling */}
                  <iframe
                    src={iframeUrl}
                    className={`absolute top-0 left-0 border-0 origin-top-left w-[1920px] h-[1080px] bg-[#0d0d0f]
                      scale-[0.115] sm:scale-[0.146] md:scale-[0.188] lg:scale-[0.219] xl:scale-[0.25]
                      ${isInteractive ? '' : 'pointer-events-none'}`}
                    title="Desktop Preview"
                    loading="eager"
                  />
                  
                  {/* Overlay for interaction prompt */}
                  {shouldShowOverlay && (
                    <div 
                      className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer transition-all z-10"
                      onClick={enableInteraction}
                      onTouchEnd={enableInteraction}
                    >
                      {isMobile ? (
                        <Hand className="text-white mb-1.5" size={20} />
                      ) : (
                        <MousePointer className="text-white mb-1.5" size={20} />
                      )}
                      <p className="text-white text-[10px] md:text-xs font-medium text-center px-2">
                        {isMobile ? "Dodirnite za interakciju" : "Kliknite za interakciju"}
                      </p>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-[5]" />
                </div>
              </div>
              <div className="h-2 md:h-3 flex items-center justify-center mt-0.5">
                <div className="w-4 md:w-6 h-0.5 rounded-full bg-[#2a2a30]" />
              </div>
            </div>
            <div className="mx-auto w-10 md:w-14 h-6 md:h-10 bg-gradient-to-b from-[#1a1a1e] via-[#252528] to-[#1a1a1e]" />
            <div className="mx-auto w-20 md:w-28 h-1.5 md:h-2 bg-gradient-to-b from-[#252528] to-[#1a1a1e] rounded-full" />
          </div>
        </div>

        {/* Phone Mockup - Overlapping */}
        <div className="absolute -right-2 sm:-right-6 md:-right-8 lg:-right-10 -bottom-6 md:-bottom-8">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-2 bg-black/30 blur-lg rounded-full" />
          
          <div 
            className="relative w-[50px] sm:w-[62px] md:w-[78px] lg:w-[90px]"
            onMouseEnter={handleInteraction}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleInteraction}
          >
            <div className="relative bg-[#1a1a1e] rounded-[10px] sm:rounded-[14px] md:rounded-[18px] p-[2px] md:p-[3px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-[8px] sm:rounded-[12px] md:rounded-[15px] overflow-hidden">
                <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-6 sm:w-7 md:w-8 h-1 md:h-2 bg-[#0d0d0f] rounded-full z-20" />
                {/* Mobile screen */}
                <div 
                  className="relative w-full overflow-hidden rounded-[6px] sm:rounded-[10px] md:rounded-[12px] bg-[#0d0d0f]" 
                  style={{ aspectRatio: '390/844' }}
                >
                  <iframe
                    src={iframeUrl}
                    className={`absolute top-0 left-0 border-0 origin-top-left w-[390px] h-[844px] bg-[#0d0d0f]
                      scale-[0.128] sm:scale-[0.159] md:scale-[0.2] lg:scale-[0.231]
                      ${isInteractive ? '' : 'pointer-events-none'}`}
                    title="Mobile Preview"
                    loading="eager"
                  />
                  
                  {/* Overlay for interaction prompt */}
                  {shouldShowOverlay && (
                    <div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer transition-all z-10"
                      onClick={enableInteraction}
                      onTouchEnd={enableInteraction}
                    >
                      {isMobile ? (
                        <Hand className="text-white" size={14} />
                      ) : (
                        <MousePointer className="text-white" size={14} />
                      )}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-[5]" />
                </div>
              </div>
              <div className="absolute right-[-1px] top-10 sm:top-12 md:top-16 w-[1px] md:w-[2px] h-5 md:h-7 bg-[#252528] rounded-r-sm" />
              <div className="absolute left-[-1px] top-8 sm:top-10 md:top-12 w-[1px] md:w-[2px] h-3 md:h-5 bg-[#252528] rounded-l-sm" />
              <div className="absolute left-[-1px] top-14 sm:top-16 md:top-20 w-[1px] md:w-[2px] h-5 md:h-7 bg-[#252528] rounded-l-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
