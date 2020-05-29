allData = [];
let httpReq = new XMLHttpRequest;
getData();

function getData(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        success: function(result) {
           console.log(result);
           allData = result;
           displayData()
        }
    });
}
function displayData()
{
    temp =``;
    for(let i=0 ; i<allData.length ; i++)
    {
        temp+=` <div id='post-${i}' id="cols" class="col-md-3 col-sm-4 my-3 ">
                    <div class="items p-3">
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
    let postId = index + 1;
    let URL = 'https://jsonplaceholder.typicode.com/posts/'+postId;
    $.ajax({
        url: URL,
        type: 'DELETE',
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8",
            "access-control-allow-headers": "content-type"
        },
        success: function(result) {
           allData.splice(index, 1);
           $( `#post-${index}`).remove();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log("Status: " + textStatus + "Error: " + errorThrown)
        } 
    });
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

/*
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
*/