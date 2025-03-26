10.// Await / Async
/*
Import uploadPhoto and createUser from utils.js

Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:

{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
If one of the async function fails, return an empty object. Example:

{
  photo: null,
  user: null,
}
*/ 
import { uploadPhoto, createUser } from './Utils.js';

  export default async function asyncUploadUser() {
    try {
      const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
      return { photo, user };
    } catch {
      return { photo: null, user: null };
    }
  }

const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();