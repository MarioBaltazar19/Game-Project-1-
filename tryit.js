fetch("https://api.spacexdata.com/v4/launches")
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);

    data.forEach((launch) => {
        const patchImage = launch.links.patch.small;
        const title = document.createElement;
        


        const imgElement = document.createElement('img')

        imgElement.setAttribute("src", patchImage);
        imgElement.setAttribute("width", 200);
        title.setAttribute

        document.body.appendChild(imgElement);

    })
    data.forEach((title) =>{

    })
})


