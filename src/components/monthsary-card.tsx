"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, X, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as Dialog from "@radix-ui/react-dialog";

interface MonthsaryCardProps {
  message: string;
  partnerName: string;
  musicSrc: string;
}

export default function MonthsaryCard({
  message,
  partnerName,
  musicSrc,
}: MonthsaryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/5.jpg",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/9.jpg",
    "/assets/images/10.jpg",
    "/assets/images/11.jpg",
    "/assets/images/12.jpg",
    "/assets/images/13.jpg",
    "/assets/images/14.jpg",
    "/assets/images/15.jpg",
    "/assets/images/16.jpg",
    "/assets/images/17.jpg",
    "/assets/images/18.jpg",
  ];

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isOpen]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Happy Monthsary!
          </h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <p className="text-lg font-semibold text-purple-600 mb-8">
            I love you so much, {partnerName}!
          </p>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart
                  size={64}
                  className="mx-auto text-red-500"
                  fill="currentColor"
                />
              </motion.div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
                <Dialog.Title className="text-2xl font-bold text-pink-600 mb-4">
                  Our Memories
                </Dialog.Title>
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                >
                  {images.map((image, index) => (
                    <div key={index} className="h-80 md:h-96 lg:h-[28rem]">
                      <img
                        src={image}
                        alt={`Monthsary memory ${index + 1}`}
                        className="object-contain h-full w-full"
                      />
                    </div>
                  ))}
                </Carousel>
                <button
                  onClick={toggleMute}
                  className="absolute top-2 left-2 text-gray-500 hover:text-gray-700"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
                <Dialog.Close asChild>
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src={musicSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
