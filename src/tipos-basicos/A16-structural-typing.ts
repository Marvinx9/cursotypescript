// sistema de tipagem estruturada, o TS só está preocupado com o conteúdo dos tipos e não com o nome do tipo.

type VerifyUserFn = (user: User, sendValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sendValue) => {
  return (
    user.username === sendValue.username && user.password === sendValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sendUser = { username: 'joao', password: '123456' };
const logger = verifyUser(bdUser, sendUser);
console.log(logger);
