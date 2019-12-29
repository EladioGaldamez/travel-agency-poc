import React from 'react'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'

class Card extends React.Component {
  render() {
    const { info } = this.props
    const style = {
      backgroundImage: `url(${info.images[0]})`
    }

    return (
      <div className="data-card" onClick={this.props.onClick}>
        <div className="data-content" style={style}>
          <div className="data-info">
            <h3>{info.name}</h3>
            <div className="location">
              <IconContext.Provider value={{ color: '#9b9b9b', size: '14px' }}>
                <i><FaMapMarkerAlt /></i>
              </IconContext.Provider>
              <span>{info.location}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card