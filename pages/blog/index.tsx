import React from 'react'
import {faMoon, faHourglassStart, faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className='w-[80%] mx-auto py-2'>
        <div className="blog-img__total flex gap-1">
            <div className="img-left w-[50%]">
                <img src="https://picsum.photos/500/500" className='w-[100%]' alt="" />
            </div>
            <div className="img-right flex gap-1 w-[50%] flex-wrap">
                <div className="flex w-[100%] gap-1">
                    <div className="">
                        <img src="https://picsum.photos/300/300" className='w-[100%] block' alt="" />
                    </div>
                    <div className="">
                        <img src="https://picsum.photos/300/300" className='w-[100%] block' alt="" />
                    </div>
                </div>

                <div className="flex w-[100%] gap-1">
                    <div className="">
                        <img src="https://picsum.photos/300/300" className='w-[100%] block' alt="" />
                    </div>
                    <div className="">
                        <img src="https://picsum.photos/300/300" className='w-[100%] block' alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[50px] flex gap-14 items-start mb-10">
            <div className="">
                <div className="">
                    <h2 className='text-2xl font-semibold text-[#FFA500]'>Khách sạn Ruy Sang</h2>
                    <div className="mt-[5px] w-[100%] h-[5px] bg-[#b8b8b8] relative border-spacing-1 border">
                        <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#ff6400]"></div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="mt-[30px]">
                        <div className="">
                            <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                        </div>
                        <div className="pt-[10px]">
                            <h3 className='text-2xl font-semibold hover:text-[#FFA500]'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                        </div>
                        <div className="flex gap-5 mt-[10px]">
                            <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                            <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                        </div>
                        <div className="pt-[10px]">
                            <p>Để có những phút giây thư giãn, thoải mái khi đi nghỉ dưỡng tại quận 2 của
                            Sài Gòn thì việc làm thế nào để lựa chọn được cho mình một không gian nghỉ ngơi</p>
                        </div>
                        <div className="pt-[10px]">
                            <p className='text-[#FFA500] hover:text-[#d49d36]'>View All</p>
                        </div>
                    </div>
                    
                    <div className="mt-[30px]">
                        <div className="flex gap-3">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-[40px]">
                    <h2 className='text-2xl font-semibold text-[#FFA500]'>Du lịch</h2>
                    <div className="mt-[5px] w-[100%] h-[5px] bg-[#b8b8b8] relative border-spacing-1 border">
                        <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#ff6400]"></div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="mt-[30px]">
                        <div className="">
                            <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                        </div>
                        <div className="pt-[10px]">
                            <h3 className='text-2xl font-semibold hover:text-[#FFA500]'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                        </div>
                        <div className="flex gap-5 mt-[10px]">
                            <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                            <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                        </div>
                        <div className="pt-[10px]">
                            <p>Để có những phút giây thư giãn, thoải mái khi đi nghỉ dưỡng tại quận 2 của
                            Sài Gòn thì việc làm thế nào để lựa chọn được cho mình một không gian nghỉ ngơi</p>
                        </div>
                        <div className="pt-[10px]">
                            <p className='text-[#FFA500] hover:text-[#d49d36]'>View All</p>
                        </div>
                    </div>
                    
                    <div className="mt-[30px]">
                        <div className="flex gap-3">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-[40px]">
                    <h2 className='text-2xl font-semibold text-[#FFA500]'>Ăn chơi</h2>
                    <div className="mt-[5px] w-[100%] h-[5px] bg-[#b8b8b8] relative border-spacing-1 border">
                        <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#ff6400]"></div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="mt-[30px]">
                        <div className="">
                            <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                        </div>
                        <div className="pt-[10px]">
                            <h3 className='text-2xl font-semibold hover:text-[#FFA500]'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                        </div>
                        <div className="flex gap-5 mt-[10px]">
                            <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                            <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                        </div>
                        <div className="pt-[10px]">
                            <p>Để có những phút giây thư giãn, thoải mái khi đi nghỉ dưỡng tại quận 2 của
                            Sài Gòn thì việc làm thế nào để lựa chọn được cho mình một không gian nghỉ ngơi</p>
                        </div>
                        <div className="pt-[10px]">
                            <p className='text-[#FFA500] hover:text-[#d49d36]'>View All</p>
                        </div>
                    </div>
                    
                    <div className="mt-[30px]">
                        <div className="flex gap-3">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-[40px]">
                    <h2 className='text-2xl font-semibold text-[#FFA500]'>Tin tức GO2JOY</h2>
                    <div className="mt-[5px] w-[100%] h-[5px] bg-[#b8b8b8] relative border-spacing-1 border">
                        <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#ff6400]"></div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="mt-[30px]">
                        <div className="">
                            <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                        </div>
                        <div className="pt-[10px]">
                            <h3 className='text-2xl font-semibold hover:text-[#FFA500]'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                        </div>
                        <div className="flex gap-5 mt-[10px]">
                            <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                            <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                        </div>
                        <div className="pt-[10px]">
                            <p>Để có những phút giây thư giãn, thoải mái khi đi nghỉ dưỡng tại quận 2 của
                            Sài Gòn thì việc làm thế nào để lựa chọn được cho mình một không gian nghỉ ngơi</p>
                        </div>
                        <div className="pt-[10px]">
                            <p className='text-[#FFA500] hover:text-[#d49d36]'>View All</p>
                        </div>
                    </div>
                    
                    <div className="mt-[30px]">
                        <div className="flex gap-3">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>
                        <div className="bg-[#a3a3a3] relative border-spacing-1 border mt-[10px]"></div>

                        <div className="flex gap-3 mt-[10px]">
                            <div className="">
                                <img src="https://picsum.photos/300/300" className='w-[100%]' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-semibold hover:text-[#FFA500]'><a href="">10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</a></p>
                                <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                            </div>
                        </div>

                    </div>
                </div>

                </div>
                

            <div className="sticky top-[100px]">
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
  )
}

export default BlogPage