import React, { useState, useEffect } from "react";
import { parse } from "marked";
// import "github-markdown-css";
import "@/styles/github.css";

const GithubReadme: React.FC<{ username: string; repo: string }> = ({
  username,
  repo,
}) => {
  const [readmeContent, setReadmeContent] = useState<string>("");

  useEffect(() => {
    // Function to fetch the README content from GitHub
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${username}/${repo}/master/readme.md`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch README");
        }

        const data = await response.text();

        if (data) {
          setReadmeContent(data);
        }
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    // fetchReadmeApi();
    fetchReadme();
  }, [username, repo]);

  const ghContent = parse(readmeContent);

  return (
    <>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: ghContent,
        }}
      />
    </>
  );
};

export default GithubReadme;
