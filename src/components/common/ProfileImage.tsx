import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'md';
}

export default function ProfileImage({ 
  src, 
  alt, 
  size = 'md',
  rounded = 'full' 
}: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-32 h-32'
  };

  const roundedClasses = {
    full: 'rounded-full',
    md: 'rounded'
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} ${roundedClasses[rounded]} object-cover`}
    />
  );
}