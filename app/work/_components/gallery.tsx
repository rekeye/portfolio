import { UIImage } from "@/app/work/_components/ui-image";

export function Gallery({
  images = [],
}: {
  images: { src: string; alt: string; span?: 1 | 2 }[];
}) {
  return (
    <ul className="mb-24 flex flex-col gap-6">
      {images.length > 0 && (
        <li className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((image, i) => (
            <UIImage key={i} {...image} />
          ))}
        </li>
      )}
    </ul>
  );
}
