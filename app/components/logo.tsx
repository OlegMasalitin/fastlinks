'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import logo1 from '@/assets/logo1.png';
import logo2 from '@/assets/logo2.png';
import logo3 from '@/assets/logo3.png';

const images = [
  { img: logo1, width: 48, height: 48 },
  { img: logo2, width: 169, height: 48 },
  { img: logo3, width: 124, height: 48 },
];

export default function Logo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => {
        let next = prev + 1;
        if (next > images.length - 1) {
          next = 0;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <Image
      className=""
      src={images[index].img}
      alt="logo"
      width={images[index].width}
      height={images[index].height}
      priority
    />
  );
}
