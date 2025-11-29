"use client";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import "./custom-flatpickr.css";

type Props = {
  value: Date[];
  onChange: (val: Date[]) => void;
};

export default function DateRangePicker({ value, onChange }: Props) {
  return (
    <Flatpickr
      value={value}
      options={{
        mode: "range",
        dateFormat: "d/m/Y",
        minDate: "today",
        showMonths: 1,
        animate: true,
        inline: true,
      }}
      onChange={(dates) => onChange(dates)}
      className="hidden"
    />
  );
}
