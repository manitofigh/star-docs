import Image from 'next/image';
import StarHPCLogo from '@/images/star-hpc-logo.png';

function LogoImage() {
  return <Image src={StarHPCLogo} width={50} height={50} alt="star-hpc-logo" />;
}

function LogoText() {
  return (
    <div className="ml-2 flex flex-col">
      <span className="text-lg font-bold">Star HPC</span>
      <span className="text-xs">at Hofstra University</span>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center">
      <LogoImage />
      <LogoText />
    </div>
  );
}
