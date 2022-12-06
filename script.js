const body = document.querySelector('body');
const heading = document.createElement('h1');
heading.innerText = 'ETCH-A-SKETCH';
body.append(heading);

const parent_div = document.createElement('div');
parent_div.classList.add('parent_div');
body.appendChild(parent_div);

for(let i=0;i<4;i++){
    const column = document.createElement('div');
    column.classList.add('column_div');
    parent_div.append(column);
    for(let i=0;i<4;i++){
        const child_div = document.createElement('div');
        child_div.classList.add('child');
        column.append(child_div);
        for(let i=0;i<4;i++){
            function enter(){
                child_div.style.backgroundColor="yellow";
                }
              child_div.addEventListener("mouseover",enter);  
        }
    }
}
const button = document.createElement('button');
button.onclick=function refreshPage(){
    window.location.reload();
}
button.innerHTML='Reset';
body.appendChild(button);




