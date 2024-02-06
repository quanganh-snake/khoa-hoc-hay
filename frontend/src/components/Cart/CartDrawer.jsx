import { IoClose } from 'react-icons/io5'

const CartDrawer = () => {
  return (
    <div className="absolute inset-0 z-10 w-full min-h-screen bg-gray-800/30">
      <div className="cart-box w-3/5 md:w-3/12 min-h-screen float-right bg-white">
        <div className="cart__header bg-sky-600 relative">
          <h3 className="font-bold text-2xl uppercase text-center py-4 text-white">
            <span className="border-b-2 pb-2">Giỏ hàng</span>
          </h3>
          <IoClose
            size={32}
            className="absolute right-1 md:right-4 top-4 text-white cursor-pointer hover:text-red-600"
          />
        </div>
        {/* End: .cart__header */}
        <div className="cart__body my-4"></div>
        {/* End: .cart__body */}
        <div className="cart__footer">
          <div className="footer__content flex items-center justify-center">
            <a href="#" className="px-3 py-2 rounded-md bg-sky-600 text-white font-semibold hover:opacity-60">
              Quay lại trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
