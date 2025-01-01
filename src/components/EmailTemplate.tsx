import * as React from "react";

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const colorOptions = ["#FF5252", "#FF5722", "#4CAF50"];

const EmailTemplate = ({ name, email, subject, message }: Props) => {
  const PRIMARY_COLOR =
    colorOptions[Math.floor(Math.random() * colorOptions.length)];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h1 style={{ fontSize: "24px", color: PRIMARY_COLOR }}>{subject}</h1>

      <p style={{ fontSize: "18px" }}>
        <strong>Name:</strong> {name}
      </p>

      <p style={{ fontSize: "18px" }}>
        <strong>Email:</strong> {email}
      </p>

      <p style={{ fontSize: "16px" }}>
        <strong>Message:</strong>
      </p>

      <blockquote
        style={{
          fontStyle: "italic",
          color: "#555",
          padding: "10px 20px",
          borderLeft: `4px solid ${PRIMARY_COLOR}`,
          backgroundColor: "#f9f9f9",
        }}
      >
        {message}
      </blockquote>

      <footer
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#777",
          textAlign: "center",
        }}
      >
        <p>This email was sent from your portfolio&apos;s contact form.</p>
      </footer>
    </div>
  );
};

export default EmailTemplate;
