import Cards from "./Components/Card";
export async function getStaticProps() {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();

  return {
    props: { products: data?.products ?? [] },
  };
}

const productpage = ({ products }) => {
  return <Cards items={products} />;
};
export default productpage;
