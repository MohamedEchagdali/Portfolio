const arrowFixed = document.getElementById("arrowUp");
const donationheader = document.getElementById("button-donation");

arrowFixed.addEventListener("click", (e) =>{
    e.preventDefault();

    const mainLogo = document.getElementById("main")
    const headerOffset = mainLogo.offsetTop;

    window.scrollTo({
        top : headerOffset,
        behavior: "smooth"
        
    })
})

donationheader.addEventListener("click", () =>{
    const doDonation = (e) => {
        e.preventDefault()
        doDonation.innerHTML = "";

        doDonation.innerHTML += `
        <div class="task" id="">
            <p><strong>Title:</strong> </p>
            <p><strong>Date:</strong> </p>
            <p><strong>Description:</strong></p>
            <button onclick="editTask(this)" type="button" class="btn">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
        `
}
})



