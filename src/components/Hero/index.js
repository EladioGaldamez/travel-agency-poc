import React from 'react'
import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      previewIndex: 0,
      defaultImages: [
        "https://images.unsplash.com/photo-1532443859453-b840b8aad16e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80",
        "https://images.unsplash.com/photo-1508035460735-91088c495500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "https://images.unsplash.com/photo-1567644495235-12e8d45d35f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      ]
    }

    this.getImages = this.getImages.bind(this)
    this.toggleImage = this.toggleImage.bind(this)
    this.renderHeroImages = this.renderHeroImages.bind(this)
  }

  getImages() {
    const { defaultImages } = this.state
    const { info } = this.props
    return info ? info.images : defaultImages
  }

  toggleImage(direction = 'next') {
    const { previewIndex } = this.state
    const images = this.getImages()
    let newIndex = direction === 'next' ? previewIndex + 1 : previewIndex - 1
    newIndex = (newIndex < 0 ? images.length - 1 : (newIndex >= images.length ? 0 : newIndex))
    this.setState({ previewIndex: newIndex })
  }

  renderHeroImages() {
    const { previewIndex } = this.state
    const currentPosition = previewIndex + 1
    const images = this.getImages()
    const progress = (100 / images.length) * currentPosition 

    return (
      <div className="hero-carousel">
        <img src={images[previewIndex]} alt="" />

        <div className="carousel-toggler">
          <div className="carousel-indicator">
            <span>{currentPosition > 9 ? currentPosition : `0${currentPosition}`}</span>
            <div className="progress-bar">
              <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{images.length > 9 ? images.length : `0${images.length}`}</span>

            <IconContext.Provider value={{ color: '#9b9b9b', size: "24px" }}>
              <div className="arrow-icon" onClick={() => this.toggleImage('prev')}><FiChevronLeft /></div>
              <div className="arrow-icon" onClick={() => this.toggleImage('next')}><FiChevronRight /></div>
            </IconContext.Provider>

          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="hero">
        {
          this.renderHeroImages()
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { info } = state
  return {
    ...info,
    props
  }
}

export default connect(mapStateToProps)(Hero)