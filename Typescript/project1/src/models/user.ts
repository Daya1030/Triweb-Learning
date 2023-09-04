const addUSerToDB = (userName: string, password: string, age: number) => {
  console.log(userName, password, age);
  return "User Registration done";
};

//interface
interface User {
  id: number;
  uName: string;
  password: string;
  age: number;
  is_active: true | false;
  acountStatus: string | number; //union type
}

const updateUserData = (objUser: User): String => {
  console.log(objUser.uName);

  return "Update done";
};

const checkTypesAndInteface = (objUser: User): String => {
  console.log(objUser.uName);

  return "Update done";
};
export { addUSerToDB, updateUserData, checkTypesAndInteface };
