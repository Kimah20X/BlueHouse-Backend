
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