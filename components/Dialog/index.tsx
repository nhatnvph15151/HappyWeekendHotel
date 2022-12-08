import React, { forwardRef, useImperativeHandle, useState } from "react";
import { creatOrder } from "../../api/order";
import Swal from 'sweetalert2'
import { creat } from "../../api/bookedDate";
import { useRouter } from "next/router";
import { Button, Dialog, DialogActions, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { bangking } from "../../api/banking";

type PostProps = {

};
const DialogConfirm = ({ data, datebooks, room }: any, ref: any) => {
  const [displayBasic2, setDisplayBasic2] = useState<any>(false);
  const router = useRouter()
  const dateToString =
    ("0" + (data.checkins?.getUTCDate() + 1)).slice(-2) + "/" +
    ("0" + (data.checkins?.getUTCMonth() + 1)).slice(-2) + "/" +
    data.checkins?.getUTCFullYear()

  const dateFromString =
    ("0" + (data.checkouts?.getUTCDate() + 1)).slice(-2) + "/" +
    ("0" + (data.checkouts?.getUTCMonth() + 1)).slice(-2) + "/" +
    data.checkouts?.getUTCFullYear()
  const handleClose = () => {
    setDisplayBasic2(false)
  }

  useImperativeHandle(ref, () => ({
    open: (props: any) => {
      setDisplayBasic2(true)
    }
  }))
  console.log();
  const order = async () => {
    await creat(datebooks)
      .then((res: any) => {
        const newdata = {
          ...data,
          status: res._id
        }
        const disabledDateBooked = async () => {
          await creatOrder(newdata)
            .then(() => {
              Swal.fire(
                'Đặt phòng thành công',
                'Thông tin chi tiết sẽ được gửi tới email của bạn.',
                'success'
              )
              handleClose()
            })
        }
        disabledDateBooked()
      })
      .catch(() => {
        Swal.fire({
          title: 'Có lỗi gì đó.',
          icon: 'error'
        })
      })
  }

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={displayBasic2}
        onClose={handleClose}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>Kiểm tra thông tin đặt phòng</h1>
          <IconButton onClick={() => { handleClose() }} aria-label="delete">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div className="card">
          <div className="my-[30px]">
            <table className=" py-[30px] w-[500px] m-auto drop-shadow-md rounded-md">
              <tbody>
                <tr className="bg-[#F5FAFF] rounded-lg">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Tên khách hàng</label> </td>
                  <td className="pl-[42px] text-[#424241]">{data.name}</td>
                </tr>
                <tr className="bg-[#ffffff]">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Email </label> </td>
                  <td className="pl-[42px] text-[#424241]"> {data.email}</td>
                </tr>
                <tr className="bg-[#F5FAFF] ">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Số điện thoại</label> </td>
                  <td className="py-[5px] pl-[42px] text-[#424241]">{data.phone}</td>
                </tr>
                <tr className=" bg-[#ffffff]">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Tên phòng đặt</label> </td>
                  <td className="py-[5px] pl-[42px] text-[#424241]">{room}</td>
                </tr>
                <tr className=" bg-[#ffffff]">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Tổng tiền</label> </td>
                  <td className="py-[5px] pl-[42px] text-[#424241]">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(data.total)}</td>
                </tr>
                <tr className="bg-[#F5FAFF] ">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Check In</label> </td>
                  <td className="py-[5px] pl-[42px] text-[#424241]"> {dateToString} </td>
                </tr>
                <tr className="bg-[#ffffff]">
                  <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Check Out</label> </td>
                  <td className="py-[5px] pl-[42px] text-[#424241]">{dateFromString}</td>
                </tr>
              </tbody>
            </table>
            <div className="max-w-[500px] m-auto pt-[30px]">
              <p className="text-center text-gray-700 text-[15px]">
                Bạn muốn <span className="font-medium text-green-500 underline decoration-solid">thanh toán trực tiếp</span> hay <span className="font-medium text-blue-500 underline decoration-solid">thanh toàn trực tuyến</span> thì vui lòng chọn vào mục bạn mốn!
              </p>
            </div>

          </div>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <div className="flex">
              <div className="mr-[20px]">
                <button
                  className="px-4 py-2 rounded-md shadow-xl bg-[green] text-white"
                  onClick={() => order()}
                >Thanh toán trực tiếp</button>
              </div>
              <div>
                <button
                  className="px-4 py-2 rounded-md shadow-xl bg-[orange] text-white"
                  onClick={() => {
                    // router.push('/payment')
                    bangking({
                      "total": data.total,
                      "orderDescription": "",
                      "orderType": "billpayment",
                      "language": "vn",
                      "bankCode": ""
                    }).then((res: any) => { router.push(`${res.redirect}`) })
                  }}
                >Thanh toán trực tuyến</button>
              </div>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};
export default forwardRef(DialogConfirm);
function handleClose() {
  throw new Error("Function not implemented.");
}

function onHide(arg0: string) {
  throw new Error("Function not implemented.");
}

