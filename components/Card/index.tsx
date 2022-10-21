/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

type props = {
  newsList: any,
  qualPerRow: any
}

export default function ActionAreaCard({ newsList, qualPerRow }: props) {
  return (
    <div className={`grid grid-cols-${qualPerRow} gap-4 place-content-center `}>
      {newsList?.map((item: any, index: any) => {
        return (
          <Link href={`/booking_detail/${item.slug}`} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{ display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent:"space-between" }}>
                <div className="overflow-hidden w-[345px] h-[200px]">
                  <img src={item.src || item.image} className="w-full h-full" alt="" />
                </div>
                <CardContent component="div">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description || "cvjkncjsnvjsjihvbcn skbsdicsjdcdncbhsdbcdscjancs cjksbcskcbsjh vj"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )
      })}
    </div>
  );
}
