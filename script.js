const encodingSchemes = {
    'reverse': {
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
        'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
        'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
        'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
        'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
        'z': 'a', ' ': ' ',
    },
    'caesar': {
        'a': 'd', 'b': 'e', 'c': 'f', 'd': 'g', 'e': 'h',
        'f': 'i', 'g': 'j', 'h': 'k', 'i': 'l', 'j': 'm',
        'k': 'n', 'l': 'o', 'm': 'p', 'n': 'q', 'o': 'r',
        'p': 's', 'q': 't', 'r': 'u', 's': 'v', 't': 'w',
        'u': 'x', 'v': 'y', 'w': 'z', 'x': 'a', 'y': 'b',
        'z': 'c', ' ': ' ',
    },
    'atbash': {
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
        'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
        'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
        'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
        'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
        'z': 'a', ' ': ' ',
    },
    'rot13': {
        'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r',
        'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w',
        'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b',
        'p': 'c', 'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
        'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l',
        'z': 'm', ' ': ' ',
    },
    'morse': {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
        'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
        'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
        'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/',
    },
    'binary': {
        'a': '01100001', 'b': '01100010', 'c': '01100011', 'd': '01100100', 'e': '01100101',
        'f': '01100110', 'g': '01100111', 'h': '01101000', 'i': '01101001', 'j': '01101010',
        'k': '01101011', 'l': '01101100', 'm': '01101101', 'n': '01101110', 'o': '01101111',
        'p': '01110000', 'q': '01110001', 'r': '01110010', 's': '01110011', 't': '01110100',
        'u': '01110101', 'v': '01110110', 'w': '01110111', 'x': '01111000', 'y': '01111001',
        'z': '01111010', ' ': '00100000',
    },
};


function encodeString(plainText, encodingScheme) {
    plainText = plainText.toLowerCase();
    let encodedString = '';
    const scheme = encodingSchemes[encodingScheme];
    
    if (!scheme) {
        return 'Error: Encoding scheme not found';
    }
    
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        if (scheme[char] !== undefined) {
            encodedString += scheme[char];
        } else {
            encodedString += char;
        }
    }
    
    return encodedString;
}

function decodeString(encodedString, encodingScheme) {
    encodedString = encodedString.toLowerCase();
    let decodedString = '';
    
    const scheme = encodingSchemes[encodingScheme];
    
    if (!scheme) {
        return 'Error: Encoding scheme not found';
    }
    
    for (let i = 0; i < encodedString.length; i++) {
        let char = encodedString[i];
        if (scheme[char] !== undefined) {
            decodedString += scheme[char];
        } else {
            decodedString += char;
        }
    }
    return decodedString;
}

function encodeText() {
    const plainText = document.getElementById('plainTextEncoder').value;
    const encodingScheme = document.getElementById('encodingSchemeEncoder').value;
    const encodedText = encodeString(plainText, encodingScheme);
    document.getElementById('encodedTextEncoder').value = encodedText;
}

function decodeText() {
    const encodedText = document.getElementById('encodedTextDecoder').value;
    const encodingScheme = document.getElementById('encodingSchemeDecoder').value;
    const decodedText = decodeString(encodedText, encodingScheme);
    document.getElementById('decodedTextDecoder').value = decodedText;
}
