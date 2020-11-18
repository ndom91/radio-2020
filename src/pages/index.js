import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntry("4NtJeBncecmyvJi4OrY0w");
    console.log(entries);
    if (entries.fields) return entries.fields;
    console.log(`Error getting Entries for ${entries.sys.type}.`);
  }

  useEffect(() => {
    async function getPosts() {
      await fetchEntries();
    }
    getPosts();
  }, []);

  return (
    <>
      <SEO title="Newtelco Radio" />
      <Header />
      <Hero />
      <Features />
    </>
  );
}

export default HomePage;
