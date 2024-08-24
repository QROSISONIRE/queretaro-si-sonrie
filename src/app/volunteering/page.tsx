// classname = color / padding / tamaño / flex / flex-properties / el resto

const CorpusVolunteering = () => {
    return (
    <div className="flex flex-col min-h-screen">

          {/* Body */}
        <div className="pt-20">

              {/* Sección de imagen y texto */}
            <div className='py-16 flex flex-row'>
                <div className='w-1/2 flex items-center justify-center'> 
                    <img src='images/Voluntariado3.jpeg' className='w-80 h-auto rounded-3xl' alt='Imagen de la actividad'/>
                </div>

                <div className=' w-1/2 '>
                    <div className='p-8'>
                        <div> <h1 className="text-5xl font-bold"> Servicio Social </h1> </div>
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
            <div className='flex flex-row text-white'>

                <div className='p-8 w-1/2 '>
                    <div className='bg-secondary p-2 rounded-3xl'>
                        <h3 className="p-8 text-2xl font-bold">¿Qué actividades voy a realizar?</h3>
                        <ul className="list-disc pl-12 pb-8">
                        <li>Conocer el protocolo de atención multidisciplinario de fisura labio palatina.</li>
                        <li>Asistentes quirúrguicas en el área de quirófano.</li>
                        <li>Asistente en el área de odontopediatría , Ortodoncia y Prequirúrgica.</li>
                        <li>Programa de LPH sin caries.</li>
                        <li>Odontología general que incluye las áreas preventivas y profiliaxis, operatoria y elaboración de aparatos de laboratorio.</li>
                        </ul>                        
                    </div>
                </div>

                <div className='p-8 w-1/2 '>
                    <div className='bg-secondary p-2 rounded-3xl'>
                        <h3 className="p-8 text-2xl font-bold">¿Qué voy a aprender?</h3>
                        <ul className="list-disc pl-12 pb-8">
                        <li>Trabajo multidisciplinario entre área dental y médica.</li>
                        <li>Protocolos en quirófano para la atención de pacientes con LPH.</li>
                        <li>Atención preventiva con pacientes de LPH.</li>
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
                    <div className='bg-secondary text-white flex flex-col mt-14 p-4 m-10 rounded-3xl'>
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

                    <div className='bg-secondary text-white flex flex-col p-4 m-10 mt-11 rounded-3xl'>
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

    </div>
    );
};

export default CorpusVolunteering;
