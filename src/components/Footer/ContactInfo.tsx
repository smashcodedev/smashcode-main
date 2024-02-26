import { BsEnvelope, BsPhone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

type ContactInfoTypes = {
  label: string;
  info: string;
  icon: React.ReactNode;
};

const contactInfo: ContactInfoTypes[] = [
  { label: "Location", info: "Pakistan", icon: <FaMapMarkerAlt /> },
  { label: "Contact (WhatsApp)", info: "+92 3071991737", icon: <BsPhone /> },
  { label: "Email", info: "smashcode.dev@gmail.com", icon: <BsEnvelope /> },
];

const ContactInfo = () => {
  return (
    <div className="relative w-full border-b border-b-[#373636] pb-4 pt-5 md:flex">
      <div className="-mx-2 w-full items-center justify-between md:flex">
        {contactInfo.map(({ label, info, icon }) => (
          <div
            key={label}
            className="flex items-center justify-center md:w-1/3"
          >
            <div className="flex min-h-[50px] w-[10%] justify-center text-center text-[1.4rem] text-primary-green sm:text-[2rem] md:justify-start">
              {icon}
            </div>
            <div className="flex w-5/6 flex-col pl-2">
              <span className="text-[1rem] font-medium text-white sm:text-[1.2rem] sm:font-semibold">
                {label}
              </span>
              <span className="text-[0.9rem] text-[#A3A3A3] sm:text-[1.1rem]">
                {info}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
