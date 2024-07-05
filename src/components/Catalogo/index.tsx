function Catalogo() {
    return (
        <div className="container mt-4">
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card">
                        <img src={`../src/components/Imagens/Card_1.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produto 1</h5>
                            <p className="card-text">Descrição do produto 1</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={`../src/components/Imagens/Card_2.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produto 2</h5>
                            <p className="card-text">Descrição do produto 2</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={`../src/components/Imagens/Card_3.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produto 3</h5>
                            <p className="card-text">Descrição do produto 3</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={`../src/components/Imagens/Card_4.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produto 4</h5>
                            <p className="card-text">Descrição do produto 4</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; 

export default Catalogo;