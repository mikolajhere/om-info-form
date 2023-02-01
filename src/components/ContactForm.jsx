import { FormWrapper } from "./FormWrapper";

export function ContactForm({ dataEmail, serviceDataFlatArea, voivodeship, updateFields }) {
  return (
    <FormWrapper title="Dodatkowe informacje">
      <label htmlFor="dataEmail">E-mail</label>
      <input
        autoFocus 
        id="dataEmail"
        type="dataEmail"
        name="dataEmail"
        value={dataEmail}
        onChange={(e) => updateFields({ dataEmail: e.target.value })}
      />
      <label htmlFor="serviceDataFlatArea">Metaż</label>
      <input 
        type="number"
        name="serviceDataFlatArea"
        id="are"
        min={1}
        max={2000}
        value={serviceDataFlatArea}
        onChange={(e) => updateFields({ serviceDataFlatArea: e.target.value })}
      />
      <label htmlFor="voivodeship">Województwo</label>
      <select
        id="voivodeship"
        name="voivodeship"
        value={voivodeship}
        onChange={(e) => updateFields({ voivodeship: e.target.value })}
      >
        <option value="wybierz">wybierz</option>
        <option value="3">Dolnośląskie</option>
        <option value="10">Kujawsko-pomorskie</option>
        <option value="8">Lubelskie</option>
        <option value="350">Lubuskie</option>
        <option value="5">Łódzkie</option>
        <option value="2">Małopolskie</option>
        <option value="1">Mazowieckie</option>
        <option value="351">Opolskie</option>
        <option value="9">Podkarpackie</option>
        <option value="12">Podlaskie</option>
        <option value="6">Pomorskie</option>
        <option value="4">Śląskie</option>
        <option value="342">Świętokrzyskie</option>
        <option value="13">Warmińsko-mazurskie</option>
        <option value="7">Wielkopolskie</option>
        <option value="11">Zachodniopomorskie</option>
      </select>
    </FormWrapper>
  );
}
