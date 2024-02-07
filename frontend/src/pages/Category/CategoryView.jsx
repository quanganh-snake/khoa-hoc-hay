import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'
import { useBem } from '@/services/hooks/useBem'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import ProductItem from '@/components/Product/ProductItem'
import { Link } from 'react-router-dom'
import { CiFilter } from 'react-icons/ci'
import { FaSort } from 'react-icons/fa'
import ProductList from '@/components/Product/ProductList'

const CategoryView = (props) => {
  const bem = useBem('category')
  return (
    <section className={cn(bem.b(''), 'my-4')}>
      <h3 className="text-2xl font-bold mb-2">Các khóa học Marketing</h3>
      <div className={cn(bem.e('nav'), 'mb-8')}>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full bg-white flex justify-start border-b border-sky-600 h-16 rounded-none p-0">
            <TabsTrigger
              value="account"
              className="text-xl rounded-t-lg rounded-b-none px-5 py-4 bg-white -mb-1 hover:text-sky-600 data-[state=active]:border-t data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-sky-600 data-[state=active]:text-sky-600"
            >
              Khóa học phổ biến
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-xl rounded-t-lg rounded-b-none px-5 py-4 bg-white -mb-1 hover:text-sky-600 data-[state=active]:border-t data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-sky-600 data-[state=active]:text-sky-600"
            >
              Khóa học mới
            </TabsTrigger>
          </TabsList>
          {/* Start: Tab Khóa Học Phổ Biến */}
          <TabsContent value="account">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="py-6">
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          {/* End: Tab Khóa Học Phổ Biến */}

          {/* Start: Tab Khóa Học Mới */}
          <TabsContent value="password">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="py-6">
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductItem />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          {/* End: Tab Khóa Học Phổ Mới */}
        </Tabs>
      </div>
      {/* End: .category__nav */}
      <div className={cn(bem.e('list-course'))}>
        <h3 className="text-2xl font-bold mb-2">Tất cả khóa học Marketing</h3>
        <Carousel>
          <CarouselContent className="py-6">
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Facebook Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Zalo Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Email Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                {' '}
                Marketing Online
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Seo
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Google Ads
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Youtube Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Video Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Content Marketing
              </Link>
            </CarouselItem>
            <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8">
              <Link
                to="/tag/cource"
                className="px-2 py-1 bg-white block border border-sky-600 rounded-full text-center font-semibold text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                Affiliate Marketing
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* End: .category__list-course */}
      <div
        className={cn(
          bem.e('filter'),
          'bg-sky-100 p-2 rounded-lg flex items-center justify-around',
        )}
      >
        <ul className="flex items-center gap-5">
          <li>
            <p className="font-bold uppercase text-sky-800 flex items-center">
              {' '}
              <FaSort size={26} />
              Sắp xếp:
            </p>
          </li>
          <li>
            <Select>
              <SelectTrigger className="w-[180px] focus:outline-none">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Mua nhiều nhất</SelectItem>
                <SelectItem value="dark">Đánh giá cao</SelectItem>
                <SelectItem value="system">Mới nhất</SelectItem>
                <SelectItem value="system">Giá thấp đến cao</SelectItem>
                <SelectItem value="system">Giá cao xuống thấp</SelectItem>
              </SelectContent>
            </Select>
          </li>
        </ul>

        <ul className="flex items-center gap-5">
          <li>
            <p className="font-bold uppercase text-sky-800 flex items-center">
              {' '}
              <CiFilter size={32} />
              Bộ lọc:
            </p>
          </li>
          <li>
            <Select>
              <SelectTrigger className="w-[180px] focus:outline-none">
                <SelectValue placeholder="Đánh giá sao" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">5 sao</SelectItem>
                <SelectItem value="dark">từ 4 sao</SelectItem>
                <SelectItem value="system">từ 3 sao</SelectItem>
              </SelectContent>
            </Select>
          </li>
          <li>
            <Select>
              <SelectTrigger className="w-[180px] focus:outline-none">
                <SelectValue placeholder="Thời lượng khóa học" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">0 - 1 giờ</SelectItem>
                <SelectItem value="dark">1 - 3 giờ</SelectItem>
                <SelectItem value="system">6 - 17 giờ</SelectItem>
                <SelectItem value="17">trên 17 giờ</SelectItem>
              </SelectContent>
            </Select>
          </li>
        </ul>
      </div>
      {/* End: .category__filter */}
      <div className={cn(bem.e('list-product'))}>
        <ProductList
          title={'Khóa học xem nhiều nhất'}
          description={'Danh sách khóa học được xem nhiều nhất'}
        />
      </div>
      {/* End: .category__list-product */}
    </section>
  )
}

CategoryView.propTypes = {}

export default CategoryView
