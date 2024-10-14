import './social.css'

function Social (){
    return(
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Cards Hover2</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
  <link
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  <div className="container">
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <a href="https://www.linkedin.com/in/daniel-vielma-10bb42269/" target="_blank">
              Daniel Vielma
            </a>
          </h3>
          <p>Conectar en Linkedin</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-github-square" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <a href="https://github.com/Lilsup99" target="_blank">
              Lilsup99
            </a>
          </h3>
          <p>Portfolio tecnico de proyectos</p>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-google" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
              danvilpra@gmail.com
          </h3>
          <p>
            Email
          </p>
        </div>
      </div>
    </div>
  </div>
</>

        )
}

export default Social