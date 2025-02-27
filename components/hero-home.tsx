import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'

export default function HeroHome() {
  return (
    <section className="relative bg-white"> {/* o bg-gray-50 per un leggero contrasto */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-slate-900 mb-4">L'arte del vetro</h1>
              <p className="text-xl text-slate-600 mb-8">MG - è l'incarnazione di passione, tradizione e arte. Ogni pezzo è realizzato con una squisita attenzione ai dettagli. 
              ai dettagli, riflesso dei maestri artigiani che portano avanti la secolare tradizione vetraria di Murano.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                <Link className="btn text-black underline hover:no-underline" href="#0">SCOPRI LA NOSTRA REALTÀ</Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={680}
              thumbHeight={545}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />            

          </div>

        </div>
      </div>
    </section>
  )
}