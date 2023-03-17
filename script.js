function save_contents(){
    const contents = document.getElementById('search-bar').value
    
    if(contents.length != 0)
    {
        fetch(`http://localhost:3000/user/${contents}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById('search-bar').value = '';

            draw_img(data.img)
        });
    }
}
function onEnterEvent(event)
{
    if(event.keyCode == 13)
    {
        event.preventDefault();
        save_contents()
    }
}

function draw_img(img_src)
{
    const img_url = img_src;

    const imgg = document.createElement("img");
    const myImgDiv = document.getElementById("myImage");

    imgg.src = img_url;

    myImgDiv.innerHTML = imgg.outerHTML;

}