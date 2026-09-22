function Livro(props) {
  return (
    <div className="livro">
      <p>
        Título: {props.livro.titulo}
      </p>

      <p>
        Autor: {props.livro.autor}
      </p>

      <p>
        Ano: {props.livro.ano}
      </p>

      <p>
        Gênero: {props.livro.genero}
      </p>
    </div>
  )
}

export default Livro