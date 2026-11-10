export type Product = {
  id: string;
  category: string;
  kva: string;
  voltage: string;
  title: string;
  description: string;
  price: number;
  image: string;

  clamp?: {
    id: string;
    name: string;
    price: number;
  };
};

export const products: Product[] = [
  {
    id: "stb-05kva-90v",
    category: "stabilizers",
    kva: "0.5 KVA",
    voltage: "90V A/M",
    title: "0.5 KVA 90V A/M STABILIZER",
    description:
      "Compact voltage protection solution for suitable home appliances.",
    price: 0,
    image: "/products/stabilizers/0.5kva-90v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-1kva-50v",
    category: "stabilizers",
    kva: "1 KVA",
    voltage: "50V A/M",
    title: "1 KVA 50V A/M STABILIZER",
    description:
      "Reliable voltage protection for appliances requiring stable power.",
    price: 0,
    image: "/products/stabilizers/1kva-50v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-1kva-90v",
    category: "stabilizers",
    kva: "1 KVA",
    voltage: "90V A/M",
    title: "1 KVA 90V A/M STABILIZER",
    description:
      "Dependable voltage regulation for home and commercial applications.",
    price: 0,
    image: "/products/stabilizers/1kva-90v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-2kva-50v",
    category: "stabilizers",
    kva: "2 KVA",
    voltage: "50V A/M",
    title: "2 KVA 50V A/M STABILIZER",
    description:
      "Higher-capacity voltage protection for larger appliances.",
    price: 0,
    image: "/products/stabilizers/2kva-50v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-3kva-50v",
    category: "stabilizers",
    kva: "3 KVA",
    voltage: "50V",
    title: "3 KVA 50V STABILIZER",
    description:
      "Powerful voltage regulation designed for demanding applications.",
    price: 0,
    image: "/products/stabilizers/3kva-50v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-3kva-90v",
    category: "stabilizers",
    kva: "3 KVA",
    voltage: "90V",
    title: "3 KVA 90V STABILIZER",
    description:
      "Reliable protection against voltage fluctuations.",
    price: 0,
    image: "/products/stabilizers/3kva-90v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-140v",
    category: "stabilizers",
    kva: "4 KVA",
    voltage: "140V",
    title: "4 KVA 140V STABILIZER",
    description:
      "Heavy-duty voltage regulation for larger electrical loads.",
    price: 0,
    image: "/products/stabilizers/4kva-140v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-130v",
    category: "stabilizers",
    kva: "4 KVA",
    voltage: "130V",
    title: "4 KVA 130V STABILIZER",
    description:
      "Stable and dependable power protection for demanding applications.",
    price: 0,
    image: "/products/stabilizers/4kva-130v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-50v",
    category: "stabilizers",
    kva: "4 KVA",
    voltage: "50V",
    title: "4 KVA 50V STABILIZER",
    description:
      "High-capacity voltage stabilization for electrical equipment.",
    price: 0,
    image: "/products/stabilizers/4kva-50v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-90v",
    category: "stabilizers",
    kva: "4 KVA",
    voltage: "90V",
    title: "4 KVA 90V STABILIZER",
    description:
      "Powerful voltage protection for home and commercial use.",
    price: 0,
    image: "/products/stabilizers/4kva-90v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-5kva-50v",
    category: "stabilizers",
    kva: "5 KVA",
    voltage: "50V",
    title: "5 KVA 50V STABILIZER",
    description:
      "Heavy-duty stabilizer designed for high-power applications.",
    price: 0,
    image: "/products/stabilizers/5kva-50v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-5kva-90v",
    category: "stabilizers",
    kva: "5 KVA",
    voltage: "90V",
    title: "5 KVA 90V STABILIZER",
    description:
      "High-capacity voltage protection for demanding electrical systems.",
    price: 0,
    image: "/products/stabilizers/5kva-90v.jpg",

    clamp: {
      id: "wall-clamp-standard",
      name: "Wall Mount Clamp",
      price: 0,
    },
  },
];


export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}


export function getProductsByCategory(category: string) {
  return products.filter(
    (product) => product.category === category
  );
}