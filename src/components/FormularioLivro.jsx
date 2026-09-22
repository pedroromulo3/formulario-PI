import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
  const [nomeLivro, setNomeLivro] = useState('')
  const [nomeAutor, setNomeAutor] = useState('')
  const [anoPublicacao, setAnoPublicacao] = useState('')
  const [tipoLivro, setTipoLivro] = useState('')

  const [listaLivros, setListaLivros] = useState([])

  function adicionarLivro(event) {
    event.preventDefault()

    const novoLivro = {
      id: Date.now(),
      titulo: nomeLivro,
      autor: nomeAutor,
      ano: anoPublicacao,
      genero: tipoLivro
    }

    setListaLivros([...listaLivros, novoLivro])

    setNomeLivro('')
    setNomeAutor('')
    setAnoPublicacao('')
    setTipoLivro('')
  }

  return (
    <div className="formulario-livro">
      <h1>Cadastro de Livros</h1>

      <form onSubmit={adicionarLivro}>
        <CampoTexto
          label="Nome do livro"
          name="nomeLivro"
          type="text"
          value={nomeLivro}
          onChange={(event) => setNomeLivro(event.target.value)}
        />

        <CampoTexto
          label="Nome do autor"
          name="nomeAutor"
          type="text"
          value={nomeAutor}
          onChange={(event) => setNomeAutor(event.target.value)}
        />

        <CampoTexto
          label="Ano de publicação"
          name="anoPublicacao"
          type="text"
          value={anoPublicacao}
          onChange={(event) => setAnoPublicacao(event.target.value)}
        />

        <CampoTexto
          label="Gênero do livro"
          name="tipoLivro"
          type="text"
          value={tipoLivro}
          onChange={(event) => setTipoLivro(event.target.value)}
        />

        <button type="submit">Adicionar livro</button>
      </form>

      <div className="lista-livros">
        <h2>Lista de livros</h2>

        {listaLivros.length === 0 ? (
          <p>Nenhum livro foi adicionado.</p>
        ) : (
          listaLivros.map((livro) => (
            <Livro
              key={livro.id}
              livro={livro}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default FormularioLivro