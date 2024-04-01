import Link from "next/link";
import Image from "next/image";
import Borland from "@images/borland.png";

export default function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
      <h2>404 Not Found</h2>
      <p>you get a 3/5 in page navigation</p>
      <Image className="w-96 rounded-xl" src={Borland} />
      <Link href="/">Return Home</Link>
    </div>
  );
}
