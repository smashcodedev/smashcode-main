import React from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineLink } from "react-icons/hi2";

type FileInputProps = {
  projectFileType: string;
  setProjectFileType: (type: string) => void;
  selectedFilename: string;
  setSelectedFilename: (filename: string) => void;
};

const FileInput: React.FC<FileInputProps> = ({
  projectFileType,
  setProjectFileType,
  selectedFilename,
  setSelectedFilename,
}) => {
  const {
    register,
    watch,
    formState: { isSubmitting: isLoading, errors },
  } = useFormContext();
  const isFileUploaded = watch("file");

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filename = files[0].name;
      setSelectedFilename(filename);
    } else {
      setSelectedFilename("");
    }
  };

  return (
    <>
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
            style={{ color: "white" }}
            {...register("file", {
              validate: {
                checkFileSize: (value) =>
                  (value && value[0] && value[0]?.size <= 209715200) ||
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
    </>
  );
};

export default FileInput;
