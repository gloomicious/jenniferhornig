import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Layout.scss"
import ThemeToggle from "./../theme-toggle/ThemeToggle"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setCanRender(true)
  }, [])

    return (
      <ThemeContext.Consumer>
        {theme => (
          <>
            {canRender &&
              (theme.name === "dark"
                ? document.body.classList.add("dark")
                : document.body.classList.remove("dark"))}
            <div className="content-wrapper">
              <header>
                <ThemeToggle theme={theme} />
              </header>
              <main >{children}</main>
              <Footer />
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
