import Link from "next/link";
import AddBookForm from "./components/BookCard";

export default function Home() {

  return (
    <main>
      <h1>first app next js </h1>
      <ul>
        <li>
          <Link href="/books">books</Link>
        </li>
        <li>
          <Link href="/members">members</Link>
        </li>
      </ul>
      </main>
  );
}
