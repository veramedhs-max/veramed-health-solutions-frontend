import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import {
  Plane,
  Stethoscope,
  Building2,
  Heart,
  Play,
  Plus,
  MessageCircle,
  Send,
  Building,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export type SupportChannelId = 'whatsapp' | 'telegram' | 'imo' | 'embassy';
export type FeaturePillarId = 'travel' | 'doctors' | 'hospitals' | 'support';

export interface HeroSectionMobProps {
  videoRef?: React.RefObject<HTMLDivElement | null>;
  contentRef?: React.RefObject<HTMLDivElement | null>;
  onPlanTreatment?: () => void;
  onContactUs?: () => void;
  onChannelSelect?: (channelId: SupportChannelId) => void;
}

interface FeaturePillar {
  readonly id: FeaturePillarId;
  readonly icon: LucideIcon;
  readonly line1: string;
  readonly line2: string;
  readonly accentColorClass: string;
}

type SupportChannelBase = {
  readonly id: SupportChannelId;
  readonly label: string;
  readonly subLabel?: string;
  readonly bgClass: string;
  readonly glowClass: string;
  readonly iconOffsetClass?: string;
};

type SupportChannel =
  | (SupportChannelBase & { readonly icon: LucideIcon; readonly textIcon?: never })
  | (SupportChannelBase & { readonly textIcon: string; readonly icon?: never });

const TOTAL_SLIDES = 5;
const HERO_VIDEO_START_DELAY_MS = 5000;

const FEATURE_PILLARS: readonly FeaturePillar[] = [
  {
    id: 'travel',
    icon: Plane,
    line1: 'Travel',
    line2: 'Assistance',
    accentColorClass: 'group-hover:text-sky-400',
  },
  {
    id: 'doctors',
    icon: Stethoscope,
    line1: 'Expert',
    line2: 'Doctors',
    accentColorClass: 'group-hover:text-emerald-400',
  },
  {
    id: 'hospitals',
    icon: Building2,
    line1: 'Top',
    line2: 'Hospitals',
    accentColorClass: 'group-hover:text-indigo-400',
  },
  {
    id: 'support',
    icon: Heart,
    line1: 'Personal',
    line2: 'Support',
    accentColorClass: 'group-hover:text-rose-400',
  },
];

const SUPPORT_CHANNELS: readonly SupportChannel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageCircle,
    bgClass: 'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
    glowClass: 'shadow-[0_4px_12px_rgba(37,211,102,0.3)]',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: Send,
    bgClass: 'bg-gradient-to-br from-[#2AABEE] to-[#229ED9]',
    glowClass: 'shadow-[0_4px_12px_rgba(34,158,217,0.3)]',
    iconOffsetClass: '-ml-0.5 mt-0.5',
  },
  {
    id: 'imo',
    label: 'IMO',
    textIcon: 'IMO',
    bgClass: 'bg-gradient-to-br from-[#0084FF] to-[#0055CC]',
    glowClass: 'shadow-[0_4px_12px_rgba(0,132,255,0.3)]',
  },
  {
    id: 'embassy',
    label: 'Embassy',
    subLabel: 'Support',
    icon: Building,
    bgClass: 'bg-gradient-to-br from-[#2B4C7E] to-[#162A47] border border-white/15',
    glowClass: 'shadow-[0_4px_12px_rgba(43,76,126,0.35)]',
  },
];

function getCloudinaryMediaUrls(rawUrl: string): {
  videoUrl: string | undefined;
  posterUrl: string | undefined;
} {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return { videoUrl: undefined, posterUrl: undefined };
  }

  if (!trimmed.includes('/upload/')) {
    return { videoUrl: trimmed, posterUrl: undefined };
  }

  const videoUrl = trimmed.replace('/upload/', '/upload/f_auto,q_auto/');
  const posterUrl = trimmed
    .replace('/upload/', '/upload/so_0,f_webp,q_auto/')
    .replace(/\.(mp4|mov|webm)$/i, '.webp');

  return { videoUrl, posterUrl };
}

const RAW_VIDEO_URL = import.meta.env.VITE_CLOUDINARY_VIDEO_URL ?? '';
const { videoUrl: HERO_VIDEO_URL, posterUrl: HERO_POSTER_URL } =
  getCloudinaryMediaUrls(RAW_VIDEO_URL);

function useDelayedVideoPlayback(delayMs: number) {
  const videoElRef = useRef<HTMLVideoElement | null>(null);
  const startTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const clearStartTimer = useCallback(() => {
    if (startTimerRef.current !== null) {
      clearTimeout(startTimerRef.current);
      startTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!HERO_VIDEO_URL) return;

    startTimerRef.current = setTimeout(() => {
      videoElRef.current?.play().catch(() => {
        // Autoplay may be blocked by browser power-saving or user preferences
      });
    }, delayMs);

    return clearStartTimer;
  }, [delayMs, clearStartTimer]);

  const togglePlayback = useCallback(() => {
    const video = videoElRef.current;
    if (!video) return;

    clearStartTimer();

    if (video.paused) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [clearStartTimer]);

  const handleContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest('button, a, [role="tab"]')) {
        return;
      }
      togglePlayback();
    },
    [togglePlayback]
  );

  const handleContainerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePlayback();
      }
    },
    [togglePlayback]
  );

  return {
    videoElRef,
    isPlaying,
    setIsPlaying,
    handleContainerClick,
    handleContainerKeyDown,
  };
}

const TopStatusBadges = memo(function TopStatusBadges() {
  return (
    <div className="flex items-center justify-between">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
        />
        <span className="text-[10px] font-medium tracking-wider uppercase text-white/85">
          Welcome to Veramed
        </span>
      </div>

      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10">
        <Sparkles aria-hidden="true" className="w-3 h-3 text-[#E62329]" />
        <span className="text-[10px] font-medium text-white/80">24/7 Global Care Desk</span>
      </div>
    </div>
  );
});

const FeaturePillarsGrid = memo(function FeaturePillarsGrid() {
  return (
    <ul
      aria-label="Key Service Pillars"
      className="grid grid-cols-4 gap-2.5 mb-3.5 list-none p-0 m-0"
    >
      {FEATURE_PILLARS.map((pillar) => {
        const IconComponent = pillar.icon;
        return (
          <li
            key={pillar.id}
            className="group flex flex-col items-center gap-1 py-1.5 px-1 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.28)] transition-all duration-200 hover:bg-slate-950/75"
          >
            <div className="w-6 h-6 rounded-md bg-white/15 border border-white/15 flex items-center justify-center">
              <IconComponent
                aria-hidden="true"
                className={`w-3.5 h-3.5 text-white transition-colors duration-200 ${pillar.accentColorClass}`}
                strokeWidth={2}
              />
            </div>

            <span className="text-[9px] text-center font-semibold tracking-tight text-white leading-[1.15] drop-shadow-xs">
              {pillar.line1}
              <br />
              <span className="text-white/80 font-medium text-[8.5px]">
                {pillar.line2}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
});

interface PrimaryActionsProps {
  onPlanTreatment?: () => void;
  onContactUs?: () => void;
}

const PrimaryActions = memo(function PrimaryActions({
  onPlanTreatment,
  onContactUs,
}: PrimaryActionsProps) {
  return (
    <div className="flex gap-2.5 mb-4">
      <button
        type="button"
        onClick={onPlanTreatment}
        className="relative flex-1 overflow-hidden bg-gradient-to-r from-[#FF0000] via-[#FF1A1A] to-[#E60000] text-white py-3 px-3 rounded-xl font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(255,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span
          aria-hidden="true"
          className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center"
        >
          <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
        </span>
        <span>Plan Treatment</span>
      </button>

      <button
        type="button"
        onClick={onContactUs}
        className="flex-1 bg-white/[0.07] backdrop-blur-xl border border-white/15 text-white py-3 px-3 rounded-xl font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-200 hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <Plus
          aria-hidden="true"
          className="w-3.5 h-3.5 text-white/90"
          strokeWidth={2.2}
        />
        <span>Contact Us</span>
      </button>
    </div>
  );
});

interface SlideIndicatorsProps {
  activeSlide: number;
  onSelectSlide: (index: number) => void;
}

const SlideIndicators = memo(function SlideIndicators({
  activeSlide,
  onSelectSlide,
}: SlideIndicatorsProps) {
  return (
    <div
      role="tablist"
      aria-label="Hero slides"
      className="flex justify-center items-center gap-1.5"
    >
      {Array.from({ length: TOTAL_SLIDES }, (_, idx) => {
        const isActive = idx === activeSlide;
        return (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => onSelectSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${isActive
              ? 'w-5 bg-[#E62329] shadow-[0_0_8px_rgba(230,35,41,0.8)]'
              : 'w-1.5 bg-slate-600/70 hover:bg-slate-400'
              }`}
          />
        );
      })}
    </div>
  );
});

interface SupportChannelDockProps {
  onChannelSelect?: (channelId: SupportChannelId) => void;
}

const SupportChannelDock = memo(function SupportChannelDock({
  onChannelSelect,
}: SupportChannelDockProps) {
  return (
    <footer className="pt-2.5 z-20 w-full">
      <nav
        aria-label="Direct Support Channels"
        className="relative flex items-center bg-white border border-slate-200 shadow-md rounded-2xl p-1.5 overflow-hidden"
      >
        <div className="flex w-full items-center justify-between overflow-x-auto px-1 gap-1.5 no-scrollbar scroll-smooth">
          {SUPPORT_CHANNELS.map((channel, index) => {
            const IconComponent = channel.icon;
            const isLast = index === SUPPORT_CHANNELS.length - 1;

            return (
              <React.Fragment key={channel.id}>
                <button
                  type="button"
                  onClick={() => onChannelSelect?.(channel.id)}
                  className="group flex flex-col items-center justify-center gap-1.5 flex-1 min-w-[64px] py-1.5 px-1 rounded-xl cursor-pointer transition-all duration-200 hover:bg-slate-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4C7E]"
                >
                  <div
                    className={`w-9 h-9 rounded-full ${channel.bgClass} ${channel.glowClass} flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}
                  >
                    {IconComponent ? (
                      <IconComponent
                        aria-hidden="true"
                        className={`w-4 h-4 text-white ${channel.iconOffsetClass ?? ''}`}
                        strokeWidth={2}
                      />
                    ) : (
                      <span className="font-extrabold text-white text-[10px] tracking-tighter">
                        {channel.textIcon}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[9.5px] text-slate-700 group-hover:text-slate-900 font-semibold tracking-wide leading-tight transition-colors">
                      {channel.label}
                    </span>
                    {channel.subLabel && (
                      <span className="text-[8.5px] text-slate-500 font-normal leading-tight">
                        {channel.subLabel}
                      </span>
                    )}
                  </div>
                </button>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="h-7 w-[1px] bg-slate-200 shrink-0"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </footer>
  );
});

export default function HeroSectionMob({
  videoRef,
  contentRef,
  onPlanTreatment,
  onContactUs,
  onChannelSelect,
}: HeroSectionMobProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const {
    videoElRef,
    isPlaying,
    setIsPlaying,
    handleContainerClick,
    handleContainerKeyDown,
  } = useDelayedVideoPlayback(HERO_VIDEO_START_DELAY_MS);

  return (
    <section
      aria-label="Mobile Hero Section"
      className="relative flex flex-col w-full bg-white px-2.5 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-white font-sans overflow-hidden select-none"
    >
      <div className="relative z-10 flex flex-col w-full h-[calc(90dvh-4.5rem-env(safe-area-inset-top))] min-h-[560px]">
        <div
          ref={videoRef}
          role="region"
          tabIndex={0}
          aria-label={
            isPlaying
              ? 'Hero background video playing. Press Enter or Space to pause.'
              : 'Hero background video paused. Press Enter or Space to play.'
          }
          onClick={handleContainerClick}
          onKeyDown={handleContainerKeyDown}
          className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-[#B91C1C] ring-2 ring-[#2B4C7E]/15 bg-slate-900 shadow-[0_8px_24px_rgba(43,76,126,0.18)] cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B4C7E]/50"
        >
          {HERO_VIDEO_URL && (
            <video
              ref={videoElRef}
              key={HERO_VIDEO_URL}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_POSTER_URL}
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
            >
              <source src={HERO_VIDEO_URL} />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Center Play Indicator Overlay */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-[15] flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
          >
            <span className="w-16 h-16 rounded-full bg-black/45 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 fill-white text-white ml-1" />
            </span>
          </div>

          {/* Bottom Readability Gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
          />

          {/* Foreground Interactive Overlay */}
          <div
            ref={contentRef}
            className="relative z-20 flex flex-col justify-between h-full p-4 sm:p-6 max-w-lg mx-auto w-full"
          >
            <TopStatusBadges />

            <div className="flex flex-col w-full mt-auto pt-6">
              <FeaturePillarsGrid />
              <PrimaryActions
                onPlanTreatment={onPlanTreatment}
                onContactUs={onContactUs}
              />
              <SlideIndicators
                activeSlide={activeSlide}
                onSelectSlide={setActiveSlide}
              />
            </div>
          </div>
        </div>
      </div>

      <SupportChannelDock onChannelSelect={onChannelSelect} />
    </section>
  );
}