import dayjs from "dayjs";
import { UserType } from "../../types/user";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";
import { ADMIN_ROLE } from "../../constants";

/* eslint-disable @next/next/no-img-element */
type CommentItemProps = {
  comment: {
    user: UserType;
    createdAt: Date;
    comment: string;
    _id: string;
  };
  isLogged: boolean;
  currentUser?: UserType;
  onRemoveCmt: (cmtId: string) => Promise<void>;
};

const CommentItem = ({ comment, isLogged, currentUser, onRemoveCmt }: CommentItemProps) => {
  const handleRemoveComment = (commentId: string) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa?',
      text: "Không thể hoàn tác sau khi xóa!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await onRemoveCmt(commentId);
        Swal.fire(
          'Thành công!',
          'Đã xóa bình luận.',
          'success'
        )
      }
    })
  }

  return (
    <div className='flex items-center my-3'>
      <div className='mr-3'>
        <img src={`${comment.user?.avatar}`} className='w-[60px] h-[60px] object-cover rounded-full flex-1' alt="" />
      </div>
      <div className='flex-1'>
        <span className='text-[#636366]'>{dayjs(comment.createdAt).format("DD/MM/YYYY")}</span>
        <div>
          Khách hàng: <strong className='text-lg'>{comment.user?.name}</strong>
        </div>
        <div>Nội dung: {comment.comment}</div>
      </div>

      {/* admin có thể xóa bất kỳ cmt, user có thể xóa cmt của chính mình. */}
      {isLogged && (currentUser?.role === ADMIN_ROLE || currentUser?._id === comment.user?._id) && (
        <button onClick={() => handleRemoveComment(comment._id)} className="p-2 border text-sm transition hover:text-white hover:bg-[#FFA500] hover:border-[#FFA500]">
          Xóa
        </button>
      )}
    </div>
  )
}

export default CommentItem