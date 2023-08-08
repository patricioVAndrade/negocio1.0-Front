import React, { useState, useEffect } from "react";
import ProductosBuscar from "./ProductosBuscar";
import ProductosListado from "./ProductosListado";
import ProductosRegistro from "./ProductosRegistro";
import { productosService } from "../../services/productos.service";


import modalDialogService from "../../services/modalDialog.service";

function Productos() {
  

  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Nombre, setNombre] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null);
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  async function Buscar(_pagina) {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina);
    } else {
      _pagina = Pagina;
    }

    modalDialogService.BloquearPantalla(true);
    const data = await productosService.Buscar(Nombre, _pagina);
    modalDialogService.BloquearPantalla(false);

    setItems(data.Items);
    setRegistrosTotal(data.RegistrosTotal);

    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
      arrPaginas.push(i);
    }
    setPaginas(arrPaginas);
  }

  async function BuscarPorId(item, accionABMC) {
    const data = await productosService.BuscarPorId(item);
    setItem(data);
    setAccionABMC(accionABMC);
  }

  function Consultar(item) {
    BuscarPorId(item, "C");
  }

  function Modificar(item) {
    BuscarPorId(item, "M");
  }

  function Agregar() {
    setAccionABMC("A");
    setItem({
      IdProducto: 0,
      Marca: null,
      Nombre: null,
      Descripcion: null,
      Codigo: null,
      Precio: null,
      Activo: null
    });
  }

  function Imprimir() {
    alert("En Cola de impresion...");
  }

  async function Eliminar(item) {
    const resp = window.confirm("¿Está seguro que desea eliminar el registro?");
    if (resp) {
      await productosService.Eliminar(item);
      await Buscar();
    }
  }

  async function Grabar(item) {
    try {
      await productosService.Grabar(item);
    } catch (error) {
      alert(error?.response?.data?.message ?? error.toString());
      return;
    }

    await Buscar();
    Volver();

    setTimeout(() => {
      alert(
        "Registro " +
          (AccionABMC === "A" ? "agregado" : "modificado") +
          " correctamente."
      );
    }, 0);
  }

  function Volver() {
    setAccionABMC("L");
  }

  return (
    <div>
      <div className="tituloPagina">
        Productos <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      {AccionABMC === "L" && (
        <ProductosBuscar
          Nombre={Nombre}
          setNombre={setNombre}
          Buscar={Buscar}
          Agregar={Agregar}
        />
      )}

      {AccionABMC === "L" && Items?.length > 0 && (
        <ProductosListado
          Items={Items}
          Consultar={Consultar}
          Modificar={Modificar}
          Eliminar={Eliminar}
          Imprimir={Imprimir}
          Pagina={Pagina}
          RegistrosTotal={RegistrosTotal}
          Paginas={Paginas}
          Buscar={Buscar}
        />
      )}

      {AccionABMC === "L" && Items?.length === 0 && (
        <div className="alert alert-info mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          No se encontraron registros...
        </div>
      )}

      {AccionABMC !== "L" && (
        <ProductosRegistro AccionABMC={AccionABMC} Item={Item} Grabar={Grabar} Volver={Volver} />
      )}
    </div>
  );
}

export { Productos };
