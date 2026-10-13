import FormularioContacto from "../components/organisms/FormularioContacto"
function Contactos(){
    return(
        <div className="container mt-4">

            <div className="row justify-content-center">

                <div className="col-12 col-md-6">

                    <div className="card shadow-sm p-3 mb-5 bg-body rounded">

                        <h2 className="mb-4">Formlario de contacto</h2>

                        <FormularioContacto/>


                    </div>


                </div>


            </div>

        </div>
    );
}
export default Contactos;