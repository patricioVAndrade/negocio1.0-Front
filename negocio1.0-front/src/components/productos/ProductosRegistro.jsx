import React from "react";

import { useForm } from "react-hook-form";



export default function ProductosRegistro({
  AccionABMC,
  Item,
  Grabar,
  Volver,
}) {

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isValid, isSubmitted },
      } = useForm({ values: Item });
    
    const onSubmit = (data) => {
        Grabar(data);
    };
  if (!Item) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

                {/* campo Marca */}
        <div className="row">
        <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="Marca">
            Marca<span className="text-danger">*</span>:
            </label>
        </div>
        <div className="col-sm-8 col-md-6">
            <select
            {...register("Marca", {
                required: { value: true, message: "Marca es requerido" },
            })}
            autoFocus
            className={
                "form-control " + (errors?.Marca ? "is-invalid" : "")
            }
            >
            <option value="">Seleccionar Marca</option>
            <option value="Marca1">Marca1</option>
            <option value="Marca2">Marca2</option>
            <option value="Marca3">Marca3</option>
            {/* Agrega aquí más opciones de marcas desde la base de datos */}
            </select>
            {errors?.Marca && touchedFields.Marca && (
            <div className="invalid-feedback">
                {errors?.Marca?.message}
            </div>
            )}
        </div>
        </div>

           {/* campo nombre */}
         <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Nombre", {
                  required: { value: true, message: "Nombre es requerido" },
                  minLength: {
                    value: 4,
                    message: "Nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Nombre debe tener como máximo 40 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.Nombre ? "is-invalid" : "")
                }
              />
              {errors?.Nombre && touchedFields.Nombre && (
                <div className="invalid-feedback">
                  {errors?.Nombre?.message}
                </div>
              )}
            </div>
          </div>



                {/* campo Descripcion */}
        <div className="row">
        <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="Descripcion">
            Descripcion<span className="text-danger">*</span>:
            </label>
        </div>
        <div className="col-sm-8 col-md-6">
            <input
            type="text"
            {...register("Descripcion", {
                maxLength: {
                value: 100,
                message: "Descripcion debe tener como máximo 100 caracteres",
                },
            })}
            autoFocus
            className={
                "form-control " + (errors?.Descripcion ? "is-invalid" : "")
            }
            />
            {errors?.Descripcion && touchedFields.Descripcion && (
            <div className="invalid-feedback">
                {errors?.Descripcion?.message}
            </div>
            )}
        </div>
        </div>

      {/* campo Codigo */}
        <div className="row">
        <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="Codigo">
            Codigo<span className="text-danger">*</span>:
            </label>
        </div>
        <div className="col-sm-8 col-md-6">
            <input
            type="text"
            name="Codigo"
            value={Item.Codigo}
            pattern="[0-9]{13}"
            title="El código debe contener exactamente 13 dígitos numéricos"
            maxLength="13"
            className="form-control"
            />
        </div>
        </div>




           {/* campo Precio */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Precio<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" 
                step=".01"
                name="Precio"
                value={Item.Precio}
                className= "form-control" 
              />
            </div>
          </div>

          {/* campo Activo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Activo"
                className="form-control"
                value = {Item?.Activo}
                disabled
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
            </div>
          </div>




        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>


        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
        <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
        </div>
        )}


      </div>
    </form>
  );
}
