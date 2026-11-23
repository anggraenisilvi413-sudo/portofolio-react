export default function Footer({ nama, nim }) {
  return (
    <footer className="footer">
      <p>
        &copy; 2026 {nama} &middot; NIM {nim} &middot; Dibuat dengan React dan Vite
      </p>
    </footer>
  );
}
