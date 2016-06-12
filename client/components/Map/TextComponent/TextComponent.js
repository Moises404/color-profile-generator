import React from 'react'
import cn from 'classnames'
import Vowels from '../../../fixtures/vowel-sound-chart'

// , { PropTypes }

class TextComponent extends React.Component {
  static displayName = 'TextComponent'

  // static propTypes = {
  //   'onClick': PropTypes.func,
  //   'completed': PropTypes.bool,
  //   'text': PropTypes.string,
  //   'post': PropTypes.func,
  //   'postId': PropTypes.number,
  //   'currentPostId': PropTypes.any
  // }


  render() {
    console.log(Vowels)
    // const { onClick, completed,
    //   text, post, postId, currentPostId } = this.props

    const TextClasses = cn('Text-wrapper', {
      'complete': false
    })

    // console.log('POST-LIST__________')
    // console.log('POST: ', post)
    // console.log('POST-ID: ', postId)
    // console.log('CURRENT-POST-ID: ', currentPostId)
    // console.log(this.props)

    // let isSelected = false

    // if (currentPostId === postId) {
    //   isSelected = true
    // }


    return (
      <div className={TextClasses}>
        <span className="Text-content">{`Text`}</span>
      </div>
    )
  }
}

export default TextComponent
