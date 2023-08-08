import * as React from "react"
import { Link } from "gatsby"
import { button } from "./button.module.css"

const Button = ({ text, linkTo }) => {
  return (
    <Link to={linkTo} className={button}>
      {text}
    </Link>
  )
}

export default Button
