'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import logo from "@/public/images/logo.svg";

export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        
        {/* Bigger Pulsating Logo */}
        <motion.div
          animate={{
            scale: [0.88, 1.12, 0.88],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={logo}
            alt="MBGIPU Logo"
            width={180}     // Increased from 100
            height={180}    // Increased from 100
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Optional subtle loading text */}
        <motion.p 
          className="mt-10 text-sm font-body tracking-[3px] text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          LOADING...
        </motion.p>

      </div>
    </div>
  );
}