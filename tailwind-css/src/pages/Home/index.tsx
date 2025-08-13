import { Footer, Header, Main } from "../../layout";

export const Home: React.FC = () => {
  return (
    <div>
      <Header title="Home" key={"home__header"} />
      <Main title={"Main"} />
      <Footer title={"Footer"} />
    </div>
  );
};
