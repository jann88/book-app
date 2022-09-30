

function createData(title, author, publication, edition) {
  return { title, author, publication, edition  };
}

const rows = [
  createData('"The Swordswoman",', "Malcolm Archibald", "Penguin"),
  createData(),
  createData(),
  createData(),
  createData(),
];

export default function BasicTable