import Section from './Section.jsx';

const KOMPONEN = [
  ['Header', 'Navigasi dan identitas (nama dan NIM). Menerima props nama dan nim.'],
  ['Section', 'Pembungkus bagian halaman yang dipakai berulang. Menerima props id, judul, dan children.'],
  ['ProfilCard', 'Kartu profil. Menerima props nama, nim, prodi, fakultas, kampus, dan asal.'],
  ['Button', 'Tombol reusable dengan varian utama, garis, dan bahaya.'],
  ['SearchBar', 'Kolom pencarian terkontrol. Nilainya dikelola state di App.'],
  ['FilterButtons', 'Tombol filter SKS. Menerima props pilihan, aktif, dan onPilih.'],
  ['MatkulList dan MatkulItem', 'Menampilkan daftar mata kuliah dengan map() dan key.'],
  ['ProyekCard dan ProyekForm', 'Kartu proyek (state terbuka) dan formulir tambah proyek (state input).'],
];

export default function Penjelasan() {
  return (
    <Section id="tentang" judul="Tentang Aplikasi Ini">
      <p>Aplikasi dipecah menjadi beberapa komponen React yang masing-masing berada di file terpisah:</p>
      <ul className="daftar">
        {KOMPONEN.map(([nama, fungsi]) => (
          <li key={nama}>
            <strong>{nama}</strong>: {fungsi}
          </li>
        ))}
      </ul>
      <h3>Props</h3>
      <p>Data dikirim dari komponen parent ke child lewat props, misalnya App mengirim daftar mata kuliah ke MatkulList dan data proyek ke ProyekCard.</p>
      <h3>State (useState)</h3>
      <p>App menyimpan state kata pencarian, filter SKS, dan daftar proyek. ProyekCard menyimpan state apakah detail terbuka, dan ProyekForm menyimpan state isi formulir serta pesan galat.</p>
      <h3>Event handling</h3>
      <p>Aksi pengguna ditangani lewat onChange (mengetik pencarian dan formulir), onClick (filter, lihat detail, hapus), dan onSubmit (tambah proyek).</p>
      <h3>Conditional dan list rendering</h3>
      <p>Detail proyek, pesan galat, dan pesan "tidak ada hasil" tampil berdasarkan kondisi. Daftar mata kuliah dan proyek ditampilkan dengan map() dan key.</p>
    </Section>
  );
}
