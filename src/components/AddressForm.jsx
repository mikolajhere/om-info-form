import { FormWrapper } from "./FormWrapper";

export function AddressForm({ serviceDataAddress, street, tips, updateFields }) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="">Miasto</label>
      <input
        autoFocus 
        type="text"
        name="serviceDataAddress"
        value={serviceDataAddress}
        onChange={(e) => updateFields({ serviceDataAddress: e.target.value })}
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
