document.addEventListener('DOMContentLoaded', (e) => {
    // your code here
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        buildToDo(e.target.querySelector('#new-task-description').value);
        form.reset();
    });
});

function buildToDo(todo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x';
    p.textContent = `${todo} `;
    document.querySelector('#list').appendChild(p).appendChild(btn);
}

function handleDelete(e) {
    e.target.parentNode.remove();
}
