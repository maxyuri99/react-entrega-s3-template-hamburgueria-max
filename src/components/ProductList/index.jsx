import { ProductCard } from "./ProductCard"
import styles from "./style.module.scss"

export const ProductList = ({ productList, addCard }) => {
   return (
      <section className="container">
         <div className={styles.flexBox}>
            { productList.length > 0 ? (
               <ul className={styles.productList}>
               {productList.map((product) => (
                  <ProductCard key={product.id} product={product} addCard={addCard} />
               ))}
            </ul>
            ) : (
               <p className="paragraph big bold">Nenhum item foi encontrado.</p>
            )}
         </div>
      </section>
   )
}
