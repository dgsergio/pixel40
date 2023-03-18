import Modulo from "@/components/Modulo";
import classes from "./CursoModulos.module.css";
import MODULOS_LIST from "./MODULOS_LIST";

const CursoModulos = () => {
  return (
    <section className={`${classes.section} container`}>
      <h3>Lista de Contenido por Módulos</h3>
      <div className={classes.modulos}>
        {MODULOS_LIST.map( e => <Modulo key={e.id} id={e.id} title={e.title} lectures={e.lectures}/> )}
      </div>
    </section>
  );
};

export default CursoModulos;
