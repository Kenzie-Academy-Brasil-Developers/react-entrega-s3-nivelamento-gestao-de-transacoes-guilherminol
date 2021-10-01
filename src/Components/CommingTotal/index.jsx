const CommingTotal = ({ products }) => {
  return (
    <>
      <p>
        Luco potencial: $
        {products.reduce((acc, atual) => {
          if (atual.quantity > 0) {
            return acc + atual.quantity * atual.price;
          }
          return acc;
        }, 0)}
      </p>
    </>
  );
};
export default CommingTotal;
