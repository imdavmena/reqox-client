import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'



const items: Array<any> = [
  {
    title: 'Paquete Bronze $30 $̶6̶0̶',
    subtitle: 'Paquete Bronze 50% descuento',
    description: 'Gana hasta $1 por cada tarea completada',
    items: ['El tiempo de visualización de 60 segundos', 'La duración del plan es de 30 dias', 'Puedes hacer un máximo de 3 tareas por dia']
  },
  {
    title: 'Paquete Silver $100',
    subtitle: 'Paquete Silver $100',
    description: 'Gana hasta $1 por cada tarea completada',
    items: ['El tiempo de visualización de 60 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 5 tareas por dia']
  },
  {
    title: 'Paquete Gold $400',
    subtitle: 'Paquete Gold $400',
    description: 'Gana hasta $2 por cada tarea completada',
    items: ['El tiempo de visualización de 50 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 10 tareas por dia']
  },
  {
    title: 'Paquete Platinum $1,200 USD',
    subtitle: 'Paquete Platinum $1,200 USD',
    description: 'Gana hasta $3 por cada tarea completada',
    items: ['El tiempo de visualización de 40 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 20 tareas por dia']
  },
  {
    title: 'Paquete Diamond $3,000 USD',
    subtitle: 'Paquete Diamond $3,000 USD',
    description: 'Gana hasta $5 por cada tarea completada',
    items: ['El tiempo de visualización de 30 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 30 tareas por dia']
  },
  {
    title: 'Paquete Elite $8,000 USD',
    subtitle: 'Paquete Elite $8,000 USD',
    description: 'Gana hasta $35 por cada tarea completada',
    items: ['El tiempo de visualización de 20 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 10 tareas por dia']
  },
  {
    title: 'Paquete Champion $11,200 USD',
    subtitle: 'Paquete Champion $11,200 USD',
    description: 'Gana hasta $45 por cada tarea completada',
    items: ['El tiempo de visualización de 10 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 10 tareas por dia']
  },
  {
    title: 'Paquete Unreal $15,000 USD',
    subtitle: 'Paquete Unreal $15,000 USD',
    description: 'Gana hasta $60 por cada tarea completada',
    items: ['El tiempo de visualización de 10 segundos', 'La duración del plan es de 100 dias', 'Puedes hacer un máximo de 10 tareas por dia']
  },
]

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto  pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Alcaza tus metas con nosotros</div>
            <h1 className="h2 mb-4">Nuestros Paquetes Disponibles</h1>
            <p className="text-xl my-5 font-extrabold text-gray-400">
              ¿Por qué es necesario adquirir una membresía VIP en la plataforma Reqox para acceder a tareas y obtener comisiones? ¿De dónde proviene nuestra ganancia?
            </p>
            <p className="text-xl text-gray-400 my-2">

              Existen algunas personas que erróneamente creen que las ganancias derivan únicamente de la compra de membresías, pero me gustaría aclarar que esto no es cierto. Ser VIP en realidad es una forma de establecer una conexión más cercana con la plataforma.
            </p>
            <p className="text-xl text-gray-400 my-2">

              Esta membresía permite a los usuarios llevar a cabo las tareas asignadas por los colaboradores de manera más precisa y eficiente, sin que esto represente pérdidas económicas para la plataforma.
            </p>
            <p className="text-xl text-gray-400">
              Además, ayuda a atraer a más colaboradores hacia la plataforma Aleaty, lo cual resulta sumamente favorable para su desarrollo. Ser VIP representa un símbolo de responsabilidad y estatus.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            {items.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 " data-aos="fade-up">
                      <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
                    </div>
                    {/* Content */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                      <div className="md:pr-4 lg:pr-12 xl:pr-16">
                        <div className="font-architects-daughter text-xl text-purple-600 mb-2">{item.subtitle}</div>
                        <h3 className="h3 mb-3">{item.title}</h3>
                        <p className="text-xl text-gray-400 mb-4">{item.description}</p>
                        <ul className="text-lg text-gray-400 -mb-2">
                          {item.items.map((d: string) => (
                            <li className="flex items-center mb-2">
                              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">{item.subtitle}</div>
                      <h3 className="h3 mb-3">{item.title}</h3>
                      <p className="text-xl text-gray-400 mb-4">{item.description}</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        {item.items.map((d: string) => (
                          <li className="flex items-center mb-2">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>{d}</span>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}

            {false && (
              <>
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">Paquete Silver $100</div>
                      <h3 className="h3 mb-3">Paquete Silver $100</h3>
                      <p className="text-xl text-gray-400 mb-4">Gana hasta $1 por cada tarea completada</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>El tiempo de visualización de 60 segundos</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>La duración del plan es de 100 dias</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Puedes hacer un máximo de 5 tareas por dia
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div></>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}
