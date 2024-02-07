import React from 'react'
import PropTypes from 'prop-types'
import { useBem } from '@/services/hooks/useBem'
import { cn } from '@/lib/utils'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  const { title, description } = props
  const bem = useBem('top')
  return (
    <section className={cn(bem.b('favorite'), 'w-full mt-6 mb-16')}>
      <div
        className={cn(
          bem.be('favorite', 'heading'),
          'mb-4 flex flex-col md:flex-row justify-between',
        )}
      >
        <div className="">
          {title && (
            <h3 className="text-2xl font-bold uppercase mb-1 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text [text-shadow:_2px_2px_0_rgb(0_0_0_/_12%)]">
              {title}
            </h3>
          )}
          {description && <p className="text-sm mb-1">{description}</p>}
        </div>
        <Link
          to={'/khoa-hoc-noi-bat'}
          className="hover:text-gray-400 whitespace-nowrap"
        >
          Xem thêm &#187;
        </Link>
      </div>
      <div
        className={cn(
          bem.be('favorite', 'list'),
          'grid grid-cols-12 items-center justify-center gap-2 md:gap-4',
        )}
      >
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ProductItem />
        </div>
      </div>
    </section>
  )
}

ProductList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ProductList
