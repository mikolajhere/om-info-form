import { FormWrapper } from "./FormWrapper";

export function ContactForm({ email, area, propertyType, updateFields }) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="">E-mail</label>
      <input
        autoFocus 
        type="email"
        name="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="">Metaż</label>
      <input 
        type="number"
        name="area"
        min={1}
        max={2000}
        value={area}
        onChange={(e) => updateFields({ area: e.target.value })}
      />
      <label htmlFor="">Typ nieruchomości</label>
      <input 
        type="text"
        name="propertyType"
        value={propertyType}
        onChange={(e) => updateFields({ propertyType: e.target.value })}
      />
    </FormWrapper>
  );
}
