// Input terkontrol: nilainya dikelola state di komponen parent (App)
export default function SearchBar({ nilai, onUbah, label, placeholder }) {
  return (
    <div className="field">
      <label htmlFor="cari">{label}</label>
      <input
        id="cari"
        type="search"
        value={nilai}
        placeholder={placeholder}
        onChange={(e) => onUbah(e.target.value)}
      />
    </div>
  );
}
