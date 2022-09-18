import useCotizador from "../hooks/useCotizador"


const Error = () => {
  const  { error } =  useCotizador()


  return (

    <div className="bg-red-100 border border-red-400 p-5 text-red-700 uppercase font-bold text-center" >
      <p>{error}</p>
    </div>
  )
}
export default Error