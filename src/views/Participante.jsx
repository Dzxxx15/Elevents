function Participante() {

  return (
    <>
       <>
      <div className="cadastro-container">
        <form className="cadastro-form">
          <div className="form-left">
            <label>
              Nome* 
              <input type="text" required />
            </label>

            <label>
              Sobrenome* 
              <input type="text" required />
            </label>

            <label>
              E-mail* 
              <input type="email" required />
            </label>

            <label>
              Senha* 
              <input type="password" required />
            </label>

            <label>
              Confirmar senha* 
              <input type="password" required />
            </label>
          </div>

          <div className="form-right">
            <div className="avatar-placeholder"></div>

            <label className="termos">
              <input type="checkbox" required />
              Eu li e concordo com os <strong>Termos de Uso</strong> e{" "}
              <strong>Política de Privacidade</strong>
            </label>

            <button type="submit">Iniciar</button>
          </div>
        </form>
      </div>

      <footer>
        <p>&copy; Elevents</p>
      </footer>
    </>
    </>
  )
}

export default Participante