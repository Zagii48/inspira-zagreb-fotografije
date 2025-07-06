
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

const GalleryModal = ({ images, isOpen, initialIndex, onClose }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Navigation arrows */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          variant="ghost"
          size="sm"
          className="absolute left-4 z-10 text-white hover:bg-white/20"
          disabled={images.length <= 1}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          variant="ghost"
          size="sm"
          className="absolute right-4 z-10 text-white hover:bg-white/20"
          disabled={images.length <= 1}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Pagination dots */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
