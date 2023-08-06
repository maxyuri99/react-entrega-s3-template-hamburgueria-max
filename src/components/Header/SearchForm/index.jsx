import { MdSearch } from "react-icons/md"
import { useState } from "react"
import styles from "./style.module.scss"

export const SearchForm = ({ setSearch }) => {
    const [value, setValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSearch(value)
        setValue("")
    }

    return (
        <form onSubmit={submit} className={styles.inptForm}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Digitar Pesquisa"
            />
            <button type="submit">
                <MdSearch size={21} className="paragraph colorWhite" />
            </button>
        </form>
    )
}