var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var OfficeNavBarItem = (function () {
        function OfficeNavBarItem(element) {
            this.element = element;
            this.linkText = '';
            this.icon = '';
            this.hasMenu = false;
            this.right = false;
            this.disabled = false;
        }
        OfficeNavBarItem.prototype.attached = function () {
            this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "linkText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "hasMenu", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "right", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "disabled", void 0);
        OfficeNavBarItem = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('office-navbar-item'), 
            __metadata('design:paramtypes', [Element])
        ], OfficeNavBarItem);
        return OfficeNavBarItem;
    })();
    exports.OfficeNavBarItem = OfficeNavBarItem;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBUUlBLDBCQUFvQkEsT0FBZUE7WUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7WUFMekJBLGFBQVFBLEdBQVVBLEVBQUVBLENBQUNBO1lBQ3JCQSxTQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtZQUNqQkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7WUFDdEJBLFVBQUtBLEdBQVNBLEtBQUtBLENBQUNBO1lBQ3BCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtRQUdqQ0EsQ0FBQ0E7UUFDREQsbUNBQVFBLEdBQVJBO1lBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUdBLEVBQUVBLEdBQUVBLGFBQWFBLEdBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQ3hFQSxDQUFDQTtRQVZERjtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFRQSxVQUFhQTtRQUMvQkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxrQ0FBSUEsVUFBYUE7UUFDM0JBO1lBQUNBLDRCQUFRQTs7V0FBQ0EscUNBQU9BLFVBQWVBO1FBQ2hDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLG1DQUFLQSxVQUFlQTtRQUM5QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxzQ0FBUUEsVUFBZUE7UUFQckNBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQTs7NkJBYW5DQTtRQUFEQSx1QkFBQ0E7SUFBREEsQ0FkQSxBQWNDQSxJQUFBO0lBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXJJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyLWl0ZW0nKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFySXRlbSB7XHJcbiAgICBAYmluZGFibGUgbGlua1RleHQ6c3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaWNvbjpzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcmlnaHQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uPT09Jyc/ICdjaGV2cm9uRG93bic6dGhpcy5pY29uO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9