import { h } from 'preact'

const Header = () => (
  <header className="header-container">
      <h1 className="lighten">Welcome to M~A~T~S</h1>
      <h6 className="lighten">Home of Hamish Clulee</h6>
      <div className="float-header-button">
          <button className="btn btn-floating btn-large is-secondary"><i className="material-icons">cloud</i></button>
      </div>
  </header>  
)

export default Header
