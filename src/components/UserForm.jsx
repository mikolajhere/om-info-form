import { FormWrapper } from "./FormWrapper";

export function UserForm({ dataPhone, serviceHomeType, updateFields }) {
  return (
    <FormWrapper title="Podstawowe dane">
      <label htmlFor="dataPhone">Numer telefonu</label>
      <input
        autoFocus
        required
        name="dataPhone"
        type="tel"
        id="dataPhone"
        minLength={9}
        maxLength={14}
        value={dataPhone}
        onChange={(e) => updateFields({ dataPhone: e.target.value })}
      />

      <label htmlFor="serviceHomeType">Typ nieruchomości</label>
      <select
        id="serviceHomeType"
        name="serviceHomeType"
        value={serviceHomeType}
        onChange={(e) =>
          updateFields({ "dataValues[serviceHomeType]": e.target.value })
        }
      >
        <option value="wybierz">wybierz</option>
        <option value="390">Mieszkanie</option>
        <option value="391">Dom</option>
        <option value="391">Inne</option>
      </select>
    </FormWrapper>
  );
}
