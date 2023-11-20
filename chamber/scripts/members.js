const url = 'data/members.json';

const cards = document.querySelector('.cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  }
  
  getMemberData();

  const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let orgName = document.createElement('h2');
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let website = document.createElement('a')
        let membership = document.createElement('p')
    
        orgName.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        membership.textContent = `Membership Level:\xa0\xa0\xa0\xa0\xa0${member.membership}`;
        website.setAttribute('target', '_blank');
        website.setAttribute('href', member.website);
        address.setAttribute('class', 'address');
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');
    
        card.appendChild(logo);
        card.appendChild(orgName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
    
        cards.appendChild(card);
    });
  }

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards");

  window.addEventListener("load", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList);
  
  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
  }
  