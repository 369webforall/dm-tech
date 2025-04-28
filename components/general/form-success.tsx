import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

type FormSuccessProps = {
  message?: string;
};

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AiFillExclamationCircle size={16} />
      {message}
    </div>
  );
};

export default FormSuccess;
