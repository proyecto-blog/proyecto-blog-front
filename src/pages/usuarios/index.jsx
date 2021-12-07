import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "../../graphql/usuarios/queries";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Enum_Rol, Enum_EstadoUsuario } from "../../utils/enum";

const IndexUsuarios = () => {

    const { data, error, loading } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);

    useEffect(() => {
        if (error) {
            toast.error('Error consultando los usuarios');
        }
    }, [error]);

    if (loading) return <div>Cargando la información...</div>;
    
    return (
        <div>            
            Datos Usuarios:
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Número móvil</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Usuarios.map((u) => {
                        return (
                            <tr key={u._id}>
                                <td>{u.nombre}</td>
                                <td>{u.apellido}</td>
                                <td>{u.correo}</td>
                                <td>{Enum_Rol[u.rol]}</td>
                                <td>{Enum_EstadoUsuario[u.estado]}</td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>

        </div>
    )
};

export default IndexUsuarios;