import { InputField } from "@/components/Input";
const HomePage = () => {
  return (
    <main>
      Hello HomePage
      <InputField type="text" name="hello" value={""} placeholder="hello" />
    </main>
  );
};
export default HomePage;
