import gql from "graphql-tag";

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
    $_id: String!
    $nombre: String!
    $apellido: String!
    $correo: String!
    $celular: String!
    $estado: Enum_EstadoUsuario!
  ) {
    editarUsuario(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      correo: $correo
      celular: $celular
      estado: $estado
    ) {
      _id
      nombre
      apellido
      correo
      estado
      celular
      rol
    }
  }
`;

export { EDITAR_USUARIO };