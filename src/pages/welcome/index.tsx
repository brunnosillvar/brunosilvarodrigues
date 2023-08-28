import { DefaultLayout } from "@/layouts/defaultLayout";
import { Content} from "./styles";
import AboutMe from "@/components/AboutMe";
import Jobs from "@/components/Jobs";

export default function Welcome() {
  return (
    <DefaultLayout>
      <Content>
        <AboutMe />
        <Jobs />
      </Content>
    </DefaultLayout>
  )
}
