import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>

      <Link href="/color-palette-generator">
        Go to Color Palette Generator
      </Link>
    </div>
  );
}