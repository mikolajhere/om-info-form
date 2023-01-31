import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import DateTimePicker from "react-datetime-picker";

export function DateForm({ date, updateFields }) {
  const [value, setDate] = useState(new Date());
  date = value.toLocaleDateString();

  return (
    <FormWrapper title="Data">
      <label htmlFor="">Wybierz datę:</label>
      {/* <DateTimePicker
        value={value}
        minDate={new Date()}
        format="y-MM-dd"
        onChange={setDate}
      /> */}
    </FormWrapper>
  );
}
