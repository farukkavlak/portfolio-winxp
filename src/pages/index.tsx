import Head from "next/head";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MyWork from "@/programs/MyWork";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const iconClicked = () => {
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/farukkavlak", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/ömerfarukkavlak/",
      "_blank",
      "noreferrer"
    );
  };

  const handleOpenResume = () => {
    window.open("./Resume.pdf");
  };

  return (
    <>
      <Head>
        <title>Ömer Faruk Kavlak</title>
        <meta name="description" content="My Personal Space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={() => handleRunApp(0)} 
            title="My Computer"
            img={mycomputer}
          />
          <DesktopIcon
            appID={2}
            doubleClick={iconClicked}
            title="Recycling Bin"
            img={bin}
          />
          <DesktopIcon
            appID={3}
            doubleClick={handleOpenResume}
            title="Resume"
            img={pdf}
          />
          <DesktopIcon
            appID={4}
            doubleClick={handleOpenLinkedin}
            title="LinkedIn"
            img={linkedin}
          />
          <DesktopIcon
            appID={5}
            doubleClick={handleOpenGitHub}
            title="Github"
            img={github}
          />
          <DesktopIcon
            appID={6}
            doubleClick={() => handleRunApp(2)}
            title="Projects"
            img={cmd}
          />
          {Tabs.map((tab, index) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.MYWORK ? (
                  <MyWork id={tab.id} />
                ) : tab.program === App.WELCOME ? (
                  <Welcome id={tab.id} />
                ) : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
