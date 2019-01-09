const encrypt = require('./encrypt');
const decrypt = require('./decrypt');

const password ='hallo123';
const plaintext = 'You will never guess this text!';

const ciphertext = encrypt(password, plaintext);

console.log(`Der verschlüsselte Text lautet:
${ciphertext}
`);

const deciphertext = decrypt(password, ciphertext);

if (deciphertext != null) {
    console.log(`Der entschlüsselte Text lautet:
${deciphertext}`);
}