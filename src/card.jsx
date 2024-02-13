import React from "react";

export const Card = () => {
    const [data, setData]=React.useState(0)
    React.useEffect(() => {
        const changeItem = (e) => {
            e.target.style.color = "red"
        }
        window.addEventListener("click", changeItem)

        return ()=>{
            window.removeEventListener("click" ,changeItem)
        }

    }, [])
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}