/**
 *
 *  Dado uma letra ('A' a 'Z'), exiba um diamante iniciando em 'A' e 
 *    tendo a letra fornecida com o ponto mais distante.
 *  Por exemplo, dado a letra 'E' temos:
 *      A   
 *     B B
 *    C   C
 *   D     D
 *  E       E 
 *   D     D 
 *    C   C
 *     B B
 *      A
 *   
 *  Dado a letra 'C' temos:
 *    A
 *   B B
 *  C   C
 *   B B
 *    A  
 */
function Diamond(letter) {
    var ACode      = 'A'.charCodeAt(0),
        letterCode = letter.charCodeAt(0);

    var lettersSize = letterCode - ACode;

    for (var i = 0; i < lettersSize; i++) {
        printLetter(getLetterFromCode(ACode + i));
    }
    
    for (var i = lettersSize; i >= 0; i--) {
        printLetter(getLetterFromCode(ACode + i));
    }

    function getCodeFromLetter(charLetter) {
        return charLetter.charCodeAt(0);
    }

    function getLetterFromCode(code) {
        return String.fromCharCode(code);
    }

    function printLetter(charLetter) {
        console.log(getSpacesBefore(charLetter) + getLetterText(charLetter));
    }

    function getSpacesBefore(charLetter) {
        return getSpaces(letterCode - getCodeFromLetter(charLetter));
    }

    function getSpaces(size) {
        var spacesSize = new Array(size + 1);
        return spacesSize.join(' ');
    }

    function getLetterText(charLetter) {
        var charLetterCode = getCodeFromLetter(charLetter);

        if (charLetterCode === ACode) {
            return 'A';
        }
        else if (charLetterCode === getCodeFromLetter('B')) {
            return 'B B';
        }

        var middleSpaces = getLetterNumber(charLetter) * 2 - 1;
            
        return charLetter + getSpaces(middleSpaces) + charLetter;
    }

    function getLetterNumber(charLetter) {
        return (getCodeFromLetter(charLetter) - ACode);
    }
}
