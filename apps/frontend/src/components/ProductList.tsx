import { Product } from '../domain/entities/Product';
import ProductItem from './ProductItem';
import styles from '../styles/ProductList.module.css';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
