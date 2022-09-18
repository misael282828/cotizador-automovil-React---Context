import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";


const useCotizador = () =>{
  return useContext(CotizadorContext)
}

export default useCotizador


//ventaja de usar este hook es que nos ahora tener que importar todo 
// import { useContext } from "react";
//import CotizadorContext from "../context/CotizadorProvider";
// en cada uno de los componentes, con este hooks solo hay que importarlo 

