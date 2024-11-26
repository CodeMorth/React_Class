import { BasicButton } from "../Atoms/BasicButton";
import { BasicInput } from "../Molecules/BasicInput";

export const Form = () => {
  return (
    <form className="form_contenedor">
      <h2 className="form_titulo">Crud Producto</h2>
      <select className="form_select" name="" id="">
        <option value="">Seleccione una opción</option>
        <option value="">Opción 1</option>
        <option value="">Opción 2</option>
        <option value="">Opción 3</option>
      </select>
      <div className="form_input_contenedor">
        <div className="input_contendor_izquierda">
          <BasicInput labelTitle="Nombre" />
          <BasicInput labelTitle="Descripción" />
          <BasicInput labelTitle="Precio" />
          <BasicInput labelTitle="Cantidad" />
          <BasicInput labelTitle="Marca" />
          <BasicInput labelTitle="Color" />
        </div>
        <div className="input_contendor_derecha">
          <BasicInput labelTitle="Categoria" />
          <BasicInput labelTitle="Estado" />
          <BasicInput labelTitle="Fecha de creación" />
          <BasicInput labelTitle="Fecha de modificación" />
          <BasicInput labelTitle="Fecha de vencimiento" />
          <BasicInput labelTitle="Imagen" />
        </div>
      </div>
      <div className="form_botones_contenedor">
        <BasicButton content="Actualizar" />
        <BasicButton content="Modificar" />
        <BasicButton content="Agregar" />
      </div>
    </form>
  );
};
