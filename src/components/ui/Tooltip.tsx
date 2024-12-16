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
      className="shadow-all-around !text-regular !rounded !bg-sidebar !py-1.5 !text-textPrimary"
      classNameArrow="!bg-sidebar shadow-all-around-top"
      offset={offset}
    />
  );
};

export default Tooltip;
