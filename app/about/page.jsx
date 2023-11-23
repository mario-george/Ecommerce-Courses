"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[20rem] object-cover"
          src={`images/about.jpg`}
          alt="home page image"
        />
      </div>
      <div className="my-3 flex flex-col justify-center items-center text-center bg-transparent rounded-lg">
        <Breadcrumbs>
          <Link href="/home" className="opacity-60">
            Home
          </Link>
          <a href="#" className="opacity-60">
            About Us
          </a>
        </Breadcrumbs>
      </div>
      <div className="text-orange-500 text-2xl text-center my-6 mx-auto w-full">
        شركة الخبير التروي
      </div>
      <div className="text-black text-center mx-auto w-full text-2xl my-6 font-bold">
        خبراء التدريب في المملكة
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center my-12">
        <img
          className="h-[25rem] object-cover mx-auto"
          src={`images/aboutBackground.png`}
          alt="home page image"
        />
        <div className="flex-col space-y-3 md:mr-[6rem] text-center md:text-left ">
          <div className="text-black  mx-auto w-full text-2xl font-bold ">
            شركة الخبير التربوي للتدريب
          </div>

          <div className="text-orange-500  mx-auto w-full text-2xl">
            +٢٠٠٠٠ متدرباً سنوياً
          </div>

          <div className="text-black mx-auto w-full text-xl max-w-lg">
            شركة سعودية تأسست عام 2010 متخصصة في مجالات التدريب والاستشارات
            والتحول التقني والرقمي, ضمن احتياجات سوق العمل المحلية والعالمية بما
            يتناسب مع رؤية المملكة 2030 التي نسعى لتحقيقها من خلال استقطاب
            الكفاءات المحترفة والشراكات الاستراتيجية . بيت الخبرة الأول في
            المملكة، نؤهل مواردنا ومستشارينا وفريق الدعم الفني لإثراء تجربتك.
            نعكف على صقل مواهب شباب الأمة، ونسعى لريادة المجال من أجل مستقبل
            أفضل تحقيقاً لرؤية المملكة 2030.{" "}
          </div>
        </div>
      </div>
    </>
  );
}
