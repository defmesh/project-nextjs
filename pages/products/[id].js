const singleProducts = ({ product }) => {
  return (
    <div className=" text-white container bg-black mt-40 px-4  mb-20">
      {product.title}
    </div>
  );
};
export default singleProducts;

export async function getStaticPaths() {
  const req = await fetch("https://dummyjson.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id },
    };
  });
  return {
    paths,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch("https://dummyjson.com/products/" + id);
  const product = await req.json();
  return {
    props: { product },
  };
}
