"use client";

interface TechIllustrationProps {
  type: "ar" | "vr" | "chatbot" | "avatar";
  className?: string;
}

export default function TechIllustration({ type, className = "" }: TechIllustrationProps) {
  const illustrations = {
    ar: (
      <svg viewBox="0 0 200 160" fill="none" className={className}>
        {/* Phone frame */}
        <rect x="60" y="20" width="80" height="120" rx="8" fill="url(#arGradient)" stroke="#a855f7" strokeWidth="2"/>
        <rect x="65" y="28" width="70" height="100" rx="4" fill="#1a1a2e"/>
        
        {/* AR overlay elements */}
        <rect x="75" y="45" width="50" height="35" rx="4" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 2"/>
        <circle cx="100" cy="62" r="8" fill="#a855f7" fillOpacity="0.3"/>
        <path d="M96 62 L100 58 L104 62 L100 66 Z" fill="#a855f7"/>
        
        {/* Floating AR markers */}
        <g opacity="0.8">
          <rect x="40" y="50" width="15" height="15" rx="2" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
          <circle cx="47.5" cy="57.5" r="3" fill="#a855f7"/>
        </g>
        <g opacity="0.6">
          <rect x="145" y="70" width="15" height="15" rx="2" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
          <circle cx="152.5" cy="77.5" r="3" fill="#a855f7"/>
        </g>
        
        {/* Connection lines */}
        <path d="M55 57 L75 57" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        <path d="M125 77 L145 77" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        
        {/* Info panel */}
        <rect x="75" y="90" width="50" height="25" rx="3" fill="#a855f7" fillOpacity="0.15"/>
        <rect x="80" y="95" width="30" height="3" rx="1" fill="#a855f7" fillOpacity="0.5"/>
        <rect x="80" y="102" width="40" height="2" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="80" y="108" width="25" height="2" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        
        <defs>
          <linearGradient id="arGradient" x1="60" y1="20" x2="140" y2="140">
            <stop stopColor="#2a2a3e"/>
            <stop offset="1" stopColor="#1a1a2e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    vr: (
      <svg viewBox="0 0 200 160" fill="none" className={className}>
        {/* VR Headset */}
        <path d="M30 70 Q30 50 50 50 L150 50 Q170 50 170 70 L170 100 Q170 120 150 120 L50 120 Q30 120 30 100 Z" fill="url(#vrGradient)" stroke="#22c55e" strokeWidth="2"/>
        
        {/* Lenses */}
        <circle cx="75" cy="85" r="22" fill="#0f0f1a" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="125" cy="85" r="22" fill="#0f0f1a" stroke="#22c55e" strokeWidth="1.5"/>
        
        {/* Lens reflections */}
        <circle cx="75" cy="85" r="15" fill="url(#lensGradient1)"/>
        <circle cx="125" cy="85" r="15" fill="url(#lensGradient2)"/>
        
        {/* Strap */}
        <path d="M30 75 Q10 75 10 85 Q10 95 30 95" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6"/>
        <path d="M170 75 Q190 75 190 85 Q190 95 170 95" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.6"/>
        
        {/* Top detail */}
        <rect x="85" y="45" width="30" height="8" rx="2" fill="#22c55e" fillOpacity="0.3"/>
        
        {/* Virtual world preview inside lenses */}
        <g opacity="0.6">
          <path d="M65 80 L70 75 L75 82 L80 78 L85 85" stroke="#22c55e" strokeWidth="1" fill="none"/>
          <circle cx="70" cy="90" r="2" fill="#22c55e"/>
        </g>
        <g opacity="0.6">
          <rect x="115" y="78" width="8" height="8" rx="1" fill="none" stroke="#22c55e" strokeWidth="1"/>
          <rect x="127" y="82" width="6" height="6" rx="1" fill="none" stroke="#22c55e" strokeWidth="1"/>
        </g>
        
        <defs>
          <linearGradient id="vrGradient" x1="30" y1="50" x2="170" y2="120">
            <stop stopColor="#1a2e1a"/>
            <stop offset="1" stopColor="#0f1a0f"/>
          </linearGradient>
          <radialGradient id="lensGradient1" cx="0.3" cy="0.3">
            <stop stopColor="#22c55e" stopOpacity="0.3"/>
            <stop offset="1" stopColor="#22c55e" stopOpacity="0.05"/>
          </radialGradient>
          <radialGradient id="lensGradient2" cx="0.3" cy="0.3">
            <stop stopColor="#22c55e" stopOpacity="0.3"/>
            <stop offset="1" stopColor="#22c55e" stopOpacity="0.05"/>
          </radialGradient>
        </defs>
      </svg>
    ),
    chatbot: (
      <svg viewBox="0 0 200 160" fill="none" className={className}>
        {/* Chat window */}
        <rect x="40" y="20" width="120" height="120" rx="12" fill="url(#chatGradient)" stroke="#3b82f6" strokeWidth="2"/>
        
        {/* Header */}
        <rect x="40" y="20" width="120" height="25" rx="12" fill="#3b82f6" fillOpacity="0.2"/>
        <circle cx="55" cy="32" r="4" fill="#3b82f6"/>
        <rect x="65" y="29" width="40" height="6" rx="2" fill="#3b82f6" fillOpacity="0.5"/>
        
        {/* Chat bubbles - user */}
        <rect x="90" y="55" width="60" height="20" rx="10" fill="#3b82f6" fillOpacity="0.3"/>
        <rect x="95" y="62" width="40" height="4" rx="2" fill="#3b82f6" fillOpacity="0.5"/>
        
        {/* Chat bubbles - bot */}
        <rect x="50" y="85" width="70" height="25" rx="10" fill="#3b82f6" fillOpacity="0.15"/>
        <rect x="55" y="91" width="50" height="4" rx="2" fill="#3b82f6" fillOpacity="0.4"/>
        <rect x="55" y="99" width="35" height="4" rx="2" fill="#3b82f6" fillOpacity="0.3"/>
        
        {/* Bot avatar */}
        <circle cx="55" cy="97" r="0" fill="#3b82f6"/>
        
        {/* Typing indicator */}
        <g transform="translate(50, 118)">
          <circle cx="5" cy="0" r="3" fill="#3b82f6" fillOpacity="0.6"/>
          <circle cx="15" cy="0" r="3" fill="#3b82f6" fillOpacity="0.4"/>
          <circle cx="25" cy="0" r="3" fill="#3b82f6" fillOpacity="0.2"/>
        </g>
        
        {/* Floating elements */}
        <g opacity="0.5">
          <circle cx="25" cy="60" r="8" fill="none" stroke="#3b82f6" strokeWidth="1"/>
          <path d="M22 60 L25 57 L28 60 L25 63 Z" fill="#3b82f6"/>
        </g>
        <g opacity="0.4">
          <circle cx="175" cy="100" r="6" fill="none" stroke="#3b82f6" strokeWidth="1"/>
          <circle cx="175" cy="100" r="2" fill="#3b82f6"/>
        </g>
        
        <defs>
          <linearGradient id="chatGradient" x1="40" y1="20" x2="160" y2="140">
            <stop stopColor="#1a1a2e"/>
            <stop offset="1" stopColor="#0f0f1a"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    avatar: (
      <svg viewBox="0 0 200 160" fill="none" className={className}>
        {/* Display frame */}
        <rect x="50" y="15" width="100" height="115" rx="8" fill="url(#avatarGradient)" stroke="#06b6d4" strokeWidth="2"/>
        
        {/* Screen */}
        <rect x="55" y="22" width="90" height="95" rx="4" fill="#0f0f1a"/>
        
        {/* Avatar silhouette */}
        <ellipse cx="100" cy="55" rx="18" ry="20" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1.5"/>
        <ellipse cx="100" cy="95" rx="30" ry="18" fill="#06b6d4" fillOpacity="0.15" stroke="#06b6d4" strokeWidth="1"/>
        
        {/* Face features */}
        <circle cx="93" cy="52" r="3" fill="#06b6d4" fillOpacity="0.6"/>
        <circle cx="107" cy="52" r="3" fill="#06b6d4" fillOpacity="0.6"/>
        <path d="M95 62 Q100 66 105 62" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        
        {/* AI indicators */}
        <g opacity="0.7">
          <circle cx="70" cy="35" r="5" fill="none" stroke="#06b6d4" strokeWidth="1"/>
          <circle cx="70" cy="35" r="2" fill="#06b6d4"/>
        </g>
        <g opacity="0.7">
          <circle cx="130" cy="35" r="5" fill="none" stroke="#06b6d4" strokeWidth="1"/>
          <circle cx="130" cy="35" r="2" fill="#06b6d4"/>
        </g>
        
        {/* Sound waves */}
        <g opacity="0.5">
          <path d="M35 70 Q30 80 35 90" stroke="#06b6d4" strokeWidth="1.5" fill="none"/>
          <path d="M28 65 Q20 80 28 95" stroke="#06b6d4" strokeWidth="1" fill="none"/>
        </g>
        <g opacity="0.5">
          <path d="M165 70 Q170 80 165 90" stroke="#06b6d4" strokeWidth="1.5" fill="none"/>
          <path d="M172 65 Q180 80 172 95" stroke="#06b6d4" strokeWidth="1" fill="none"/>
        </g>
        
        {/* Stand */}
        <rect x="90" y="130" width="20" height="8" fill="#06b6d4" fillOpacity="0.3"/>
        <rect x="80" y="138" width="40" height="6" rx="2" fill="#06b6d4" fillOpacity="0.2"/>
        
        {/* Language badge */}
        <rect x="120" y="100" width="22" height="12" rx="6" fill="#06b6d4"/>
        <text x="131" y="109" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">99+</text>
        
        <defs>
          <linearGradient id="avatarGradient" x1="50" y1="15" x2="150" y2="130">
            <stop stopColor="#1a2e2e"/>
            <stop offset="1" stopColor="#0f1a1a"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return illustrations[type] || null;
}
