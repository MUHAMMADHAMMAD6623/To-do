document.addEventListener('DOMContentLoaded',()=>{
    const input = document.querySelector('#input')
    const button = document.querySelector('.add')
    const list = document.querySelector('#todo-list')


    button.addEventListener('click',()=>{
        if(input.value === ''){
            alert('Add a task')
        }
        else{
            var li = document.createElement('li')
            li.innerHTML = input.value
            list.appendChild(li)
            let del = document.createElement('img')
            del.src = 'delete.png'
            del.className='delete'
            li.appendChild(del)
            li.addEventListener('click',()=>{
                li.classList.toggle('checked')
                saveData();
            })
            del.addEventListener('click',()=>{
                list.removeChild(li)
                saveData();
            })
        }
        input.value = ''
        saveData();
    })
    function saveData(){
        localStorage.setItem('Task',list.innerHTML)
    }
    function getData(){
        const storedTasks = localStorage.getItem('Task')
        list.innerHTML = storedTasks
    }
    getData();
})