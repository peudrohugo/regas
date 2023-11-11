import Link from "next/link";
import { FaGasPump, FaHistory } from "react-icons/fa";

export default function Footer(props: { path: string }) {
  const { path } = props;
  return (
    <footer>
      {path == "fuelling-history" ? (
        <>
          <Link href="/fuel">
            <FaGasPump color="#556270" fontSize="1.5em" />
          </Link>
          <Link href="">
            <FaHistory color="white" fontSize="1.5em" />
          </Link>
        </>
      ) : (
        <>
          <Link href="">
            <FaGasPump color="white" fontSize="1.5em" />
          </Link>
          <Link href="/fuelling-history">
            <FaHistory color="#556270" fontSize="1.5em" />
          </Link>
        </>
      )}
    </footer>
  );
}
