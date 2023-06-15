class Testimonial {
    #quote = "";
    #image = "";
  
    constructor(quote, image) {
      this.#quote = quote;
      this.#image = image;
    }
  
    get quote() {
      return this.#quote;
    }
  
    get image() {
      return this.#image;
    }
  
    // This is an abstract method that subclasses will implement
    get author() {
      throw new Error("getAuthor() method must be implemented");
    }
  
    // This is a polymorphic method that can take any subclasses of Testimonial
    get testiHTML() {
      return `<div class="testimonial">
                  <img
                      src="${this.image}"
                      class="profile-testimonial"
                  />
                  <p class="quote">${this.quote}</p>
                  <p class="author">- ${this.author}</p>
              </div>
          `;
    }
  }
  
  // Subclass
  class AuthorTestimonials extends Testimonial {
    #author = "";
  
    constructor(author, quote, image) {
      super(quote, image);
      this.#author = author;
    }
  
    get author() {
      return this.#author;
    }
  }
  
  // Subclass
  class CompanyTestimonials extends Testimonial {
    #company = "";
  
    constructor(company, quote, image) {
      super(quote, image);
      this.#company = company;
    }
  
    get author() {
      return this.#company + " Company";
    }
  }
  
  const testimonial1 = new AuthorTestimonials(
    "Surya",
    "Cobain ikut gabung!",
    "IMG-20220619-WA0006.jpg"
  );
  const testimonial2 = new AuthorTestimonials(
    "Amel",
    "ayo gabung",
    "IMG-20220619-WA0006.jpg"
  );
  const testimonial3 = new AuthorTestimonials(
    "Dian",
    "Kamu harus coba gabung.",
    "IMG-20220619-WA0006.jpg"
  );
  
  let testimonialData = [testimonial1, testimonial2, testimonial3];
  let testimonialHTML = "";
  
  for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].testimonialHTML;
  }
  
  document.getElementById("testimonials").innerHTML = testiHTML;