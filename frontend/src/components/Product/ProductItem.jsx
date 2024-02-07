import React from 'react'
import PropTypes from 'prop-types'
import { useBem } from '@/services/hooks/useBem'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { MdStar, MdStarBorder } from 'react-icons/md'

const ProductItem = (props) => {
  const { size } = props
  const bem = useBem('product')
  return (
    <Link to={'/slug-product'}>
      <div
        className={cn(
          bem.e('item'),
            'hover:text-sky-600 shadow-lg rounded-xl overflow-hidden flex',
          size=='large' ? 'flex-row' : 'flex-col'
        )}
      >
        <div className="relative w-full h-40">
          <img
            src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg"
            alt="thumbnail product"
            title="Ghép ảnh chuyên nghiệp với Photoshop"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-t-xl hover:opacity-60"
          />
        </div>
        <div className={cn(bem.em('item', 'detail'), 'p-2')}>
          <h3
            className={cn(
              bem.em('item', 'title'),
              'text-xs md:text-lg lg:text-xl font-semibold mb-2',
            )}
          >
            Ghép ảnh chuyên nghiệp với Photoshop
          </h3>
          <div
            className={cn(
              bem.em('detail', 'info'),
              'flex items-center justify-between gap-1',
            )}
          >
            <p className="text-xs">Tống Bá Quang Anh</p>
            <p className="text-sm line-through text-gray-400">
              700.000<sup>đ</sup>
            </p>
          </div>
          <div
            className={cn(
              bem.em('detail', 'price'),
              'flex flex-col-reverse md:flex-row items-center justify-between',
            )}
          >
            <div className="flex items-center gap-px">
              <MdStar color="orange" />
              <MdStar color="orange" />
              <MdStar color="orange" />
              <MdStar color="orange" />
              <MdStarBorder color="black" />
              <p>(152)</p>
            </div>
            <p className="font-bold text-xl text-emerald-600">
              299.000<sup className="text-xs">đ</sup>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

ProductItem.propTypes = {}

export default ProductItem
