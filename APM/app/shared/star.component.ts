import { Component, Input, EventEmitter, Output } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    moduleId: module.id,
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;

    };
}