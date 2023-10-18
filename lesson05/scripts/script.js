const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    
    if (input.value == '') {
        input.focus();
    }
    else if (!input.value.match(/.*([0-9])$/))
    {
        input.focus();
    }

    else
    {
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
          });

        input.focus();

        input.value = '';

        const listItems = Array.from(list.getElementsByTagName('li'));

        listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

        list.innerHTML = '';

        for (const item of listItems)
        {
            list.appendChild(item);
        }
    }

});