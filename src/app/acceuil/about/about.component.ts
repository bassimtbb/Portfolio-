import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import * as aos from 'aos';


  @Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
  })
  export class AboutComponent implements OnInit {
  
  mybutton!: HTMLElement | null; 

  ngOnInit() {
    this.mybutton = document.getElementById("scroll-up");
    aos.init();
    window.onscroll = () => this.scrollFunction();
  }

  scrollFunction() {
    if (this.mybutton) {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        this.mybutton.style.display = "block";
      } else {
        this.mybutton.style.display = "none";
      }
    }
  }

public sendEmail(e: Event) {
  e.preventDefault();
    const contactForm = document.getElementById('contact__form')as HTMLFormElement ;

  const contactMessageElement = document.getElementById('contactMessageS') ;
  const formElements = document.querySelectorAll('#contact__form input, #contact__form textarea');

  if (contactMessageElement) {
    emailjs.sendForm('service_mease8p', 'template_zg47zkn', '#contact__form', 'nsAnQ6GlnMesrf6zn')
      .then((result: EmailJSResponseStatus) => {
        contactMessageElement.textContent = 'Message sent successfully ✅';
        setTimeout(()=>{
          contactMessageElement.textContent = '';
          if(contactForm){ 
          contactForm.reset();
          }
        },7000)

      }, (error) => {
        contactMessageElement.textContent = 'Message not sent (service error) ❌';
      });
  }
}
projects=['https://github.com/bassimtbb/Portfolio-.git','https://github.com/bassimtbb/ConnectMe.git'];

}
