const encodingSchemes = {
    'reverse': {
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
        'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
        'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
        'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
        'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
        'z': 'a', ' ': ' ',
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
