import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-sky-700">
      <div className="footer__content border-b">
        <div className="container grid grid-cols-12">
          <div className="col-span-6 lg:col-span-3">
            <div className="content__item text-white py-4">
              <h3 className="font-bold uppercase text-lg mb-4">Khoá Học Hay</h3>
              <div className="content__detail">
                <ul>
                  <li>
                    <a href="#">Hướng dẫn lấy khoá học</a>
                  </li>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản dịch vụ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: .content__item */}
          <div className="col-span-6 lg:col-span-3">
            <div className="content__item text-white py-4">
              <h3 className="font-bold uppercase text-lg mb-4">
                Thông tin liên hệ
              </h3>
              <div className="content__detail">
                <ul>
                  <li>
                    <a href="#">Email: khoahochay@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">Zalo: 0334350166</a>
                  </li>
                  <li>
                    <a href="#">Facebook: Cộng đồng Khoá học hay</a>
                  </li>
                  <li>
                    <a href="#">Discord: Khoá học hay</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: .content__item */}
          <div className="col-span-6 lg:col-span-3">
            <div className="content__item text-white py-4">
              <h3 className="font-bold uppercase text-lg mb-4">Tin tức</h3>
              <div className="content__detail">
                <ul>
                  <li>
                    <a href="#">Khoa học - Công nghệ</a>
                  </li>
                  <li>
                    <a href="#">Bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Phần mềm</a>
                  </li>
                  <li>
                    <a href="#">Mẹo hay</a>
                  </li>
                  <li>
                    <a href="#">Chia sẻ kiến thức</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: .content__item */}
          <div className="col-span-6 lg:col-span-3">
            <div className="content__item text-white py-4">
              <h3 className="font-bold uppercase text-lg mb-4">Liên quan</h3>
              <div className="content__detail">
                <ul>
                  <li>
                    <a href="#">Hướng dẫn lấy khoá học</a>
                  </li>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản dịch vụ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: .content__item */}
        </div>
      </div>
      {/* End: .footer__content */}
      <div className="footer__content">
        <strong className="block py-2 text-center font-bold text-white">
          &#169; 2024 Bản quyền khoahochay.com
        </strong>
      </div>
      {/* End: .footer__content */}
    </footer>
  )
}

export default Footer
