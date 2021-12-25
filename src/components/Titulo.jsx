import Head from "next/head";

export default function Titulo({children}){
    return <Head><title>{children}</title></Head>
}