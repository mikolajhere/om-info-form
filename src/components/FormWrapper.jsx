export function FormWrapper({ title, children }) {
  return (
    <>
      <h2><span>{title}</span></h2>
      <div className="form-content">{children}</div>
    </>
  );
}
