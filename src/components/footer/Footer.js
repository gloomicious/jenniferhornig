import React from "react"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} — All Rights Reserved
    </footer>
  )
}
