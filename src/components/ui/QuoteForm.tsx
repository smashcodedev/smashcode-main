"use client";

import React, { useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { BiRename } from "react-icons/bi";
import { BudgetSlider } from "@/components";
import isEmail from "validator/lib/isEmail";
import { HiOutlineLink } from "react-icons/hi2";
import submitQuoteFirebase, { uploadFile } from "@/api/apiQuote";
import { FaRegEnvelopeOpen } from "react-icons/fa";

const QuoteForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting: isLoading },
  } = useForm();

  const [budget, setBudget] = useState<number>(100);
  const [projectFileType, setProjectFileType] = useState<string>("upload");
  const [selectedFilename, setSelectedFilename] = useState<string>("");

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filename = files[0].name;
      setSelectedFilename(filename);
    } else {
      setSelectedFilename("");
    }
  };

  const descriptionValue = watch("description");
  const descriptionLength = descriptionValue?.length || 0;

  const isFileUploaded = watch("file");

  const onSubmitQuote = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      if (projectFileType === "url") {
        await submitQuoteFirebase({
          name: data.name,
          email: data.email,
          description: data.description,
          budget: budget,
          fileLink: data.fileLink,
        });

        toast.success("Your project has been submitted, Thank you!");
        setBudget(100);
        reset();
      } else if (projectFileType === "upload") {
        if (data.file && data.file.length > 0) {
          const file = data.file[0];
          await uploadFile(file).then(async (url) => {
            await submitQuoteFirebase({
              name: data.name,
              email: data.email,
              description: data.description,
              budget: budget,
              fileLink: url,
            });
          });
        }

        toast.success("Your project has been submitted, Thank you!");
        setBudget(100);
        setSelectedFilename("");
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <form onSubmit={handleSubmit(onSubmitQuote)} className="contact-form">
        <div className="form-group relative">
          <BiRename className="contact-label-icon" />
          <input
            type="text"
            id="formName"
            className="form-control form-control-lg thick w-full border-none outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
            placeholder="Name"
            disabled={isLoading}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
        </div>

        <div className="form-group relative">
          <FaRegEnvelopeOpen className="contact-label-icon" />
          <input
            type="email"
            id="formEmail"
            className="form-control form-control-lg thick w-full border-none outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
            placeholder="E-mail"
            disabled={isLoading}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
        </div>

        <div className="form-group message relative">
          <textarea
            id="projectDescription"
            className="form-control form-control-lg w-full border-none outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
            rows={7}
            placeholder="Project Description"
            disabled={isLoading}
            maxLength={400}
            {...register("description", { required: true })}
          ></textarea>
          <div
            className={`mb-2 flex items-center ${
              errors.description ? "justify-between" : "justify-end"
            }`}
          >
            {errors.description && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
            <p className="text-sm text-gray-400">
              {descriptionLength} / 400 characters
            </p>
          </div>
        </div>

        <p className="mb-[-12px] ml-2 text-sm">(Optional)</p>
        <div className="mt-2">
          <div className="space-x-2">
            <input
              type="radio"
              name="projectFileType"
              id="projectFile"
              checked={projectFileType === "upload"}
              onChange={() => setProjectFileType("upload")}
              className="projectTypeInput"
            />
            <label className="cursor-pointer" htmlFor="projectFile">
              Upload a document
            </label>
          </div>

          <div className="space-x-2">
            <input
              type="radio"
              name="projectFileType"
              id="projectFileUrl"
              checked={projectFileType === "url"}
              onChange={() => setProjectFileType("url")}
              className="projectTypeInput"
            />
            <label className="cursor-pointer" htmlFor="projectFileUrl">
              Share file link
            </label>
          </div>
        </div>

        {projectFileType === "upload" && (
          <div className="form-group relative file-input-button">
            <input
              type="file"
              id="formFile"
              className="mt-4 w-full text-lg"
              style={{ color: "transparent" }}
              {...register("file", {
                validate: {
                  checkFileSize: (value) =>
                    (value && value[0] && value[0]?.size <= 2000000) ||
                    "The file size should be less than 200mb",
                },
              })}
              onChange={onFileInputChange}
            />
            {selectedFilename && (
              <p className="mt-2 text-gray-500">{selectedFilename}</p>
            )}

            {isFileUploaded && isFileUploaded.length > 0 && errors.file && (
              <p className="mt-2 text-red-500">
                The file should be less than 200mb
              </p>
            )}
          </div>
        )}
        {projectFileType === "url" && (
          <div className="form-group relative">
            <HiOutlineLink className="contact-label-icon" />
            <input
              type="url"
              id="fileUrl"
              className="form-control form-control-lg thick w-full border-none outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
              placeholder="Enter file link"
              disabled={isLoading}
              {...register("fileLink")}
            />
          </div>
        )}

        <BudgetSlider budget={budget} setBudget={setBudget} />

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Requesting..." : "Request Quote"}
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            <span className="text-primary-green">Note:</span> We will contact
            you as soon as possible through your E-mail.
          </p>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
