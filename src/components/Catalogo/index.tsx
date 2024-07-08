import imagem6m from '../ImagensCard/Imagem6m2.jpg'
import imagem7m from '../ImagensCard/Imagem7m2.jpg'
import imagem8m from '../ImagensCard/Imagem8m1.jpg'
import imagem8mpainel from '../ImagensCard/Imagem8mpainel.jpg'
import imagem10m from '../ImagensCard/imagem10m1.jpg'

function Catalogo() {
    return (
        <>
            <h1 className="display-3 text-center">PlayGround Fixo e Reboque</h1>
            <div className="container mt-4">
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={imagem6m} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Playground 6 Metros</h5>
                                <p className="card-text">Esse produto tem 6 Metros, reboque é opcional.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=5585996282337&text=Ol%C3%A1,%20acessei%20sua%20pagina%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es!%20" className="btn btn-success">Negociar no Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={imagem7m} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Playground 7 Metros</h5>
                                <p className="card-text">Esse produto tem 7 Metros, reboque é opcional.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=5585996282337&text=Ol%C3%A1,%20acessei%20sua%20pagina%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es!%20" className="btn btn-success">Negociar no Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={imagem8m} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Playground 8 Metros</h5>
                                <p className="card-text">Esse produto tem 8 Metros, reboque é opcional.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=5585996282337&text=Ol%C3%A1,%20acessei%20sua%20pagina%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es!%20" className="btn btn-success">Negociar no Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={imagem8mpainel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Playground 8 Metros com Painel</h5>
                                <p className="card-text">Esse produto tem 8 Metros, reboque é opcional. <strong>Contém Painel</strong></p>
                            </div>
                            <div className="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=5585996282337&text=Ol%C3%A1,%20acessei%20sua%20pagina%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es!%20" className="btn btn-success">Negociar no Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={imagem10m} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Playground 10 Metros</h5>
                                <p className="card-text">Esse produto tem 10 Metros, reboque é opcional.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://api.whatsapp.com/send?phone=5585996282337&text=Ol%C3%A1,%20acessei%20sua%20pagina%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es!%20" className="btn btn-success">Negociar no Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Catalogo;