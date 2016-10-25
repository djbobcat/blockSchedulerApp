"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const core_1 = require('@angular/core');
const test_1 = require('./test');
let ByteFormatPipe = class ByteFormatPipe {
    transform(bytes, args) {
        if (bytes == 0)
            return '0 Bytes';
        var k = 1000;
        var sizes = ['Bytes', 'KB', 'MB', 'GB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
    }
};
ByteFormatPipe = __decorate([
    core_1.Pipe({ name: 'byteFormat' }), 
    __metadata('design:paramtypes', [])
], ByteFormatPipe);
let App = class App {
    constructor() {
        this.images = [];
    }
    handleDrop(e) {
        var files = e.dataTransfer.files;
        var self = this;
        Object.keys(files).forEach((key) => {
            if (files[key].type === "image/png" || files[key].type === "image/jpeg") {
                self.images.push(files[key]);
            }
            else {
                alert("File must be a PNG or JPEG!");
            }
        });
        return false;
    }
    imageStats() {
        let sizes = [];
        let totalSize = 0;
        this
            .images
            .forEach((image) => sizes.push(image.size));
        sizes
            .forEach((size) => totalSize += size);
        return {
            size: totalSize,
            count: this.images.length
        };
    }
};
App = __decorate([
    core_1.Component({
        selector: 'app',
        pipes: [ByteFormatPipe],
        template: `

    <h1>Total Images: {{ imageStats().count }}</h1>
    <h1>Total Size: {{ imageStats().size | byteFormat}}</h1>
    <div
      (dragover)="false"
      (dragend)="false"
      (drop)="handleDrop($event)"
      style="height: 300px; border: 5px dotted #ccc;">
      <p style="margin: 10px; text-align: center">
        <strong>Drop Your Images Here</strong>
      </p>
    </div>

    <div class="media" *ngFor="#image of images">
      <div class="media-left">
        <a href="#">
          <img class="media-object" src="{{image.path}}" style="max-width:200px">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{image.name}}</h4>
        <p>{{image.size | byteFormat}}</p>
      </div>
    </div>

  `
    }), 
    __metadata('design:paramtypes', [])
], App);
exports.App = App;
platform_browser_dynamic_1.bootstrap(App);
platform_browser_dynamic_1.bootstrap(test_1.TestComponent);
//# sourceMappingURL=app.js.map