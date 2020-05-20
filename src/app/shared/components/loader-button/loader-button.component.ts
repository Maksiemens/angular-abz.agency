import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

export interface LoaderButtonOptions {
  text: string;
  loading: boolean;
}

@Component({
  selector: 'app-loader-button',
  templateUrl: './loader-button.component.html',
  styleUrls: ['./loader-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderButtonComponent implements OnInit {
  @Input() options: LoaderButtonOptions;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

/*
https://www.w3schools.com/howto/howto_css_loader.asp



*/
