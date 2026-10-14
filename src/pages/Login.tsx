import FormularioLogin from "../components/organisms/FormularioLogin";

function Login() {
    return (
        <div className="container mt-4">

            <div className="row justify-content-center">

                <div className="col-12 col-md-6">

                    <div className="card shadow-sm p-3 mb-5 bg-body rounded">

                        <h2 className="mb-4">Iniciar sesión</h2>
                        
                        <FormularioLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;