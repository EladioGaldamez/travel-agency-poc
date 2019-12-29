import React from 'react'

class NavigationBar extends React.Component {
  render() {
    const image = 'https://images.unsplash.com/photo-1567324216289-97cc4134f626?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
    const author = 'https://unsplash.com/@dane_aw'
    return (
      <div className="navigation-bar">
        <span className="navigation-brand">travel.</span>
  
        <div className="navigation-menu">
          <a href="/">Discover</a>
          <a href="/">Blog</a>
        </div>

        <div className="navigation-username">
          <a href={author} onClick={(e) => e.preventDefault()}>
            <img src={image} alt={author}></img>
          </a>
        </div>
      </div>
    )
  }
}

export default NavigationBar
