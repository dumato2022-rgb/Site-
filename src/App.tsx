import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Home, 
  Radio, 
  Antenna,
  Wifi,
  ShieldCheck, 
  Network, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  ArrowUp,
  ArrowRight,
  Shield,
  Cpu,
  Eye,
  Activity,
  Award,
  Globe,
  Settings,
  Plug,
  Users,
  Image as ImageIcon,
  Waves
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    id: 'electrical',
    title: 'Elétrica de Alta Performance',
    description: 'Instalações elétricas robustas residenciais e comerciais. Execução técnica de quadros e infraestrutura complexa.',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    size: 'col-span-2'
  },
  {
    id: 'smarthome',
    title: 'Smart Homes & Prédios',
    description: 'Automação inteligente completa para ambientes modernos e funcionais.',
    icon: Home,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    size: 'col-span-1'
  },
  {
    id: 'rf-automation',
    title: 'RF Rural & Irrigação',
    description: 'Automação via rádio para áreas sem internet. Controle de reservatórios, pivôs e válvulas solenoide.',
    icon: Radio,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    size: 'col-span-1'
  },
  {
    id: 'protection',
    title: 'SPDA & Aterramento',
    description: 'Proteção contra descargas atmosféricas e aterramento técnico para segurança patrimonial.',
    icon: ShieldCheck,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    size: 'col-span-1'
  },
  {
    id: 'networking',
    title: 'Redes Estruturadas',
    description: 'Infraestrutura lógica, organização de racks e switches para máxima performance digital.',
    icon: Network,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    size: 'col-span-1'
  },
  {
    id: 'cctv',
    title: 'CFTV & Vigilância',
    description: 'Sistemas de monitoramento remoto e segurança eletrônica inteligente.',
    icon: Eye,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    size: 'col-span-1'
  }
];

const WhatsAppIcon = ({ size = 20, ...props }: any) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SmartHomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1557303596-390df3a67dc9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558002038-d3080ff1292a?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        {/* Decorative gradients for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {/* Double images for seamless loop */}
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-64 h-48 rounded-[2rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`Smart Home ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Smart Home Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const RFGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1622383529957-35b55752fb1c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080809] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080809] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 35, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-72 h-52 rounded-[2rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`RF System ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-60 group-hover/item:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="RF System Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SPDAGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1511060904823-e51f101a95a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1548695038-f94747eb192d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-64 h-48 rounded-[2rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`SPDA System ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-60 group-hover/item:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="SPDA System Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LogicGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1558494949-ef0109121784?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080809] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080809] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-72 h-52 rounded-[2rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`Logic Network ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-60 group-hover/item:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Logic System Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CFTVGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524333865981-d3f3a8ea3f35?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454165833267-02392454a839?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1549643448-43597cc64947?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 28, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-80 h-56 rounded-[2.5rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`CCTV Monitoring ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-60 group-hover/item:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="CCTV System Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const WallboxGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1620210214318-7b92928503d4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1620210214227-37207455d36e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1610492314643-41a4a9ef3878?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1647464208316-2a6c0b3f5b24?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <>
      <div className="w-full overflow-hidden mt-12 py-4 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 w-fit"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 32, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="w-80 h-56 rounded-[2.5rem] overflow-hidden border border-white/5 shrink-0 hover:border-amber-500/50 transition-colors duration-500 cursor-zoom-in relative group/item"
            >
              <img 
                src={src} 
                alt={`Wallbox EV Station ${i}`} 
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 opacity-60 group-hover/item:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <ArrowRight size={20} className="-rotate-45 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Wallbox System Focus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)] transform hover:rotate-6 transition-transform overflow-hidden">
              <Zap className="text-black w-6 h-6 fill-black scale-x-[0.6] scale-y-[1.4] rotate-[15deg]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-normal leading-none">DG ELÉTRICA</span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-amber-500 uppercase mt-1">E TECNOLOGIA</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Serviços'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace('ç', 'c')}`}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://wa.me/5565992532120?text=Gostaria%20de%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-xl inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button 
            className="p-3 bg-amber-500 text-black rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 transition-all z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm"
              />
              
              {/* Menu Drawer */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-screen w-[65%] sm:w-[300px] bg-amber-500 z-[60] flex flex-col p-8 text-black shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black rounded-xl">
                      <Zap size={18} className="text-amber-500 fill-amber-500" />
                    </div>
                    <span className="font-black text-lg uppercase tracking-normal">DG ELÉTRICA</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-black/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {['Sobre', 'Serviços'].map((item) => (
                    <motion.a 
                      key={item} 
                      href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace('ç', 'c')}`}
                      className="text-2xl font-black uppercase tracking-normal hover:pl-4 transition-all duration-300 border-b border-black/10 pb-3 last:border-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/5565992532120?text=Gostaria%20de%20um%20or%C3%A7amento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-black text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Falar com Especialista
                  </a>
                  <p className="text-center text-[10px] font-bold uppercase mt-6 opacity-40">
                    Atendimento imediato via WhatsApp
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 overflow-hidden">
        {/* Abstract Background Noise / Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Status & Experience */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-[10px] font-black uppercase tracking-widest w-fit">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  Online agora
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-4 w-px bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-2 text-white/90 text-[11px] font-bold uppercase tracking-[0.2em]">
                    <Award size={14} className="text-amber-500" />
                    19 Anos de experiência técnica absoluta
                  </div>
                </div>
              </div>

              <div className="mb-10">
                 <h1 className="text-[12vw] sm:text-[9vw] lg:text-[6.5vw] font-black leading-[0.9] tracking-normal uppercase mb-6">
                    Automação e <br />
                    <span className="text-amber-500">Sistemas de Proteção</span> <br />
                    <span className="text-white/20 italic font-serif">com</span> Tecnologia Avançada
                 </h1>
              </div>
              
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-3xl leading-relaxed mb-12">
                Especialista em instalações elétricas robustas, automação residencial para casas inteligentes (smart home) e sistema via rádio (RF) para a zona rural, aplicado em abastecimento de reservatórios e sistemas de irrigação. 
                Atuamos com cabeamento estruturado, rede lógica, proteção por SPDA (para raio), aterramento e sistemas de vigilância e monitoramento através de câmera (CFTV).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 max-w-2xl">
                {[
                  { label: "Casa Inteligente", icon: Home, id: "servicos" },
                  { label: "Sistema via rádio (RF)", icon: Antenna, id: "especialidade" },
                  { label: "Proteção SPDA", icon: Zap, id: "protecao", extraStyle: "scale-x-[0.6] scale-y-[1.4] rotate-[15deg] translate-x-0.5" },
                  { label: "Rede Lógica", icon: Wifi, id: "logica" },
                  { label: "Vigilância CFTV", icon: Eye, id: "cftv" },
                  { label: "Sistema Wallbox / Carro Elétrico", icon: Plug, id: "wallbox", extraStyle: "text-amber-500" },
                  { 
                    label: "Solicite um Orçamento pelo WhatsApp", 
                    icon: WhatsAppIcon, 
                    id: "whatsapp", 
                    highlight: true, 
                    href: "https://wa.me/5565992532120?text=Gostaria%20de%20um%20or%C3%A7amento" 
                  }
                ].map((btn: any) => (
                  <a 
                    key={btn.label}
                    href={btn.href || `#${btn.id}`}
                    target={btn.href ? "_blank" : undefined}
                    rel={btn.href ? "noopener noreferrer" : undefined}
                    className={`group flex flex-col justify-center p-3 sm:p-4 rounded-2xl border transition-all duration-300 ${
                      btn.highlight 
                        ? 'bg-amber-500 border-amber-500 text-black hover:bg-white hover:border-white col-span-2' 
                        : 'bg-white/5 border-white/10 text-white hover:border-amber-500/50 hover:bg-amber-500/5 sm:col-span-1'
                    }`}
                  >
                    <div className={`flex justify-between items-start ${btn.highlight ? 'mb-2' : 'mb-6'}`}>
                      <btn.icon size={btn.highlight ? 24 : 20} strokeWidth={btn.stroke || 2} className={`${btn.highlight ? 'text-black' : 'text-amber-500'} ${btn.extraStyle || ''}`} />
                      <ArrowRight size={14} className={btn.highlight ? 'text-black/50' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all'} />
                    </div>
                    <span className={`${btn.highlight ? 'text-base sm:text-xl md:text-2xl font-black uppercase leading-tight' : 'text-[10px] font-black uppercase tracking-widest leading-tight'}`}>
                      {btn.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Visual Tech Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square relative flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/10 rounded-[4rem] rotate-12 blur-3xl opacity-30" />
                <div className="relative z-10 w-full h-full bg-[#0F0F11] border border-white/5 rounded-[4rem] overflow-hidden group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558485080-f0a6ee1e35d4?auto=format&fit=crop&q=80&w=1200" 
                    alt="Electrical Tech" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute top-10 left-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group-hover:-translate-y-2 transition-transform">
                    <Activity className="text-amber-500 mb-2" size={24} />
                    <div className="text-[10px] font-black uppercase">Monitoramento Real-time</div>
                  </div>
                  <div className="absolute bottom-10 right-10 p-6 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-3xl group-hover:translate-x-2 transition-transform">
                    <Radio className="text-emerald-500 mb-2" size={24} />
                    <div className="text-[10px] font-black uppercase">RF Rural Longo Alcance</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Bento Grid */}
      <section id="servicos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-24 gap-6">
            <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Soluções Residenciais</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Automação de casa inteligente <span className="text-xl md:text-3xl text-amber-500 italic font-serif lowercase ml-2 align-middle">(smart home)</span>
            </h3>
            <p className="text-lg md:text-xl text-white/50 font-medium max-w-4xl leading-relaxed mt-4">
              Comande sua casa ou comércio através da tecnologia da Internet via Wi-Fi com seu celular ou comando de voz (Alexa). 
              Oferecemos soluções completas: iluminação inteligente, cortinas, tomadas, ar condicionado, fechaduras eletrônicas, automação de piscinas, além de sensores de presença e magnéticos para total segurança e conforto.
            </p>
            <SmartHomeGallery />
          </div>
        </div>
      </section>

      {/* Topic 2: RF Rural Detail */}
      <section id="especialidade" className="py-20 px-6 bg-[#080809] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-amber-500/40 tracking-widest">02</span>
              <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Soluções Rurais & Remotas</h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Sistema Via Rádio Frequência <span className="text-amber-500 italic font-serif ml-2 align-middle">(RF)</span>
            </h3>
            <div className="flex flex-col gap-8 mt-4">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-white/50 font-medium max-w-4xl leading-relaxed">
                  Nosso sistema via rádio frequência vem para facilitar a vida no campo, bem como:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-500/80 font-bold text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Chácara
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Sítio
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Fazendas
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Indústrias deslocadas
                  </li>
                </ul>
              </div>
              
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-4xl leading-relaxed">
                Onde não chega o cabeamento elétrico e nem internet, o nosso sistema via rádio, através de transmissores e receptores via rádio, acoplado com <span className="text-amber-500 font-bold">painéis solares</span>, vem para facilitar a automação de abastecimento de reservatórios e sistema de irrigação com <span className="text-amber-500 font-bold">válvulas solenoides</span>.
              </p>
            </div>
            <RFGallery />
          </div>
        </div>
      </section>

      {/* Topic 3: SPDA & Grounding */}
      <section id="protecao" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-amber-500/40 tracking-widest">03</span>
              <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Sistemas de Proteção</h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Proteção SPDA <span className="text-amber-500 italic font-serif ml-2 align-middle">e Aterramento</span>
            </h3>
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-4xl leading-relaxed">
                Proteja seu patrimônio e seus equipamentos contra surtos da rede e descargas atmosféricas com nosso sistema de proteção SPDA (para-raios) e aterramento. Garantimos a máxima segurança com instalações técnicas rigorosas que seguem todas as normas de segurança vigentes.
              </p>
            </div>
            <SPDAGallery />
          </div>
        </div>
      </section>

      {/* Topic 4: Logic Network */}
      <section id="logica" className="py-20 px-6 bg-[#0F0F11] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-amber-500/40 tracking-widest">04</span>
              <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Excelência em Infraestrutura</h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Cabeamento Estruturado <span className="text-amber-500 italic font-serif ml-2 align-middle">& Rede Lógica</span>
            </h3>
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-5xl leading-relaxed">
                Executamos a infraestrutura completa de rede lógica com rigor técnico absoluto. Nossa expertise abrange desde a montagem e organização de <span className="text-white">Racks</span> técnicos, conectorização de <span className="text-white">Patch Panels</span> e <span className="text-amber-500">Switches</span> de alta performance, até a instalação de <span className="text-white font-bold">tomadas RJ45 fêmea</span> (keystone) e organização de <span className="text-white">Patch Cords</span>. Configuramos <span className="text-amber-500 font-bold">Roteadores</span> para garantir uma rede de internet estável e segura, preparada para o alto tráfego de dados.
              </p>
            </div>
            <LogicGallery />
          </div>
        </div>
      </section>

      {/* Topic 5: CCTV Monitoring */}
      <section id="cftv" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-amber-500/40 tracking-widest">05</span>
              <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Vigilância Avançada</h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Monitoramento por <span className="text-amber-500 italic font-serif ml-2 align-middle">Câmeras (CFTV)</span>
            </h3>
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-5xl leading-relaxed">
                Implementamos sistemas de monitoramento de última geração para sua total tranquilidade. Especialistas em instalação de <span className="text-white">Câmeras IP</span> e Analógicas de alta resolução (Full HD/4K), centrais de processamento <span className="text-white font-bold">DVR</span> e <span className="text-white font-bold">NVR</span> com armazenamento inteligente. Configure <span className="text-amber-500">Acesso Remoto</span> em tempo real via smartphone e tablets, garantindo que você tenha o controle visual do seu patrimônio de onde estiver.
              </p>
            </div>
            <CFTVGallery />
          </div>
        </div>
      </section>

      {/* Topic 6: Wallbox EV Stations */}
      <section id="wallbox" className="py-20 px-6 bg-[#0F0F11] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-amber-500/40 tracking-widest">06</span>
              <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Mobilidade Elétrica</h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal uppercase leading-tight">
              Estações de Recarga <span className="text-amber-500 italic font-serif ml-2 align-middle">& Wallbox</span>
            </h3>
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-5xl leading-relaxed">
                Executamos a infraestrutura elétrica dedicada para carregadores de veículos elétricos com foco em segurança e desempenho. Nossa expertise abrange desde a instalação física de <span className="text-white font-bold">Estações Wallbox</span> residenciais e comerciais, até o dimensionamento técnico de circuitos com cabos de bitola apropriada e proteção completa via <span className="text-white">Disjuntores</span> e <span className="text-white">DR (Dispositivo Diferencial Residual)</span>. Garantimos uma recarga rápida e estável, protegendo o veículo e a rede elétrica local.
              </p>
            </div>
            <WallboxGallery />
          </div>
        </div>
      </section>

      {/* Topic 7: Nossa Trajetória em Cuiabá */}
      <section id="sobre" className="py-20 px-6 bg-[#080809] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-amber-500/40 tracking-widest">07</span>
                <h2 className="text-[11px] font-bold tracking-[0.5em] text-amber-500 uppercase px-4 py-2 border border-amber-500/20 rounded-lg w-fit">Nossa História</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black tracking-normal uppercase leading-tight">
                Mais de <span className="text-amber-500">19 Anos</span> <br />
                de Excelência Técnica
              </h3>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Referência consolidada em <span className="text-white font-bold">Cuiabá e região</span>, a DG Elétrica e Tecnologia acumula quase duas décadas de atuação ininterrupta no mercado de instalações elétricas e automação.
              </p>
              <div className="space-y-4">
                <p className="text-base text-white/40 font-medium leading-relaxed">
                  Tratamos cada projeto como uma obra de arte tecnológica. Nossa trajetória é marcada pela entrega de soluções complexas que exigem o que há de mais moderno em tecnologia, garantindo segurança patrimonial e eficiência energética para centenas de clientes em todo o Mato Grosso.
                </p>
                <p className="text-base text-white/40 font-medium leading-relaxed">
                  Seja em grandes indústrias, condomínios de luxo ou no coração do agronegócio, nossa assinatura é sinônimo de precisão e durabilidade.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-3xl font-black text-amber-500 mb-1">19+</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-tight">Anos operando em Cuiabá e Região</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-3xl font-black text-amber-500 mb-1">500+</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-tight">Projetos de Alta Complexidade</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                alt="Excelência em Cuiabá" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080809] to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-amber-500 text-black">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} />
                  <h4 className="text-xl font-black uppercase">Autoridade Técnica</h4>
                </div>
                <p className="text-sm font-bold opacity-80 leading-snug">
                  Dominamos as normas técnicas para oferecer o que há de mais seguro e inovador para o mercado mato-grossense.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Tech Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#080809]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Zap className="text-black fill-black scale-x-[0.6] scale-y-[1.4] rotate-[15deg]" size={18} />
                </div>
                <span className="font-black text-2xl uppercase tracking-normal">DG ELÉTRICA</span>
              </div>
              <p className="text-white/30 text-sm max-w-sm leading-relaxed">
                Expertise técnica de elite em automação, proteção e sistemas rurais. 
                Construindo a infraestrutura do amanhã com a experiência de quem vive o hoje há 19 anos.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-20">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-amber-500">Navegação</h5>
                <ul className="space-y-4">
                  {['Serviços', 'Início', 'WhatsApp'].map(item => (
                    <li key={item}><a href={item === 'WhatsApp' ? 'https://wa.me/5565992532120' : '#'} className="text-sm font-medium text-white/40 hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-amber-500">Legal</h5>
                <ul className="space-y-4">
                  {['Privacidade', 'Normas NR10', 'Termos'].map(item => (
                    <li key={item}><a href="#" className="text-sm font-medium text-white/40 hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
               © 2024 DG Elétrica e Tecnologia. Absolute Precision since early 2000s.
            </div>
            <div className="flex gap-8">
              {['Instagram', 'Linkedin', 'YouTube'].map(item => (
                <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      <AnimatePresence>
        {scrolled && (
          <motion.a
            href="#home"
            className="fixed bottom-4 left-1 z-[200] text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
            initial={{ opacity: 0, scale: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.08, 1],
              x: 0 
            }}
            exit={{ opacity: 0, scale: 0, x: -20 }}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: { duration: 0.3 },
              x: { type: "spring", stiffness: 260, damping: 20 }
            }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ArrowUp size={48} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5565992532120?text=Gostaria%20de%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-2 z-[200] text-[#25D366] drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.08, 1],
          y: 0 
        }}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.5 },
          y: { 
            type: "spring",
            stiffness: 260,
            damping: 20
          }
        }}
      >
        <WhatsAppIcon size={44} />
      </motion.a>
    </div>
  );
}
