import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
import whatsapp from "./images/whatsapp.png";
import telegram from "./images/telegram.png";
// import teams from "./images/teams.png";
import Email from "./images/imagesemail.png";
// import fasion from "./images/png_clipart-fasion.png";
import restarent from "./images/manila-bay-kitchen-is.jpg";
import clothstore from "./images/spring_collection_2022_delhi_2.jpg";
import furniture from "./images/Banjarahills-store-mobile.jpg";
import { IoMdPerson } from "react-icons/io";
import { BiCustomize } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const businessDemo = [
  {
    speciality: "WhatsApp",
    image: whatsapp,
  },
  {
    speciality: "Telegram",
    image: telegram,
  },
  {
    speciality: "Email",
    image: Email,
  },
];

export const businessAll = [
  {
    name: "WhatsApp",
    image: restarent,
  },
  {
    name: "Telegram",
    image: telegram,
  },
  {
    name: "Email",
    image: Email,
  },
];

export const online = [
  {
    image: restarent,
    title: "Restarent",
    category: "restarent",
    speciality: "General physician",
  },
  {
    image: clothstore,
    category: "clothstore",
    title: "clothstore",
    speciality: "Medical",
  },
  {
    image: furniture,
    category: "furniture",
    title: "furniture",
    speciality: "General physician",
  },
  {
    image: restarent,
    title: "Restarent",
    category: "restarent",
    speciality: "Restarent",
  },
  {
    image: clothstore,
    category: "clothstore",
    title: "clothstore",
    speciality: "Medical",
  },
  {
    image: furniture,
    category: "furniture",
    title: "furniture",
    speciality: "Medical",
  },
  {
    image: restarent,
    title: "Restarent",
    category: "restarent",
    speciality: "Restarent",
  },
  {
    image: clothstore,
    category: "clothstore",
    title: "clothstore",
    speciality: "Ecommerce",
  },
  {
    image: furniture,
    category: "furniture",
    title: "furniture",
    speciality: "Small Business",
  },
  {
    image: furniture,
    category: "furniture",
    title: "furniture",
    speciality: "Small Business",
  },
  {
    image: restarent,
    title: "Restarent",
    category: "restarent",
    speciality: "Restarent",
  },
  {
    image: clothstore,
    category: "clothstore",
    title: "clothstore",
    speciality: "Real Estate",
  },
  {
    image: furniture,
    category: "furniture",
    title: "furniture",
    speciality: "Customer Services",
  },
];

export const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with AI.",
    price: 49,
    // price: isAnnual ? 470 : 49,
    features: [
      { name: "AI Chatbot", included: true },
      { name: "Website Integration", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Up to 500 conversations/month", included: true },
      { name: "Email Support", included: true },
      { name: "Social Media Integration", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "Custom AI Training", included: false, hasTooltip: true },
      { name: "24/7 Support", included: false },
      { name: "Multi-language Support", included: false },
    ],
  },
  {
    name: "Pro",
    description:
      "Ideal for growing businesses looking to scale their AI capabilities.",
    price: 99,
    features: [
      { name: "AI Chatbot", included: true },
      { name: "Website Integration", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Up to 2000 conversations/month", included: true },
      { name: "Email Support", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Custom AI Training", included: true },
      { name: "24/7 Support", included: true },
      { name: "Multi-language Support", included: true },
    ],
  },
  {
    name: "Enterprise",
    description:
      "For large businesses requiring advanced AI solutions and dedicated support.",
    price: "...",
    features: [
      { name: "AI Chatbot", included: true },
      { name: "Website Integration", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Unlimited conversations", included: true },
      { name: "Email Support", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Custom AI Training", included: true, hasTooltip: true },
      { name: "24/7 Support", included: true },
      { name: "Multi-language Support", included: true },
    ],
  },
];

export const features = [
  {
    icon: <IoMdPerson className="w-8 h-8 text-blue-600" />,
    title: "Sign Up",
    subtitle: "Get Started with Ease",
    description:
      "Create your account and introduce us to your business. Let’s set the foundation for your personalized AI experience.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: <BiCustomize className="w-8 h-8 text-purple-600" />,
    title: "Customize",
    subtitle: "Build Your Perfect Chatbot",
    description:
      "Tailor your AI chatbot to reflect your brand’s voice, style, and customer needs. Customize every interaction to enhance engagement.",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: <CiStreamOn className="w-8 h-8 text-green-600" />,
    title: "Go Live",
    subtitle: "Engage Your Customers Instantly",
    description:
      "Activate your customized AI chatbot and start engaging with your customers in real-time. Watch as it helps enhance customer satisfaction and boosts your business growth!",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
];

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologists",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologistss",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologists",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
