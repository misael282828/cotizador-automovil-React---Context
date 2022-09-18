import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  //useRef para que el year no haga re-render no deseado 
  const yearRef = useRef(year)

  // con usecallback prevenimos que nuestra app haga re-render no deseado 
  // con useMemo lo usamos com orraw fucntion 


  //con la destructuracion tenemos acceso a nombreMarca.nombre
  const [nombreMarca] = useMemo( () =>
    MARCAS.filter((m) => m.id === Number(marca)),
    [resultado]
  );
  const [nombrePlan] = useMemo( () =>
    PLANES.filter((p) => p.id === Number(plan)),
    [resultado]
  );

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center p-2 mt-2 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold mx-2">Marca:</span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold mx-2">plan:</span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold mx-2">Año del automovil :</span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold mx-2">Total Cotizacion:</span>
        {resultado}
      </p>
    </div>
  );
};
export default Resultado;
