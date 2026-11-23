import Button from './Button.jsx';

export default function FilterButtons({ pilihan, aktif, onPilih }) {
  return (
    <div className="filter" role="group" aria-label="Filter jumlah SKS">
      {pilihan.map((p) => (
        <Button
          key={p.nilai}
          variant={aktif === p.nilai ? 'utama' : 'garis'}
          aria-pressed={aktif === p.nilai}
          onClick={() => onPilih(p.nilai)}
        >
          {p.label}
        </Button>
      ))}
    </div>
  );
}
