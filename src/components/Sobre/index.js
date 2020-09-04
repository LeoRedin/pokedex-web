import React from 'react'

function Sobre() {
  return (
    <form>
      <label htmlFor="title-input">Titulo</label>
      <input id="title-input" />

      <label htmlFor="content-input">Conteudo</label>
      <textarea id="content-input" />

      <label htmlFor="tags-input">Tags</label>
      <textarea id="tags-input" />

      <button type="submit">Submit</button>
    </form>
  )
}

export {Sobre}
