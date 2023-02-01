import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper"; 

export function DateForm({ date, updateFields }) { 

  return (
    <FormWrapper title="Data">
      <label htmlFor="date-time">Wybierz datę:</label> 
    </FormWrapper>
  );
}
