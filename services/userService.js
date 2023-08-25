import * as UserRepo from '../repository/user.js';

export const getUsers = async () => {
    const [result] = await UserRepo.getData();
    
    console.log(result);
}

export const createUser = async (name, email, password, address) => {
    const [result] = await UserRepo.createData(name, email, password, address);

    console.log(result);
}