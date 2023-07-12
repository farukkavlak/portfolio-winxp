import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.png";

const INTRO = `Hi, I'm Ömer Faruk Kavlak, an developer based in Turkey. I graduated from TED University. 
I am familiar with most of common algorithms, microservices, design patterns, clean code principles, tests etc. I've had researches and a few experiences
in multiple computer engineering fields such as web development, mobile development, software development. Now, my primary focus lies in backend-software development.
  I am proficient in various programming languages and frameworks, and I am always striving to learn new things and expand my knowledge to stay up-to-date.
  I am currently looking for a full-time job opportunity in software development. If you are interested in working with me, please feel free to contact me.`;

const WHYSITE = `
  I love everything retro, from pixel art to olds-school games and movies. By combining nostalgia with my passion for technology,
  I decided to use a website as a portfolio that looks like the classic Windows XP operating system with a retro design.
`;


interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Ömer Faruk Kavlak&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/farukkavlak",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/ömerfarukkavlak/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />

            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"Projects"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={pdf}
                text={"Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
