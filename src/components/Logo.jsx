'use client';

import Image from 'next/image';

function LogomarkPaths() {
  return (
    <Image
      src="/images/star-hpc-logo.png"
      width={50}
      height={50}
      alt="star-hpc-logo"
    />
  );
}

export function Logo() {
  return <LogomarkPaths />;
}
