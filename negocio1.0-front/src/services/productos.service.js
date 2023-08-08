import {config} from "../config";
import httpService from "./http.service";


const urlResource = config.urlResourceProductos;


async function Buscar(Nombre, Pagina) {
  const resp = await httpService.get(urlResource, {
    params: { Nombre, Pagina },
  });
  return resp.data;
}


async function BuscarPorId(item) {
  const resp = await httpService.get(urlResource + "/" + item.IdProducto);
  return resp.data;
}



async function Grabar(item) {
  if (item.IdProducto === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(urlResource + "/" + item.IdProducto, item);
  }
}

async function Eliminar(item) {
    await httpService.delete(urlResource + "/" + item.IdProducto);
}
  


export const productosService = {
  Buscar,BuscarPorId,Grabar,Eliminar
};



