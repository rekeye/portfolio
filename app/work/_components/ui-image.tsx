import { Image } from "next-sanity/image";

function extractDomain(src = "") {
  const parts = src.split("/").filter(Boolean);
  return parts.length >= 2 ? parts[1] : "preview";
}

export function UIImage({
  src,
  alt,
  span = 1,
}: {
  src: string;
  alt: string;
  span?: 1 | 2;
}) {
  const colSpan = span === 2 ? "md:col-span-2" : "md:col-span-1";

  return (
    <div
      className={`overflow-hidden rounded-lg border border-muted/8 bg-[#e8e6e0] ${colSpan}`}
    >
      <div className="flex items-center gap-1.5 border-b border-muted/8 bg-[#ededea] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/15" />
        <div className="mx-auto flex h-5 w-48 items-center justify-center rounded-sm bg-muted/8 px-2">
          <span className="font-geist text-[9px] uppercase tracking-widest text-muted/30">
            {extractDomain(src)}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-cover object-top"
          sizes={
            span === 2
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
      </div>
    </div>
  );
}
