import React from 'react'
import PropTypes from 'prop-types'
import CategoryView from './CategoryView'

const Category = (props) => {
  const { categoryName, id } = props
  return <CategoryView />
}

Category.propTypes = {}

export default Category
