import {
  Input,
  Button,
  CardHeader,
  Card,
  CardBody,
  Typography,
  Avatar,
} from "./material-tailwind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const CardItem = () => {
  return (
    <>
      <Card
        shadow={false}
        className="group relative grid h-[35rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center cardHoverEffect hover:shadow-xl transition-all duration-200"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center imageHoverEffect`}
          style={{ backgroundImage: `url('/images/AutoDeskRevit.jpg')` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            <div className="mb-6 font-medium leading-[1.5]">
              <Link href="/course-details">
                <Button
                  color="amber"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-4"
                >
                  Read more
                </Button>
              </Link>
            </div>{" "}
          </Typography>
          <Typography variant="h5" className="mb-4 text-white">
            Alkhabir{" "}
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="Alkhabir"
            className="border-2 border-white"
            src="images/Alkhabir.jpg"
          />
          <Typography variant="h5" className="mb-4 text-white my-3">
            AutoDesk Revit Course{" "}
          </Typography>

          <div className="absolute bg-white w-full left-0 bottom-0 h-12 border-t-gray-500">
            <div className="border-t-gray-500 flex justify-between">
              <div className="flex space-x-3 items-center mx-3 my-3">
                <FontAwesomeIcon icon={faUsers} size="xl" />
                <span className="text-xl">2500</span>
              </div>
              <div className="flex space-x-3 items-center mx-3 my-3">
                <span className="text-xl line-through">199$</span>
                <span className="text-xl text-orange-500">99$</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardItem;
