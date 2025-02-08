import { useState } from "react";
import { uploadReport } from "../api/reportApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const validateXmlFile = (selectedFile: File) => {
    if (!selectedFile) {
      toast.error("No file selected.");
      return false;
    }
    if (
      selectedFile.type !== "text/xml" &&
      !selectedFile.name.endsWith(".xml")
    ) {
      toast.error("Invalid file type. Please upload an XML file.");
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile && validateXmlFile(selectedFile)) {
      setFile(selectedFile);
    } else {
      setFile(null); 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a valid XML file before uploading.");
      return;
    }

    try {
      await uploadReport(file);
      toast.success("File uploaded successfully!");
      setFile(null); 
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
    } catch (error) {
      toast.error("Error uploading file.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="file"
          accept=".xml"
          onChange={handleFileChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          disabled={!file} 
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
