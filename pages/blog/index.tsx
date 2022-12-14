/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {faMoon, faHourglassStart, faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className='w-[80%] mx-auto py-2'>
        <div className="blog-img__total flex gap-1">
            <Link href="/">
                <div className="w-[50%] relative cursor-pointer">
                    <div className='absolute bottom-0 left-0 right-0 text-white font-semibold leading-tight p-3'>
                        <h2 className='limit-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse a dignissimos ex non ut distinctio quisquam suscipit! Facilis eius incidunt nobis rerum non veritatis quod animi et, consequatur voluptatem!</h2>
                    </div>
                    <img src="https://picsum.photos/600/500" className='w-full h-full object-cover' alt="" />
                </div>
            </Link>

            <div className="grid w-[50%] grid-cols-2 gap-1">
                <div className="relative cursor-pointer">
                    <div className='absolute bottom-0 left-0 right-0 text-white font-semibold leading-tight p-3'>
                        <h2 className='limit-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse a dignissimos ex non ut distinctio quisquam suscipit! Facilis eius incidunt nobis rerum non veritatis quod animi et, consequatur voluptatem!</h2>
                    </div>
                    <img src="https://picsum.photos/400/300" className='w-[300px] h-[300px] object-cover block' alt="" />
                </div>
                <div className="relative cursor-pointer">
                    <div className='absolute bottom-0 left-0 right-0 text-white font-semibold leading-tight p-3'>
                        <h2 className='limit-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse a dignissimos ex non ut distinctio quisquam suscipit! Facilis eius incidunt nobis rerum non veritatis quod animi et, consequatur voluptatem!</h2>
                    </div>
                    <img src="https://picsum.photos/200/800" className='w-[300px] h-[300px] object-cover block' alt="" />
                </div>
                <div className="relative cursor-pointer">
                    <div className='absolute bottom-0 left-0 right-0 text-white font-semibold leading-tight p-3'>
                        <h2 className='limit-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse a dignissimos ex non ut distinctio quisquam suscipit! Facilis eius incidunt nobis rerum non veritatis quod animi et, consequatur voluptatem!</h2>
                    </div>
                    <img src="https://picsum.photos/500/300" className='w-[300px] h-[300px] object-cover block' alt="" />
                </div>
                <div className="relative cursor-pointer">
                    <div className='absolute bottom-0 left-0 right-0 text-white font-semibold leading-tight p-3'>
                        <h2 className='limit-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae esse a dignissimos ex non ut distinctio quisquam suscipit! Facilis eius incidunt nobis rerum non veritatis quod animi et, consequatur voluptatem!</h2>
                    </div>
                    <img src="https://picsum.photos/300/400" className='w-[300px] h-[300px] object-cover block' alt="" />
                </div>
            </div>
        </div>
        <div className="mt-[50px] flex items-start mb-10">
            <div className="w-[75%] pr-5">
                <div className='mb-10'>
                    <div>
                        <Link href="">
                            <h2 className='inline-block text-2xl font-semibold text-[#FFA500] cursor-pointer uppercase'>Khách sạn Ruy Sang</h2>
                        </Link>
                        <div className="mt-[5px] w-[100%] h-[3px] bg-[#ddd] relative">
                            <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#FFA500]"></div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-[30px] w-[55%]">
                            <Link href="/">
                                <div className="cursor-pointer">
                                    <img src="https://picsum.photos/400/500" className='w-full h-[400px] object-cover' alt="" />
                                </div>
                            </Link>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <h3 className='text-2xl font-semibold hover:text-[#FFA500] cursor-pointer limit-2'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                                </Link>
                            </div>
                            <div className="flex gap-5 mt-[10px]">
                                <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                                <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                            </div>
                            <div className="pt-[10px] limit-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vitae voluptate corporis veniam minus, distinctio libero enim impedit consectetur fugiat ea! Quo odio culpa nesciunt officia! Quae error aperiam incidunt!
                            </div>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <p className='text-[#ff6400] hover:opacity-[0.7] cursor-pointer'>View All</p>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-[22px] w-[45%]">
                            <div className="grid grid-cols-1 divide-y">
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tenetur hic ipsa consectetur, voluptates accusamus commodi, porro ducimus harum maxime unde nulla nesciunt dolores, ea pariatur at totam fugit exercitationem.</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div>
                        <Link href="">
                            <h2 className='inline-block text-2xl font-semibold text-[#FFA500] cursor-pointer uppercase'>Khách sạn Ruy Sang</h2>
                        </Link>
                        <div className="mt-[5px] w-[100%] h-[3px] bg-[#ddd] relative">
                            <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#FFA500]"></div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-[30px] w-[55%]">
                            <Link href="/">
                                <div className="cursor-pointer">
                                    <img src="https://picsum.photos/400/500" className='w-full h-[400px] object-cover' alt="" />
                                </div>
                            </Link>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <h3 className='text-2xl font-semibold hover:text-[#FFA500] cursor-pointer limit-2'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                                </Link>
                            </div>
                            <div className="flex gap-5 mt-[10px]">
                                <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                                <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                            </div>
                            <div className="pt-[10px] limit-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vitae voluptate corporis veniam minus, distinctio libero enim impedit consectetur fugiat ea! Quo odio culpa nesciunt officia! Quae error aperiam incidunt!
                            </div>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <p className='text-[#ff6400] hover:opacity-[0.7] cursor-pointer'>View All</p>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-[22px] w-[45%]">
                            <div className="grid grid-cols-1 divide-y">
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tenetur hic ipsa consectetur, voluptates accusamus commodi, porro ducimus harum maxime unde nulla nesciunt dolores, ea pariatur at totam fugit exercitationem.</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div>
                        <Link href="">
                            <h2 className='inline-block text-2xl font-semibold text-[#FFA500] cursor-pointer uppercase'>Khách sạn Ruy Sang</h2>
                        </Link>
                        <div className="mt-[5px] w-[100%] h-[3px] bg-[#ddd] relative">
                            <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#FFA500]"></div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-[30px] w-[55%]">
                            <Link href="/">
                                <div className="cursor-pointer">
                                    <img src="https://picsum.photos/400/500" className='w-full h-[400px] object-cover' alt="" />
                                </div>
                            </Link>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <h3 className='text-2xl font-semibold hover:text-[#FFA500] cursor-pointer limit-2'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                                </Link>
                            </div>
                            <div className="flex gap-5 mt-[10px]">
                                <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                                <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                            </div>
                            <div className="pt-[10px] limit-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vitae voluptate corporis veniam minus, distinctio libero enim impedit consectetur fugiat ea! Quo odio culpa nesciunt officia! Quae error aperiam incidunt!
                            </div>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <p className='text-[#ff6400] hover:opacity-[0.7] cursor-pointer'>View All</p>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-[22px] w-[45%]">
                            <div className="grid grid-cols-1 divide-y">
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tenetur hic ipsa consectetur, voluptates accusamus commodi, porro ducimus harum maxime unde nulla nesciunt dolores, ea pariatur at totam fugit exercitationem.</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div>
                        <Link href="">
                            <h2 className='inline-block text-2xl font-semibold text-[#FFA500] cursor-pointer uppercase'>Khách sạn Ruy Sang</h2>
                        </Link>
                        <div className="mt-[5px] w-[100%] h-[3px] bg-[#ddd] relative">
                            <div className="absolute top-0 left-0 bottom-0 right-[700px] bg-[#FFA500]"></div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-[30px] w-[55%]">
                            <Link href="/">
                                <div className="cursor-pointer">
                                    <img src="https://picsum.photos/400/500" className='w-full h-[400px] object-cover' alt="" />
                                </div>
                            </Link>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <h3 className='text-2xl font-semibold hover:text-[#FFA500] cursor-pointer limit-2'>Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng Danh sách khách sạn quận 2 không nên bỏ qua khi đi nghỉ dưỡng</h3>
                                </Link>
                            </div>
                            <div className="flex gap-5 mt-[10px]">
                                <p className='text-[#8a8a8a]'>by <a href="" className='hover:text-[#FFA500]'>KhooiDev</a></p>
                                <p className='text-[#8a8a8a]'>9 Tháng Mười, 2022</p>
                            </div>
                            <div className="pt-[10px] limit-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vitae voluptate corporis veniam minus, distinctio libero enim impedit consectetur fugiat ea! Quo odio culpa nesciunt officia! Quae error aperiam incidunt!
                            </div>
                            <div className="pt-[10px]">
                                <Link href="">
                                    <p className='text-[#ff6400] hover:opacity-[0.7] cursor-pointer'>View All</p>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-[22px] w-[45%]">
                            <div className="grid grid-cols-1 divide-y">
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tenetur hic ipsa consectetur, voluptates accusamus commodi, porro ducimus harum maxime unde nulla nesciunt dolores, ea pariatur at totam fugit exercitationem.</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2">
                                    <Link href="">
                                        <div className="cursor-pointer">
                                            <img src="https://picsum.photos/400/200" className='w-[150px] h-[150px] object-cover' alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1">
                                        <Link href="">
                                            <h2 className='leading-6 text-lg font-semibold hover:text-[#FFA500] cursor-pointer limit-3'>10 khách sạn Bình Thạnh có không gian nghỉ dưỡng cực chất</h2>
                                        </Link>
                                        <p className='pt-[10px]'>6 Tháng Mười, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky top-[100px] w-[25%] pl-2">
                <div className="">
                    <img src="/sansale-t12-55-sidebar-banner.jpg" className='w-[100%]' alt="" />
                </div>
                <div className="bg-[#FFA500] mt-[25px] p-2 w-[40%] text-center">
                    <p className='text-white'>HOTEL LIST</p>
                    <div className=""></div>
                </div>
                <div className="border-spacing-1 border border-[#FFA500]"></div>
                <div className="mt-2 grid grid-cols-1 divide-y">
                    <div className="flex items-center gap-3 py-2">
                        <FontAwesomeIcon icon={faHourglassStart}  className='text-[#FFA500]'/>
                        <Link href="">
                            <p className='cursor-pointer transition hover:text-[#FFA500] hover:underline'>Khách sạn theo giờ</p>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <FontAwesomeIcon icon={faMoon}  className='text-[#FFA500]'/>
                        <Link href="">
                            <p className='cursor-pointer transition hover:text-[#FFA500] hover:underline'>Khách qua đêm</p>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <FontAwesomeIcon icon={faHouseChimney}  className='text-[#FFA500]'/>
                        <Link href="">
                            <p className='cursor-pointer transition hover:text-[#FFA500] hover:underline'>Khách sạn theo ngày</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage