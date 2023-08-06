import styles from "./style.module.scss"
import Logo from "../../assets/Logo.svg"
import { MdShoppingCart } from "react-icons/md"
import { SearchForm } from "./SearchForm"

export const Header = ({ setSearch, cartList, setVisible }) => {

   return (
      <header className={styles.header}>
         <div className="container">
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.flexBox}>
               <button className={styles.buttonCart}>
                  <MdShoppingCart size={38} className="paragraph colorGray3" 
                  onClick={() => setVisible(true)}
                  />
                  <div>
                     <span className="paragraph big colorWhite">{cartList.length}</span>
                  </div>
               </button>
               <SearchForm setSearch={setSearch} />
            </div>
         </div>
      </header>
   )
}
