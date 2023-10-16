import Image from 'next/image';
import kaliWallpaper from '../public/images/kaliwllp.png';

export default function HomePage() {
  return (
    <main>
      <header>
        "If you are not paying for it, you're not the customer, you're the
        product being sold."
      </header>
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
