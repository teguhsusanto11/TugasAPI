import readline from 'readline';
import * as UserService from './services/userService.js';

console.log(`
    Users Management App:

    1. add
    2. list
    3. update
    4. delete
    5. detail
`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    switch(input) {
        case 'add' : 
            //memanggil fungsi adduser
            add();
            break;
        case 'list': 
            // memanggil fungsi get user
            get();
            break;
        default:
            console.log('perintah yang dipilih tidak dikenali');
            break;
    }
});

function add() {
    rl.question('Masukan nama user: ', (name) => {
        rl.question('Masukkan email user: ', (email) => {
            rl.question('masukkan password: ', (password) => {
                rl.question('masukkan alamat: ', (address) =>{
                    UserService.createUser(name, email, password, address)
                })
            })
        })
    })
}

function get() {
    console.log('Berikut data user yang ada didatabase: ')
    UserService.getUsers();
}