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

// promise.all região nordeste;
const [salvador, maceio, aracaju, recife, joaoPessoa, natal, fortaleza, saoLuis, teresina] = await Promise.all([
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
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Aracaju,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
        return resp3.json();
    }).then(data3 => {
        return data3;
    }).catch(error3 => {
        console.log(error3);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Recife,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
        return resp4.json();
    }).then(data4 => {
        return data4;
    }).catch(error4 => {
        console.log(error4);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=João Pessoa,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp5 => {
        return resp5.json();
    }).then(data5 => {
        return data5;
    }).catch(error5 => {
        console.log(error5);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Natal,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp6 => {
        return resp6.json();
    }).then(data6 => {
        return data6;
    }).catch(error6 => {
        console.log(error6);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Fortaleza,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp7 => {
        return resp7.json();
    }).then(data7 => {
        return data7;
    }).catch(error7 => {
        console.log(error7);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=São Luís,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp8 => {
        return resp8.json();
    }).then(data8 => {
        return data8;
    }).catch(error8 => {
        console.log(error8);
    }),
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Teresina,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp9 => {
        return resp9.json();
    }).then(data9 => {
        return data9;
    }).catch(error9 => {
        console.log(error9);
    }),

])

    // promise.all região norte;
    const [manaus, belem, palmas, macapa, boaVista, rioBranco, portoVelho] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manaus,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
            return resp1.json();
        }).then(data1 => {
            return data1;
        }).catch(error1 => {
            console.log(error1);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Belem,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
            return resp2.json();
        }).then(data2 => {
            return data2;
        }).catch(error2 => {
            console.log(error2);
        }),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Palmas,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
            return resp3.json();
        }).then(data3 => {
            return data3;
        }).catch(error3 => {
            console.log(error3);
        }),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Macapá,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
            return resp4.json();
        }).then(data4 => {
            return data4;
        }).catch(error4 => {
            console.log(error4);
        }),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Boa Vista,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp5 => {
            return resp5.json();
        }).then(data5 => {
            return data5;
        }).catch(error5 => {
            console.log(error5);
        }),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rio Branco,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp6 => {
            return resp6.json();
        }).then(data6 => {
            return data6;
        }).catch(error6=> {
            console.log(error6);
        }),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Porto Velho,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp7 => {
            return resp7.json();
        }).then(data7 => {
            return data7;
        }).catch(error7 => {
            console.log(error7);
        }),

    ])


    // promise.all região sudeste;
    const [rioDeJaneiro, saoPaulo, beloHorizonte, vitoria] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rio De Janeiro,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
            return resp1.json();
        }).then(data1 => {
            return data1;
        }).catch(error1 => {
            console.log(error1);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=São Paulo,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
            return resp2.json();
        }).then(data2 => {
            return data2;
        }).catch(error2 => {
            console.log(error2);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Belo Horizonte,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
            return resp3.json();
        }).then(data3 => {
            return data3;
        }).catch(error3 => {
            console.log(error3);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Vitória,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp4 => {
            return resp4.json();
        }).then(data4 => {
            return data4;
        }).catch(error4 => {
            console.log(error4);
        }), 
        
    ]);


    // promise.all região sul;
    const [portoAlegre, florianopolis, curitiba] = await Promise.all([
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Porto Alegre,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
            return resp1.json();
        }).then(data1 => {
            return data1;
        }).catch(error1 => {
            console.log(error1);
        }), 
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Florianópolis,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
            return resp2.json();
        }).then(data2 => {
            return data2;
        }).catch(error2 => {
            console.log(error2);
        }), 
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Curitiba,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
            return resp3.json();
        }).then(data3 => {
            return data3;
        }).catch(error3 => {
            console.log(error3);
        })
         
    ])

    // promise.all região centro-oeste;

    const [cuiaba, campoGrande, goiania, brasilia] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cuiabá,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp1 => {
            return resp1.json();
        }).then(data1 => {
            return data1;
        }).catch(error1 => {
            console.log(error1);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Campo Grande,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
            return resp2.json();
        }).then(data2 => {
            return data2;
        }).catch(error2 => {
            console.log(error2);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Goiânia,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp3 => {
            return resp3.json();
        }).then(data3 => {
            return data3;
        }).catch(error3 => {
            console.log(error3);
        }), 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Brasília,BR&appid=${apiKey}&units=metric&lang=pt_br`).then(resp2 => {
            return resp2.json();
        }).then(data2 => {
            return data2;
        }).catch(error2 => {
            console.log(error2);
        })
    ])



    // cards região nordeste;
    for(let i = 0; i < maxCards1; i++) {
        lidandoComDados(salvador, 0);
        lidandoComDados(maceio, 1);
        lidandoComDados(aracaju, 2);
        lidandoComDados(recife, 3);
        lidandoComDados(joaoPessoa, 4);
        lidandoComDados(natal, 5);
        lidandoComDados(fortaleza, 6);
        lidandoComDados(saoLuis, 7);
        lidandoComDados(teresina, 8);
        // console.log(i);
}

    // cards região norte;

    for(let i = 0; i < maxCards2; i++) {
        lidandoComDados(manaus, 9);
        lidandoComDados(belem, 10);
        lidandoComDados(palmas, 11);
        lidandoComDados(macapa, 12);
        lidandoComDados(boaVista, 13);
        lidandoComDados(rioBranco, 14);
        lidandoComDados(portoVelho, 15);
    }

    // cards região sudeste
    for(let i = 0; i < maxCards3; i++) {
        lidandoComDados(rioDeJaneiro, 16);
        lidandoComDados(saoPaulo, 17);
        lidandoComDados(beloHorizonte, 18);
        lidandoComDados(vitoria, 19);
    }

    // cards região sul
    for(let i = 0; i < maxCards4; i++) {
        lidandoComDados(portoAlegre, 20);
        lidandoComDados(florianopolis, 21);
        lidandoComDados(curitiba, 22);
    }

    // cards região centro-oeste
    for (let i = 0; i < maxCards5; i++) {
        lidandoComDados(cuiaba, 23);
        lidandoComDados(campoGrande, 24);
        lidandoComDados(goiania, 25);
        lidandoComDados(brasilia, 26);
    }

}


requests();


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

    console.log("fora do objeto");

    cityName[i].textContent = objGenerico.name;
    temperatura[i].textContent = objGenerico.temp + "°";
    imgTemperatura[i].setAttribute("src", `https://openweathermap.org/img/wn/${objGenerico.icon}.png`);
    descricao[i].textContent = objGenerico.description;
    vento[i].textContent = objGenerico.speed + "Km/h";
    umidade[i].textContent = objGenerico.humidity + "%"; 
    
    console.log(`cidade atual ${objGenerico.name}`);
    
}

  

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
