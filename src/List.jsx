function List() {
  const fruits = [
    { id: 1, name: "banana", calories: 95 },
    { id: 2, name: "apple", calories: 45 },
    { id: 3, name: "orange", calories: 66 },
    { id: 4, name: "cherry", calories: 81 },
  ];

  const fruchtliste = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ol className="Liste">{fruchtliste}</ol>;
}
export default List;
