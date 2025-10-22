import createUser from './user';

const user = createUser('Antonela', 36)

console.log(`El usuario se llama ${user.name} y tiene ${user.age} años`);
