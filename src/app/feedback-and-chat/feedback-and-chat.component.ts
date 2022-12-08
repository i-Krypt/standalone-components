import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedbackAndChatComponent implements OnInit {

  messageForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    comments: new FormControl('')

  })

  constructor() { }

  ngOnInit(): void {
        // Load the chat script, which activates the `<df-messenger>` element.
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1';
        document.head.appendChild(script);
  }

  onSubmit() {
    console.warn(this.messageForm.value);
  }

}