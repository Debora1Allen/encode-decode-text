function encodeText() {
    const plainText = document.getElementById('plainTextEncoder').value;
    const encodingScheme = document.getElementById('encodingSchemeEncoder').value;
    let encodedText = '';

    switch (encodingScheme) {
        case 'base64':
            encodedText = Base64.encode(plainText);
            break;
        case 'url':
            encodedText = encodeURI(plainText);
            break;
        case 'html':
            encodedText = htmlEncode(plainText);
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
            decodedText = Base64.decode(encodedText);
            break;
        case 'url':
            decodedText = decodeURI(encodedText);
            break;
        case 'html':
            decodedText = htmlDecode(encodedText);
            break;
        default:
            console.error('Invalid decoding scheme');
    }

    document.getElementById('decodedTextDecoder').value = decodedText;
}


function htmlEncode(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

function htmlDecode(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}
