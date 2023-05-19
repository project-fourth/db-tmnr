const userList: Record<string, object> = {
  qred: {
    name: "Paul",
    age: 22,
  },
  xdtg: {
    name: "Emma",
    age: 20,
  },
  rdcs: {
    name: "Audrey",
    age: 18,
  },
};

const db = {
  userList,
  userById: (id: string) => {
    return userList[id];
  },
  userCreate: (args: { id: string; name: string; age: number }) => {
    userList[args.id] = { name: args.name, age: args.age };

    return userList[args.id];
  },
};
export default db;
