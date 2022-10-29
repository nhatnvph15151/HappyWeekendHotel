/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

type props = {
  newsList: any
}

export default function ActionAreaCard({ newsList }: props) {

  return (
    <div className={`grid grid-cols-3 gap-4 place-content-center `}>
      {newsList?.map((item: any, index: any) => {
        return (
          <Link href={`/booking_detail/${item.slug}`} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{ display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent: "space-between" }}>
                <div className="overflow-hidden w-[345px] h-[200px]">
                  <img src={item.src || item.image} className="w-full h-full" alt="" />
                </div>
                <div className='p-2 flex justify-between items-center w-full'>
                  <div>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p dangerouslySetInnerHTML={{ __html: item.description || "desc" }}></p>
                    </Typography>
                  </div>
                  <div>
                    <p className='text-[green] text-md font-semibold'>{item?.price ? `${item.price} VND` : ""} </p>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </Link>
        )
      })}
    </div>
  );
}
