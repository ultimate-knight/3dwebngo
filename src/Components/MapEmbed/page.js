export default function MapEmbed({ className = "" }) {
  const lat = 17.386204;
  const lng = 78.356339;

  return (
    <iframe
      title="3DWEBSOFT Foundation location"
      className={`h-[450px] w-full rounded-2xl border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
    />
  );
}