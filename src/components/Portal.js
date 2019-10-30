import { Component } from 'react'
import { createPortal } from 'react-dom'

class Portal extends Component {
  componentDidMount() {
    const { selector } = this.props
    this.element = document.querySelector(selector)
    this.forceUpdate()
  }

  render() {
    const { children } = this.props
    if (!this.element) return null
    return createPortal(children, this.element)
  }
}

export default Portal
