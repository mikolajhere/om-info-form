import { FormWrapper } from "./FormWrapper";

export function UserForm({ phone, propertyType, updateFields }) {
  return (
    <FormWrapper title="Twoja nieruchomość">
      <label htmlFor="phone">Numer telefonu</label>
      <input
        autoFocus
        // required
        name="phone"
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />

      <label htmlFor="propertyType">Typ nieruchomości</label>
      <input
        type="text"
        name="propertyType"
        id="propertyType"
        value={propertyType}
        onChange={(e) => updateFields({ propertyType: e.target.value })}
      />
    </FormWrapper>
  );
}
