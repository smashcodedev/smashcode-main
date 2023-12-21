import React from "react";
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

const ContactInfo: React.FC = () => {
  return (
    <div className="relative w-full border-b border-b-[#373636] pb-4 pt-5">
      <div className="-mx-2 flex flex-wrap">
        {contactInfo.map(({ label, info, icon }) => (
          <div key={label} className="md:w-1/3 md:pb-0">
            <div className="flex items-center justify-center gap-4 md:gap-2">
              <div className="min-h-[50px] w-[10%] text-center text-4xl text-primary-green">
                {icon}
              </div>
              <div className="w-5/6 pl-2">
                <h4 className="text-xl font-semibold text-white">{label}</h4>
                <span className="text-lg text-light-gray">{info}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
