import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { creatOrder } from "../../api/order";
import Swal from 'sweetalert2'
import { creat } from "../../api/bookedDate";
import { useRouter } from "next/router";

type PostProps = {
  
};
const DialogConfirm = ({data,datebooks,room}:any) => {
  const [displayBasic2, setDisplayBasic2] = useState<any>(true);
  const router = useRouter()

  console.log(data)
    
  const dialogFuncMap: any = {
    displayBasic2: setDisplayBasic2,
  };
   const order = async ()  =>{
    console.log(data)
    console.log(datebooks)
    await creat(datebooks)
            .then((res:any) => {
                const disabledDateBooked = async () => {
                  const newdata = {
                    ...data,
                    status: res?._id
                  }
                    await creatOrder(newdata)
                        .then(() => {
                            Swal.fire(
                                'Đặt phòng thành công',
                                'Thông tin chi tiết sẽ được gửi tới email của bạn.',
                                'success'
                            )
                            onHide("displayBasic2")
                            // setdialog(false)
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

//   const onClick = (name: any) => {
//     dialogFuncMap[`${name}`](true);
//   };

  const onHide = (name: any) => {
    dialogFuncMap[`${name}`](false);
  };


  return (
    <div className=''>
      <div>
        <div className="dialog-demo">
          <div className="card">
            {/* <Button
              label="Long Content"
              icon="pi pi-external-link"
              onClick={() => onClick("displayBasic2")}
            /> */}
            <Dialog
              header="Kiểm tra thông tin đặt phòng"
              visible={displayBasic2}
              style={{ width: "40vw"}}
              onHide={() => onHide("displayBasic2")}
            >
              
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
                  <tr className="bg-[#F5FAFF] ">
                    <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Check In</label> </td>
                    <td className="py-[5px] pl-[42px] text-[#424241]">Giờ : 9h , Ngày : 11/11/2020</td>
                  </tr>
                  <tr className="bg-[#ffffff]">
                    <td className="py-[10px] pl-[20px]"><label htmlFor="" className="font-medium text-[#A7A7A7]">Check Out</label> </td>
                    <td className="py-[5px] pl-[42px] text-[#424241]">Giờ : 9h , Ngày : 11/11/2020</td>
                  </tr>
                </tbody>
              </table>
              <div className="max-w-[500px] m-auto pt-[30px]">
                <p className="text-center text-gray-700 text-[15px]">
                  Bạn muốn <span className="font-medium text-green-500 underline decoration-solid">thanh toán trực tiếp</span> hay <span className="font-medium text-blue-500 underline decoration-solid">thanh toàn trực tuyến</span> thì vui lòng chọn vào mục bạn mốn!
                </p>
              </div>
             
              </div>
              <div className="flex ml-[70px]">
              <div className="mr-[20px]">
                <Button
                  label="Thanh toán trực tiếp" 
                  className="p-button-raised p-button-success p-button-text" 
                  onClick={() => order()}
                  />
              </div>
              <div>
              <Button 
                  label="Thanh toán trực tuyến" 
                  className="p-button-raised p-button-info p-button-text"
                  onClick={() => {router.push('/payment')}}
                   />
              </div>
             </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DialogConfirm;
