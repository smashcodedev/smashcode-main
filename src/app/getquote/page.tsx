"use client";

import { useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { db } from "@/config/config";
import { BiRename } from "react-icons/bi";
import { BudgetSlider } from "@/components";
import isEmail from "validator/lib/isEmail";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { ref as storageRef } from "firebase/storage";
import { child, push, ref, set } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { HiOutlineLink } from "react-icons/hi2";
import submitQuoteFirebase from "@/api/apiQuote";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [budget, setBudget] = useState<number>(0);
  const [projectFileType, setProjectFileType] = useState<string>("");

  const onSubmitQuote = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      if (projectFileType === "url") {
        submitQuoteFirebase({
          name: data.name,
          email: data.email,
          description: data.description,
          budget: budget,
          fileLink: data.fileLink,
        })
          .then(() => {
            toast.success("Your project has been submitted, Thank you!");
          })
          .catch((err: unknown) => {
            console.log(err);
            toast.error("Something went wrong");
          });
        reset();
      } else {
        if (data.file && data.file.length > 0) {
          const file = data.file[0];
          const storage = getStorage();
          const storageref = storageRef(
            storage,
            `quotes-files/${data.file[0].name}`,
          );

          await uploadBytesResumable(storageref, file);
        }
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-10 mt-28 xl:mt-36">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl">Get a Quote</h1>

            <h6 className="text-center text-xl">
              Let’s share details of your project. So that we can start working
              on it.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmitQuote)}
              className="contact-form"
            >
              <div className="form-group relative">
                <BiRename className="contact-label-icon" />
                <input
                  type="text"
                  id="formName"
                  className="form-control form-control-lg thick w-full"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-group relative">
                <FaRegEnvelopeOpen className="contact-label-icon" />
                <input
                  type="email"
                  id="formEmail"
                  className="form-control form-control-lg thick w-full"
                  placeholder="E-mail"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-group message relative">
                <textarea
                  id="projectDescription"
                  className="form-control form-control-lg w-full"
                  rows={7}
                  placeholder="Project Description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="mt-2">
                <div className="cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="projectFileType"
                    id="projectFile"
                    onChange={() => setProjectFileType("upload")}
                    className="projectTypeInput"
                  />
                  <label className="cursor-pointer" htmlFor="projectFile">
                    Upload File
                  </label>
                </div>
                <div className="space-x-2">
                  <input
                    type="radio"
                    name="projectFileType"
                    id="projectFileUrl"
                    onChange={() => setProjectFileType("url")}
                    className="projectTypeInput"
                  />
                  <label className="cursor-pointer" htmlFor="projectFileUrl">
                    Upload File Url
                  </label>
                </div>
              </div>

              {projectFileType === "upload" ? (
                <div className="form-group relative file-input-button">
                  <input
                    type="file"
                    id="formFile"
                    style={{ color: "transparent" }}
                    className="mt-4 w-full file:text-white"
                    {...register("file", {
                      validate: {
                        checkFileSize: (value) =>
                          value[0].size <= 2000000 ||
                          "The file size should be less than 2MB",
                      },
                    })}
                  />
                  <p className="mt-2">
                    <span className="text-primary-green">Note:</span>The file
                    should be less than 200mb.
                  </p>
                </div>
              ) : (
                <div className="form-group relative">
                  <HiOutlineLink className="contact-label-icon" />
                  <input
                    type="url"
                    id="fileUrl"
                    className="form-control form-control-lg thick w-full"
                    placeholder="File Url"
                    {...register("fileLink")}
                  />
                </div>
              )}
              <BudgetSlider budget={budget} setBudget={setBudget} />
              <div className="text-center">
                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                  Send your quote
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p>
                <span className="text-primary-green">Note:</span> We will
                contact you as soon as possible through your E-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
