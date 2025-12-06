import React, { useState } from 'react';
import { IMAGE_MAP } from '../constants';

interface SafeImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, caption }) => {
  const [error, setError] = useState(false);
  const fallbackSrc = IMAGE_MAP.fallback;

  return (
    <figure className="rounded-lg overflow-hidden border bg-white shadow-sm">
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-auto aspect-[4/3] object-cover bg-gray-100"
      />
      {caption && <figcaption className="text-center text-xs text-gray-600 p-2 bg-gray-50 border-t">{caption}</figcaption>}
    </figure>
  );
};