import logo from "../assets/images/open-delta.jpg"
import CartWindget from "./CartWidget";

const NavBar =() => {
    return(
      
      <div className="container-fuid">
         <div className= "row bd-black">
            <div className="col">
            <div className="col-md text-center">
               <a href="#">
                  <img src= {logo}alt="OPEN" width={100} />
                  <p style={{ color: 'black' }}>DetoxiK</p></a>

         </div>
         <div className="col d-flex align-items-center justify-content-end">
         <CartWindget/>
  </div>
            <div className="row">
                <div className="col my-5">
                <ul className="nav justify-content-center">
                      <li className="nav-item">
                         <a className="nav-link text-black" href="#"><b>HOME</b></a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link text-black" href="#">ROMANTIC PANTIES</a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link text-black" href="#">BRA & PANTY SETS</a>
                      </li>
                     <li className="nav-item">
                         <a className="nav-link text-black" href="#">NIGHT COLLECTION</a>
                      </li>
                     <li className="nav-item">
                         <a className="nav-link text-black" href="#">HOMEWEAR & ACTIVE</a>
                      </li>
                     <li className="nav-item">
                         <a className="nav-link text-black" href="#">GIFT CARD</a>
                      </li>

               </ul>











         </div>



     </div>
</div></div></div>
    )
}

export default NavBar;