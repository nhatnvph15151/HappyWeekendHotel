import React from 'react'
import {faMoon, faHourglassStart, faHouseChimney, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const BlogDetail = (props: Props) => {
  return (
    <div className='w-[80%] mx-auto py-2'>
        <div className="blog-img__total flex items-center gap-3">
            <a href="" className='text-lg hover:text-[#FFA500]'>Blog</a>
            <FontAwesomeIcon icon={faChevronRight}  className='text-sm'/>
            <p>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</p>
        </div>
        <div className="mt-[20px] gap-10 flex items-start mb-10">
            <div className="w-[70%]">
                <div className="">
                    <h2 className='text-2xl font-semibold text-[#FFA500]'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                    <div className="flex gap-5 mt-[5px]">
                        <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                        <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                    </div>
                    <p className='pt-[10px] text-[16px]'>Dạo quanh một vòng tại quận Bình Thạnh bạn sẽ bắt gặp rất nhiều địa điểm tham quan, du lịch nổi tiếng của
                    Sài Thành. Mỗi địa điểm mang trong mình một nét đẹp riêng đang chờ đón bạn khám phá. Và để giúp nâng tầm trải
                    nghiệm khi đến đây bạn đừng quên lựa chọn cho mình những địa chỉ khách sạn Bình Thạnh có không gian nghỉ ngơi
                    tốt để thỏa sức vui chơi khi đến Sài Gòn. Nếu bạn đang phân vân chưa biết chọn khách sạn nào thì những gợi ý 
                    sau đây của Go2Joy là điều bạn không nên bỏ qua.</p>
                </div>
                
                <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                  <div className="mt-[25px]">
                    <h1 className='text-2xl font-semibold'>1. Lá Hotel Bình Thạnh</h1>
                    <p className='pt-[18px]'>Lá Hotel mỗi phòng nghỉ khách sạn được thiết kế theo phong cách độc đáo, mới lạ. Tất cả các phòng nghỉ tại
                    Lá Hotel đều được sơn những màu sắm có gam màu nóng.</p>
                    <div className="text-center"></div>
                    <img src="https://picsum.photos/100/100" className='w-[80%] mt-[18px] mx-auto' alt="" />
                    <p className='pt-[18px]'>Cụ thể hai gam màu được dùng nhiều nhất là màu cam và màu xanh lá, điều này vừa tạo điểm nhấn vừa tạo sự khác biệt trong thiết kế, vì thế
                    mà đã để lại ấn tượng sâu sắc trong lòng du khách khi đến nghỉ ngơi, thư giãn tại Lá Hotel.</p>
                    <nav className='pt-[18px]'>
                        <ul>
                            <li className='pt-[18px]'>Giá phòng theo giờ: 120.000 – 140.000 VNĐ/1 giờ</li>
                            <li className='pt-[18px]'>Giá phòng theo đêm: 281.600 – 316.800 VNĐ/đêm</li>
                            <li className='pt-[18px]'>Giá phòng theo ngày: 442.400 – 457.600 VNĐ/ngày</li>
                            <li className='pt-[18px]'>Địa chỉ: 118/26 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</li>
                            <div className="flex items-center pt-[18px] gap-2">
                                <li>Đặt phòng ngay tại đây:</li>
                                <a href="" className='text-[#FFA500]'>LÁ HOTEL BÌNH THẠNH</a>
                            </div>
                        </ul>
                    </nav>
                </div>

                <p className='pt-[20px]'>Bài viết trên của Go2Joy đã chia sẻ đến bạn top 10 khách sạn Bình Thạnh có không gian nghỉ dưỡng chất lượng, giúp bạn nâng tầm trải nghiệm khi đến đây.
                Hãy tải ngay app đặt phòng Go2Joy để khám phá những điều thú vị tại quận Bình Thạnh nhé.</p>

            </div>
                

            <div className="sticky top-[100px] w-[30%]">
                <div className="">
                    <div className="bg-[#FFA500] p-2 w-[35%] text-center">
                        <p className='text-white'>Mục lục</p>
                        <div className=""></div>
                    </div>
                    <div className="border-spacing-1 border border-[#FFA500] mt-[2px]"></div>
                    <nav className='overflow-y-auto h-[190px] mt-[30px]'>
                        <ul>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                            <li><a href="" className='p-3'>1. Lá Hotel Bình Thạnh</a></li>
                            <div className="border-spacing-1 border border-[#cacaca] mt-[10px]"></div>
                        </ul>
                    </nav>
                </div>
                <div className="mt-[20px]">
                    <div className="">
                        <img src="https://picsum.photos/700/700" className='w-[100%]' alt="" />
                    </div>
                    <div className="bg-[#FFA500] mt-[25px] p-2 w-[40%] text-center">
                        <p className='text-white'>HOTEL LIST</p>
                        <div className=""></div>
                    </div>
                    <div className="border-spacing-1 border border-[#FFA500]"></div>
                    <div className="mt-[20px]">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faHourglassStart}  className='text-[#FFA500]'/>
                            <p><a href="">Khách sạn theo giờ</a></p>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[5px]"></div>

                        <div className="flex items-center gap-3 mt-[10px]">
                            <FontAwesomeIcon icon={faMoon}  className='text-[#FFA500]'/>
                            <p><a href="">Khách qua đêm</a></p>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[5px]"></div>

                        <div className="flex items-center gap-3 mt-[10px]">
                            <FontAwesomeIcon icon={faHouseChimney}  className='text-[#FFA500]'/>
                            <p><a href="">Khách sạn theo ngày</a></p>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[5px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail