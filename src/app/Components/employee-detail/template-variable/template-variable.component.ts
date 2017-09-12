import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'template-variable',
    templateUrl: './template-variable.html',
    styleUrls: ['./template-variable.css'],
})

export class TemplateVariableComponent implements OnInit {
    public number: number;

    ngOnInit(): void {
        this.number = 0;
    }
    increment(): void {
        this.number++;
    }
    decrement(): void {
        this.number--;
    }
}
