import React, { useState, useEffect } from "react";

interface AlertProps {
  message: string;
  type: "success" | "warning" | "error";
}

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 4000); 
    return () => clearTimeout(timeoutId);
  }, []);

  if (type=="success"){
    return (
      <div style={{ zIndex: 9999}} className={`alertStyle-success ${visible ? "alert-in" : "alert-out"}`}> 
        <span style={{width: "387px", textAlign:"center"}} >{message}</span>
      </div>
    );
  }
  else if (type=="warning"){
    return (
      <div style={{ zIndex: 9999}} className={`alertStyle-warning ${visible ? "alert-in" : "alert-out"}`}> 
        <span style={{width: "387px", textAlign:"center"}} >{message}</span>
      </div>
    );
  }
  else if (type=="error"){
    return (
      <div style={{ zIndex: 9999}} className={`alertStyle-error ${visible ? "alert-in" : "alert-out"}`}> 
        <span style={{width: "387px", textAlign:"center"}} >{message}</span>
      </div>
    );
  }
  else {
    return (
      <div style={{ zIndex: 9999}} className={`alertStyle-undefined ${visible ? "alert-in" : "alert-out"}`}> 
        <span style={{width: "387px", textAlign:"center"}} >{message}</span>
      </div>
    );
  }
  
};
