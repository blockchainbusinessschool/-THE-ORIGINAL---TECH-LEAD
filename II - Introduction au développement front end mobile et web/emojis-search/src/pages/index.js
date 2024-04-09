import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container } from "@mui/material";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import EmojisResults from "@/components/EmojisResult";
import { useState } from "react";
import filterEmojis from "@/utils/filterEmojis";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filteredEmojis, setFilteredEmojis] = useState(filterEmojis("", 20));

  const handleChange = (textSearch) => {
    setFilteredEmojis(filterEmojis(textSearch, 20));
  };

  return (
    <>
      <Head>
        <title>Emojis Search</title>
        <meta name="description" content="Search an emoji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Container maxWidth="sm" sx={{ backgroundColor: "background.paper" }}>
          <Header />
          <SearchInput handleChange={handleChange} />
          <EmojisResults emojis={filteredEmojis} />
        </Container>
      </main>
    </>
  );
}
