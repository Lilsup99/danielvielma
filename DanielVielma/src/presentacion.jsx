import './intro.css'


function Intro({ imgSrc }) {

  return (
    <>
      <div className="containerx">
        <img src={imgSrc} alt="image" height={270}/>
        <span>
            <h1>Daniel Vielma</h1>
            <h3>Data scientist</h3>

            <p>Soluciones tecnologicas basadas en datos, son soluciones de impacto</p>
        </span>
      </div>

    </>
  )
}

export default Intro
