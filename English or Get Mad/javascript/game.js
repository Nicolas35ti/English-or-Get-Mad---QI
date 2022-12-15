function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function obterFrase (){
    var r_text = new Array ();
    r_text[0] = "Qual das frases a seguir está incorreta?";
    r_text[1] = "O que está de errado na frase a seguir: \"He were doing the exercises.\"";
    r_text[2] = "O que significa \"I wonder...\"";
    r_text[3] = "Qual seria a question tag correta para esta frase: \"They'd get the visa, _______\"";
    r_text[4] = "Qual das frases a seguir está CORRETA em relação ao Present Unreal?";
    r_text[5] = "Qual é a única frase a seguir com a preposição CORRETA?";
    r_text[6] = "I did everything that I ______, but we lost the match.";
    var r_quest1 = new Array ();
    r_quest1[0] = "Told is the past of Tell.";
    r_quest1[1] = "doing";
    r_quest1[2] = "\"Eu desejo...\"";
    r_quest1[3] = "haven't they?";
    r_quest1[4] = "\"If I had ate junk food, I'd put on weight.\"";
    r_quest1[5] = "As a matter of fact, we haven't seen them.";
    r_quest1[6] = "may";
    var r_quest2 = new Array ();
    r_quest2[0] = "You musn't overpass this line.";
    r_quest2[1] = "He";
    r_quest2[2] = "\"Eu me pergunto...\"";
    r_quest2[3] = "have they?";
    r_quest2[4] = "If I had eaten junk food, I'd put on weight.\"";
    r_quest2[5] = "As a matter to fact, we haven't seen them.";
    r_quest2[6] = "could";
    var r_quest3 = new Array ();
    r_quest3[0] = "I have a sore troat.";
    r_quest3[1] = "the";
    r_quest3[2] = "\"Eu prefiro...\"";
    r_quest3[3] = "would they?";
    r_quest3[4] = "If I eaten junk food, I'd put on weight.\"";
    r_quest3[5] = "As a matte since fact, we haven't seen them.";
    r_quest3[6] = "can";
    var r_quest4 = new Array ();
    r_quest4[0] = "He was doing the exercises.";
    r_quest4[1] = "were";
    r_quest4[2] = "\"Eu quero...\"";
    r_quest4[3] = "wouldn't they?";
    r_quest4[4] = "If I ate junk food, I'd put on weight.\"";
    r_quest4[5] = "As a matter for fact, we haven't seen them.";
    r_quest4[6] = "can't";
    var i = Math.floor(7*Math.random())
    document.getElementById("english").innerHTML = "<h1>" + r_text[i] + "</h1>";
if (i == 0){
    document.getElementById("english").innerHTML = "<h1>" + r_text[0] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[0] +"</button>";
} else if (i == 1){
    document.getElementById("english").innerHTML = "<h1>" + r_text[1] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[1] +"</button>" + "<button class='button button3' value='1' d='true' onClick='real();'>" + r_quest4[1] +"</button>";
} else if (i == 2){
    document.getElementById("english").innerHTML = "<h1>" + r_text[2] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[2] +"</button>";
} else if (i == 3){
    document.getElementById("english").innerHTML = "<h1>" + r_text[3] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[3] +"</button>";
} else if (i == 4){
    document.getElementById("english").innerHTML = "<h1>" + r_text[4] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest4[4] +"</button>";
} else if (i == 5){
    document.getElementById("english").innerHTML = "<h1>" + r_text[5] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[5] +"</button>";
}else if (i == 6){
    document.getElementById("english").innerHTML = "<h1>" + r_text[6] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[6] +"</button>";
}
}

function carregarSpoiler(){
    var r_spoiler = new Array();
    r_spoiler[0] = "Kuririn morre em Dragon Ball!";
    r_spoiler[1] = "No final da 4º temporada de Breaking Bad, Brock é envenenado por Walter White.";
    r_spoiler[2] = "Spider Man: No Way Home não é tão bom assim, na verdade, a única coisa que salva aquele filme é o fan service dos três Homens-aranhas.";
    r_spoiler[3] = "The Rock não combina nem um pouco com o personagem Adão Negro. Parece que a qualquer minuto ele vai soltar uma piada.";
    r_spoiler[4] = "A única música boa do filme Encanto é: We  Don't Talk About Bruno. De resto são todas medíocres.";
    r_spoiler[5] = "Psicopata Americano é um filme superestimado demais.";
    r_spoiler[6] = "Eren mata Zeke no final da 5º temporada de Attack on Titan.";
    var images = new Array();
    images[0] = '<img src="../img/kuririn.png">';
    images[1] = '<img src="../img/brock.png">';
    images[2] = '<img src="../img/spiderman.png">';
    images[3] = '<img src="../img/blackadam.png">';
    images[4] = '<img src="../img/bruno.png">';
    images[5] = '<img src="../img/sigma.png">';
    images[6] = '<img src="../img/zeke.png">';
    var i = Math.floor(7*Math.random())
    document.getElementById("azar").innerHTML= "<img>" + images[i] + "</img>" + "<p>" + r_spoiler[i] + "</p>";
}

function real(){
    var sim = document.getElementById("true");
    document.getElementById("english").innerHTML = "<h1 id='acertou'>Correto!</h1>" + "<button class='button button3'>Continuar</button>"
}

function falso(){
    document.getElementById("english").innerHTML = "<h1 id='errou'>Errado!</h1>" + "<button class='button button3' onClick='obterFrase(); comeback();'>Continuar</button>"
}

function comeback(){
    document.getElementById("azar").innerHTML= "";
}