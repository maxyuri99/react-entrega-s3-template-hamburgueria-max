export const ProductCard = ({ product, addCard }) => {
    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h3 className="title">{product.name}</h3>
                <span className="paragraph small colorGray3">{product.category}</span>
                <span className="paragraph bold colorGreen">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => addCard(product)}>Adicionar</button>
            </div>
        </li>
    )
}