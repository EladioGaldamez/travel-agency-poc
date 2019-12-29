import React from 'react'
import { connect } from 'react-redux'
import { tns } from 'tiny-slider/src/tiny-slider'
import { IconContext } from 'react-icons'
import { FaSearch } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { setSelectedInfo } from '../../state/actions'
import Card from '../Card'
import sliderConfig from '../../data/slider-config.json'
import categories from '../../data/categories.json'
import experiences from '../../data/experiences.json'
import housings from '../../data/housings.json'
import places from '../../data/places.json'

class DataSection extends React.Component {
  _slider = null

  constructor(props) {
    super(props)

    this.state = {
      category: 'experiences',
      query: null,
      data: experiences
    }

    this.updateSlider = this.updateSlider.bind(this)
    this.onChangeCategory = this.onChangeCategory.bind(this)
    this.onFilterData = this.onFilterData.bind(this)
  }

  componentDidMount() {
    this._slider = tns(sliderConfig)
  }

  updateSlider() {
    this._slider.rebuild()
  }

  onFilterData(e) {
    e.preventDefault()
    const { query } = this.state
    const all = [ ...experiences, ...places, ...housings ]
    const data = query.length > 0 ? all.filter(info => info.name.includes(query) || info.location.includes(query)) : experiences

    this.setState({ data }, this.updateSlider)
  }

  onChangeCategory(category) {
    let data = []

    switch (category) {
      case 'experiences':
        data = experiences
        break;
      case 'housings':
        data = housings
        break;
      case 'places':
        data = places
        break;
      default:
        data = []
        break;
    }

    this.setState({ data, category, query: null }, this.updateSlider)
  }

  render() {
    const { category, data, query } = this.state

    return (
      <div className="data-container">

        <form className="search-form" onSubmit={this.onFilterData}>
          <IconContext.Provider value={{ color: '#000000', size: "16px" }}>
            <label htmlFor="query"><FaSearch /></label>
          </IconContext.Provider>
          <input type="text" placeholder="Search" id="query" name="query" defaultValue={query} onChange={ e => this.setState({ query: e.target.value }) } />
        </form>

        <h1>Discover</h1>

        <div className="categories">
          {
            categories.map((cat, index) => (
              <a className={`category${category === cat.id ? ' active' : ''}`} href="/" onClick={(e) => {e.preventDefault(); this.onChangeCategory(cat.id)}} key={index}>{cat.name}</a>
            ))
          }
        </div>

        <div className="data-wrapper">
            {data.map((info, index) => (
              <Card info={info} key={index} onClick={() => this.props.setSelectedInfo(info)} />
            ))}
        </div>

        <div className="data-arrows">
          <IconContext.Provider value={{ color: '#9b9b9b', size: "24px" }}>
            <div className="arrow-icon" id="prev-data"><FiChevronLeft /></div>
            <div className="arrow-icon" id="next-data"><FiChevronRight /></div>
          </IconContext.Provider>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { info } = state
  return {
    ...info,
    ...props
  }
}

const mapDispatchToProps = {
  setSelectedInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSection)