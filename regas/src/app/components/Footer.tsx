import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function Footer(props: { path: string }) {
  const { path } = props;
  return (
    <footer>
      {path == "fuelling-history" ? (
        <>
          <Link href="/">
            <Unicons.UilPump size="30" color="#556270" />
          </Link>
          <Link href="">
            <Unicons.UilHistory size="30" color="#FFFFFF" />
          </Link>
        </>
      ) : (
        <>
          <Link href="">
            <Unicons.UilPump size="30" color="#FFFFFF" />
          </Link>
          <Link href="/fuelling-history">
            <Unicons.UilHistory size="30" color="#556270" />
          </Link>
        </>
      )}
    </footer>
  );
}
