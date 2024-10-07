import { HomeContainer } from "../containers";
import { withMainLayout } from "../layout";

export const HomePage: React.FC = withMainLayout(() => {
  return <HomeContainer />;
});
