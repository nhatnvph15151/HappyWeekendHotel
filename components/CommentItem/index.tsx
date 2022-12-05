/* eslint-disable @next/next/no-img-element */
type Props = {}

const CommentItem = (props: Props) => {
  return (
    <div className='flex items-center my-3'>
      <div className='mr-3'>
        <img src="https://picsum.photos/200/200" className='w-[60px] h-[60px] object-cover rounded-full flex-1' alt="" />
      </div>
      <div className='flex-1'>
        <span className='text-[#636366]'>17/11/2022</span>
        <div>
          Khách hàng: <strong className='text-lg'>Nguyễn Trần Khôi</strong>
        </div>
        <div>Nội dung: Phòng rất đẹp</div>
      </div>

      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-8 h-8 mt-2 px-2'>
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  )
}

export default CommentItem