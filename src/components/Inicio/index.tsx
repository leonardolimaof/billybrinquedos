import CarouselFadeExample from '../ExampleCarouselImage/CarouselFadeExample';
import VideoIframe from '../Iframe';

function Inicio() {
  return (
    <div className="space-y-12">
      <CarouselFadeExample />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A Billy Brinquedos é uma empresa que se destaca no mercado de brinquedos, com o objetivo de proporcionar aos
            nossos clientes uma variedade de opções de brinquedos de alta qualidade, que sejam acessíveis e diversificados.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="relative">
            <div className="text-base leading-7 text-gray-700">
              <p>
                Nossa equipe é formada por profissionais com muita experiência no ramo, que trabalham duro para garantir que os
                nossos produtos sejam de alta qualidade e que os nossos clientes estejam sempre satisfeitos.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="text-base leading-7 text-gray-700">
              <p>
                Temos como objetivo principal oferecer produtos que sejam únicos e que sejam para todos os públicos, desde os
                mais novos até os mais antigos. Por isso, trabalhamos com a melhoria contínua de nossos produtos, para que
                sempre estejamos oferecendo aos clientes a melhor experiência possível.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl">
            Depoimentos de Clientes
          </h2>
          <div className="mt-8">
            <VideoIframe videoUrl="https://www.youtube.com/embed/SEU_VIDEO_ID" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;