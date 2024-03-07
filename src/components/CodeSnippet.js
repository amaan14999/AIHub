import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCopy as fasCopySolid } from "@fortawesome/free-solid-svg-icons";

const CodeSnippet = ({ code, language }) => {
  // State to track if the code has been copied
  const [isCopied, setIsCopied] = useState(false);

  // Highlight the code when the component mounts
  useEffect(() => {
    hljs.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-gray-800 text-white py-2 px-4">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          {isCopied ? (
            <FontAwesomeIcon icon={fasCopySolid} />
          ) : (
            <FontAwesomeIcon icon={faCopy} />
          )}
        </button>
      </div>
      <pre className="hljs">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
