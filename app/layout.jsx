import "@styles/global.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Promptare",
  description: `Promptare is the ultimate social media platform for Chat GPT users, where they can share and discover useful prompts and commands to enhance their Chat GPT experience. Whether it's learning new skills, improving productivity, or simply having fun, Promptare offers a vibrant community of like-minded individuals and a wealth of resources to make the most out of Chat GPT's capabilities. Join Promptare now and take your Chat GPT usage to the next level!`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        <Navbar />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
