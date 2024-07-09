import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselFadeExample from '../ExampleCarouselImage/CarouselFadeExample';
import VideoIframe from '../Iframe';

function Inicio() {
  return (
    <>
      <CarouselFadeExample />

      <div className="container p-4">
        <p className="lead">A Billy Brinquedos é uma empresa que se destaca no mercado de brinquedos, com o objetivo de proporcionar aos
          nossos clientes uma variedade de opções de brinquedos de alta qualidade, que sejam acessíveis e diversificados.</p>
        <div className="row">
          <div className="col-md-6">
            <p>Nossa equipe é formada por profissionais com muita experiência no ramo, que trabalham duro para garantir que os
              nossos produtos sejam de alta qualidade e que os nossos clientes estejam sempre satisfeitos.</p>
          </div>
          <div className="col-md-6">
            <p>Temos como objetivo principal oferecer produtos que sejam únicos e que sejam para todos os públicos, desde os
              mais novos até os mais antigos. Por isso, trabalhamos com a melhoria contínua de nossos produtos, para que
              sempre estejamos oferecendo aos clientes a melhor experiência possível.</p>
          </div>
        </div>
        <div className="App">
          <h1 className="display-3 text-center">Depoimentos de Clientes</h1>
          <VideoIframe videoUrl="https://www.youtube.com/embed/SEU_VIDEO_ID" />
        </div>
      </div>
    </>
  );
}

export default Inicio;