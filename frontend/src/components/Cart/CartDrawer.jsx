import { cn } from '@/lib/utils'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const CartDrawer = ({ isShowCart, onShowCart }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 z-10 w-full min-h-screen bg-gray-800/30',
        isShowCart ? 'animate__animated animate__fadeIn' : 'hidden',
      )}
    >
      <div
        className={cn(
          'cart-box w-3/5 md:w-3/12 min-h-screen float-right bg-white relative',
          isShowCart && 'animate__animated animate__fadeInRight',
        )}
      >
        <div className="cart__header bg-sky-600 absolute top-0 left-0 right-0 w-full">
          <h3 className="font-bold text-2xl uppercase text-center py-4 text-white">
            <span className="border-b-2 pb-2">Giỏ hàng</span>
          </h3>
          <IoClose
            onClick={() => {
              onShowCart(false)
            }}
            size={32}
            className="absolute right-1 md:right-4 top-4 text-white cursor-pointer hover:text-red-600"
          />
        </div>
        {/* End: .cart__header */}
        <div className="cart__body pt-20">
          <div className="cart__list flex flex-col gap-2 max-h-[400px] sm:max-h-[600px] overflow-y-scroll ">
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
            <div className="cart__item px-4 py-2 flex gap-4 cursor-pointer hover:bg-sky-100">
              <img
                src="/images/khoahoc/khoa-hoc-debugs-voi-lap-trinh-we.png"
                alt="thumbnail sản phẩm"
                className="w-20 h-20"
              />
              <div className="">
                <h4 className="text-sky-700">Khoá học 01</h4>
                <p className="flex items-center gap-1">
                  <span>1</span>
                  <span>x</span>
                  <b>40000&#8363;</b>
                </p>
              </div>
            </div>
            {/* End: .cart__item */}
          </div>
          {/* End: .cart__list */}
        </div>
        {/* End: .cart__body */}
        <div className="cart__footer bg-gray-100 py-5 absolute bottom-0 left-0 right-0 w-full">
          <div className="footer__total p-2 mb-4 border-b border-gray-600">
            <div className="flex justify-between font-bold">
              <p>Tổng tiền:</p>
              <p>500.000&#8363;</p>
            </div>
          </div>
          <div className="footer__action px-4 md:px-10 lg:px-24 flex flex-col gap-2">
            <a
              href="#"
              className="px-3 py-2 text-center rounded-md bg-sky-600 text-white font-semibold hover:opacity-60"
            >
              Quay lại trang chủ
            </a>
            <a
              href="#"
              className="px-3 py-2 text-center rounded-md bg-sky-600 text-white font-semibold hover:opacity-60"
            >
              Xem giỏ hàng
            </a>
            <a
              href="#"
              className="px-3 py-2 text-center rounded-md bg-red-600 text-white font-semibold hover:opacity-60"
            >
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
