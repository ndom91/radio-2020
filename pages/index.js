import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntry("4NtJeBncecmyvJi4OrY0w");
    console.log(entries);
    // console.log(entries.toPlainObject());
    if (entries.fields) return entries.fields;
    console.log(`Error getting Entries for ${entries.sys.type}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetchEntries();
    async function getPosts() {
      await fetchEntries();
      // setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        <Hero />
        Test!
      </div>
    </>
  );
}

export default HomePage;
