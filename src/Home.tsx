import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [phase, setPhase] = useState('initial'); // initial, devFade, expanding, typing, pause, collapsing, final, looping
  const [typedText, setTypedText] = useState({ abdul: '', moiz: '', qarni: '' });
  const [showCTA, setShowCTA] = useState(false);
  const [loopDirection, setLoopDirection] = useState('toFull'); // toFull or toShort

  useEffect(() => {
    // Phase 1: Initial AMQ Dev display (1800ms - increased from 1200ms)
    const initialTimer = setTimeout(() => {
      setPhase('devFade');
    }, 1800);

    // Phase 2: Dev fades out (1200ms - increased from 1000ms)
    const devFadeTimer = setTimeout(() => {
      setPhase('expanding');
    }, 3000);

    // Phase 3: Expansion (1000ms)
    const expandTimer = setTimeout(() => {
      setPhase('typing');
    }, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(devFadeTimer);
      clearTimeout(expandTimer);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'typing') return;

    const sequences = [
      { key: 'abdul', text: 'BDUL', delay: 0 },
      { key: 'moiz', text: 'OIZ', delay: 400 },
      { key: 'qarni', text: 'ARN', delay: 800 }
    ];

    const timers: number[] = [];

    sequences.forEach(({ key, text, delay }) => {
      text.split('').forEach((char, index) => {
        const timer = setTimeout(() => {
          setTypedText(prev => ({
            ...prev,
            [key]: prev[key as keyof typeof prev] + char
          }));
        }, delay + index * 80);
        timers.push(timer);
      });
    });

    // Phase 4: Pause with full name (2000ms after typing completes)
    const pauseTimer = setTimeout(() => {
      setPhase('pause');
      console.log('Phase: pause');
    }, 2000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(pauseTimer);
    };
  }, [phase]);

  // Separate effect for pause -> collapse -> final transitions
  useEffect(() => {
    if (phase === 'pause') {
      console.log('Setting up collapse timer');
      const collapseTimer = setTimeout(() => {
        setPhase('collapsing');
        console.log('Phase: collapsing');
      }, 2000);

      return () => clearTimeout(collapseTimer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'collapsing') {
      console.log('Setting up looping timer');
      const loopTimer = setTimeout(() => {
        setPhase('looping');
        setLoopDirection('toFull'); // Start by expanding to full name
        console.log('Phase: looping');
        setTimeout(() => setShowCTA(true), 300);
      }, 3000); // Increased from 2000ms to 3000ms to wait longer before first loop

      return () => clearTimeout(loopTimer);
    }
  }, [phase]);

  // Loop effect - handles continuous back and forth
  useEffect(() => {
    if (phase !== 'looping') return;

    const loopTimer = setTimeout(() => {
      setLoopDirection(prev => prev === 'toFull' ? 'toShort' : 'toFull');
    }, 4000); // Switch direction every 4 seconds

    return () => clearTimeout(loopTimer);
  }, [phase, loopDirection]);

  const isExpanding = phase === 'expanding';
  const isCollapsing = phase === 'collapsing';
  const isFinal = phase === 'final';
  const isLooping = phase === 'looping';

  // Dev opacity: visible initially, fades during name expansion, comes back at end
  // In loop: fades even more when showing full name, visible when showing AI Dev
  const devOpacity = phase === 'initial' ? 1 
    : (phase === 'devFade' || isExpanding || phase === 'typing' || phase === 'pause') ? 0.2 
    : isLooping ? (loopDirection === 'toFull' ? 0.05 : 1)
    : 1;
  
  // Middle content fades out during collapse and stays hidden during loop
  const middleContentOpacity = (isCollapsing || isFinal || isLooping) ? 0 : 1;

  // Slower transitions for collapse
  const transitionDuration = (isCollapsing || isLooping) ? '2000ms' : '1000ms';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Name Animation Container */}
        <div className="mb-12">

          <div className="flex items-center justify-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex-wrap sm:flex-nowrap px-2">
            {/* A */}
            <span 
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ease-out"
              style={{
                transform: isExpanding 
                  ? 'translateX(-2em)' 
                  : 'translateX(0)',
                transition: `transform ${transitionDuration}`,
                display: 'inline-block',
                minWidth: '1ch'
              }}
            >
              A
            </span>

            {/* BDUL (fades out during collapse) */}
            <span 
              className="text-white ease-out uppercase"
              style={{ 
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, max-width ${transitionDuration}, margin ${transitionDuration}`,
                display: 'inline-block',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '6em',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {typedText.abdul}
            </span>

            {/* Space */}
            <span 
              className="text-white"
              style={{ 
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, max-width ${transitionDuration}`,
                display: 'inline-block',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '0.3em'
              }}
            >
              &nbsp;
            </span>

            {/* M (fades out during collapse) */}
            <span 
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ease-out"
              style={{
                display: 'inline-block',
                minWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '1ch',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '2ch',
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, min-width ${transitionDuration}, max-width ${transitionDuration}`
              }}
            >
              M
            </span>

            {/* OIZ (fades out during collapse) */}
            <span 
              className="text-white ease-out uppercase"
              style={{ 
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, max-width ${transitionDuration}`,
                display: 'inline-block',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '6em',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {typedText.moiz}
            </span>

            {/* Space */}
            <span 
              className="text-white"
              style={{ 
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, max-width ${transitionDuration}`,
                display: 'inline-block',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '0.3em'
              }}
            >
              &nbsp;
            </span>

            {/* Q (fades out during collapse) */}
            <span 
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ease-out"
              style={{
                transform: isExpanding ? 'translateX(2em)' : 'translateX(0)',
                transition: `transform ${transitionDuration}, opacity ${transitionDuration}, min-width ${transitionDuration}, max-width ${transitionDuration}`,
                display: 'inline-block',
                minWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '1ch',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '2ch',
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity
              }}
            >
              Q
            </span>

            {/* ARNI (fades out during collapse) */}
            <span 
              className="text-white ease-out uppercase"
              style={{ 
                opacity: isLooping ? (loopDirection === 'toFull' ? 1 : 0) : middleContentOpacity,
                transition: `opacity ${transitionDuration}, max-width ${transitionDuration}`,
                display: 'inline-block',
                maxWidth: (isCollapsing || (isLooping && loopDirection === 'toShort')) ? '0' : '6em',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {typedText.qarni}
            </span>

            {/* I (always separate, moves with expansion and collapse) */}
            <span 
              className="bg-clip-text text-transparent ease-out uppercase"
              style={{
                backgroundImage: (isCollapsing || (isLooping && loopDirection === 'toShort')) 
                  ? 'linear-gradient(to right, rgb(96, 165, 250), rgb(34, 211, 238))' 
                  : 'linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255))',
                transform: isExpanding ? 'translateX(2em)' : 'translateX(0)',
                transition: `transform ${transitionDuration}, opacity 300ms, background-image ${transitionDuration}`,
                display: 'inline-block',
                minWidth: '1ch',
                opacity: typedText.qarni.length >= 3 ? 1 : 0
              }}
            >
              I
            </span>

            {/* Dev */}
            <span 
              className="text-white ml-4 transition-all ease-out"
              style={{
                opacity: devOpacity,
                transform: isExpanding 
                  ? 'translateX(2em) scale(1)' 
                  : (isFinal || isLooping)
                    ? 'translateX(0) scale(1.05)' 
                    : 'translateX(0) scale(1)',
                fontWeight: (isFinal || isLooping) ? '600' : '400',
                transitionDuration: transitionDuration
              }}
            >
              Dev
            </span>
          </div>

          {/* Subtitle */}
          <div 
            className={`mt-6 text-slate-300 text-lg md:text-xl transition-all duration-500 ${
              (isFinal || isLooping) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Building Intelligent Solutions
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-full hover:bg-slate-800 hover:border-slate-300 transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>

        
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>
  );
}