export default function BodyLayout({
  background,
  children,
}: {
  background?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${background}`}>
      <div className="max-w-[1160px] mx-auto p-4 sm:p-6 md:p-8">{children}</div>
    </div>
  );
}
