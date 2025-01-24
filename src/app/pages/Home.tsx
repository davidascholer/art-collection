import Searchbar from "@/ui/components/searchbar/Searchbar";

export default function Home() {
  const menuItems = ["one","two","three","four","five"]
  return (
    <div>
      Home
      <Searchbar menuItems={menuItems} />
    </div>
  );
}
