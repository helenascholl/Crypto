const crypto = require('crypto');


function decrypt(password, text) {
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted;

    try {
        decrypted = decipher.update(text, 'hex', 'utf8');
    } catch {
        setTimeout(() => {
            console.error('Wrong ciphertext!');
        }, 10);
        return null;
    }

    try {
        decrypted += decipher.final('utf8');
        return decrypted;
    } catch {
        setTimeout(() => {
            console.error('Wrong password!');
        }, 10);
        return null;
    }
}

module.exports = decrypt;