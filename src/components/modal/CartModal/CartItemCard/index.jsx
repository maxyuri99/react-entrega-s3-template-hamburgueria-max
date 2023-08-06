import { MdDelete, MdAdd, MdRemove } from "react-icons/md"
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeCart, addCard, repetitionCount }) => {
   return (
      <li className={styles.flexBox}>
         <div>
            <div>
               <img src={product.img} alt={product.name} />
            </div>
            <h3 className="title">{product.name}</h3>
         </div>
         <div>
            <button
               aria-label="delete"
               title="Remover item"
               onClick={() => removeCart(product)}
            >
               <MdDelete size={24} className={styles.buttonRemove} />
            </button>
            <div>
               <button onClick={() => removeCart(product)}>
                  <MdRemove size={15} />
               </button>
               <p>{repetitionCount}</p>
               <button onClick={() => addCard(product)}>
                  <MdAdd size={15} />
               </button>
            </div>
         </div>
      </li>
   )
}
