"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardItems from "@/components/CardItems";
import According from "@/components/According";
import {
  Input,
  Button,
  Breadcrumbs,
  Typography,
} from "@material-tailwind/react";
import EcommerceCard from "@/components/EcommerceCard";
import Link from "next/link";

export default async function CoursesPage() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[15rem] object-cover"
          src={`images/coursesbackground.jpg`}
          alt="home page image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl text-left  font-bold text-white mb-4 mr-auto ml-[4rem] ">
            All Courses
          </h1>
        </div>
      </div>
      <div className="ml-[4rem] my-3">
        <Breadcrumbs className="">
          <Link href="/home" className="opacity-60">
            Home
          </Link>
          <a href="#" className="opacity-60">
            All Courses
          </a>
          <a href="#" className="opacity-60">
            الرسم الهندسي
          </a>
          <a href="#" className="opacity-60">
            دورة الريفيت الانشائي
          </a>
        </Breadcrumbs>
      </div>

      <div className="flex flex-col md:flex-row mx-[2rem]">
        <EcommerceCard />
        <div className="flex flex-col space-y-5">
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            تُعَتِّبر دورة الريفيت الانشائي من الدورات التدريبية الرائدة في مجال
            الهندسة المعمارية والإنشائية. تعتمد هذه الدورة على استخدام برنامج
            الريفيت الذي يعتبر أحد أقوى برامج التصميم ثلاثي الأبعاد المتاحة
            حاليًا، يهدف برنامج الريفيت إلى تسهيل عملية تصميم وتنفيذ المشاريع
            الإنشائية من خلال دمج المعلومات والبيانات المتعلقة بالتصميم والبناء
            في نموذج واحد يمكن الوصول إليه من خلال الحاسوب.
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            يقدم هذه الكورس مجموعة واسعة من المهارات والمعرفة اللازمة لاستخدام
            برنامج الريفيت بشكل فعَّال، تشمل المحاور التدريبية في الدورة دراسة
            واستخدام وظائف البرنامج المتعددة مثل إنشاء نماذج ثلاثية الأبعاد
            وإضافة المواد والأبعاد وإجراء تحليلات هندسية. بالإضافة إلى ذلك،
            يتضمن البرنامج أيضًا تعلم كيفية إنشاء مستخلصات للمشروع وتوليد
            الرسومات والتقارير ذات الصلة.
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            يهتم بهذا البرنامج العديد من المهندسين والمهندسين المعماريين، وذلك
            بسبب قدرته على تحليل ومحاكاة الأحمال والقوى التي تؤثر على المباني،
            وتصميم الهياكل الانشائية بطريقة متقنة. بالإضافة إلى ذلك، يعتبر
            الريفيت الانشائي أداة قوية لتنسيق البيانات والرسومات بين فرق العمل
            المختلفة، مما يساعد على تحقيق التناغم والتواصل الفعال في المشاريع
            الانشائي
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            ◄ هذه الدبلومة التدريبية ضمن قائمة شهادات الدبلوم التدريبي
          </Typography>

          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            تفاصيل ومحاور الدبلومة التدريبية
          </Typography>

          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            تستهدف هذه الدورة المهندسين المعماريين والمهندسين الإنشائيين الذين
            يرغبون في تطوير مهاراتهم في استخدام برنامج الريفيت في تصميم وتنفيذ
            المشاريع الإنشائية، كما يعتبر البرنامج مناسب لطلاب الهندسة المعمارية
            والهندسة المدنية الذين يرغبون في الحصول على معرفة عملية وتطبيقية في
            استخدام برنامج الريفيت في مجالات الهندسة المعمارية والإنشائية{" "}
          </Typography>

          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            محاور البرنامج
          </Typography>

          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            مقدمه عن تكنولوجيا البيم.
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            مقدمه عن الريفيت الانشائى.
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            التعرف على واجهة المستخدم .
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            طرق تعريف العناصر وانواع العناصر فى الريفيت.
          </Typography>

          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            الأهداف التدريبية لمحاور البرنامج
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            تعمل محاور البرنامج أيضًا على حساب الأحمال الانشائية وقوى الجاذبية،
            وتوفير التحليل المبدئي والتصميم الهندسي للعناصر المختلفة مثل الأعمدة
            والجسور والأسقف. كما توفر هذه المحاور أدوات لتصور المساقط الأفقية
            والرأسية للمشروع، وتقديم التقارير والرسومات الفنية التفصيلية
            للتصاميم الإنشائية.
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium max-w-3xl w-full"
          >
            تتميز محاور برنامج الريفيت الانشائي بواجهة استخدام سهلة وبديهية تمكن
            المستخدمين من تنفيذ مهامهم بكفاءة وسرعة. توفر القوالب والمكتبات
            المدمجة في البرنامج مجموعة واسعة من المكونات الانشائية المختلفة التي
            يمكن استخدامها في التصاميم، مما يوفر الكثير من الوقت والجهد في عملية
            النمذجة والتحليل الإنشائي.
          </Typography>
          {/* <According/> */}
        </div>
      </div>

      <CardItems />
    </>
  );
}
