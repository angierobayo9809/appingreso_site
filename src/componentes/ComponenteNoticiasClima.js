import  React, {useState} from "react"

export const ComponenteNoticiasClima = () => {
  const [datos, setDatos] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const obtenerInfo = async () => {
    try {
      if (ciudad === ""){
        alert("Debe ingresar una ciudad.")
        return;
      }
        
      const response = await fetch('http://localhost:5041/API/Ingreso/informacion-estado-ciudad?ciudad='+ciudad);
      if (!response.ok)
      {
        alert("Se presentó un error. Por favor verifique que el nombre está bien escrito y en español.");  
        return;
      }

      const data = await response.json();
      setDatos(data);
    }
    catch(error){
      alert(error.message);
    }
  }
  const ciudadConsultar = (nombreCiudad) => {
    setCiudad(nombreCiudad);
  }
  const limpiar = () => {
    setCiudad('');
    setDatos([]);
  }
  return (
    <div>
        <h1>Noticias y estado del clima</h1>
        <div>
          <label>Ingrese la ciudad a consultar:</label>
          <input type="text" value={ciudad} onChange={x => ciudadConsultar(x.target.value)} placeholder="Nombre ciudad"></input>
          <button onClick={ e => obtenerInfo()}>Consultar</button>
          <button onClick={ e => limpiar()}>Limpiar</button>
        </div>
        {datos.length !== 0 ? (
          <div>
          <p>Datos:</p>
            <div id="respuesta">
              <pre>{JSON.stringify(datos, null, 2)}</pre> 
            </div>
          </div>
        ) : <div></div>
        }
    </div>
  )
}