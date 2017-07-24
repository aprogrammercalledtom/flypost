import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { asFormField, withImageUpload } from '../containers'
import { translate } from '../services/i18n'

class FormImageUploader extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    input: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    uploadedImages: PropTypes.array.isRequired,
    uploadImages: PropTypes.func.isRequired,
  }

  onFilesChange(event) {
    const files = event.target.files

    if (files.length === 0) {
      return
    }

    const formData = new FormData()

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i]
      formData.append('images', file, file.name)
    }

    this.props.uploadImages(formData)
  }

  onUploadClick(event) {
    event.preventDefault()

    this.refs.uploadButton.click()
  }

  renderLoadingIndicator() {
    if (this.props.isLoading) {
      return (
        <p className="image-uploader__loading-indicator">
          { translate('common.loading') }
        </p>
      )
    }

    return null
  }

  renderUploadedImages() {
    return this.props.uploadedImages.map((image, index) => {
      return (
        <img
          className="image-uploader__image"
          key={index}
          src={image.smallImageUrl}
        />
      )
    })
  }

  renderUploadButton() {
    return (
      <div className="image-uploader__footer">
        <input
          multiple="multiple"
          ref="uploadButton"
          style={ { display: 'none' } }
          type="file"
          onChange={this.onFilesChange}
        />
        <button
          className="button button--green"
          disabled={this.props.disabled || this.props.isLoading}
          onClick={this.onUploadClick}
        >
          { translate('components.formImageUploader.uploadButton') }
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="image-uploader">
        { this.renderLoadingIndicator() }
        <div className="image-uploader__image-list">
          { this.renderUploadedImages() }
        </div>
        { this.renderUploadButton() }
      </div>
    )
  }

  constructor(props) {
    super(props)

    this.state = {
      images: props.input.value || [],
    }

    this.onFilesChange = this.onFilesChange.bind(this)
    this.onUploadClick = this.onUploadClick.bind(this)
  }
}

export default asFormField(withImageUpload(FormImageUploader))
