import { useEffect, useState } from 'react';

export default function PWAPrompt() {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setInstallPrompt(e);
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!installPrompt) return;

        const result = await installPrompt.prompt();
        console.log(`Install prompt was: ${result.outcome}`);

        setInstallPrompt(null);
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="pwa-prompt max-md:w-[85%]">
            <p>Install this app for quick access</p>
            <div className='flex justify-center items-center gap-2 mt-2 '>
                <button onClick={handleInstallClick} className='bg-primary text-white px-4 py-2 rounded-md'>Install</button>
                <button onClick={() => setShowPrompt(false)} className='bg-primary text-white px-4 py-2 rounded-md'>Not now</button>
            </div>
        </div>
    );
} 