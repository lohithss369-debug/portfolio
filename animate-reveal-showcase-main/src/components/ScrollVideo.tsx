import { useEffect, useRef, useState } from 'react';

interface ScrollVideoProps {
  videoUrl: string;
  duration: number; // in seconds
}

export const ScrollVideo = ({ videoUrl, duration }: ScrollVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false); // New state for audio

  // Video metadata and load handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.log('❌ Video ref is null');
      return;
    }

    console.log('🎥 Video element found, waiting for metadata...');
    console.log('📹 Video source:', videoUrl);

    const handleLoadedMetadata = () => {
      setIsVideoReady(true);
      console.log('✅ Video loaded successfully!');
      console.log('⏱️ Video duration:', video.duration);
    };

    const handleError = (e: ErrorEvent) => {
      console.error('❌ Video error:', e);
      console.error('Video error details:', video.error);
    };

    const handleLoadStart = () => {
      console.log('🔄 Video loading started...');
    };

    const handleCanPlay = () => {
      console.log('▶️ Video can play');
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError as any);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError as any);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoUrl]);

  // Scroll sync effect
  useEffect(() => {
    if (!isVideoReady) return;

    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);

      // Sync video time with scroll position
      const targetTime = scrollFraction * video.duration;

      // Only update if the difference is significant to avoid jitter
      if (Math.abs(video.currentTime - targetTime) > 0.1) {
        video.currentTime = targetTime;

        // ✅ Only play video if audio is enabled
        if (audioEnabled && video.paused) {
          video.play().catch(() => {});
        }

        console.log(`📍 Scroll: ${(scrollFraction * 100).toFixed(1)}% | Video time: ${targetTime.toFixed(2)}s`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial sync
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVideoReady, audioEnabled]); // include audioEnabled

  // User interaction to enable audio
  const handleEnableAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false; // unmute video
    video.play().catch((err) => console.error('❌ Could not play video with audio:', err));
    setAudioEnabled(true);
    console.log('🔊 Audio enabled by user');
  };

  return (
    <>
      {/* Video container */}
      <div ref={containerRef} className="fixed inset-0 w-full h-screen -z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoUrl}
          muted={!audioEnabled} // initially muted
          playsInline
          preload="auto"
        />
        {/* Gradient overlay (does not block clicks) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20 pointer-events-none" />
      </div>

      {/* Audio enable button OUTSIDE the -z-10 container */}
      {!audioEnabled && (
        <button
          onClick={handleEnableAudio}
          className="fixed z-50 bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/80 text-black rounded-lg hover:bg-white/90 transition"
        >
          🔊 Enable Audio
        </button>
      )}
    </>
  );
};
