allData = [];
let httpReq = new XMLHttpRequest;
getData();

function getData(){
    httpReq.open("get", "https://jsonplaceholder.typicode.com/posts")
    httpReq.send();
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState === 4 && httpReq.status === 200)
        {
           allData = JSON.parse(httpReq.response);
           console.log(allData)
           displayData()
        }
    }
}
function displayData()
{
    temp =``;
    for(let i=0 ; i<allData.length ; i++)
    {
        temp+=` <div id="cols" class="col-md-3 col-sm-4 my-3 ">
                    <div onclick=post() class="items p-3">
                        <h3>Post ${allData[i].id}</h3>
                        <h4>${allData[i].title}</h4>
                        <p>${allData[i].body}</p>
                        <div class="buttons w-100">
                            <button onclick=deletePost(${i}) class="btn btn-outline-danger btn-sm" id="delete">Delete</button>
                            <button onclick=ubdatePost(${i}) class="btn btn-outline-info btn-sm" id="ubdate">Ubdate</button>
                        </div>
                    </div>
                </div>`
        document.getElementById("dataRow").innerHTML = temp;
    }
}
function deletePost(index)
{
    allData.splice(index, 1);
    displayData();
}


function showPost(){
    temp =``;
    for(let i=0 ; i<allData.length ; i++)
    {
        temp+=` <div class="items bg-light p-4">
                    <i id="close" class="fas fa-window-close"></i>
                    <h3>Post ${allData[i].id}</h3>
                    <h4>${allData[i].title}</h4>
                    <p>${allData[i].body}</p>
                    <div class="buttons">
                        <button onclick=deletePost(${i}) class="btn btn-outline-danger btn-sm" id="delete">Delete</button>
                        <button class="btn btn-outline-info btn-sm" id="ubdate">Ubdate</button>
                    </div>
                </div>`
        document.getElementById("post").innerHTML = temp;
    }
}
let layoutContainer = document.getElementById("layout-container");
let close = document.getElementById("close");

function post(){
    addEventListener("click" , showbox);
    function showbox(e){
    // layoutContainer.style.display ="flex";  
    showPost()
    }

    close.addEventListener("click" , closebox);
    function closebox(){
        layoutContainer.style.display ="none";

    }
    

}
