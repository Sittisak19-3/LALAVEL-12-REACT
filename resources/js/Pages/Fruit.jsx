import { useState } from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" style={{ textAlign: 'left', padding: '5px', backgroundColor: '#eee' }}>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td style={{ padding: '5px' }}>{name}</td>
      <td style={{ padding: '5px' }}>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>Name</th>
          <th style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form style={{ marginBottom: '10px' }}>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)}
        style={{ padding: '5px', width: '100%', marginBottom: '5px' }}
      />
      <label style={{ display: 'block' }}>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '} Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ padding: '20px', maxWidth: '300px', border: '1px solid #ccc', margin: '20px auto' }}>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={products} 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function Fruit() {
  return <FilterableProductTable products={PRODUCTS} />;
}