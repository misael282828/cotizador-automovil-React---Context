
import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers";


const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);



  //...datos hacemos una copia para poder modificar el state sin borralo por completo
  const handelChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizadorSeguro = () => {
    
    //una base
    let resultado = 2000

    // obtener diferencia de años 
    const diferencia = obtenerDiferenciaYear(datos.year)
    
    //hay que restar el 3% por cada año 
    resultado -= ((diferencia * 3 ) * resultado) / 100
      // ((2 * 3) * 2000) / 100
    
    // Europeo 30%  
    // Americano 15%
    //asiatico %5
    resultado *= calcularMarca(datos.marca)
    console.log( 'resultado marca', resultado);


    //Basico 20%
    //Completo 50%
    
    resultado *= calcularPlan(datos.plan)
    console.log( 'resultado plan', resultado);

    //Formatear Dinero 
     resultado =  formatearDinero(resultado)
    console.log('formateo de dinero ', resultado );

    setCargando(true)

    setTimeout(() => {
      setResultado(resultado)
     setCargando(false)


    },1500)


  }

  
  return (
    <CotizadorContext.Provider
      value={{
        handelChangeDatos,
        datos,
        error,
        setError,
        cotizadorSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;

//  CotizadorProvider es de donde salen los datos
//children hace referencia a todos los componente que seran usado
// value para pasar los elementos a traves de toda la aplicacion
// import CotizadorContext  from '../context/CotizadorProvider'
