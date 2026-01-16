"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, MousePointer, Hand } from "lucide-react";

interface DeviceMockupProps {
  iframeUrl: string;
  className?: string;
}

export default function DeviceMockup({ iframeUrl, className = "" }: DeviceMockupProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [desktopScale, setDesktopScale] = useState(0.35);
  const [mobileScale, setMobileScale] = useState(0.18);
  
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Desktop: 1920x1080 (16:9)
  const desktopWidth = 1920;
  const desktopHeight = 1080;
  
  // Mobile: 390x844 (iPhone 14 Pro)
  const mobileWidth = 390;
  const mobileHeight = 844;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const calculateScales = () => {
      if (desktopContainerRef.current) {
        const containerWidth = desktopContainerRef.current.offsetWidth;
        const scale = containerWidth / desktopWidth;
        setDesktopScale(scale);
      }
      if (mobileContainerRef.current) {
        const containerWidth = mobileContainerRef.current.offsetWidth;
        const scale = containerWidth / mobileWidth;
        setMobileScale(scale);
      }
    };

    calculateScales();
    window.addEventListener('resize', calculateScales);
    
    // Recalculate after a short delay to ensure container is rendered
    const timeout = setTimeout(calculateScales, 100);
    
    return () => {
      window.removeEventListener('resize', calculateScales);
      clearTimeout(timeout);
    };
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

  // Show overlay by default on mobile until interaction is enabled
  const shouldShowOverlay = isMobile ? !isInteractive : (showOverlay && !isInteractive);

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

          <div className="relative w-[300px] sm:w-[400px] md:w-[520px] lg:w-[600px] xl:w-[680px]">
            <div className="relative bg-[#1a1a1e] rounded-lg p-[4px] md:p-[6px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-md overflow-hidden">
                {/* Desktop screen container - maintains 16:9 aspect ratio */}
                <div 
                  ref={desktopContainerRef}
                  className="relative bg-white overflow-hidden" 
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* Iframe renders at 1920x1080 and scales down to fit container */}
                  <iframe
                    src={iframeUrl}
                    className={`absolute top-0 left-0 border-0 origin-top-left ${isInteractive ? '' : 'pointer-events-none'}`}
                    style={{ 
                      width: `${desktopWidth}px`, 
                      height: `${desktopHeight}px`,
                      transform: `scale(${desktopScale})`,
                    }}
                    title="Desktop Preview"
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
            className="relative w-[70px] sm:w-[90px] md:w-[110px] lg:w-[130px]"
            onMouseEnter={handleInteraction}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleInteraction}
          >
            <div className="relative bg-[#1a1a1e] rounded-[14px] sm:rounded-[18px] md:rounded-[22px] p-[2px] md:p-[3px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-[12px] sm:rounded-[16px] md:rounded-[19px] overflow-hidden">
                <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-2 md:h-3 bg-[#0d0d0f] rounded-full z-20" />
                <div 
                  ref={mobileContainerRef}
                  className="relative bg-white rounded-[10px] sm:rounded-[14px] md:rounded-[16px] overflow-hidden" 
                  style={{ aspectRatio: `${mobileWidth}/${mobileHeight}` }}
                >
                  {/* Mobile iframe - renders at 390x844 and scales down */}
                  <iframe
                    src={iframeUrl}
                    className={`absolute top-0 left-0 border-0 origin-top-left ${isInteractive ? '' : 'pointer-events-none'}`}
                    style={{ 
                      width: `${mobileWidth}px`, 
                      height: `${mobileHeight}px`,
                      transform: `scale(${mobileScale})`,
                    }}
                    title="Mobile Preview"
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
