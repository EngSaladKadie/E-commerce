import { Link } from "react-router-dom"
import logo  from '../asset/logo.jpeg'

function Header() {
  return (
    <header>
        <div>
            {/* logo */}
            <div>
            
               <Link> <img src={logo} alt="" height={66} width={66} /></Link> 
              
            </div>
        </div>
    </header>
  )
}

export default Header