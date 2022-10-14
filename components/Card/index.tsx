/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type props = {
  newsList: any,
  qualPerRow: any
}

export default function ActionAreaCard({ newsList, qualPerRow }: props) {
  return (
    <div className={`grid grid-cols-${qualPerRow} gap-4 place-content-center `}>
      {newsList.map((item: any, index: any) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea sx={{ display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent:"space-between" }}>
              <div className="overflow-hidden w-[345px] h-[200px]">
                <img src={item.src} className="w-full h-full" alt="" />
              </div>
              <CardContent component="div">
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
  );
}
