"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import MenuBook from "@mui/icons-material/MenuBook";
import CalenderIcon from "@mui/icons-material/CalendarMonth";
import Quiz from "@mui/icons-material/Quiz";
import AccessTime from "@mui/icons-material/AccessTime";
import Upload from "@mui/icons-material/Upload";
import SchoolIcon from "@mui/icons-material/School";
import GradeIcon from "@mui/icons-material/Grade";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/store/userSlice";

export default function EcommerceCard() {
  const d = useDispatch();
  const userState = useSelector((state) => state.user);

  const AddToCardHandler = () => {
    let newPrice = userState.totalPrice + 99;
    let newItems = userState.totalItems + 1;
    d(updateField({ field: "totalPrice", value: newPrice }));
    d(updateField({ field: "totalItems", value: newItems }));
  };

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        {/* <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        /> */}
        <video className="h-full w-full rounded-lg" controls>
          <source src="videos/autocad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            AutoCAD Course
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            <span className="line-through mx-3">$199.00</span>
            <span className="font-bold">$99.00</span>
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          <div className="flex flex-col">
            <div className="flex space-x-3">
              <MenuBook />
              <span>الدروس 2</span>
            </div>

            <div className="flex space-x-3">
              <Quiz />
              <span>الإختبارات 0</span>
            </div>
            <div className="flex space-x-3">
              <AccessTime />

              <span>المدة 7 أيام</span>
            </div>
            <div className="flex space-x-3">
              <Upload />
              <span>مستوى المهارة جميع المستويات</span>
            </div>
            <div className="flex space-x-3">
              <LanguageIcon />
              <span>اللغة عربي</span>
            </div>
            <div className="flex space-x-3">
              <SchoolIcon />
              <span>طلاب 5001</span>
            </div>
            <div className="flex space-x-3">
              <GradeIcon />
              <span>التقييمات نعم</span>
            </div>
          </div>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={AddToCardHandler}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
