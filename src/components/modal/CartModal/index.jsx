import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import { useOutclick } from "../../../hooks/useOutclick"
import { useKeydown } from "../../../hooks/useKeydown"
import styles from "./style.module.scss"
import { useEffect, useState } from "react"

export const CartModal = ({ setVisible, cartList, removeCart, addCard }) => {
   const [repetitionCounts, setRepetitionCounts] = useState(new Map())

   useEffect(() => {
      const countsMap = new Map()
      cartList.forEach(product => {
         countsMap.set(product.id, (countsMap.get(product.id) || 0) + 1)
      })

      setRepetitionCounts(countsMap)
   }, [cartList])

   const ref = useOutclick(() => {
      setVisible(false)
   })

   useKeydown("Escape", () => {
      setVisible(false)
   })

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   const verifyList = Array.from(new Set(cartList))

   return (
      <div className={styles.overlayBox} role="dialog">
         <div ref={ref} className={styles.modalBox}>
            <div>
               <h2 className="title colorWhite">Carrinho de compras</h2>
               <button
                  aria-label="close"
                  title="Fechar"
                  onClick={() => setVisible(false)}
               >
                  <MdClose size={24} className={styles.closeButton} />
               </button>
            </div>
            <ul>
               {verifyList.map((product) => (
                  <CartItemCard
                     key={product.id}
                     product={product}
                     removeCart={removeCart}
                     addCard={addCard}
                     repetitionCount={repetitionCounts.get(product.id)}
                  />
               ))}
            </ul>
            <div>
               <div>
                  <span className="paragraph bold">Total</span>
                  <span className="paragraph bold colorGray3">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => removeCart(cartList, "all")}>Remover todos</button>
            </div>
         </div>
      </div>
   )
}
