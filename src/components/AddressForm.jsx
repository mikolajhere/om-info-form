import { FormWrapper } from "./FormWrapper";

export function AddressForm({
  serviceDataAddressCityText,
  serviceDataAddress,
  tips,
  updateFields,
}) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="serviceDataAddressCityText">Miasto</label>
      <input
        autoFocus
        type="text"
        name="serviceDataAddressCityText"
        id="serviceDataAddressCityText"
        value={serviceDataAddressCityText}
        onChange={(e) =>
          updateFields({
            dataValues: { serviceDataAddressCityText: e.target.value },
          })
        }
      />
      <label htmlFor="serviceDataAddress">Ulica i numer</label>
      <input
        type="text"
        name="serviceDataAddress"
        id="serviceDataAddress"
        value={serviceDataAddress}
        onChange={(e) =>
          updateFields({ dataValues: { serviceDataAddress: e.target.value } })
        }
      />
      <label htmlFor="tips">Wskazówki dojazdu</label>
      <input
        type="text"
        name="tips"
        id="tips"
        value={tips}
        onChange={(e) => updateFields({ tips: e.target.value })}
      />
    </FormWrapper>
  );
}
