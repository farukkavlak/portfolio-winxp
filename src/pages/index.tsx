import Head from "next/head";
import { Inter } from "@next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import WinForm from "components/WinForm/WinForm";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import clipboard from "../../assets/clipboard.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
import linkedin from "../../assets/linkedin.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const iconClicked = () => {
    console.log("Icon Clicked!");
  };

  return (
    <>
      <Head>
        <title>Wei Pin's Personal Website - Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DesktopIcon
          doubleClick={iconClicked}
          title="My Computer"
          img={mycomputer}
        />
        <DesktopIcon
          doubleClick={iconClicked}
          title="Recycling Bin"
          img={bin}
        />
        <DesktopIcon
          doubleClick={iconClicked}
          title="My Resume"
          img={clipboard}
        />
        <DesktopIcon
          doubleClick={iconClicked}
          title="My Hobbies"
          img={solitare}
        />
        <DesktopIcon doubleClick={iconClicked} title="My Github" img={github} />
        <DesktopIcon doubleClick={iconClicked} title="My Work" img={cmd} />
        <DesktopIcon
          doubleClick={iconClicked}
          title="My LinkedIn"
          img={linkedin}
        />
        <WinForm
          title="Welcome!"
          width="500"
          body="To my portfolio website, What brought you here today?"
        />
        <StartBar />
      </main>
    </>
  );
}
