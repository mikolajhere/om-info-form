import { FormWrapper } from "./FormWrapper";

export function AddressForm({
  serviceDataAddressCityText,
  serviceDataAddress,
  tips,
  updateFields,
}) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="">Miasto</label>
      <input
        autoFocus
        type="text"
        name="dataValues[serviceDataAddressCityText]"
        value={serviceDataAddressCityText}
        onChange={(e) =>
          updateFields({ "dataValues[serviceDataAddressCityText]": e.target.value })
        }
      />
      <label htmlFor="">Ulica i numer</label>
      <input
        type="text"
        name="dataValues[serviceDataAddress]"
        value={serviceDataAddress}
        onChange={(e) => updateFields({ "dataValues[serviceDataAddress]": e.target.value })}
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
