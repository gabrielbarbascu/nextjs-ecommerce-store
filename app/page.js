import Image from 'next/image';
import kaliWallpaper from '../public/images/kaliwllp.png';

export default function HomePage() {
  return (
    <main>
      <h1>"The quieter you become, the more you are able to hear"</h1>
      <Image
        src="/images/kaliwllp.png"
        alt="Kali wallpaper"
        width={1000}
        height={800}
      />
      {/* <Image src={kaliWallpaper} alt="Kali wallpaper" /> */}
    </main>
  );
}
