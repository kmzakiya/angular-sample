
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObserverService {

    private observers: any;
    static instance: ObserverService;

    constructor() {
        this.observers = {};
       // return ObserverService.instance = ObserverService.instance || this;
    }

    attach(callback, event, id): void {
        debugger;
        if (id) {
            if (!this.observers[event]) {
                this.observers[event] = {};
            }
            if (!this.observers[event][id])
                this.observers[event][id] = [];
            this.observers[event][id].push(callback);
        }
    }
    detachById(id): void {
        for (let event in this.observers) {
            if (this.observers.hasOwnProperty(event)) {
                this.detachByEventAndId(event, id);
            }
        }
    }
    detachByEvent(event): void {
        if (event in this.observers) {
            delete this.observers[event];
        }
    }
    detachByEventAndId(event, id): void {
        if (event in this.observers) {
            if (id in this.observers[event]) {
                delete this.observers[event][id];
            }
        }
    }
    notify(event, parameters): void {
        debugger;
        let observers = this.observers[event];
        for (var id in observers) {
            if (observers.hasOwnProperty(id)) {
                for (let callback of observers[id]) {
                    callback(parameters);
                }
            }
        }
    };
}