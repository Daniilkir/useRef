import { forwardRef } from "react"



const Button = forwardRef(({text}, ref) => {
    return(
        <div>
            <button ref={ref}>{text}</button>
        </div>
    )
})


export default Button



