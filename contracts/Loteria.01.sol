pragma solidity ^0.4.17;

contract Loteria{
    address public gerente;
    // cria a variável para receber o endereço do gerente
    address[] public jogadores;
    // cria o array para reeber o endereço dos jogadores

    function Loteria() public{
        gerente = msg.sender;
        //atribui o endereço do gerente à variável
    }

    function jogar() public payable{
        require(msg.value > 0.1 ether);
        jogadores.push(msg.sender);
        //adiciona no array o endereço do jogador
    }

} 