import { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio("/audio/background-loop.mp3"); // Placeholder path
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const startAudio = () => {
        if (!hasInteracted && audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setHasInteracted(true);
            }).catch(e => console.log("Autoplay blocked:", e));
        }
    };

    return (
        <AudioContext.Provider value={{ isPlaying, isMuted, togglePlay, toggleMute, startAudio, hasInteracted }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);
