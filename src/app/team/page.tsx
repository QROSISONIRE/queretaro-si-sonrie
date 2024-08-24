const Team = () => {
    return (
        <main>
            <div className="team-introduction">
                <div className="team-introduction-div-design"> 
                    <h1>¡Te presentamos nuestro equipo!</h1>
                    <div className="team-introduction-design-1"></div>
                    <div className="team-introduction-design-2"></div>
                </div>
                <div className="team-flex-container">
                    <div>
                        <img src="images/team-img-1.jpg" 
                        alt="imagen del especialista, Juan Martinez" />
                        <h2>Juan Martinez</h2>
                        <p>Especialista en negocios <br/> 
                        internacionales y <br/>
                        relaciones públicas</p>
                    </div>
                    <div>
                        <img src="./sources/images/team-img-2.jpg" alt="imagen de Dr. Estrada Vargas" />
                        <h2>Dr. Estrada Vargas </h2>
                        <p>Cirujano con maestría en <br/>
                        farmaceutica</p>
                    </div>
                    <div>
                        <img src="./sources/images/team-img-3.jpg" alt="imagen de Dra. Maria Castillo" />
                        <h2>Dra. Maria Castillo</h2>
                        <p>Doctora en Ciencias <br/>
                        Médicas</p>
                    </div>
                </div>
            </div>
            <div className="team-institutions">
                <div className="team-institutions-div-design">
                    <div className="team-institutions-design-1"></div>
                    <div className="team-institutions-design-2"></div>
                    <h1>Nuestros convenios</h1>
                </div>
                <p>Hemos hecho sinergia con varias instituciones 
                para poder lograr una mejor atención a mejores 
                costos para nuestros pacientes.
                </p>
                <div className="team-institutions-flex-container">
                    <img src="./sources/images/team-img-institution-1.jpg" 
                    alt="Logo de SmileTrain"
                    style="width: 15vw;">
                    <img src="./sources/images/team-img-institution-2.jpg" 
                    alt="Logo de Quirófanos del Valle"
                    style="width: 22vw;">
                    <img src="./sources/images/team-img-institution-3.jpg" 
                    alt="Logo de Rxmind Gabinete Radiológico"
                    style="width: 22vw;">
                </div>
                <div className="team-institutions-flex-container">
                    <img src="./sources/images/team-img-institution-4.jpg" 
                    alt="Logo de Laboratorio de Análisis Clinicos Danthe"
                    style="width: 13vw;">
                    <img src="./sources/images/team-img-institution-5.jpg" 
                    alt="Logo de UVM"
                    style="width: 30vw;">
                    <img src="./sources/images/team-img-institution-6.jpg" 
                    alt="Logo de Orthodontics Bajio"
                    style="width: 20vw;">
                </div>
                <div className="team-institutions-flex-container">
                    <img src="./sources/images/team-img-institution-7.jpg" 
                    alt="Logo de More Brands Studio"
                    style="width: 25vw;">
                    <img src="./sources/images/team-img-institution-8.jpg" 
                    alt="Logo de RoberToon Ilustrador"
                    style="width: 25vw;">
                </div>
            </div>
        </main>
    );
}

export default Team;