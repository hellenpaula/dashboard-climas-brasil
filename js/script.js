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











// arrowControls1.forEach((arrow) => {
//     arrow.addEventListener("click", () => {
//         // console.log(maxCards);

//         const arrowLeft = arrow.classList.contains("arrow-left");
        
//         if(arrowLeft) {
//             console.log("left");
//             currentItem1 -= 1;
//         } else {
//             console.log("right");
//             currentItem1 += 1;

//         }
        
//         if (currentItem >= maxCards1) {
//             console.log(" valor maior q cards: " + currentItem1);
//             currentItem1 = 0;
//         }
//         if (currentItem < 0) {
//             console.log("valor menor q zero: " + currentItem1);
//             currentItem1 = maxCards1 - 1;
//         }

        
//         cards1[currentItem1].scrollIntoView({
//             // evita o scrool vertical quando o método é chamado, o "nearest" possibilita ele se manter o alinhamento do container.
//            block: "nearest",

//             inline: "center",
//             behavior: "smooth",
//         });
//         console.log(currentItem1);

//     })
// })
// // arrowControls.addEventListener("click", () => {
// //     console.log(cards);
// // })