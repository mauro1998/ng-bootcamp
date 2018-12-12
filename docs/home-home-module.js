(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");







var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'signin'
            },
            {
                path: 'signin',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usb0ZBQW1GO0VBQ25GLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]],
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-title\">Sign in</h1>\n\n<form [formGroup]=\"signInForm\" (ngSubmit)=\"signIn(signInForm.value)\">\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Your email address\"\n      type=\"email\"\n      formControlName=\"email\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Your password\"\n      type=\"password\"\n      formControlName=\"password\"\n    />\n  </mat-form-field>\n\n  <div class=\"actions\">\n    <button\n      mat-raised-button\n      color=\"primary\"\n      type=\"submit\"\n      [disabled]=\"signInForm.pristine || !signInForm.valid || processing\"\n      class=\"btn btn-default\"\n    >\n      {{ processing ? 'Signing in...' : 'Sign me in' }}\n    </button>\n  </div>\n\n  <p class=\"mat-body\">\n    Don't have an account? <a class=\"link\" routerLink=\"/home/signup\">Sign up</a>\n  </p>\n</form>\n"

/***/ }),

/***/ "./src/app/home/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-title {\n  margin: 5.625em auto 1.125em;\n  text-align: center; }\n\nform {\n  max-width: 22.5em;\n  margin: auto;\n  text-align: center; }\n\nform mat-form-field {\n    display: block;\n    width: 100%; }\n\np {\n  margin: 1.125em 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvaG9tZS9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBSFk7RUFJWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxrQkFBcUI7RUFDckIsYUFBWTtFQUNaLG1CQUFrQixFQU1uQjs7QUFURDtJQU1JLGVBQWM7SUFDZCxZQUFXLEVBQ1o7O0FBR0g7RUFDRSxrQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR1bml0OiAxLjEyNWVtO1xuXG4ubWF0LXRpdGxlIHtcbiAgbWFyZ2luOiAkdW5pdCAqIDUgYXV0byAkdW5pdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgbWF4LXdpZHRoOiAkdW5pdCAqIDIwO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxucCB7XG4gIG1hcmdpbjogJHVuaXQgMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var SigninComponent = /** @class */ (function () {
    function SigninComponent(snackBar, authService, formBuilder, router) {
        this.snackBar = snackBar;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.redirecting = false;
        this.signInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    SigninComponent.prototype.showSnackBar = function (message, duration) {
        if (duration === void 0) { duration = 8000; }
        this.snackBar.open(message, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: duration
        });
    };
    SigninComponent.prototype.signIn = function (value) {
        var _this = this;
        this.processing = true;
        this.authService
            .signIn(value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.processing = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err);
        }))
            .subscribe(function (res) {
            if (res && res.message) {
                if (res.code === 'auth/user-not-found') {
                    _this.showSnackBar('User not found. Please make sure you entered valid credentials');
                }
                else {
                    _this.showSnackBar(res.message);
                }
            }
            else {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    SigninComponent.prototype.signInGoogle = function () {
        var _this = this;
        this.processing = true;
        this.authService
            .signInWithGoogle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.processing = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err);
        }))
            .subscribe(function (res) {
            if (res && res.message) {
                _this.showSnackBar(res.message);
            }
            else {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/home/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/home/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-title\">Sign up to HR Management</h1>\n\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"register(registerForm.value)\">\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Your full name\"\n      type=\"text\"\n      formControlName=\"name\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Your email address\"\n      type=\"email\"\n      formControlName=\"email\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Password\"\n      type=\"password\"\n      formControlName=\"password\"\n    />\n  </mat-form-field>\n\n  <div class=\"actions\">\n    <button\n      mat-raised-button\n      color=\"primary\"\n      type=\"submit\"\n      [disabled]=\"registerForm.pristine || !registerForm.valid || processing\"\n      class=\"btn btn-default\"\n    >\n      {{ redirecting ? 'Signing in...' : 'Sign me up' }}\n    </button>\n  </div>\n\n  <p class=\"mat-body\" *ngIf=\"!redirecting\">\n    Already have an account?\n    <a class=\"link\" routerLink=\"/home/signin\">Sign in</a>\n  </p>\n</form>\n"

/***/ }),

/***/ "./src/app/home/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-title {\n  margin: 5.625em auto 1.125em;\n  text-align: center; }\n\nform {\n  max-width: 22.5em;\n  margin: auto;\n  text-align: center; }\n\nform mat-form-field {\n    display: block;\n    width: 100%; }\n\np {\n  margin: 1.125em 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBSFk7RUFJWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxrQkFBcUI7RUFDckIsYUFBWTtFQUNaLG1CQUFrQixFQU1uQjs7QUFURDtJQU1JLGVBQWM7SUFDZCxZQUFXLEVBQ1o7O0FBR0g7RUFDRSxrQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR1bml0OiAxLjEyNWVtO1xuXG4ubWF0LXRpdGxlIHtcbiAgbWFyZ2luOiAkdW5pdCAqIDUgYXV0byAkdW5pdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgbWF4LXdpZHRoOiAkdW5pdCAqIDIwO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxucCB7XG4gIG1hcmdpbjogJHVuaXQgMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(snackBar, authService, formBuilder, router) {
        this.snackBar = snackBar;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.redirecting = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    SignupComponent.prototype.showSnackBar = function (message, duration) {
        if (duration === void 0) { duration = 8000; }
        this.snackBar.open(message, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: duration
        });
    };
    SignupComponent.prototype.register = function (form) {
        var _this = this;
        this.processing = true;
        var user = {
            name: form.name,
            email: form.email,
            password: form.password
        };
        this.authService
            .signUp(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.processing = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (res) {
            if (res && res.message) {
                return _this.showSnackBar(res.message);
            }
            _this.redirecting = true;
            _this.showSnackBar('Your account has been successfully created', 2000);
            setTimeout(function () { return _this.router.navigate(['/dashboard']); }, 3000);
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/home/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map