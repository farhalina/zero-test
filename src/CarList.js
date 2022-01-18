import React from "react";
import Car from "./Car";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

// style with Bootstrap instead when you redo this. 


// Mock data 

const cars = [
  {
    id: 0,
    license: "SAF2102",
    time: "18 hours 12 minutes",
    image: "Images/SAF2102.jpg",
  },
  {
    id: 1,
    license: "LKN8172",
    time: "8 hours 48 minutes",
    image: "Images/LKN8172.jpg",
  },
  {
    id: 2,
    license: "SWI4344",
    time: "15 hours 9 minutes",
    image: "Images/SWI4344.jpg",
  },
  {
    id: 3,
    license: "AOF2921",
    time: "18 hours 12 minutes",
    image: "Images/AOF2921.jpg",
  },
  {
    id: 4,
    license: "QGF2419",
    time: "8 hours 48 minutes",
    image: "Images/QGF2419.jpg",
  },
  {
    id: 5,
    license: "JFW9324",
    time: "15 hours 9 minutes",
    image: "Images/JFW9324.jpg",
  },
];

// Map of car data to display each car

export default function CarList() {
  return (
    <div>
      <ImageList sx={{ width: 600, height: 600 }} cols={3} gap={20}>
        {cars.map((car, id) => {
          return (
            <Card variant="outlined">
              <ImageListItem key={id}>
                <img
                  src={car.image}
                  alt=''
                />
                <Typography display="inline" align="right">
                  License Plate
                  <div>
                  </div>
                  {car.license}
                </Typography>
                <Typography display="inline" align="right">
                  Total Time
                  <div>
                  </div>
                  {car.time}
                </Typography>
              </ImageListItem>
            </Card>
          );
        })}
      </ImageList>
      <Car />
    </div>
  );
}
