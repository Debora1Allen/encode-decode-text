
const encodingFunctions = {
    'base64': {
        encode: (text) => btoa(text),
        decode: (text) => atob(text)
    },
    'caesar': {
        encode: (text) => caesarCipher(text),
        decode: (text) => caesarCipher(text, true)
    },
    'reverse': {
        encode: (text) => reverseAlphabet(text),
        decode: (text) => reverseAlphabet(text)
    }
};

function encodeText() {
    const plainText = document.getElementById('plainTextEncoder').value;
    const encodingScheme = document.getElementById('encodingSchemeEncoder').value;

    try {
        const encodedText = encodingFunctions[encodingScheme].encode(plainText);
        document.getElementById('encodedTextEncoder').value = encodedText;
    } catch (error) {
        console.error('Error encoding text:', error.message);
        showErrorModal(error.message);
    }
}

function decodeText() {
    const encodedText = document.getElementById('encodedTextDecoder').value;
    const encodingScheme = document.getElementById('encodingSchemeDecoder').value;

    try {
        const decodedText = encodingFunctions[encodingScheme].decode(encodedText);
        document.getElementById('decodedTextDecoder').value = decodedText;
    } catch (error) {
        console.error('Error decoding text:', error.message);
        showErrorModal(error.message);
    }
}


function clearInputs() {
    document.getElementById('plainTextEncoder').value = '';
    document.getElementById('encodedTextEncoder').value = '';
    document.getElementById('encodedTextDecoder').value = '';
    document.getElementById('decodedTextDecoder').value = '';
}

function caesarCipher(text, decrypt = false, shift = 3) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            index = (decrypt ? index - shift : index + shift + 26) % 26;
            result += text[i] === text[i].toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
        } 
          return  result += char;
       
    }

    return result;
}

function reverseAlphabet(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            result += text[i] === text[i].toUpperCase() ? reversedAlphabet[index].toUpperCase() : reversedAlphabet[index];
        } 
           return result += char; 

    }

    return result;
}

function showErrorModal(message) {
    const modal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    modal.style.display = 'block';
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
  
  function toggleInfoSection() {
    const infoSection = document.getElementById('infoSection');
    if (infoSection.style.display === 'none' || infoSection.style.display === '') {
        infoSection.style.display = 'block';
    } else {
        infoSection.style.display = 'none';
    }
}
