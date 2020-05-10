const main=document.getElementById('main');
const add_user=document.getElementById('add-user');
const double=document.getElementById('double');
const million=document.getElementById('million');
const sort_richest=document.getElementById('sort-richest');
const total_wealth=document.getElementById('total-wealth');

let data=[];

addUser();
addUser();
addUser();

async function addUser(){
    const res=await fetch('https://randomuser.me/api');
    const data=await res.json();
    const user=data.results[0];

    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addDB(newUser);
}

function addDB(obj){
    data.push(obj);
    updateDom();
}

function updateDom(providedData=data){
    main.innerHTML= '<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach(ele=>{
        const element=document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${ele.name}</strong> ${ele.money}</h2>`;
        main.appendChild(element);
    })
};

// add_user.addEventListener('click',addUser);