import React from 'react';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatImgurUrl } from '../utils/imgur';
import { sound } from '../utils/audio';

interface HotspotScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const HotspotScreen: React.FC<HotspotScreenProps> = ({ onNext }) => {
  const { settings } = useApp();

  const handleProceed = () => {
    sound.playPop();
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 gap-6 py-6 select-none">
      {/* Dynamic Title Card */}
      <div className="bg-white/80 rounded-2xl border-4 border-[#F59E0B] p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FEF3C7] rounded-2xl border-3 border-[#F59E0B] flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#B45309]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#78350F] leading-tight">
              {settings.appName || 'Suasana Hari Sukan Sekolah'}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-[#B45309] mt-1">
              {settings.appSubtitle || 'Fahami situasi gambar dan teruskan ke permainan susun karangan.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Illustration Viewport */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4 w-full">
        <div className="w-full text-center sm:text-left text-xs sm:text-sm font-black text-[#78350F]">
          <span className="bg-[#F59E0B] text-[#78350F] px-2.5 py-0.5 rounded-full text-xs font-black uppercase mr-2">
            Panduan
          </span>
          <span>
            {settings.guideStep1 || 'Lihat gambar suasana Hari Sukan Sekolah yang meriah dan gembira.'}
          </span>
        </div>

        {/* Big Scene Image Container (Clickable) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleProceed}
          className="relative w-full bg-white rounded-3xl overflow-hidden border-4 border-[#78350F] shadow-[8px_8px_0px_#FDE68A] flex items-center justify-center cursor-pointer transition-all hover:border-[#10B981] group"
        >
          <img
            src={formatImgurUrl(settings.sceneImageUrl) || 'https://i.imgur.com/g4RIcQr.png'}
            alt={settings.appName || 'Suasana Hari Sukan Sekolah'}
            className="w-full h-auto max-h-[60vh] object-contain bg-[#FFFBEB] transition-transform group-hover:scale-[1.005]"
            referrerPolicy="no-referrer"
            draggable={false}
          />
        </motion.div>

        {/* Dynamic prompt message instead of button */}
        <div className="mt-2 text-center">
          <p className="text-sm sm:text-base font-black text-[#B45309] animate-pulse">
            👆 Klik pada gambar sukan di atas untuk menerokai kata kerja tindakan!
          </p>
        </div>
      </main>
    </div>
  );
};
