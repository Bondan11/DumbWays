function submitData() {
    let title = document.getElementById("input-project-title").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate = document.getElementById("input-end-date").value;
    let description = document.getElementById("input-description").value;
    let inputCheckbox = document.querySelectorAll(".inputCheckbox:checked");
    let image = document.getElementById("input-image").value;
    
    const minPanjangDescription = 127;
  
    if (title == "") {
        return alert("Title harus diisi !");
        } else if (startDate == "") {
            return alert("Date harus diisi !");
        } else if (endDate == "") {
            return alert("Date harus diisi !");
        } else if (description == "") {
            return alert("Description harus diisi !");
        } else if(inputCheckbox.length === 0) {
            return alert("Choose your technologies.");
        } else if (image == "") {
            return alert("Image harus diisi !");
        }
      };
  
  let dataBlog = [];
  
  function addBlog(event) {
      event.preventDefault();
  
      let title = document.getElementById("input-project-title").value;
      let startDate = document.getElementById("input-start-date").value;
      let endDate = document.getElementById("input-end-date").value;
      let description = document.getElementById("input-description").value;
      let image = document.getElementById("input-image").files;
  
      const nodejsIcon = '<i class="fa-brands fa-node-js"></i>';
      const golangIcon = '<i class="fa-brands fa-golang"></i>';
      const reactjsIcon = '<i class="fa-brands fa-react"></i>';
      const laravelIcon = '<i class="fa-brands fa-laravel"></i>';
  
      let nodejs = document.getElementById("input-nodejs").checked ? nodejsIcon : "";
      let golang = document.getElementById("input-golang").checked ? golangIcon : "";
      let reactjs = document.getElementById("input-reactjs").checked ? reactjsIcon : "";
      let laravel = document.getElementById("input-laravel").checked ? laravelIcon : "";
  
      //untuk membuat url gambar, agar tampil
      image = URL.createObjectURL(image[0]);
      console.log(image);
  
      let inputStartDate = new Date(startDate);
      let inputEndDate = new Date(endDate);
      let selisih = Math.abs(inputEndDate.getMonth() - inputStartDate.getMonth() + (12 * (inputEndDate.getFullYear() - inputStartDate.getFullYear())));
      console.log(selisih);
  
      let blog = {
          title,
          startDate,
          endDate,
          description,
          nodejs,
          golang,
          reactjs,
          laravel,
          image,
          inputStartDate,
          inputEndDate,
          selisih,
          
      };
  
      dataBlog.push(blog);
      console.log(dataBlog);
  
      renderBlog();
  }
  
  function renderBlog() {
      document.getElementById("contents").innerHTML = "";
  
      for (let index = 0; index < dataBlog.length; index++) {
          document.getElementById("contents").innerHTML += `
          <div class="blog-detail">
              <img src="${dataBlog[index].image}" alt="gambarhp">
                  <div class="p-judul-image">
                      <h4>
                          <a href="blog.html" target="_blank">
                          ${dataBlog[index].title}</a>
                      </h4>
                      <p  class="durasi">durasi ${dataBlog[index].selisih}bulan</p>
                  </div>
                  <div>
                      <p>${dataBlog[index].description}</p>
                  </div>
                  <div class="brands">
                      ${dataBlog[index].nodejs}
                      ${dataBlog[index].golang}
                      ${dataBlog[index].reactjs}
                      ${dataBlog[index].laravel}
                  </div>
                  <div class="edit-delete">
                      <button class="edit" type="button">edit</button>
                      <button class="delete">delete</button>
                  </div>
          </div>
      `
      }
  };