import dayjs from "dayjs";
import { UserType } from "../../types/user";

/* eslint-disable @next/next/no-img-element */
type CommentItemProps = {
  comment: {
    user: UserType;
    createdAt: Date;
    comment: string;
  };
};

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className='flex items-center my-3'>
      <div className='mr-3'>
        <img src={`${comment.user.avatar}`} className='w-[60px] h-[60px] object-cover rounded-full flex-1' alt="" />
      </div>
      <div className='flex-1'>
        <span className='text-[#636366]'>{dayjs(comment.createdAt).format("DD/MM/YYYY")}</span>
        <div>
          Khách hàng: <strong className='text-lg'>{comment.user.name}</strong>
        </div>
        <div>Nội dung: {comment.comment}</div>
      </div>

      <button className="p-2 border text-sm transition hover:text-white hover:bg-[#FFA500] hover:border-[#FFA500]">
        Xóa
      </button>
    </div>
  )
}

export default CommentItem