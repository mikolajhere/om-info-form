import { FormWrapper } from "./FormWrapper";

export function AdditionalForm({ extraInfo, updateFields }) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="extraInfo">Dodatkowe informacje</label> 
      <textarea
        type="text"
        name="extraInfo"
        id="extraInfo"
        autoFocus
        required
        value={extraInfo}
        onChange={(e) => updateFields({ extraInfo: e.target.value })} 
        rows="10"
      ></textarea>
    </FormWrapper>
  );
}
