import React, {PropTypes} from 'react'

class Patch extends React.Component {
  static displayName = 'Patch'

  static propTypes = {
    'layoutActions': PropTypes.object,
    'layout': PropTypes.object,
    'client': PropTypes.object,
    'db': PropTypes.object,
  }

  state = {
    patchArray: [],
    rSET: 20
  }

  componentDidMount() {
    this.generateValues()
  }

  generateValues() {
    const { patchArray } = this.state
    for (let i = 0; i < 16; ++i) {
      patchArray.push(i)
    }
  }

  render() {
    const { patchArray } = this.state

    const red = patchArray.map((item, index) => {
      const r = index * index
      const g = 0
      const b = 0
      const rgb = `rgb(${r},${g},${b})`
      const patchStyle = {background: rgb}
      return <div className="Patch" key={index} style={patchStyle}>{index}RGB</div>
    })


    const green = patchArray.map((item, index) => {
      const r = index * index
      const g = 0
      const b = 0
      const rgb = `rgb(${r},${g},${b})`
      const patchStyle = {background: rgb}
      return <div className="Patch" key={index} style={patchStyle}>{index}RGB</div>
    })

    const blue = patchArray.map((item, index) => {
      const r = index * index
      const g = 0
      const b = 0
      const rgb = `rgb(${r},${g},${b})`
      const patchStyle = {background: rgb}
      return <div className="Patch" key={index} style={patchStyle}>{index}RGB</div>
    })

    return (
      <div className="Patches" width="100%" height="500px">
        {red}
        {green}
        {blue}
        {red}
        {green}
        {blue}
        {red}
        {green}
        {blue}
      </div>
    )
  }
}

export default Patch
