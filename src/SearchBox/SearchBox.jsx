export const SearchBox = ({ handleInputChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="contact"
        onChange={handleInputChange}
        value={value}
      />
    </>
  );
};
