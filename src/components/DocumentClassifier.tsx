import { useState } from "react";

const DocumentClassifier = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setCategory(""); // reset output if new file is selected
    }
  };

  const classify = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file); // 'file' must match what Flask expects

      const res = await fetch(
        "https://web-production-8e47.up.railway.app/classify_file",
        {
          method: "POST",
          body: formData, // let the browser set the correct headers
        }
      );

      const data = await res.json();
      setCategory(data.file_class);
      setConfidence(data.confidence);
    } catch (err) {
      console.error("Error classifying file:", err);
      setCategory("Error");
    }

    setLoading(false);
  };

  return (
    <div className="mt-2 px-6 py-6 border rounded-xl shadow-sm bg-gray-50 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900">Try It Yourself</h3>

      <p className="text-sm text-gray-700">
        Upload a document to see how the classifier categorizes it based on the
        text content of the file.
        <br />
        <span className="text-gray-500 text-sm my-2">
          Supported file types: PDF, JPG, PNG, DOCX, XLSX, and XLS
          <br />
        </span>
      </p>

      <div className="space-y-3 mt-0 pt-0">
        <div className="w-full flex flex-wrap gap-2">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer mr-2 px-5 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 inline-block text-sm font-medium"
          >
            Upload a Document
          </label>
          <button
            onClick={classify}
            disabled={!file || loading}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm font-medium"
          >
            {loading ? "Classifying..." : "Run Classifier"}
          </button>
        </div>

        {file && (
          <div className="flex flex-col text-sm text-gray-600 space-y-1">
            <div className="flex-row">
              <span className="font-medium text-gray-800">Selected File:</span>{" "}
              {file.name}
            </div>
            {category && (
              <div className="text-gray-600 font-medium text-lg pt-1">
                <p>
                  Category:{" "}
                  <span className="text-green-600 font-semibold text-lg pt-2">
                    {category}
                  </span>
                  <br />
                  Confidence:{" "}
                  <span className="text-green-600 font-semibold text-lg pt-2">
                    {confidence}
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentClassifier;
