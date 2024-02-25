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
      <div className="-mx-2 md:flex justify-between w-full items-center">
        {contactInfo.map(({ label, info, icon }) => (
          <div
            key={label}
            className="md:w-1/3 flex items-center justify-center">
            <div className="min-h-[50px] w-[10%] text-center flex justify-center md:justify-start text-[1.4rem] sm:text-[2rem] text-primary-green">
              {icon}
            </div>
            <div className="w-5/6 pl-2">
              <span className="text-[1rem] font-medium sm:font-semibold text-white sm:text-[1.2rem]">
                {label}
              </span>
              <span className="text-[0.9rem] sm:text-[1.1rem] text-light-gray">
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
