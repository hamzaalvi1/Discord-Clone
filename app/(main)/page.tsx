import { getCurrentUser } from "@/app/actions";
import { ToggleMode } from "@/components/ToggleMode";
const HomePage = async () => {
  const user = await getCurrentUser();
 
  return (
    <main>
      Hello HomePage
      <ToggleMode />
    </main>
  );
};
export default HomePage;
