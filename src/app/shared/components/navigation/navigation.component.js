var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserInfoService } from '../../../core/services/userinfo.service';
import { MenuItemService } from '../../../core/services/menu.service';
import { AdalService } from 'ng2-adal/core';
var NavigationComponent = (function () {
    function NavigationComponent(menuItemService, userInfoService, adalService) {
        this.menuItemService = menuItemService;
        this.userInfoService = userInfoService;
        this.adalService = adalService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        if (this.adalService.userInfo.isAuthenticated) {
            this.getuserInfo();
            this.getmenuItems();
        }
        else {
            this.adalService.login();
        }
    };
    NavigationComponent.prototype.getuserInfo = function () {
        var _this = this;
        this.userInfoService.getUserInfo().subscribe(function (userinfo) { return _this.userinfo = userinfo; }, function (error) { return console.log(error); }, function () { return console.log('Get all userInfo'); });
    };
    NavigationComponent.prototype.getmenuItems = function () {
        var _this = this;
        this.menuItemService
            .getMenuItems()
            .subscribe(function (menuitem) { return _this.menuitem = menuitem; }, function (error) { return console.log(error); }, function () { return console.log('Get all menuItems'); });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Component({
        selector: 'navigation',
        templateUrl: 'navigation.component.html'
    }),
    __metadata("design:paramtypes", [MenuItemService, UserInfoService, AdalService])
], NavigationComponent);
export { NavigationComponent };
