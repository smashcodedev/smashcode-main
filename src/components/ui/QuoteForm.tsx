"use client";

import React, { useRef, useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { BiRename } from "react-icons/bi";
import { BudgetSlider } from "@/components";
import isEmail from "validator/lib/isEmail";
import { HiOutlineLink } from "react-icons/hi2";
import submitQuoteFirebase, { uploadFile } from "@/api/apiQuote";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { ref } from "firebase/database";

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFilename, setSelectedFilename] = useState<string>("");

  const onFileButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

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

    console.log("submitted 0");

    try {
      if (projectFileType === "url") {
        await submitQuoteFirebase({
          name: data.name,
          email: data.email,
          description: data.description,
          budget: budget,
          fileLink: data.fileLink,
        });

        console.log("submitted 1");
        toast.success("Your project has been submitted, Thank you!");
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
          console.log("submitted 2");
        }

        toast.success("Your project has been submitted, Thank you!");
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
      console.log(error)
    }
  };
  return (
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
          <p className="text-right text-sm text-red-500">
            This field is required
          </p>
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
          <p className="text-right text-sm text-red-500">
            This field is required
          </p>
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
        {errors.description && descriptionLength === 0 ? (
          <p className="text-right text-sm text-red-500">
            This field is required
          </p>
        ) : (
          <p className="text-right text-sm text-gray-400">
            {descriptionLength} / 400 characters
          </p>
        )}
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
            Upload url
          </label>
        </div>
      </div>

      {projectFileType === "upload" && (
        <div className="form-group relative file-input-button">
          <input
            type="file"
            id="formFile"
            className="mt-4 w-full text-lg"
            style={{ display: "none" }}
            {...register("file", {
              validate: {
                checkFileSize: (value) =>
                  (value && value[0] && value[0]?.size <= 2000000) ||
                  "The file size should be less than 200mb",
              },
            })}
            onChange={onFileInputChange}
            ref={fileInputRef}
          />
          <button
            className="mt-4 rounded-xl bg-primary-green px-2 py-3 text-lg text-white hover:bg-[#30b4ab] disabled:cursor-not-allowed"
            id="formFile"
            type="button"
            onClick={onFileButtonClick}
          >
            Choose File
          </button>
          {selectedFilename && (
            <p className="mt-2 text-gray-500">{selectedFilename}</p>
          )}

          {isFileUploaded && isFileUploaded.length > 0 && errors.file && (
            <p className="mt-2 text-right text-red-500">
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
            placeholder="Document Url"
            disabled={isLoading}
            {...register("fileLink")}
          />
        </div>
      )}

      <BudgetSlider budget={budget} setBudget={setBudget} />

      <div className="text-center">
        <button
          // disabled={isLoading}
          type="submit"
          className="btn btn-primary disabled::opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Requesting..." : "Request Quote"}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
