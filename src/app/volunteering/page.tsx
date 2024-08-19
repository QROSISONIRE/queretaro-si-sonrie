// classname = color / padding / tamaño / flex / flex-properties / el resto

const CorpusVolunteering = () => {
    return (
      <div className="flex flex-col min-h-screen">

          {/* Navbar */}
          <div className='bg-blue-500 p-4 text-white'>
              <h1 className="text-2xl">Navbar</h1>
          </div>
  
          {/* Body */}
          <div className="bg-blue-100 p-4">
  
  
              {/* Sección de imagen y texto */}
              <div className='flex flex-row text-white'>
                  <div className='bg-blue-400 p-4 w-1/2 flex items-center justify-center'> 
                      <img src='https://via.placeholder.com/300' alt='Imagen de la actividad'/>
                  </div>
                  
                  <div className='bg-blue-600 w-1/2 '>
                      <div className='bg-blue-800 p-8 text-white'>
                          <div className='text-3xl'> <h1> Servicio Social </h1> </div>
                      </div>
  
                      <div className='flex flex-col p-4 justify-center items-center'>
                          <p> En <strong>Querétaro Sí Sonríe</strong> el servicio social es una actividad de formación y servicio a la comunidad de fisura labio platina en la ciudad de Querétaro.
                          </p>
                          <br></br>
                          <p>Se ponen en práctica las habilidades profesionales adquiridas en la licenciatura, para formar parte del protocolo de atención multidisciplinario en la atención de los pacientes que presentan esta condición. </p>                        
                      </div>
  
                  </div>
              </div>
  
              {/* Sección de dos bloques */}
              <div className='flex flex-row bg-blue-300 text-white'>
  
                  <div className='p-8 w-1/2'>
                      <div className='bg-blue-600 p-8'>
                          <h3 className="text-lg font-bold">Actividades</h3>
                          <ul className="list-disc pl-5">
                          <li>Requisito 1</li>
                          <li>Requisito 2</li>
                          <li>Requisito 3</li>
                          </ul>                        
                      </div>
  
                  </div>
  
                  <div className='p-8 w-1/2'>
                      <div className='bg-blue-600 p-8'>
                          <h3 className="text-lg font-bold">Aprendizajes</h3>
                          <ul className="list-disc pl-5">
                          <li>Requisito 1</li>
                          <li>Requisito 2</li>
                          <li>Requisito 3</li>
                          </ul>                        
                      </div>
                  </div>
              </div>
  
  
              {/* Sección de requisitos y voluntariado */}
              <div className='flex flex-row'>
                  <div className = 'bg-blue-400 p-10 w-1/2 flex flex-col justify-evenly items-center'>
                      <div className='bg-blue-300 p-4'><img src='https://via.placeholder.com/270x360' alt='Imagen de la actividad'/></div>
                      <div className='bg-blue-200 p-4 text-2xl'>Características</div>
                      <div className='bg-blue-300 p-4 '>Pasión por su trabajo</div>
                      <div className='bg-blue-200 p-4 '>Tener gusto por atender pacientes pediátricos</div>
                      <div className='bg-blue-300 p-4 '>Gusto de trabajar en equipo</div>
                      <div className='bg-blue-200 p-4 '>Colaborar en actividades extra en pro de la fundación</div>
                  </div>
                  
                  <div className = 'bg-blue-600 w-1/2'>
                      <div className='bg-blue-800 p-8 text-white flex flex-row justify-evenly'>
                      <h1 className='text-3xl'>Voluntariado</h1>
                      </div>
  
                      <div className='flex flex-col p-4 justify-center items-center'>
                          <div className='bg-blue-300 p-4 text-2xl'>¿Qué voy a realizar?</div>
                          <div className='bg-blue-200 p-4 '>Actividades profesionales en tu área de trabajo una vez por semana</div>
                          <div className='bg-blue-300 p-4 '>Reporte de actividades mensuales en formato y fotografía</div>
                          <div className='bg-blue-200 p-4'><img src='https://via.placeholder.com/360x270' alt='Imagen de la actividad'/></div>
                      </div>
  
                  </div>
              </div>
  
          </div>
  
          {/* Footer */}
          <footer>
              <div className='bg-blue-500 p-4 text-white'>
                  <h1 className="text-2xl">Footer</h1>
              </div>
          </footer>

      </div>
    );
  };
  
  export default CorpusVolunteering;
  