function addCourse() {
    let id = document.getElementById("id").value.trim();
    let title = document.getElementById("title").value.trim();
    let category = document.getElementById("category").value.trim();
    let instructor = document.getElementById("instructor").value.trim();
    let description = document.getElementById("description").value.trim();

    if (!id || !title || !category || !instructor || !description) {
        document.getElementById("message").innerText = "All fields are required!";
        document.getElementById("message").style.color = "red";
        return;
    }

    document.getElementById("message").innerText = "Course added successfully!";
    document.getElementById("message").style.color = "green";

   
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("description").value = "";
}
