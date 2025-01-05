import React from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";
import type { PlacesType } from "react-tooltip";

type Props = {
  id: string;
  content: string;
  place: PlacesType;
  offset?: number;
};

const Tooltip = ({ id, content, place = "top", offset = 10 }: Props) => {
  return (
    <ReactTooltip
      id={id}
      content={content}
      place={place}
      className="z-50 !rounded !bg-tooltip !py-1.5 !text-regular !text-textPrimary shadow-all-around"
      classNameArrow="!bg-tooltip shadow-all-around-top"
      offset={offset}
    />
  );
};

export default Tooltip;
