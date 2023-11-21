import { InputField } from "@/components/Input";
const HomePage = () => {
  return (
    <main>
      Hello HomePage
      <InputField
        type="text"
        name="hello"
        placeholder="hello"
        isCustomInput={true}
      />
    </main>
  );
};
export default HomePage;
