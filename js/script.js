// PROJETO DASHBOARD CLIMA DE CIDADES
// - projeto com informações do clima de várias cidades:

// estrutura site:
// - menu 
// - área principal "About":
// ° titulo e descrição que deixe claro q são informações sobre climas das capitais do brasil;
// imagem de fundo que represente o brasil(img pode começar na área do menu e indo até o final da área about);

// área cards:
// ° separá-las por regiões do brasil utilizando títulos;
// ° cards com as informações da cidade(3/4 cards por linha em tela grande e 1/2 cards por linha em tela pequena) ou carrossel;
// ° colocar ícones de úmidade e vento nos cards

// área infos:
// ° IMPORTANTE - colocar informações sobre os climas do brasil
// ° falar sobre aquecimento e os efeitos no clima do brasil
// ° TALVEZ falar sobre preservação


// footer;

// estrutura do card:
// - nome cidade
// - img ilustrativa
// - temperatura;
// - descrição;
// - vento 
// - úmidade
// - temp máx
// - temp mín

// funcionalidades:
// carrossel nos cards;
// destaque ao passar mouse;
// opção de dark e light mode;


// cor
// roxo(claro e escuro);
// gradiente fundo - cima p/ baixo: #332f62; #3c276a; #261e43;


// Continuar fazendo as requisições para cada cidade, serão 5 promise.all;

// IDEIA:
// Criar função genérica para colocar objeto e aplicar no html;
// função terá como parâmetro nome do valor que está no array(será usado no objeto para pegar os dados da requisição de cada cidade);
// função também terá uma aréa de aplicar no html, usará as consts e o obj e suas propriedades(tem q estar dentro da mesma função do objeto)

// Looping:
// Pegar todos os cards(com container q engloba todos), fazer looping p/ acessar cada card(índice) e a card ele chama a função genérica com o parâmetro






// https://api.openweathermap.org/data/2.5/weather?&appid=3d4e1c3f7c4dbe48c4d97e970f8d9062&name=sãopaulo


// funcionalidade de carrossel nos cards:

// variables of cards 1:
const arrowControls1 = document.querySelectorAll(".arrow1");

const maxCards1 = document.querySelectorAll(".cards1").length;

const cards1 = document.querySelectorAll(".cards1");

let currentItem1 = 0;

// - end;

// variables of cards2:
const arrowControls2 = document.querySelectorAll(".arrow2");

const cards2 = document.querySelectorAll(".cards2");

const maxCards2 = cards2.length;

let currentItem2 = 0;

// - end;

// variables of cards3:
const arrowControls3 = document.querySelectorAll(".arrow3");

const cards3 = document.querySelectorAll(".cards3");

const maxCards3 = cards3.length;

let currentItem3 = 0;

// end;

// variables of cards4:
const arrowControls4 = document.querySelectorAll(".arrow4");

const cards4 = document.querySelectorAll(".cards4");

const maxCards4 = cards4.length;

let currentItem4 = 0;

// end;

// variables of cards5:
const arrowControls5 = document.querySelectorAll(".arrow5");

const cards5 = document.querySelectorAll(".cards5");

const maxCards5 = cards5.length;

let currentItem5 = 0;

// end;

// call for the function:
slidersCards(arrowControls1, currentItem1, maxCards1, cards1 );

slidersCards(arrowControls2, currentItem2, maxCards2, cards2);

slidersCards(arrowControls3, currentItem3, maxCards3, cards3);

slidersCards(arrowControls4, currentItem4, maxCards4, cards4);

slidersCards(arrowControls5, currentItem5, maxCards5, cards5);

// function:
function slidersCards(arrowControls, currentItem, maxCards, cards ) {
    arrowControls.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            const isLeft = arrow.classList.contains("arrow-left");
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if (currentItem >= maxCards) {
                currentItem = 0;
            }
            if (currentItem < 0) {
                currentItem = maxCards - 1;
            }

            cards[currentItem].scrollIntoView({
                block: "nearest",
                inline: "center",
                behavior: "smooth",
            })
        })
    })
}


// request for API:
// URL: https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}
// apiKey: 3d4e1c3f7c4dbe48c4d97e970f8d9062;

// variables request:
const cityName = document.querySelectorAll(".titleCityCard");
const temperatura = document.querySelectorAll(".numTemperatura");
const imgTemperatura = document.querySelectorAll(".imgTemperaturaTag");
const descricao = document.querySelectorAll(".descricaoTemp");
const vento = document.querySelectorAll(".numVento");
const umidade = document.querySelectorAll(".numUmidade");




// apikey
const apiKey = "3d4e1c3f7c4dbe48c4d97e970f8d9062";

// function com requests região nordeste:
async function requests() {


const [salvador, maceio] = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=salvador,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
        return resp1.json();
    }).then(data1 => {
        return data1;
    }).catch(error1 => {
        console.log(error1);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maceió,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
        return resp2.json();
    }).then(data2 => {
        return data2;
    }).catch(error2 => {
        console.log(error2);
    })


])

// objeto 1 - salvador
const obj1 = {
    name: salvador.name,
    temp: salvador.main.temp.toFixed(0),
    icon: salvador.weather[0].icon,
    description: salvador.weather[0].description,
    speed: salvador.wind.speed,
    humidity: salvador.main.humidity,
}

// aplicando elementos no html do card 1:
cityName[0].textContent = obj1.name;
temperatura[0].textContent = obj1.temp + "°";
imgTemperatura[0].setAttribute("src", `https://openweathermap.org/img/wn/${obj1.icon}.png`);
descricao[0].textContent = obj1.description;
vento[0].textContent = obj1.speed + "Km/h";
umidade[0].textContent = obj1.humidity + "%"; 


// console.log(`Cidade: ${salvador.name}, Temp: ${salvador.main.temp.toFixed(0)}, descrição: ${salvador.weather[0].description}`);
// console.log(maceio);

// console.log(imgTemperatura);

}

requests();
