export const MARCAS = [
  {id:1, nombre: 'Europeo'},
  {id:2, nombre: 'Americano'},
  {id:3, nombre: 'Koreano'}
];


// la const YEARMAX esta generando el año actual 
// Years es ta generando 20 arrays y restando el indece a YEARMAX obtenemos los ultimos 20 año 
//2022 - 1 = 2021 , 2021-1 = 2020 ... asi hasta llegar a 20 elementos que es el numero indicado en el new Array

const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from(
  new Array (20),
 (valor, index ) =>
  YEARMAX - index
);

export const PLANES = [
  {id:1, nombre: 'Basico'},
  {id:2, nombre: 'Completo'}
  
];