import React, { useRef, useState } from 'react'
import { cn } from './../../lib/utils'
import { CiMail, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { NavLink, Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import { Badge } from '@/components/ui/badge'
import { MdOutlineMenu, MdClose } from 'react-icons/md'
import { FaArrowLeft, FaAngleRight } from 'react-icons/fa6'
import useClickOutside from '@/services/hooks/useClickOutside'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '../ui/button'
import CartDrawer from '../Cart/CartDrawer'

const Header = () => {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false)
  const [isShowCategory, setIsShowCategory] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  const menuMobileRef = useRef(null)

  const handleShowMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile)
  }
  const handleShowCategory = () => {
    setIsShowCategory(!isShowCategory)
  }

  const handleShowCart = () => {
    setIsShowCart(!isShowCart)
  }

  useClickOutside(menuMobileRef, handleShowMenuMobile)

  return (
    <>
      <header className={cn('sticky')}>
        <div className="top-bar bg-sky-600 text-white">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <ul className="flex items-center gap-2 text-sm py-1">
              <li>
                <a href="#" className="flex items-center gap-1 text-sm">
                  <CiMail size={16} />
                  <span className="-mt-1">example@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
            <ul className="hidden md:flex items-center gap-4 text-sm py-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? 'text-red' : 'text-gray-400'
                  }}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/huong-dan-lay-khoa-hoc"
                  className={({ isActive }) => {
                    return isActive ? 'active' : 'text-gray-300'
                  }}
                >
                  Hướng dẫn lấy khoá học
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lien-he"
                  className={({ isActive }) => {
                    return isActive ? 'active' : 'text-gray-300'
                  }}
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* End: .top-bar */}
        <div className="header-main shadow-md lg:shadow-none my-2 py-2">
          <div className="container">
            <div className="grid grid-cols-12 items-center">
              <div
                onClick={handleShowMenuMobile}
                className="col-span-2 lg:hidden cursor-pointer"
              >
                <MdOutlineMenu size={36} />
              </div>
              <div className="col-span-8 lg:col-span-3">
                <Link to={'/'}>
                  <div className="header-main__brand flex items-center justify-center lg:justify-normal gap-1">
                    <img src="/brands/ico-khoahochay.png" alt="" />
                    <div className="brand-content flex flex-col items-center">
                      <p className="brand-name uppercase font-bold text-emerald-700 text-lg md:text-3xl">
                        Khoá học hay
                      </p>
                      <p className="brand-slogan text-xs italic text-emerald-700">
                        Học Hay - Tải Ngay
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* End: .header-main__brand */}
              <div className="hidden lg:block lg:col-span-8">
                <div className="header-main__search flex items-center border border-sky-400 rounded-lg">
                  <DebounceInput
                    minLength={2}
                    debounceTimeout={300}
                    className="w-full focus:outline-none pl-4"
                    placeholder="Tìm kiếm khoá học..."
                  />
                  <span className="flex items-center justify-center w-12 h-10  bg-sky-600 rounded-tr-lg rounded-br-lg cursor-pointer hover:opacity-90">
                    <CiSearch color="white" size={24} />
                  </span>
                </div>
              </div>
              {/* End: .header-main__search */}
              <div className="col-span-2 lg:col-span-1">
                <div className="header-main__cart flex items-center justify-center">
                  <div className="relative cursor-pointer">
                    <CiShoppingCart onClick={handleShowCart} size={34} />
                    <Badge
                      variant="outline"
                      className={'absolute -top-2 left-4'}
                    >
                      0
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: .header-main */}
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-full min-h-screen lg:static lg:w-full lg:min-h-fit header-nav text-white bg-slate-400/70',
            isActiveMenuMobile
              ? 'animate__animated animate__fadeIn'
              : 'hidden lg:block',
          )}
        >
          <div className="absolute right-10 top-4 lg:hidden">
            <MdClose
              onClick={handleShowMenuMobile}
              size={36}
              className="cursor-pointer hover:text-red-600"
            />
          </div>
          <nav className="bg-sky-600 w-3/4 md:w-1/2 min-h-screen lg:w-full lg:min-h-fit ">
            <div className="lg:container block lg:grid lg:grid-cols-12 lg:gap-4">
              <div className="lg:hidden bg-white col-span-12 flex items-center justify-center py-2">
                <div className="flex">
                  <img src="/brands/ico-khoahochay.png" alt="Khoá học hay" />
                  <div className="brand-content flex flex-col items-center">
                    <p className="brand-name uppercase font-bold text-emerald-700 text-lg md:text-3xl">
                      Khoá học hay
                    </p>
                    <p className="brand-slogan text-xs italic text-emerald-700">
                      Học Hay - Tải Ngay
                    </p>
                  </div>
                </div>
              </div>
              <div className={cn('col-span-12 lg:col-span-3')}>
                <div className="nav-categories relative">
                  <div
                    onClick={handleShowCategory}
                    className={cn(
                        'flex items-center gap-1 px-3 py-2 bg-sky-800 cursor-pointer',
                        isShowCategory && 'hidden lg:flex'
                    )}
                  >
                    <MdOutlineMenu size={24} />
                    <p className="font-bold">Danh mục sản phẩm</p>
                  </div>
                  <div
                    className={cn(
                      'hidden absolute top-full left-0 right-0 w-full mt-1',
                      isShowCategory ? 'lg:block animate__animated animate__fadeIn' : '',
                    )}
                  >
                    <ul className="text-slate-700 bg-white shadow-lg rounded-xl">
                      <li>
                        <a
                          href=""
                          className="flex items-center gap-2 px-6 py-2 rounded-t-xl font-semibold hover:bg-sky-100"
                        >
                          <FaAngleRight />
                          <p>Khoá học Thiết Kế Đồ Hoạ</p>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center gap-2 px-6 py-2 font-semibold hover:bg-sky-100"
                        >
                          <FaAngleRight />
                          Khoá học Lập trình - CNTT
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center gap-2 px-6 py-2 font-semibold hover:bg-sky-100"
                        >
                          <FaAngleRight />
                          Khoá học ngoại ngữ
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center gap-2 px-6 py-2 font-semibold hover:bg-sky-100"
                        >
                          <FaAngleRight />
                          Khoá học Tiktok - Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center gap-2 px-6 py-2 font-semibold rounded-b-xl hover:bg-sky-100"
                        >
                          <FaAngleRight />
                          Khoá học Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End: .nav-categories */}
              <ul
                className={cn(
                  'col-span-12 lg:col-span-9 flex flex-col lg:flex-row lg:items-center justify-evenly',
                  !isShowCategory
                    ? ''
                    : 'hidden lg:flex',
                )}
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `
                    flex items-center gap-1 px-3 py-2 font-bold uppercase hover:border-b-2 hover:border-sky-100 hover:bg-sky-500
                    ${isActive ? 'bg-sky-500 border-b-2 border-sky-100 text-blue-50' : ''}
                `}
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/product-category/combo-tiet-kiem"
                    className={({ isActive }) => `
                    flex items-center gap-1 px-3 py-2 font-bold uppercase hover:border-b-2 hover:border-sky-100 hover:bg-sky-500
                    ${isActive ? 'bg-sky-500 border-b-2 border-sky-100 text-blue-50' : ''}
                `}
                  >
                    Combo tiết kiệm
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/san-pham/get-khoa-hoc-50k"
                    className={({ isActive }) => `
                    flex items-center gap-1 px-3 py-2 font-bold uppercase hover:border-b-2 hover:border-sky-100 hover:bg-sky-500
                    ${isActive ? 'bg-sky-500 border-b-2 border-sky-100 text-blue-50' : ''}
                `}
                  >
                    Get khoá học 50k
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/goi-hoi-vien"
                    className={({ isActive }) => `
                    flex items-center gap-1 px-3 py-2 font-bold uppercase hover:border-b-2 hover:border-sky-100 hover:bg-sky-500
                    ${isActive ? 'bg-sky-500 border-b-2 border-sky-100 text-blue-50' : ''}
                `}
                  >
                    Gói hội viên
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) => `
                    flex items-center gap-1 px-3 py-2 font-bold uppercase hover:border-b-2 hover:border-sky-100 hover:bg-sky-500
                    ${isActive ? 'bg-sky-500 border-b-2 border-sky-100 text-blue-50' : ''}
                `}
                  >
                    Đăng nhập/Đăng ký
                  </NavLink>
                </li>
              </ul>
              {isShowCategory && (
                <div
                  className={cn(
                    'col-span-12 flex flex-col lg:hidden',
                    isShowCategory && 'animate__animated animate__fadeIn',
                  )}
                >
                  <div
                    onClick={handleShowCategory}
                    className="heading px-4 py-2 cursor-pointer flex items-center gap-2 bg-sky-800"
                  >
                    <FaArrowLeft />
                    <p className="uppercase font-bold">Tất cả sản phẩm</p>
                  </div>
                  <ul className="col-span-12 lg:col-span-9 flex flex-col lg:flex-row lg:items-center justify-evenly">
                    <li>
                      <Link to="/" className="inline-block px-4 py-1">
                        Khoá học thiết kế đồ hoạ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product-category/combo-tiet-kiem"
                        className="inline-block px-4 py-1"
                      >
                        Khoá học lập trình - CNTT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/san-pham/get-khoa-hoc-50k"
                        className="inline-block px-4 py-1"
                      >
                        Khoá học ngoại ngữ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/goi-hoi-vien"
                        className="inline-block px-4 py-1"
                      >
                        Khoá học Tiktok - Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="/khmkt" className="inline-block px-4 py-1">
                        Khoá học Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <CartDrawer isShowCart={isShowCart} onShowCart={setIsShowCart} />
    </>
  )
}

export default Header
