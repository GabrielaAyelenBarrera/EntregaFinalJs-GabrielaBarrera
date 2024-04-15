
const Hero = () => {
    let imagen = "src/assets/images/conjunto-rosa.jpg"

    return (
      <div className="container">
        <div className="row">
            <div className="col text-center">
             <img src={imagen} alt="Pink" className="img-fluid"/>
            </div>
         </div>
            <div className="row my-5">
              <div className="col text-center colorRosa p-4"> 
              <h3 className="text-black">Explora Nuestra Colección de Lencería Sensual</h3>
              <p>Descubre la seducción en su máxima expresión con nuestra exclusiva colección de lencería. Nuestra selección está diseñada para realzar tu sensualidad y despertar tus deseos. Con nuestros diseños te invitamos a explorar un mundo nuevo, donde cada prenda está confeccionada para hacer que te sientas poderosa. Ya sea que estés buscando sorprender a tu pareja o simplemente desees sentirte sexy y segura contigo misma, nuestra lencería te garantiza una experiencia inolvidable llena de placer y satisfacción. Sumérgete en la tentación y descubre tu lado más hot con nosotros.</p>
            
        


            </div>
        </div>
      </div>
    )
}

export default Hero;