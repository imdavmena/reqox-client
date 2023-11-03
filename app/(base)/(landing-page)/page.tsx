export const metadata = {
  title: 'REQOX',
  description: 'REQOX',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
// import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Métodos de Pago</h2>
        <p className="text-xl text-gray-400">Contamos con una variedad de métodos de pago como lo son Btc,LTC,TRX,USDT,Dodge coin, BNB, Paypal.</p>
      </div>
    </>
  )
}
