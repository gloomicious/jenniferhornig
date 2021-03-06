import React from "react"
import "./IconLinks.scss"
import Icon from "../icon/Icon"

export default function IconLinks() {
  const items = [
    { link: "https://github.com/gloomicious", icon: "GitHub" },
    { link: "https://dribbble.com/jenniferhornig", icon: "Dribbble" },
    { link: "https://gloomicious.com", icon: "Camera" },
    { link: "https://www.linkedin.com/in/jenniferhornig", icon: "Linkedin" },
    { link: "mailto:hello@jenniferhornig.com", icon: "Mail" },
  ]
  return (
    <div className="icon-links">
      {items.map((item, index) => (
        <a href={item.link} className="icon-links__item" key={index}>
          <Icon name={item.icon} />
        </a>
      ))}
    </div>
  )
}
