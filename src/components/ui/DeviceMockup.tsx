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

          <div className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[400px]">
            <div className="relative bg-[#1a1a1e] rounded-lg p-[4px] md:p-[6px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-md overflow-hidden">
                <div className="relative bg-white overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <iframe
                    src={iframeUrl}
                    className={`w-full h-full border-0 scale-[0.5] origin-top-left ${isInteractive ? '' : 'pointer-events-none'}`}
                    style={{ width: '200%', height: '200%' }}
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
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="h-2 md:h-3 flex items-center justify-center mt-0.5">
                <div className="w-4 md:w-6 h-0.5 rounded-full bg-[#2a2a30]" />
              </div>
            </div>
            <div className="mx-auto w-8 md:w-12 h-5 md:h-8 bg-gradient-to-b from-[#1a1a1e] via-[#252528] to-[#1a1a1e]" />
            <div className="mx-auto w-16 md:w-24 h-1 md:h-2 bg-gradient-to-b from-[#252528] to-[#1a1a1e] rounded-full" />
          </div>
        </div>

        {/* Phone Mockup - Overlapping */}
        <div className="absolute -right-6 sm:-right-10 md:-right-14 lg:-right-16 -bottom-4 md:-bottom-6">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-2 bg-black/30 blur-lg rounded-full" />
          
          <div 
            className="relative w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
            onMouseEnter={handleInteraction}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleInteraction}
          >
            <div className="relative bg-[#1a1a1e] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] p-[2px] md:p-[3px] shadow-2xl shadow-black/50">
              <div className="relative bg-[#0d0d0f] rounded-[10px] sm:rounded-[14px] md:rounded-[17px] overflow-hidden">
                <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 md:w-10 h-1.5 md:h-2.5 bg-[#0d0d0f] rounded-full z-20" />
                <div className="relative bg-white rounded-[8px] sm:rounded-[12px] md:rounded-[14px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                  <iframe
                    src={iframeUrl}
                    className={`w-full h-full border-0 scale-[0.25] origin-top-left ${isInteractive ? '' : 'pointer-events-none'}`}
                    style={{ width: '400%', height: '400%' }}
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
                        <Hand className="text-white" size={12} />
                      ) : (
                        <MousePointer className="text-white" size={12} />
                      )}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute right-[-1px] top-8 sm:top-10 md:top-14 w-[1px] md:w-[2px] h-4 md:h-6 bg-[#252528] rounded-r-sm" />
              <div className="absolute left-[-1px] top-6 sm:top-8 md:top-10 w-[1px] md:w-[2px] h-2 md:h-4 bg-[#252528] rounded-l-sm" />
              <div className="absolute left-[-1px] top-10 sm:top-14 md:top-18 w-[1px] md:w-[2px] h-4 md:h-6 bg-[#252528] rounded-l-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
