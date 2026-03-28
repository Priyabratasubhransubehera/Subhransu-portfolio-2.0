import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function LiveDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 right-6 z-50 flex flex-col gap-2 hidden md:flex"
    >
      {/* Location Display */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
        style={{ boxShadow: '0 8px 32px 0 rgba(0, 245, 255, 0.15)' }}
      >
        <MapPin className="w-4 h-4 text-[#00F5FF]" />
        <span className="text-sm font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
          Cuttack, Odisha
        </span>
      </div>

      {/* Date Display */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7B2EFF]/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
        style={{ boxShadow: '0 8px 32px 0 rgba(123, 46, 255, 0.15)' }}
      >
        <Calendar className="w-4 h-4 text-[#7B2EFF]" />
        <span className="text-sm font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
          {formatDate(dateTime)}
        </span>
      </div>

      {/* Time Display */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
        style={{ boxShadow: '0 8px 32px 0 rgba(0, 245, 255, 0.15)' }}
      >
        <Clock className="w-4 h-4 text-[#00F5FF]" />
        <span className="text-sm font-medium text-white tabular-nums" style={{ fontFamily: 'Inter, sans-serif' }}>
          {formatTime(dateTime)}
        </span>
      </div>
    </motion.div>
  );
}