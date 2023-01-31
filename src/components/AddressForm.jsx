import { FormWrapper } from "./FormWrapper";

export function AddressForm({ city, street, tips, updateFields }) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="">Miasto</label>
      <input
        autoFocus 
        type="text"
        name="city"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="">Ulica i numer</label>
      <input 
        type="text"
        name="street" 
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="">Wskazówki dojazdu</label>
      <input 
        type="text"
        name="tips"
        value={tips}
        onChange={(e) => updateFields({ tips: e.target.value })}
      />
    </FormWrapper>
  );
}
