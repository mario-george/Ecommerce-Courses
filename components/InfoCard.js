"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
export default function InfoCard({ title, image, description }) {
  let i = <PhoneIcon />;
  if (image == "l") {
    i = <LocationOnIcon />;
  } else if (image == "e") {
    i = <EmailIcon />;
  }
  return (
    <Card className="mt-6 w-96 flex flex-col space-y-3 items-center justify-center text-center shadow-lg my-12 transition-all duration-200 hover:scale-110">
      <CardBody>
        {i}

        <Typography variant="h5" color="blue-gray" className="my-2">
          {title}{" "}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
