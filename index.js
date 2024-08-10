document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input');
    const button = document.querySelector('.add');
    const list = document.querySelector('#todo-list');

    button.addEventListener('click', () => {
        if (input.value === '') {
            alert('Add a task');
        } else {
            addTodo(input.value);
            input.value = '';
            saveData();
        }
    });

    function addTodo(text) {
        var li = document.createElement('li');
        li.innerHTML = text;

        let del = document.createElement('img');
        del.src = 'delete.png';
        del.className = 'delete';
        li.appendChild(del);

        li.addEventListener('click', () => {
            li.classList.toggle('checked');
            saveData();
        }, false);

        del.addEventListener('click', () => {
            list.removeChild(li);
            saveData();
        }, false);

        list.appendChild(li);
    }

    function saveData() {
        localStorage.setItem('Task', list.innerHTML);
    }

    function getData() {
        list.innerHTML = localStorage.getItem('Task');
        // Reattach event listeners after retrieving data
        let listItems = list.querySelectorAll('li');
        listItems.forEach((li) => {
            li.addEventListener('click', () => {
                li.classList.toggle('checked');
                saveData();
            });

            let del = li.querySelector('.delete');
            del.addEventListener('click', () => {
                list.removeChild(li);
                saveData();
            });
        });
    }

    getData();
});