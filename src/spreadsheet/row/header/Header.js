import './Header.scss'

const Header = ({ title = '' }) => {
  return (
    <div className="cell header">
      { title }
    </div>
  )
}

export default Header
