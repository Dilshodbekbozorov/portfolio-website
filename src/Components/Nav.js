import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Nav = () => {
  return(
      <nav>
        <div className="nav__content">
          <div className="logo">
            <Link to="/">SamDev</Link>
          </div>
          <label htmlFor="check" className="checkbox">
            <i class="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" />  
          <ul>
            <li><Link to='/' >About</Link></li>
            <li><Link to='/portfolio' >Portfolio</Link></li>
            <li><Link to='/contact' >Contact</Link></li>
            <li><Link to='/admin' >Admin</Link></li>
            <li><a href='#!' id="darkBtn" >  
              <select name="" id="">
                <option value="">en</option>
                <option value="">ru</option>
                <option value="">uz</option>
              </select>
            </a></li>
            <li><a href="#!" id="darkBtn">
              {/* <i class="ri-sun-line"></i> */}
              <i class="ri-moon-line"></i>
            </a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;

