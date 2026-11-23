export default function MatkulItem({ nama, sks, dosen }) {
  return (
    <li className="kartu matkul">
      <h3>{nama}</h3>
      <p>{dosen}</p>
      <span className="lencana">{sks} SKS</span>
    </li>
  );
}
