import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navLinks = [
    {
      id: 'about-me',
      text: 'About me'
    },
    {
      id: 'relationships',
      text: 'Relationships'
    },
    {
      id: 'requirements',
      text: 'Requirements'
    },
    {
      id: 'users',
      text: 'Users'
    },
    {
      id: 'sign-up',
      text: 'Sign Up'
    },
  ];


  public sidenavLinks = [
    {
      id: 'first-list',
      items: [
        {
          id: 'about-me',
          text: 'About me'
        },
        {
          id: 'relationships',
          text: 'Relationships'
        },
        {
          id: 'requirements',
          text: 'Requirements'
        },
        {
          id: 'users',
          text: 'Users'
        },
        {
          id: 'sign-up',
          text: 'Sign Up'
        },
      ]
    },

    {
      id: 'first-list',
      items: [
        {
          id: 'about-me',
          text: 'About me'
        },
        {
          id: 'relationships',
          text: 'Relationships'
        },
        {
          id: 'requirements',
          text: 'Requirements'
        },
        {
          id: 'users',
          text: 'Users'
        },
        {
          id: 'sign-up',
          text: 'Sign Up'
        },
      ]
    },

    {
      id: 'first-list',
      items: [
        {
          id: 'about-me',
          text: 'About me'
        },
        {
          id: 'relationships',
          text: 'Relationships'
        },
        {
          id: 'requirements',
          text: 'Requirements'
        },
        {
          id: 'users',
          text: 'Users'
        },
        {
          id: 'sign-up',
          text: 'Sign Up'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return item.id;
  }

}
