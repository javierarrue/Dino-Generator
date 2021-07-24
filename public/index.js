

document.querySelector('#btnGenerator').addEventListener('click', async () => {

    const dinoName =  await getDinoName()
    const dinoIMG = await getDinoImg(dinoName + " dinosaur")
    
    if(document.querySelector("#dinoInfo") != null) deleteDino()
    createDino(dinoName,dinoIMG)
})

function createDino(dinoName, dinoIMG){
    let dinoInfo_div = document.createElement("div")
    dinoInfo_div.id = "dinoInfo"
    
    let dinoLink_a = document.createElement("a")
    dinoLink_a.href = 'http://www.google.com/search?q='+dinoName

    let dinoName_H4 = document.createElement("h4")
    dinoName_H4.innerHTML = dinoName

    let dinoIMG_img = document.createElement("img")
    dinoIMG_img.src = dinoIMG.value[0].thumbnailUrl.toString()
    dinoIMG_img.alt = dinoIMG.value[0].name.toString()
    dinoIMG_img.classList.add("dino-img");

    dinoLink_a.appendChild(dinoName_H4)
    dinoLink_a.appendChild(dinoIMG_img)
    dinoLink_a.target = ("_blank")

    dinoInfo_div.appendChild(dinoLink_a)
    document.querySelector(".generator").appendChild(dinoInfo_div);

}

function deleteDino(){
    document.querySelector('#dinoInfo').remove()
}

async function getDinoName(){
    const response = await fetch('/dinoname')
    const data = await response.json()
    console.log(data[0].toString())
    return data[0].toString()
}

async function getDinoImg(name){
    const response = await fetch('/dinoimg/' + name)
    const data = await response.json()

    console.log(data.value[0].webSearchUrl.toString())
    return data
}
