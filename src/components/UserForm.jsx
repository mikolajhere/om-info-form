import { FormWrapper } from "./FormWrapper";

export function UserForm({ dataPhone, serviceHomeType, updateFields }) {
  return (
    <FormWrapper title="Twoja nieruchomość">
      <label htmlFor="dataPhone">Numer telefonu</label>
      <input
        autoFocus
        // required
        name="dataPhone"
        type="tel"
        id="dataPhone"
        value={dataPhone}
        onChange={(e) => updateFields({ dataPhone: e.target.value })}
      />

      <label htmlFor="serviceHomeType">Typ nieruchomości</label>
      <input
        type="text"
        name="serviceHomeType"
        id="serviceHomeType"
        value={serviceHomeType}
        onChange={(e) => updateFields({ serviceHomeType: e.target.value })}
      />
    </FormWrapper>
  );
}
