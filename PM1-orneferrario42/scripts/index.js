    createActivity() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const imgUrl = document.getElementById("imgUrl").value;
      this.id++;
      const newActivity = new Activity(this.id, title, description, imgUrl);
      this.activities.push(newActivity);
      this.displayActivity(newActivity);
    }
  
    deleteActivity(id) {
      this.activities = this.activities.filter((activity) => activity.id !== id);
      this.convertInstancesToElem();
    }
  
    getAllActivities() {
      return this.activities;
    }
  
    displayActivity(_activity) {
      const containerCards = document.getElementById("divContainerCards");
      containerCards.innerHTML = "";
    }
  
    objToElement({ title, description, imgUrl }) {
      const titleForm = document.createElement("h3");
      const parrafo = document.createElement("p");
      const image = document.createElement("img");
      const divContainerCard = document.createElement("div");
  
      titleForm.textContent = title;
      parrafo.textContent = description;
      image.src = imgUrl;
  
      titleForm.classList.add("titleForm");
      parrafo.classList.add("parrafo");
      image.classList.add("imageForm");
      divContainerCard.classList.add("divContainerCard");
  
      const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "Delete";
      buttonDelete.id = id;
  
      buttonDelete.addEventListener("click", (event) => {
        this.deleteActivity(event.target.id);
      });
  
      divContainerCard.appendChild(titleForm);
      divContainerCard.appendChild(parrafo);
      divContainerCard.appendChild(image);
      divContainerCard.appendChild(buttonDelete);
  
      return divContainerCard;
    }
  
    convertInstancesToElem() {
      const containerCards = document.getElementById("divContainer");
      containerCards.innerHTML = "";
  
      const activities = this.getAllActivities();
  
      const listActivity = activities.map((activity) =>
        this.objToElement(activity)
      );
  
      listActivity.forEach((lista) => containerCards.appendChild(lista));
    }
  
    handleSubmit() {
      const inputTitle = document.getElementById("title").value;
      const inputImage = document.getElementById("image").value;
      const textArea = document.getElementById("description").value;
  
      if (!inputTitle || !inputImage || !textArea) {
        return alert("Hay datos incompletos");
      }
  
      this.createActivity(inputTitle, textArea, inputImage);
      this.convertInstancesToElem();
      document.getElementById("form").reset();
    }
  }
  
  const repository = new Repository();
  
  function deleteCard(event) {
    console.log(event.target.id);
    repository.deleteActivity(event.target.id);
  }
  
  function objToElement({ title, description, imgUrl }) {
    const titleForm = document.createElement("h3");
    const parrafo = document.createElement("p");
    const image = document.createElement("img");
    const divContainerCard = document.createElement("div");
  
    titleForm.textContent = title;
    parrafo.textContent = description;
    image.src = imgUrl;
  
    titleForm.classList.add("titleForm");
    parrafo.classList.add("parrafo");
    image.classList.add("imageForm");
    divContainerCard.classList.add("divContainerCard");
  
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonDelete.id = id;
  
    buttonDelete.addEventListener("click", (event) => {
      this.deleteActivity(event.button.id);
    });
  
    divContainerCard.appendChild(titleForm);
    divContainerCard.appendChild(parrafo);
    divContainerCard.appendChild(image);
    divContainerCard.appendChild(buttonDelete);
  
    return divContainerCard;
  }
  
  function convertInstancesToElem() {
    const containerCards = document.getElementById("divContainer");
    containerCards.innerHTML = "";
  
    const activities = repository.getAllActivities();
  
    const listActivity = activities.map((activity) =>
      objToElement(activity)
    );
  
    listActivity.forEach((lista) => containerCards.appendChild(lista));
  }
  
  // verificar y completar
  function handleSubmit() {
    const inputTitle = document.getElementById("title").value;
    const inputImage = document.getElementById("image").value;
    const textArea = document.getElementById("description").value;
  
    if (!inputTitle || !inputImage || !textArea) {
      return alert("Hay datos incompletos");
    }
  
    repository.createActivity(inputTitle, textArea, inputImage);
    convertInstancesToElem();
    document.getElementById("form").reset();
  }