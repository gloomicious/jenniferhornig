import React from "react"
import "./Section.scss"
import Button from "../button/Button"

export default function Section({
  title,
  subtitle,
  text,
  buttonLabel,
  buttonLink,
}) {
  return (
    <section className="section">
      {title && <h1 className="section__title">{title}</h1>}
      {subtitle && <h3 className="section__subtitle">{subtitle}</h3>}
      {text && <p>{text}</p>}
      {buttonLabel && (
        <Button
          label={buttonLabel}
          link={buttonLink}
          className="section__button"
        />
      )}
    </section>
  )
}
