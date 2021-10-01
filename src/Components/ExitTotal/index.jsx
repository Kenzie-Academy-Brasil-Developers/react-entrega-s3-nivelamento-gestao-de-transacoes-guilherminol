const ExitTotal = ({ products }) => {
  return (
    <>
      <p>
        $
        {products.reduce((acc, atual) => {
          if (atual.quantity < 0) {
            return acc + atual.quantity * -1 * atual.price;
          }
          return acc;
        }, 0)}
      </p>
    </>
  );
};
export default ExitTotal;
