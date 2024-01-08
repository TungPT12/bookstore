import { ref, child, get, update, set, remove } from "firebase/database";
import { database } from "../config/firebase";

const insertData = async (tableName, id, newData) => {
  let isSuccess = false;
  const dbRef = ref(database, `${tableName}/${id}`);
  await set(dbRef, newData)
    .then((isSuccess = true))
    .catch((error) => {
      console.log(error);
    });
  return isSuccess;
};

const queryAllData = async (tableName) => {
  const dbRef = ref(database);
  let data;
  await get(child(dbRef, `${tableName}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        return data;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
};

const queryDataById = async (tableName, id) => {
  const dbRef = ref(database);
  let data;
  await get(child(dbRef, `${tableName}/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        return data;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
};

const getProductDetailById = async (id) => {
  const dbRef = ref(database);
  let data;
  await get(child(dbRef, `productDetail/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        return data;
      }
      return null
    })
    .catch((error) => {
      console.log(error);
      return "";
    });
  return data;
};

const updateDataById = async (tableName, id, updateData) => {
  let isSuccess = false;
  const dbRef = ref(database, `${tableName}/${id}`);
  await update(dbRef, updateData)
    .then((snapshot) => {
      isSuccess = true;
    })
    .catch((error) => {
      console.error(error);
    });
  return isSuccess;
};

const deleteData = async (tableName, id) => {
  let isSuccess = false;
  const dbRef = ref(database, `${tableName}/${id}`);
  await remove(dbRef)
    .then((isSuccess = true))
    .catch((error) => {
      console.error(error);
    });
  return isSuccess;
};

export {
  insertData,
  queryAllData,
  queryDataById,
  updateDataById,
  deleteData,
  getProductDetailById,
};
