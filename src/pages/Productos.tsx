import CardProducto from "../components/molecules/CardProductos";

function Productos(){
    return(
        <div>
            <h1>Productos</h1>

            <div className="d-flex gap-3">
                <CardProducto
                id={1}
                titulo="NoteBook"
                descripcion="NoteBook ideal para estudiar "
                precio={10000}
                imagen="public/img/notebook-img.jpg"
                />

                 <CardProducto
                 id={2}
                titulo="Mouse"
                descripcion="ideal para el NoteBook "
                precio={10000}
                imagen="public/img/mause-img.jpg"
                />

                 <CardProducto
                 id={3}
                titulo="Teclado"
                descripcion="ideal para el NoteBook "
                precio={20000}
                imagen="/img/teclado-img.jpg"
                />

                 <CardProducto
                 id={4}
                titulo="Audufono"
                descripcion="ideal para el NoteBook "
                precio={10000}
                imagen="/img/audifono.jpg"
                />

                
            </div>

        </div>
    )
}
export default Productos