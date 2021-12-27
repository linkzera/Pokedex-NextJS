import Link from "next/link";
import style from "../styles/layout.module.css";

export default function Layout(props) {
  return (
    <Link href={props.href ?? "/"} passHref>
      <button className={style.link}>{props.children ?? "Back"}</button>
    </Link>
  );
}
