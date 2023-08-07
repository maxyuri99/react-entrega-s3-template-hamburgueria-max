import { useEffect, useState } from "react"
import { CartModal } from "../../components/modal/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { burguerApi } from "../../services/api"
import { toast } from "react-toastify"
import { LoadingList } from "../../components/LoadingList"

export const HomePage = () => {
   const [isVisible, setVisible] = useState(false)
   const [search, setSearch] = useState("")
   const [products, setProducts] = useState([])
   const localCartList = localStorage.getItem("@CARTLIST")

   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : []
   )
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
   }, [cartList])

   const addCard = (addingCard) => {
      setCartList([...cartList, addingCard])
      toast.success("Item adicionado com sucesso.")
   }

   const removeCart = (cartID, typeClick) => {
      if (typeClick === "all") {
         const newCartList = cartList.filter((cart) => cart.id === cartID.id)
         setCartList(newCartList)

         if (cartID.length !== 0) {
            toast.success("Itens removidos com sucesso.")
         }

      } else {
         const indexOfItemToRemove = cartList.findIndex(cart => cart.id === cartID.id)

         if (indexOfItemToRemove !== -1) {
            const newCartList = [...cartList]

            newCartList.splice(indexOfItemToRemove, 1)
            setCartList(newCartList)

            if (cartID.length !== 0) {
               toast.success("Item removido com sucesso.")
            }
         }

      }
   }

   useEffect(() => {
      const getBurgers = async () => {
         try {
            setLoading(true)
            const { data } = await burguerApi.get("/products")
            setProducts(data)
         } catch (error) {
            toast.error(error)
         } finally {
            setLoading(false)
         }
      }
      getBurgers()
   }, [])

   const productResult = products.filter(product => product.name.toLowerCase().includes(search.toLocaleLowerCase()) || product.category.toLowerCase().includes(search.toLocaleLowerCase()))

   const getProductList = (search, productResult, products) => {
      if (search) {
         return productResult
      } else {
         return products
      }
   }

   const productList = getProductList(search, productResult, products)

   return (
      <>
         <Header
            setSearch={setSearch}
            cartList={cartList}
            setVisible={setVisible}
         />
         <main>
            {loading ? (
               <LoadingList />
            ) : (
               <ProductList productList={productList} addCard={addCard} />
            )}

            {isVisible ? (
               <CartModal
                  cartList={cartList}
                  removeCart={removeCart}
                  setVisible={setVisible}
                  addCard={addCard}
               />
            ) : null}

         </main>
      </>
   )
}
