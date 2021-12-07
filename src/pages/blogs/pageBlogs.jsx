const ListarBlogs = () => {
  return (
    <div>
      Blogs creados:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Categoria</th>
            <th>Titulo</th>
            <th>Slug</th>            
            <th>Fecha de creacion</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default ListarBlogs;