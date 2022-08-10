//Define UI element

let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');





//Define even listeners
form.addEventListener('submit' , addTask);
taskList.addEventListener('click' , removeTask);
clearBtn.addEventListener('click' , clearTask);


//Define functions

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task!');
    } else {
        
        //Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        taskList.appendChild(li);

        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskInput.value = '';

    }
    e.preventDefault();

}

//Remove task
function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure ?")){
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(e.target);
        }
            
    }
    
}

//Clear Task
function clearTask(e){
    //system 01
    //taskList.innerHTML = '';

    //system 02 (Faster)
    if(confirm("Delete All Task List. Are you sure ?")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }  
    }
}