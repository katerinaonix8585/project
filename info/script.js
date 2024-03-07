const placesContainer = document.querySelector("#gridItemContainer");

async function getData() {

    const response = await fetch("https://katerinaonix8585.github.io/newAPI/data.json");
    const obj = await response.json();
    const {title, image, description, link} = obj; 
    
    obj.map(elem => {
        const newItem = document.createElement("div")
        newItem.classList.add("gridItem");
        const newItemTitle = document.createElement("p")
        newItemTitle.textContent = elem.title;
        newItemTitle.classList.add("gridItemContainerTitle")
        const newItemImage = document.createElement("img")
        newItemImage.src = elem.image;
        newItemImage.classList.add("gridItemImage");        
        const newItemDescription = document.createElement("p");
        newItemDescription.textContent = elem.description;
        const newItemLink = document.createElement("a")
        newItemLink.innerText = elem.title;
        newItemLink.href = elem.link;

        newItem.append(newItemTitle, newItemImage, newItemDescription, newItemLink);
        placesContainer.append(newItem);
    })
}

getData();
    
