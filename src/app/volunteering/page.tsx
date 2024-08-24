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
            <div className='p-10 flex flex-row justify-evenly'>
                <h1 className='text-5xl font-bold'>Voluntariado</h1>
            </div>
            <div className='flex flex-col p-10 pl-20 justify-center items-center'>
                <p>Para poder ser voluntario es necesario ser especialista en cualquiera de las áreas de trabajo, 
                tener experiencia en el manejo de los pacientes con LPH, donar tiempo y conocimientos. 
                Saber trabajar en equipo y reportar información.
                </p>                       
            </div>
            
            <div className='flex flex-row'>
                <div className = 'w-1/2 '>
                    <div className='bg-blue-950 text-white flex flex-col mt-14 p-4 m-10 rounded-3xl'>
                        <div className='p-8 text-2xl font-bold'>¿Qué voy a realizar?</div> 
                        <ul className="list-disc pl-12 pb-8">
                            <li>Actividades profesionales en tu área de trabajo una vez por semana.</li>
                            <li>Reporte de actividades mensuales en formato y fotografía.</li>
                        </ul> 
                    </div> 
                    <div className='p-4 flex flex-col justify-evenly items-center mt-24'>
                        <img src='images/Voluntariado.png' alt='Imagen de la actividad'/>
                    </div>
                        
                </div>

                <div className = 'p-10 w-1/2'>
                    <div className='p-4 flex flex-col justify-evenly items-center'>
                        <img src='images/Voluntariado2.png' alt='Imagen de la actividad'/>
                    </div>

                    <div className='bg-blue-950 text-white flex flex-col p-4 m-10 mt-11 rounded-3xl'>
                        <div className='p-8 text-2xl font-bold'>Características</div>
                        <ul className="list-disc pl-12 pb-8">
                            <li>Pasión por su trabajo.</li>
                            <li>Tener gusto por atender pacientes pediátricos.</li>
                            <li>Gusto de trabajar en equipo.</li>
                            <li>Colaborar en actividades extra en Pro de la fundación</li>
                        </ul>
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
