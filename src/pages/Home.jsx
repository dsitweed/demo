import React from "react";
import { Link } from "react-router-dom";
import CV1 from "../resources/images/cvs.svg";
import CV2 from "../resources/images/cvs.png";
import CV3 from "../resources/images/edit.png";
import CV4 from "../resources/images/version_control.svg";

function Home() {
  return (
    <div>
      <section>
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl flex mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Civizen - Công cụ tạo CV miễn phí
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Sở hữu ngay CV xịn cùng việc làm mơ ước
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-full">
                      <Link
                        to="/templates"
                        className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base rounded-full text-white bg-red-600 hover:bg-red-700 hover:text-white md:py-3 md:text-lg md:px-8 ease-in-out animate-bounce transition"
                      >
                        Tạo CV
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="w-full my-2 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center text-gray-800 mt-20">
            Tại sao nên sử dụng Civizen
          </h1>
        </div>
        <div className="w-full mb-20">
          <div className="h-1 mx-auto bg-gray-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto ">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-none mb-3">
              Tạo CV dễ dàng và nhanh chóng
            </h3>
            <p className="text-gray-600 mb-3">
              Bạn có thể lựa chọn CV phù hơp trong kho CV của chúng tôi
            </p>
            <p className="text-gray-600">
              Tương tác trực quan, dễ dàng chỉnh sửa thông tin, tạo CV online
              nhanh chóng trong vòng 5 phút.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6 ">
            <img
              src={CV1}
              className="w-full sm:h-64 mx-auto rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-16 max-w-5xl mx-auto ">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              src={CV2}
              className="w-full sm:h-64 mx-auto shadow-img rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-16">
            <div className="align-middle ">
              <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-none mb-3">
                Kho CV phong phú
              </h3>
              <p className="text-gray-600 mb-3">
                Chúng tôi có 100+ mẫu CV phù hợp với các nhu cầu, vị trí ứng
                tuyển khác nhau.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto ">
          <div className="w-5/6 sm:w-1/2 p-6 mt-8 ">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-none mb-3">
              Công cụ chỉnh sửa trực quan
            </h3>
            <p className="text-gray-600 mb-3">
              Chúng tôi đem đến một công cụ chỉnh sửa giúp bạn dễ dàng thay đổi
              các nội dung theo ý muốn của mình.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6 ">
            <img
              src={CV3}
              className="w-full sm:h-64 mx-auto shadow-img rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-16 max-w-6xl mx-auto ">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              src={CV4}
              className="w-full sm:h-64 mx-auto rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-16 ">
            <div className="align-middle max-w-6xl mx-auto ">
              <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-none mb-3">
                Kiểm soát phiên bản
              </h3>
              <p className="text-gray-600 mb-3">
                Chúng tôi lưu trữ và quản lý tất cả các thay đổi nội dung của
                bạn. Bạn có thể dễ dàng quay trở lại phiên bản trước đó chỉ bằng
                các thao tác chuột đơn giản.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div>
          <h1 className="w-full my-2 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center text-gray-800 mt-20">
            Tham gia ngay với chúng tôi
          </h1>
        </div>
        <div className="w-full mb-10">
          <div className="h-1 mx-auto bg-gray-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="text-center">
          <Link to="/auth/sign-up">
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-semibold rounded-full mb-6 py-4 px-8 shadow-lg justify-center">
              Đăng ký
            </button>
          </Link>
        </div>
      </section>
      {/* <ScrollUpButton title={formatMessage("scrollTitle")}
        onClick={() => CVScrollTo.smoothScroll("root")} /> */}
    </div>
  );
}

export default Home;
