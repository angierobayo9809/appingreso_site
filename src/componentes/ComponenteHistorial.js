import React, {useState} from 'react'

export const ComponenteHistorial = () => {
  const [historial, setHistorial] = useState([]);
  const consultarHistorial = async () => {
    try {
      const response = await fetch('http://localhost:5041/API/Ingreso/get-historial?paginas=10');
      const data = await response.json();
      setHistorial(data);
    }
    catch(error){
      console.error("Error al consultar el historial:", error);
    }
  }
  const ocultarHistorial= () =>{
    setHistorial([]);
  }

  return (
    <div>
        <p>Historial</p>
        <button onClick={ e => consultarHistorial()}>Ver historial</button>
        <button onClick={ e => ocultarHistorial()}>Ocultar historial</button>
        <div class="divTable">
          {historial.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Ciudad</th>
                  <th colSpan="10">Información</th>
                </tr>
              </thead>
              <tbody>
                {
                historial.map(item => (
                  <tr class="trBody">
                    <th colSpan="2" class="thCity">{item.ciudad}</th>
                    <th colSpan="10" class="thBody">{item.info}</th>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : ""
          }
        </div>
    </div>
  )
}
