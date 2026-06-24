const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();
  let jobs = document.querySelectorAll(".job-card");
  
  jobs.forEach(job => {
    let text = job.textContent.toLowerCase();
    if(text.includes(filter)){
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
});