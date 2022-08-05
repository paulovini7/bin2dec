/*Função para selecionar o primeiro input e realizar alguns testes e retornar a const binary caso o condicional for true  */
function convert(){
    const binary = document.getElementById('x-input').value;
/*If para verificar se  */
    if(binary === '') return alert('Por favor escreva um número binário');
    binary.split('').map((char) => {

        if(char !== '0' && char !== '1')return alert('Por favor escreva um número binário')

    })
    const decimal = parseInt(binary , 2);
    document.getElementById('y-input').value = decimal;
    return true;
}