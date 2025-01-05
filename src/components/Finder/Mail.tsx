import React, { useContext, useState } from "react";

import Draggable from "@/components/DnD/DraggableFinder";
import ActionButtons from "@/components/Finder/ActionButtons";
import EmailWarning from "@/components/Finder/EmailWarning";
import IconButton from "@/components/ui/IconButton";

import Send from "@/icons/send.svg";

import { FinderContext } from "@/providers/FinderProvider";
import { useToast } from "@/providers/ToastProvider";

type Props = {
  status: "minimized" | "maximized" | "normal";
  offset: number;
  windowId: string;
  position: { x: number; y: number };
  scaledDown?: boolean;
};

const Mail = ({ status, offset, windowId, position, scaledDown }: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);

  const { showToast } = useToast();

  const disabled = !email || !message;

  const { closeWindow, minimizeWindow, maximizeWindow, openWindow } =
    useContext(FinderContext);

  const handleClose = () => {
    closeWindow(windowId);
  };

  const handleMinimize = () => {
    minimizeWindow(windowId);
  };

  const handleMaximize = () => {
    maximizeWindow(windowId);
  };

  const handleChangeStatus = () => {
    if (!scaledDown) return;

    openWindow("Desktop", "Desktop", "Mail");
  };

  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const toggleOpen = () => {
    setOpenWarning((prev) => !prev);
  };

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      toggleOpen();
    } else {
      handleSend();
    }
  };

  const handleSend = async () => {
    const body = {
      from: email,
      name,
      subject,
      message,
    };

    handleClose();

    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    showToast(
      "Mail sent successfully",
      "I will get back to you as soon as possible",
    );
  };

  return (
    <Draggable
      status={status}
      windowId={windowId}
      offset={offset}
      position={position}
      scaledDown={scaledDown}
      className="data-[scaled-down='true']:scaled-down relative z-30 flex flex-col bg-white transition-all duration-300 ease-linear data-[status='normal']:rounded-lg data-[status='normal']:shadow-all-around data-[dragging='true']:transition-none"
      handleChangeStatus={handleChangeStatus}
    >
      <div className="flex items-center justify-between rounded-t-lg border-b bg-toolbar px-4 sm:py-2">
        <ActionButtons
          status={status}
          handleClose={handleClose}
          handleMinimize={handleMinimize}
          handleMaximize={handleMaximize}
        />

        <IconButton
          icon={Send}
          title="Send message"
          iconClassName="-rotate-12"
          isDisabled={disabled}
          handleClick={handleSubmit}
        />
      </div>

      <div className="flex flex-1 flex-col text-regular data-[status='normal']:rounded-r-lg">
        {/* from (mail) */}
        <div className="ml-5 flex items-center gap-x-2 border-b">
          <label htmlFor="email" className="text-secondary">
            From:
          </label>

          <input
            type="email"
            id="email"
            className="flex-1 py-2 pr-5 text-textPrimary outline-none"
            value={email}
            onChange={handleMailChange}
          />
        </div>

        {/* from (name) */}
        <div className="ml-5 flex items-center gap-x-2 border-b">
          <label htmlFor="name" className="text-secondary">
            Name:
          </label>

          <input
            type="text"
            id="name"
            className="flex-1 py-2 pr-5 text-textPrimary outline-none"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        {/* subject */}
        <div className="ml-5 flex items-center gap-x-2 border-b">
          <label htmlFor="subject" className="text-secondary">
            Subject:
          </label>

          <input
            type="text"
            id="subject"
            className="flex-1 py-2 pr-5 text-textPrimary outline-none"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>

        {/* message */}
        <div className="ml-5 flex-1">
          <textarea
            className="h-full w-full resize-none py-3 pr-5 text-textPrimary outline-none"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
      </div>

      <EmailWarning
        email={email}
        isOpen={openWarning}
        handleClose={toggleOpen}
        handleSend={handleSend}
      />
    </Draggable>
  );
};

export default Mail;
