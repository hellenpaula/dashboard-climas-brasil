

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



// IDEIA:
// Criar função genérica para colocar objeto e aplicar no html;
// função terá como parâmetro nome do valor que está no array(será usado no objeto para pegar os dados da requisição de cada cidade);
// função também terá uma aréa de aplicar no html, usará as consts e o obj e suas propriedades(tem q estar dentro da mesma função do objeto)

// Looping:
// Pegar todos os cards(com container q engloba todos), fazer looping p/ acessar cada card(índice) e a card ele chama a função genérica com o parâmetro


// Análisar código atual e buscar melhorias para retirar repetições, deixar o código mais clean com estrutura de códigos;




// https://api.openweathermap.org/data/2.5/weather?&appid=3d4e1c3f7c4dbe48c4d97e970f8d9062&name=sãopaulo


// funcionalidade de carrossel nos cards:


// CÓPIA:

// // variables of cards 1:
// const arrowControls1 = document.querySelectorAll(".arrow1");

// const maxCards1 = document.querySelectorAll(".cards1").length;

// const cards1 = document.querySelectorAll(".cards1");

// let currentItem1 = 0;

// // - end;

// // variables of cards2:
// const arrowControls2 = document.querySelectorAll(".arrow2");

// const cards2 = document.querySelectorAll(".cards2");

// const maxCards2 = cards2.length;

// let currentItem2 = 0;

// // - end;

// // variables of cards3:
// const arrowControls3 = document.querySelectorAll(".arrow3");

// const cards3 = document.querySelectorAll(".cards3");

// const maxCards3 = cards3.length;

// let currentItem3 = 0;

// // end;

// // variables of cards4:
// const arrowControls4 = document.querySelectorAll(".arrow4");

// const cards4 = document.querySelectorAll(".cards4");

// const maxCards4 = cards4.length;

// let currentItem4 = 0;

// // end;

// // variables of cards5:
// const arrowControls5 = document.querySelectorAll(".arrow5");

// const cards5 = document.querySelectorAll(".cards5");

// const maxCards5 = cards5.length;

// let currentItem5 = 0;

// end;

// const de todos os sliders:
const areaCards = document.querySelectorAll(".divArrows");
console.log(areaCards); 

const containerCards = document.querySelectorAll(".containerCards");
console.log(containerCards[0].children.length);

// objeto com os dados de cada slider:
const obj = [{
    // quando referencio que ele deve buscar dentro do slider na posição 0, ele já entende que são os elementos com essa classe que estão dentro dessa área;
    arrows: areaCards[0].querySelectorAll(".fa-solid"),
    cardsAll: areaCards[0].querySelectorAll(".card"),
    cardsLength: areaCards[0].querySelectorAll(".card").length,
    currentItem: 0,
},
{
    arrows: areaCards[1].querySelectorAll(".fa-solid"),
    cardsAll: areaCards[1].querySelectorAll(".card"),
    cardsLength: areaCards[1].querySelectorAll(".card").length,
    currentItem: 0,
},
{
    arrows: areaCards[2].querySelectorAll(".fa-solid"),
    cardsAll: areaCards[2].querySelectorAll(".card"),
    cardsLength: areaCards[2].querySelectorAll(".card").length,
    currentItem: 0,
},
{
    arrows: areaCards[3].querySelectorAll(".fa-solid"),
    cardsAll: areaCards[3].querySelectorAll(".card"),
    cardsLength: areaCards[3].querySelectorAll(".card").length,
    currentItem: 0,
},
{
    arrows: areaCards[4].querySelectorAll(".fa-solid"),
    cardsAll: areaCards[4].querySelectorAll(".card"),
    cardsLength: areaCards[4].querySelectorAll(".card").length,
    currentItem: 0,
}
]

console.log(obj[0].cardsAll.length);



// call for the function:
slidersCards(obj[0].arrows, obj[0].currentItem, obj[0].cardsLength, obj[0].cardsAll);

slidersCards(obj[1].arrows, obj[1].currentItem, obj[1].cardsLength, obj[1].cardsAll);

slidersCards(obj[2].arrows, obj[2].currentItem, obj[2].cardsLength, obj[2].cardsAll);

slidersCards(obj[3].arrows, obj[3].currentItem, obj[3].cardsLength, obj[3].cardsAll);

slidersCards(obj[4].arrows, obj[4].currentItem, obj[4].cardsLength, obj[4].cardsAll);

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

console.log(cityName);


// apikey
const apiKey = "3d4e1c3f7c4dbe48c4d97e970f8d9062";


 async function promiseAll(cidade) {
    try {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${apiKey}&units=metric&lang=pt_br`);

        const resp1 = request.json();
        return resp1;
    }catch(error) {
        console.log(`erro na request: ${error}`);
    }
     
    //  .then(resp1 => {
    //     return resp1.json();
    // }).then(data1 => {
    //     console.log(data1);
    //     return data1;
        
    // }).catch(error1 => {
    //     console.log(error1);
    // })
    
}

// teste para entender o retorno
// const resultado = promiseAll("Salvador").then(res=> {
//     return res;
// }).catch(e=> {
//     console.log(e);
// })
// console.log(resultado);

// function com requests região nordeste:
async function requests() {

// promise.all região nordeste;
const array1 = [salvador, maceio, aracaju, recife, joaoPessoa, natal, fortaleza, saoLuis, teresina] = await Promise.all([
    
    promiseAll("Salvador"),
    promiseAll("Maceió"),
    promiseAll("Aracaju"),
    promiseAll("Recife"),
    promiseAll("Teresina"),
    promiseAll("João Pessoa"),
    promiseAll("Natal"),
    promiseAll("Fortaleza"),
    promiseAll("São Luís"),
])
//    for(let item=0; item<= array1.length;item++) {
    console.log(array1[0]);
//    }
  


const array2 = [manaus, belem, palmas, macapa, boaVista, rioBranco, portoVelho] = await Promise.all([
    promiseAll("Manaus"),
    promiseAll("Belém"),
    promiseAll("Palmas"),
    promiseAll("Macapá"),
    promiseAll("Boa Vista"),
    promiseAll("Rio Branco"),
    promiseAll("Porto Velho"),

])
    console.log(manaus);



 const array3 = [rioDeJaneiro, saoPaulo, beloHorizonte, vitoria] = await Promise.all([
    promiseAll("Rio de Janeiro"),
    promiseAll("São Paulo"),
    promiseAll("Belo Horizonte"),
    promiseAll("Vitória"),
    
])
    console.log(saoPaulo);


const array4 = [portoAlegre, florianopolis, curitiba] = await Promise.all([
    promiseAll("Porto Alegre"),
    promiseAll("Florianópolis"),
    promiseAll("Curitiba"),

])

console.log(curitiba);

const array5 = [cuiaba, campoGrande, goiania, brasilia] = await Promise.all([
    promiseAll("Cuiabá"),
    promiseAll("Campo Grande"),
    promiseAll("Goiania"),
    promiseAll("Brasília"),
])

console.log(goiania);

// const [salvador, maceio, aracaju, recife, joaoPessoa, natal, fortaleza, saoLuis, teresina] = await Promise.all([
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=salvador,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
//         return resp1.json();
//     }).then(data1 => {
//         return data1;
//     }).catch(error1 => {
//         console.log(error1);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maceió,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
//         return resp2.json();
//     }).then(data2 => {
//         return data2;
//     }).catch(error2 => {
//         console.log(error2);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Aracaju,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
//         return resp3.json();
//     }).then(data3 => {
//         return data3;
//     }).catch(error3 => {
//         console.log(error3);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Recife,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
//         return resp4.json();
//     }).then(data4 => {
//         return data4;
//     }).catch(error4 => {
//         console.log(error4);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=João Pessoa,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp5 => {
//         return resp5.json();
//     }).then(data5 => {
//         return data5;
//     }).catch(error5 => {
//         console.log(error5);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Natal,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp6 => {
//         return resp6.json();
//     }).then(data6 => {
//         return data6;
//     }).catch(error6 => {
//         console.log(error6);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Fortaleza,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp7 => {
//         return resp7.json();
//     }).then(data7 => {
//         return data7;
//     }).catch(error7 => {
//         console.log(error7);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=São Luís,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp8 => {
//         return resp8.json();
//     }).then(data8 => {
//         return data8;
//     }).catch(error8 => {
//         console.log(error8);
//     }),
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Teresina,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp9 => {
//         return resp9.json();
//     }).then(data9 => {
//         return data9;
//     }).catch(error9 => {
//         console.log(error9);
//     }),

// ])

    // promise.all região norte;
    // const [manaus, belem, palmas, macapa, boaVista, rioBranco, portoVelho] = await Promise.all([
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manaus,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
    //         return resp1.json();
    //     }).then(data1 => {
    //         return data1;
    //     }).catch(error1 => {
    //         console.log(error1);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Belem,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
    //         return resp2.json();
    //     }).then(data2 => {
    //         return data2;
    //     }).catch(error2 => {
    //         console.log(error2);
    //     }),
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Palmas,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
    //         return resp3.json();
    //     }).then(data3 => {
    //         return data3;
    //     }).catch(error3 => {
    //         console.log(error3);
    //     }),
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Macapá,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
    //         return resp4.json();
    //     }).then(data4 => {
    //         return data4;
    //     }).catch(error4 => {
    //         console.log(error4);
    //     }),
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Boa Vista,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp5 => {
    //         return resp5.json();
    //     }).then(data5 => {
    //         return data5;
    //     }).catch(error5 => {
    //         console.log(error5);
    //     }),
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rio Branco,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp6 => {
    //         return resp6.json();
    //     }).then(data6 => {
    //         return data6;
    //     }).catch(error6=> {
    //         console.log(error6);
    //     }),
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Porto Velho,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp7 => {
    //         return resp7.json();
    //     }).then(data7 => {
    //         return data7;
    //     }).catch(error7 => {
    //         console.log(error7);
    //     }),

    // ])


    // promise.all região sudeste;
    // const [rioDeJaneiro, saoPaulo, beloHorizonte, vitoria] = await Promise.all([
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rio De Janeiro,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
    //         return resp1.json();
    //     }).then(data1 => {
    //         return data1;
    //     }).catch(error1 => {
    //         console.log(error1);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=São Paulo,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
    //         return resp2.json();
    //     }).then(data2 => {
    //         return data2;
    //     }).catch(error2 => {
    //         console.log(error2);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Belo Horizonte,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
    //         return resp3.json();
    //     }).then(data3 => {
    //         return data3;
    //     }).catch(error3 => {
    //         console.log(error3);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Vitória,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
    //         return resp4.json();
    //     }).then(data4 => {
    //         return data4;
    //     }).catch(error4 => {
    //         console.log(error4);
    //     }), 
        
    // ]);


    // promise.all região sul;
    // const [portoAlegre, florianopolis, curitiba] = await Promise.all([
    //      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Porto Alegre,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
    //         return resp1.json();
    //     }).then(data1 => {
    //         return data1;
    //     }).catch(error1 => {
    //         console.log(error1);
    //     }), 
    //      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Florianópolis,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
    //         return resp2.json();
    //     }).then(data2 => {
    //         return data2;
    //     }).catch(error2 => {
    //         console.log(error2);
    //     }), 
    //      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Curitiba,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
    //         return resp3.json();
    //     }).then(data3 => {
    //         return data3;
    //     }).catch(error3 => {
    //         console.log(error3);
    //     })
         
    // ])

    
    // promise.all região centro-oeste;

    // const [cuiaba, campoGrande, goiania, brasilia] = await Promise.all([
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cuiabá,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
    //         return resp1.json();
    //     }).then(data1 => {
    //         return data1;
    //     }).catch(error1 => {
    //         console.log(error1);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Campo Grande,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
    //         return resp2.json();
    //     }).then(data2 => {
    //         return data2;
    //     }).catch(error2 => {
    //         console.log(error2);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Goiânia,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
    //         return resp3.json();
    //     }).then(data3 => {
    //         return data3;
    //     }).catch(error3 => {
    //         console.log(error3);
    //     }), 
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Brasília,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
    //         return resp2.json();
    //     }).then(data2 => {
    //         return data2;
    //     }).catch(error2 => {
    //         console.log(error2);
    //     })
    // ])


    // LOOPING: preciso que ele passe por cada elemeto do  containerCards[0], pegue os elementos de array1 e chame a função lidandoComDados usando os parâmetros de cidade e posição dos elementos o html.
// console.log(containerCards);

    // cards região nordeste;
    // for(let p of array1)

    // for(let i=0; i < 9; i++){
    //     array1.forEach(item => {
    //         // console.log(i);
    //     for(let p=0; p<=containerCards[0].children.length; p++) {
    //         console.log(containerCards[0].p);
    //         console.log(item);
    //         lidandoComDados(item, i); 
    //             // lidandoComDados(array1[1], 1);
    //         }
    //     })
    // }
    let containerRegião1 = containerCards[0];
    let regiãoLength1 = containerRegião1.children.length;
    let index1 = 0
    for(let p=0; p<regiãoLength1; p++) {
        // for(let i=0; i < 9; i++){
        // console.log(array1[p].name);
        // console.log(i);
        lidandoComDados(array1[p], index1);
        index1++;
        // lidandoComDados(array1[p], 1);
        // lidandoComDados(array1[p], 2);
        
    }
    // }


        // array1.map(item => {
        //     container += item;
        //     // for(let i = 0; i < 9; i++){
        //     //     lidandoComDados(item, i);
        //     // }
            
        // })
        // console.log(container);
        console.log("dentro do looping 1");
        // lidandoComDados(salvador, 0);
        // lidandoComDados(maceio, 1);
        // lidandoComDados(aracaju, 2);
        // lidandoComDados(recife, 3);
        // lidandoComDados(joaoPessoa, 4);
        // lidandoComDados(natal, 5);
        // lidandoComDados(fortaleza, 6);
        // lidandoComDados(saoLuis, 7);
        // lidandoComDados(teresina, 8);
        // console.log(i);  


console.log(array2.name);
    // cards região norte;
    let containerRegião2 = containerCards[1];
    let regiãoLength2 = containerRegião2.children.length;
    let index2 = 9;
    for(let p=0; p< regiãoLength2; p++) {
        console.log("dentro do looping 2")
                lidandoComDados(array2[p], index2);
                index2++;
    }
    
    


    // for(let p = 0; p <= containerCards[0].children.length; p++) {
    //     lidandoComDados(manaus, 9);
    //     lidandoComDados(belem, 10);
    //     lidandoComDados(palmas, 11);
    //     lidandoComDados(macapa, 12);
    //     lidandoComDados(boaVista, 13);
    //     lidandoComDados(rioBranco, 14);
    //     lidandoComDados(portoVelho, 15);
    // }


    // cards região sudeste
    let containerRegião3 = containerCards[2];
    let regiãoLength3 = containerRegião3.children.length;
    let index3 = 16;

    for(p=0; p < regiãoLength3; p++){
        lidandoComDados(array3[p], index3);
        index3++;
    }
    // for(let p = 0; p <= containerCards[0].children.length; p++) {
    //     lidandoComDados(rioDeJaneiro, 16);
    //     lidandoComDados(saoPaulo, 17);
    //     lidandoComDados(beloHorizonte, 18);
    //     lidandoComDados(vitoria, 19);
    // }

    // cards região sul
    let containerRegião4 = containerCards[3];
    let regiãoLength4 = containerRegião4.children.length;
    let index4 = 20;

    for(p=0; p < regiãoLength4; p++){
        lidandoComDados(array4[p], index4);
        index4++;
    }

    // for(let p = 0; p <= containerCards[0].children.length; p++) {
    //     lidandoComDados(portoAlegre, 20);
    //     lidandoComDados(florianopolis, 21);
    //     lidandoComDados(curitiba, 22);
    // }


    // cards região centro-oeste

    let containerRegião5 = containerCards[4];
    let regiãoLength5 = containerRegião5.children.length;
    let index5 = 23;

    for(p=0; p < regiãoLength5; p++){
        lidandoComDados(array5[p], index5);
        index5++;
    }

    // for (let p = 0; p <= containerCards[0].children.length; p++) {
    //     lidandoComDados(cuiaba, 23);
    //     lidandoComDados(campoGrande, 24);
    //     lidandoComDados(goiania, 25);
    //     lidandoComDados(brasilia, 26);
    // }
    // lidandoComDados(salvador, 0);
    console.log("Passei pelos loopings");



}
requests();
console.log("Fora de request");



function lidandoComDados(cidade, i){
    console.log("dentro da função");
    const objGenerico = {
        name: cidade.name,
        temp: cidade.main.temp.toFixed(0),
        icon: cidade.weather[0].icon,
        description: cidade.weather[0].description,
        speed: cidade.wind.speed,
        humidity: cidade.main.humidity,

    }

    // console.log("fora do objeto");

    cityName[i].textContent = objGenerico.name;
    temperatura[i].textContent = objGenerico.temp + "°";
    imgTemperatura[i].setAttribute("src", `https://openweathermap.org/img/wn/${objGenerico.icon}.png`);
    descricao[i].textContent = objGenerico.description;
    vento[i].textContent = objGenerico.speed + "Km/h";
    umidade[i].textContent = objGenerico.humidity + "%"; 
    
    // console.log(`cidade atual ${objGenerico.name}`);
    
}

  

// CONFIG SCROLL MENU:
const menuTag = document.querySelector(".menuTag");
const itemListMenu = document.querySelectorAll(".linkItemMenu");
console.log(itemListMenu);
itemListMenu.forEach(item => {
    // console.log(item.hash);
    item.addEventListener("click", (clicado) => {
        // previne o padrão, necessário para aplicar uma nova config:
        clicado.preventDefault();

        console.log(clicado);
        const link = item.getAttribute("href");
        console.log(link);

        const idItemLinkado = document.querySelector(link);
        console.log(idItemLinkado);

        if (idItemLinkado) {
            idItemLinkado.scrollIntoView({
                behavior: 'smooth',
            });
        }
        })

    })

    
    // config nos textos dos cards

    // lógica: ao clicar na seta, o elemento clicado(saber qual elemento foi clicado) retorna o card com a imagem mais escura, titulo do clima, descrição mais explicativa, um icone para fechar;
    // - ao apertar para fechar, o card volta ao padrão normal;
    // - FAZER:
    // - saber qual elemento está sendo clicado para modificar apenas o que está sendo clicado
    // - colocar crescimento e a mudança no conteúdo do card mais mais devagar(slow);


  
    
    // const textoSecundarioImagem = document.querySelector(".texto-secundario-imagem-clima");

    // const imagemClima = document.querySelectorAll(".imgClima");

   
    
     const iconeSeta = document.querySelectorAll(".div-icone-seta");

    console.log(iconeSeta);
        
    // click no icone de seta
        iconeSeta.forEach(icon => {
            console.log(icon);
            icon.addEventListener("click", (elemento) => {
            
                console.log(icon);
                // const elementoClicado = elemento.target;
                // console.log(elementoClicado);

                icon.style.visibility = "hidden";

                // pega o pai do elemento que foi clicado:
                const paiElementoClicadoSeta = icon.parentElement;
                console.log(paiElementoClicadoSeta);

                // pega a imagem no html, dentro do pai do elemento clicado
                const imagemClima = paiElementoClicadoSeta.querySelector(".imgClima");
                // add classe com configs específicas para o card clicado;
                 imagemClima.classList.add("imgClimaSecundario");


                //  pega texto padrão no html, dentro do pai do elemento clicado:
                const textoPadraoImagem = paiElementoClicadoSeta.querySelector(".texto-padrao-imagem-clima");

                // texto padrão recebe a visibilidade = hidden
                // textoPadraoImagem.style.visibility = "hidden";
                textoPadraoImagem.classList.add("hiddeTextoP");



                // pega texto secundario no html, dentro do pai do elemento clicado:
                const textoSecundarioImagem = paiElementoClicadoSeta.querySelector(".texto-secundario-imagem-clima");

                // texto secundario recebe a visibilidade = visible
                // textoSecundarioImagem.style.visibility = "visible";
                textoSecundarioImagem.classList.add("activeTextoS");

                // pega o icone fechar no html, dentro do pai do elemento clicado:
                const iconeFechar = paiElementoClicadoSeta.querySelector(".div-icone-fechar");

                // aplico a visibilidade = visible nele, mudando o que foi colocado inicialmente na sua classe(hidden):
                iconeFechar.style.visibility = "visible";
            })




                // const elementoClassName = elementoClicado.className;

                // console.log(elementoClassName);

                // const elementoClicadoHtml = document.querySelector(elementoClassName);
                // console.log(elementoClassName.parentElement());

                // console.log();e

            

            

            // imagemClima.forEach(img => {
            //     img.classList.add("imgClimaSecundario");
            // }) 

        
        
        })
        
    
    

        // click no icone fechar


        const iconeFechar = document.querySelectorAll(".div-icone-fechar"); 
        console.log(iconeFechar);
        //  const iconeFechar = paiElementoClicado.querySelector(".div-icone-fechar");
        
        iconeFechar.forEach(iconF => {

            iconF.addEventListener("click", () => {

                console.log(iconF);

                // pega o pai do elemento clicado
                const paiElementoClicadoFechar = iconF.parentElement;
                console.log(paiElementoClicadoFechar);

                // pega a imagem no html, dentro do pai do elemento clicado:
                const imagemClima = paiElementoClicadoFechar.querySelector(".imgClima");

                // na imagem, remove a classe que colocava uma config específica para o click na seta:
                imagemClima.classList.remove("imgClimaSecundario");


                const textoPadraoImagem = paiElementoClicadoFechar.querySelector(".texto-padrao-imagem-clima");

                // textoPadraoImagem.style.visibility = "visible";
                textoPadraoImagem.classList.remove("hiddeTextoP");

                // pega o texto secundario no html, dentro do pai do elemento clicado:
                const textoSecundarioImagem = paiElementoClicadoFechar.querySelector(".texto-secundario-imagem-clima");

                //  remove o texto secundario com o visibility = hidden:
                // textoSecundarioImagem.style.visibility = "hidden";
                textoSecundarioImagem.classList.remove("activeTextoS");


               

                iconF.style.visibility = "hidden";

                iconeSeta.forEach(iconS => {
                    iconS.style.visibility = "visible";
                })



            // textoSecundarioImagem.style.visibility = "hidden";

            // textoPadraoImagem.forEach(function(texto, index) {
            //     texto.style.visibility = "visible";
            // })
            

            // imagemClima.forEach(img => {
            //     img.classList.remove("imgClimaSecundario");
            // })

            // iconeFechar.style.visibility = "hidden";
            })


        })
    // })
    
// // objeto 1 - salvador
// const obj1 = {
//     name: salvador.name,
//     temp: salvador.main.temp.toFixed(0),
//     icon: salvador.weather[0].icon,
//     description: salvador.weather[0].description,
//     speed: salvador.wind.speed,
//     humidity: salvador.main.humidity,
// }

// // aplicando elementos no html do card 1:
// cityName[0].textContent = obj1.name;
// temperatura[0].textContent = obj1.temp + "°";
// imgTemperatura[0].setAttribute("src", `https://openweathermap.org/img/wn/${obj1.icon}.png`);
// descricao[0].textContent = obj1.description;
// vento[0].textContent = obj1.speed + "Km/h";
// umidade[0].textContent = obj1.humidity + "%"; 


// console.log(`Cidade: ${salvador.name}, Temp: ${salvador.main.temp.toFixed(0)}, descrição: ${salvador.weather[0].description}`);
// console.log(maceio);

// console.log(imgTemperatura);
