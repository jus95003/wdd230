const file = 'data/members.json';

const sp1 = document.querySelector('#spotlight-1');
const sp2 = document.querySelector('#spotlight-2');
const sp3 = document.querySelector('#spotlight-3');

async function getMemberData() {
    const response = await fetch(file);
    const data = await response.json();
    displayMembers(data.members);
  }
  
  getMemberData();
  
  function displayMembers(members) {
    const first = Math.round(Math.random() * 2);
    const spot1 = createCard(members[first]);
    sp1.appendChild(spot1);
    const second = Math.round(Math.random() * 2) + 3;
    const spot2 = createCard(members[second]);
    sp2.appendChild(spot2);
    const third = Math.round(Math.random() * 2) + 6;
    const spot3 = createCard(members[third]);
    sp3.appendChild(spot3);
  }

function createCard(member) {

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

    return card;
}