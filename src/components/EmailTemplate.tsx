import * as React from "react";

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const colorOptions = ["#FF5722", "#4CAF50", "#FF5252"];

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
      }}
    >
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          marginBottom: "16px",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontSize: "24px",
                color: PRIMARY_COLOR,
                fontWeight: "bold",
              }}
            >
              {subject}
            </td>
          </tr>
        </tbody>
      </table>

      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td style={{ fontSize: "18px", paddingBottom: "8px" }}>
              <strong>Name:</strong> {name}
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "18px", paddingBottom: "8px" }}>
              <strong>Email:</strong> {email}
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "16px", paddingBottom: "8px" }}>
              <strong>Message:</strong>
            </td>
          </tr>
          <tr>
            <td>
              <blockquote
                style={{
                  fontStyle: "italic",
                  color: "#555",
                  padding: "10px 20px",
                  borderLeft: `4px solid ${PRIMARY_COLOR}`,
                  backgroundColor: "#f9f9f9",
                  margin: "0",
                }}
              >
                {message}
              </blockquote>
            </td>
          </tr>
        </tbody>
      </table>

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
