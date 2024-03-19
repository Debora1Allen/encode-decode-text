function encodeText() {
    const plainText = document.getElementById('plainTextEncoder').value;
    const encodingScheme = document.getElementById('encodingSchemeEncoder').value;
    let encodedText = '';

    switch (encodingScheme) {
        case 'base64':
            encodedText = btoa(plainText);
            break;
        case 'caesar':
            encodedText = caesarCipher(plainText);
            break;
        case 'reverse':
            encodedText = reverseAlphabet(plainText);
            break;
        default:
            console.error('Invalid encoding scheme');
    }

    document.getElementById('encodedTextEncoder').value = encodedText;
}

function decodeText() {
    const encodedText = document.getElementById('encodedTextDecoder').value;
    const encodingScheme = document.getElementById('encodingSchemeDecoder').value;
    let decodedText = '';

    switch (encodingScheme) {
        case 'base64':
            decodedText = atob(encodedText);
            break;
        case 'caesar':
            decodedText = caesarCipher(encodedText, true);
            break;
        case 'reverse':
            decodedText = reverseAlphabet(encodedText);
            break;
        default:
            console.error('Invalid decoding scheme');
    }

    document.getElementById('decodedTextDecoder').value = decodedText;
}

function caesarCipher(text, decrypt = false, shift = 3) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabet.includes(char.toLowerCase())) {
            let index = alphabet.indexOf(char.toLowerCase());
            if (decrypt) {
                index = (index - shift + 26) % 26;
            } else {
                index = (index + shift) % 26;
            }
            result += char === char.toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
        } else {
            result += char;
        }
    }

    return result;
}

function reverseAlphabet(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = alphabet.indexOf(char.toLowerCase());
        if (index !== -1) {
            result += char === char.toUpperCase() ? reversedAlphabet[index].toUpperCase() : reversedAlphabet[index];
        } else {
            result += char;
        }
    }

    return result;
}

