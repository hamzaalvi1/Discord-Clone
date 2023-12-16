import { getCurrentUser } from "@/actions";
import { ToggleMode } from "@/components/ToggleMode";
const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main>
      Hello HomePage
      <ToggleMode />
    </main>
  );
};
export default HomePage;
