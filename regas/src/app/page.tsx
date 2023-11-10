import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

async function create(formData: FormData) {
  "use server";
  const name = formData.get("name")?.valueOf();

  await fetch(`http://localhost:3333/driver`, {
    method: "POST",
    body: JSON.stringify({
      name,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
}

export default async function Home() {
  return (
    <>
      <main>
        <form action={create}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer>
        <Unicons.UilPump size="30" color="#FFFFFF" />
        <Link href="/fuelling-history">
          <Unicons.UilHistory size="30" color="#556270" />
        </Link>
      </footer>
    </>
  );
}
