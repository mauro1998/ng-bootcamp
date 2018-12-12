(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/dashboard/employees/employees.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/dashboard/projects/projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");







var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'projects'
            },
            {
                path: 'projects',
                component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
            },
            {
                path: 'employees',
                component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\n  <mat-toolbar> <h2>Management Board</h2> </mat-toolbar>\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav mode=\"side\" opened>\n      <p *ngIf=\"(user$ | async) as user\" class=\"mat-body intro\">\n        Welcome <strong>{{ user.name }}</strong\n        >. <br />\n        This is the dashboard panel where you can easily manage your content.\n      </p>\n\n      <h3 class=\"mat-subheading-2\">Navigation panel</h3>\n      <mat-divider></mat-divider>\n      <a class=\"link mat-body\" routerLink=\"projects\">Manage projects</a>\n      <mat-divider></mat-divider>\n      <a class=\"link mat-body\" routerLink=\"employees\">Manage employees</a>\n      <mat-divider></mat-divider>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"scrollable\">\n      <div class=\"container\">\n        <nav mat-tab-nav-bar>\n          <a\n            mat-tab-link\n            routerLink=\"projects\"\n            routerLinkActive\n            #tab1=\"routerLinkActive\"\n            [active]=\"tab1.isActive\"\n            >Projects</a\n          >\n          <a\n            mat-tab-link\n            routerLink=\"employees\"\n            routerLinkActive\n            #tab2=\"routerLinkActive\"\n            [active]=\"tab2.isActive\"\n            >Employees</a\n          >\n        </nav>\n\n        <router-outlet></router-outlet>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  overflow: auto; }\n\n.dashboard-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  padding-top: 64px;\n  min-width: 900px; }\n\n.dashboard-container mat-toolbar {\n    flex-shrink: 0;\n    position: relative;\n    z-index: 5;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.dashboard-container mat-sidenav-container {\n    flex-grow: 1; }\n\n.dashboard-container mat-sidenav-container mat-sidenav,\n    .dashboard-container mat-sidenav-container mat-sidenav-content {\n      height: 100%; }\n\n.dashboard-container mat-sidenav-container mat-sidenav {\n      width: 20em;\n      background: #f5f5f5;\n      color: rgba(0, 0, 0, 0.87);\n      border-right: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 1.125em; }\n\n.dashboard-container mat-sidenav-container mat-sidenav-content {\n      background: #fff; }\n\n.dashboard-container mat-sidenav-container mat-sidenav-content .container {\n        margin-top: 3.375em;\n        max-width: 1024px; }\n\n.dashboard-container mat-sidenav-container mat-sidenav-content nav {\n        margin-bottom: 3.375em; }\n\n.intro {\n  margin-bottom: 3.375em; }\n\na.link {\n  line-height: 3.375em;\n  text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFFBQU87RUFDUCxVQUFTO0VBQ1QsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsU0FBUTtFQUNSLFFBQU87RUFDUCxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFtQ2pCOztBQTVDRDtJQVlJLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLDZDQUE0QyxFQUM3Qzs7QUFoQkg7SUFtQkksYUFBWSxFQXdCYjs7QUEzQ0g7O01Bc0JNLGFBQVksRUFDYjs7QUF2Qkw7TUF5Qk0sWUFBVztNQUNYLG9CQUFtQjtNQUNuQiwyQkFBMEI7TUFDMUIsNENBQTJDO01BQzNDLGlCQXhDUSxFQXlDVDs7QUE5Qkw7TUFnQ00saUJBQWdCLEVBVWpCOztBQTFDTDtRQW1DUSxvQkFBcUI7UUFDckIsa0JBQWlCLEVBQ2xCOztBQXJDUDtRQXdDUSx1QkFBd0IsRUFDekI7O0FBS1A7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsMkJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR1bml0OiAxLjEyNWVtO1xuXG4uc2Nyb2xsYWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIG1pbi13aWR0aDogOTAwcHg7XG5cbiAgbWF0LXRvb2xiYXIge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG5cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF0LXNpZGVuYXYsXG4gICAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIG1hdC1zaWRlbmF2IHtcbiAgICAgIHdpZHRoOiAyMGVtO1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIHBhZGRpbmc6ICR1bml0O1xuICAgIH1cbiAgICBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAkdW5pdCAqIDM7XG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgfVxuXG4gICAgICBuYXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkdW5pdCAqIDM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbnRybyB7XG4gIG1hcmdpbi1ib3R0b206ICR1bml0KjM7XG59XG5cbmEubGluayB7XG4gIGxpbmUtaGVpZ2h0OiAkdW5pdCozO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user$ = this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) { return state.data; }));
    };
    DashboardComponent.prototype.navigate = function (route) {
        this.router.navigate([route]);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/dashboard/employees/employees.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/dashboard/projects/projects.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/dashboard/employees/employee/employee.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/dashboard/projects/project/project.component.ts");
/* harmony import */ var _projects_project_search_tool_search_tool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/project/search-tool/search-tool.component */ "./src/app/dashboard/projects/project/search-tool/search-tool.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"],
                _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"],
                _projects_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _projects_project_search_tool_search_tool_component__WEBPACK_IMPORTED_MODULE_10__["SearchToolComponent"],
            ],
            entryComponents: [_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"], _projects_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/employees/employee/employee.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/employees/employee/employee.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" #employeeForm=\"ngForm\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit($event)\">\n  <h1 mat-dialog-title>{{isNew ? 'Add new employee' : 'Edit employee'}}</h1>\n  <div mat-dialog-content>\n    <mat-form-field>\n      <input matInput\n             placeholder=\"First Name\"\n             formControlName=\"firstName\"\n             id=\"name\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput\n             placeholder=\"Last Name\"\n             formControlName=\"lastName\"\n             id=\"lastname\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput\n             placeholder=\"birthday\"\n             formControlName=\"birthday\"\n             id=\"birthday\"\n             type=\"date\">\n    </mat-form-field>\n\n    <!-- <mat-form-field>\n      <select name=\"project\"\n              id=\"project\">\n        <option value=\"1\">1</option>\n      </select>\n    </mat-form-field> -->\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button\n            [mat-dialog-close]=\"false\">Cancel</button>\n    <button mat-raised-button\n            color=\"primary\"\n            [disabled]=\"!employeeForm.valid || !employeeForm.dirty\">Save</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/dashboard/employees/employee/employee.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/employees/employee/employee.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/employees/employee/employee.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/employees/employee/employee.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(dialog, employee, formBuilder, datePipe) {
        this.dialog = dialog;
        this.employee = employee;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.employeeDefaults = {
            id: null,
            name: '',
            lastName: '',
            age: null,
            birthday: null,
        };
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.employee)
            this.employee = this.employeeDefaults;
        this.form = this.formBuilder.group({
            id: this.employee.id,
            firstName: [this.employee.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [this.employee.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.employee.age, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            birthday: [
                this.datePipe.transform(this.employee.birthday, 'yyyy-MM-dd'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ],
        });
        this.form
            .get('birthday')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) {
            var now = Date.now();
            var birthday = _this.fixDate(val).getTime();
            var timeDiff = Math.abs(now - birthday);
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return Math.floor(diffDays / 365);
        }))
            .subscribe(function (age) { return _this.form.get('age').setValue(age); });
    };
    EmployeeComponent.prototype.fixDate = function (value) {
        var date = new Date(value);
        date.setDate(date.getDate() + 1);
        return date;
    };
    EmployeeComponent.prototype.onSubmit = function (e) {
        e.stopPropagation();
        var update = {
            id: this.form.value.id,
            name: this.form.value.firstName,
            lastName: this.form.value.lastName,
            age: this.form.value.age,
            birthday: this.fixDate(this.form.value.birthday).toDateString(),
        };
        this.dialog.close(update);
    };
    Object.defineProperty(EmployeeComponent.prototype, "isNew", {
        get: function () {
            return !this.employee.id;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/dashboard/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/dashboard/employees/employee/employee.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employees/employees.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/employees/employees.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\"\n     [class.gray]=\"color === 'gray'\">\n\n  <h3 class=\"mat-title\">{{title}}</h3>\n\n  <ng-container *ngIf=\"(source$ | async) as source\">\n    <div class=\"grid\">\n      <mat-form-field>\n        <input matInput\n               (keyup)=\"filter(source, $event.target.value)\"\n               placeholder=\"Filter by name, age, birthday, etc\">\n      </mat-form-field>\n\n      <div class=\"grid\"\n           *ngIf=\"showActions\">\n        <h4 class=\"mat-body-strong\">Add new</h4>\n        <button mat-mini-fab\n                (click)=\"add()\"\n                color=\"primary\">\n          <mat-icon>add</mat-icon>\n        </button>\n      </div>\n    </div>\n\n    <table mat-table\n           matSort\n           [dataSource]=\"source\">\n\n      <ng-container matColumnDef=\"select\">\n        <th width=\"10%\"\n            mat-header-cell\n            *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle(source) : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected(source)\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected(source)\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell\n            *matCellDef=\"let employee\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(employee) : null\"\n                        [checked]=\"selection.isSelected(employee)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th width=\"50%\"\n            mat-header-cell\n            *matHeaderCellDef\n            mat-sort-header>\n          <h4 class=\"mat-body-strong\">Name</h4>\n        </th>\n        <td mat-cell\n            *matCellDef=\"let employee\">{{employee.name}} {{employee.lastName}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"age\">\n        <th width=\"10%\"\n            mat-header-cell\n            *matHeaderCellDef\n            mat-sort-header>\n          <h4 class=\"mat-body-strong\">Age</h4>\n        </th>\n        <td mat-cell\n            *matCellDef=\"let employee\">{{employee.age}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"birthday\">\n        <th width=\"30%\"\n            mat-header-cell\n            *matHeaderCellDef\n            mat-sort-header>\n          <h4 class=\"mat-body-strong\">Birthday</h4>\n        </th>\n        <td mat-cell\n            *matCellDef=\"let employee\">{{employee.birthday}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell\n            *matHeaderCellDef>\n          <h4 class=\"mat-body-strong\">Actions</h4>\n        </th>\n        <td class=\"actions\"\n            mat-cell\n            *matCellDef=\"let employee\">\n          <button mat-icon-button\n                  [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item\n                    (click)=\"edit(employee)\">\n              <mat-icon>edit</mat-icon>\n              <span>Edit</span>\n            </button>\n            <button mat-menu-item\n                    (click)=\"delete(employee)\">\n              <mat-icon>close</mat-icon>\n              <span>Delete</span>\n            </button>\n          </mat-menu>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row\n          *matHeaderRowDef=\"columns\"></tr>\n      <tr mat-row\n          *matRowDef=\"let employee; columns: columns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/employees/employees.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/employees/employees.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 0; }\n\n.list-container.gray table,\n.list-container.gray .mat-paginator {\n  background: #f5f5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGdCQUFlLEVBQ2hCOztBQUVEOztFQUdJLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5saXN0LWNvbnRhaW5lci5ncmF5IHtcbiAgdGFibGUsXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/employees/employees.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/employees/employees.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/dashboard/employees/employee/employee.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");









var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(http, dialog, snackBar) {
        this.http = http;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.employees$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.paginator$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.title = 'Manage Employees';
        this.showActions = true;
        this.selectable = false;
        this.selected = [];
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(EmployeesComponent.prototype, "paginator", {
        set: function (paginator) {
            if (paginator)
                this.paginator$.next(paginator);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeesComponent.prototype, "sort", {
        set: function (sort) {
            if (sort)
                this.sort$.next(sort);
        },
        enumerable: true,
        configurable: true
    });
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns = ['name', 'age', 'birthday'];
        if (this.selectable) {
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true);
            this.columns.unshift('select');
            this.selection.changed
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                .subscribe(function () {
                _this.selectionChange.emit(_this.selection.selected);
            });
        }
        if (this.showActions)
            this.columns.push('actions');
        this.initDataSource();
    };
    EmployeesComponent.prototype.initDataSource = function () {
        var _this = this;
        this.source$ = this.employees$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (employees) {
            if (employees === void 0) { employees = []; }
            var _a;
            var source = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](employees);
            if (_this.selection) {
                var selected = employees.filter(function (_a) {
                    var id = _a.id;
                    return _this.selected.includes(id);
                });
                (_a = _this.selection).select.apply(_a, selected);
            }
            return source;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.paginator$, this.sort$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.source$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (_a) {
            var item = _a[0], source = _a[1];
            if (item instanceof _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
                source.paginator = item;
            else
                source.sort = item;
        });
        this.fetchEmployees();
    };
    EmployeesComponent.prototype.fetchEmployees = function () {
        var _this = this;
        this.http
            .get('api/employees')
            .subscribe(function (employees) {
            _this.employees$.next(employees);
        });
    };
    EmployeesComponent.prototype.add = function () {
        var _this = this;
        this.dialog
            .open(_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], { data: null, width: '500px' })
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (employee) { return !!employee; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (employee) { return _this.submit(employee); });
    };
    EmployeesComponent.prototype.edit = function (employee) {
        var _this = this;
        this.dialog
            .open(_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], { data: employee, width: '500px' })
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (employee) { return !!employee; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (employee) { return _this.submit(employee); });
    };
    EmployeesComponent.prototype.delete = function (employee) {
        var _this = this;
        var name = this.getShortName(employee);
        var dialog = this.dialog.open(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            data: {
                title: 'Delete employee',
                description: [
                    "You are about to delete the employee " + name + ".",
                    'Are you sure you want to proceed?',
                ],
            },
        });
        dialog
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (confirm) { return confirm; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.http.delete("api/employees/" + employee.id); }))
            .subscribe(function () {
            _this.showSnackBar("The employee " + name + " has been deleted");
            _this.fetchEmployees();
        });
    };
    EmployeesComponent.prototype.submit = function (employee) {
        var _this = this;
        var name = this.getShortName(employee);
        var request$;
        if (!employee.id) {
            request$ = this.http
                .post("api/employees", employee)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.showSnackBar("The employee " + name + " has been created"); }));
        }
        else {
            request$ = this.http
                .put("api/employees/" + employee.id, employee)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.showSnackBar("The employee " + name + " has been updated"); }));
        }
        request$.subscribe(function () { return _this.fetchEmployees(); });
    };
    EmployeesComponent.prototype.showSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
    };
    EmployeesComponent.prototype.filter = function (source, value) {
        source.filter = value.trim().toLowerCase();
        if (source.paginator) {
            source.paginator.firstPage();
        }
    };
    EmployeesComponent.prototype.isAllSelected = function (source) {
        var numSelected = this.selection.selected.length;
        var numRows = source.data.length;
        return numSelected === numRows;
    };
    EmployeesComponent.prototype.masterToggle = function (source) {
        var _this = this;
        this.isAllSelected(source)
            ? this.selection.clear()
            : source.data.forEach(function (row) { return _this.selection.select(row); });
    };
    EmployeesComponent.prototype.getShortName = function (employee) {
        var shift = function (str) { return str.split(' ').shift(); };
        return shift(employee.name) + " " + shift(employee.lastName);
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EmployeesComponent.prototype, "paginator", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EmployeesComponent.prototype, "sort", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeesComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeesComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeesComponent.prototype, "showActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeesComponent.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EmployeesComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeesComponent.prototype, "selectionChange", void 0);
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/dashboard/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/dashboard/employees/employees.component.scss")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/project/project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/projects/project/project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\"\n      #project=\"ngForm\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit($event)\">\n  <div mat-dialog-content>\n    <h1 mat-dialog-title>{{isNew ? 'Add new project' : 'Edit project'}}</h1>\n    <mat-form-field>\n      <input matInput\n             placeholder=\"Project Name\"\n             formControlName=\"name\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput\n             placeholder=\"Client Name\"\n             formControlName=\"clientName\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-checkbox class=\"example-margin\"\n                  formControlName=\"addEmployees\"\n                  labelPosition=\"after\">\n      Add employees\n    </mat-checkbox>\n\n    <div class=\"employees-panel\"\n         *ngIf=\"project.value.addEmployees\">\n      <app-employees [title]=\"'Add employees to project ' + project.value.name\"\n                     [color]=\"'gray'\"\n                     [showActions]=\"false\"\n                     [selectable]=\"true\"\n                     [selected]=\"project.value.employeeIds\"\n                     (selectionChange)=\"onSelectionChange($event)\"></app-employees>\n    </div>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button\n            [mat-dialog-close]=\"false\">Cancel</button>\n    <button mat-raised-button\n            color=\"primary\"\n            [disabled]=\"!project.valid\">Save</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/project/project.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/projects/project/project.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n.employees-panel {\n  background: #f5f5f5;\n  padding: 1.125em;\n  border-radius: 3px;\n  margin-top: 1.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wbG95ZWVzLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMS4xMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tdG9wOiAxLjEyNWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/projects/project/project.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/projects/project/project.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(dialog, project, formBuilder) {
        this.dialog = dialog;
        this.project = project;
        this.formBuilder = formBuilder;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.employeeDefaults = {
            id: null,
            name: '',
            size: 0,
            clientName: '',
            employeeIds: [],
        };
    }
    ProjectComponent.prototype.ngOnInit = function () {
        if (!this.project)
            this.project = this.employeeDefaults;
        this.form = this.formBuilder.group({
            id: this.project.id,
            name: [this.project.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            size: [this.project.size, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clientName: [this.project.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            employeeIds: this.formBuilder.array(this.project.employeeIds),
            addEmployees: [!!this.project.employeeIds.length],
        });
    };
    ProjectComponent.prototype.onSelectionChange = function (employees) {
        if (employees === void 0) { employees = []; }
        var ids = employees.map(function (_a) {
            var id = _a.id;
            return id;
        });
        this.form.removeControl('employeeIds');
        this.form.addControl('employeeIds', this.formBuilder.array(ids));
        this.form.get('size').setValue(employees.length);
    };
    ProjectComponent.prototype.onSubmit = function (e) {
        e.stopPropagation();
        var update = {
            id: this.form.value.id,
            name: this.form.value.name,
            size: this.form.value.size,
            clientName: this.form.value.clientName,
            employeeIds: this.form.value.employeeIds,
        };
        this.dialog.close(update);
    };
    Object.defineProperty(ProjectComponent.prototype, "isNew", {
        get: function () {
            return !this.project.id;
        },
        enumerable: true,
        configurable: true
    });
    ProjectComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ProjectComponent.prototype.innerClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/dashboard/projects/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/dashboard/projects/project/project.component.scss")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/project/search-tool/search-tool.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/projects/project/search-tool/search-tool.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-tool-container\">\n  <div class=\"search-tool\">\n    <fieldset>\n      <label for=\"search-box\">Search employee</label>\n      <input id=\"employee\"\n             type=\"text\"\n             placeholder=\"Filter by name, last name or age\">\n    </fieldset>\n  </div>\n  <div class=\"list\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/project/search-tool/search-tool.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/projects/project/search-tool/search-tool.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-tool-container {\n  background: #eee;\n  margin-bottom: 1em;\n  padding: 1em;\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RzL3Byb2plY3Qvc2VhcmNoLXRvb2wvc2VhcmNoLXRvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixjQUFhO0VBQ2IsK0JBQThCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RzL3Byb2plY3Qvc2VhcmNoLXRvb2wvc2VhcmNoLXRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXRvb2wtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/projects/project/search-tool/search-tool.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/projects/project/search-tool/search-tool.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchToolComponent", function() { return SearchToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchToolComponent = /** @class */ (function () {
    function SearchToolComponent() {
    }
    SearchToolComponent.prototype.ngOnInit = function () {
    };
    SearchToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-tool',
            template: __webpack_require__(/*! ./search-tool.component.html */ "./src/app/dashboard/projects/project/search-tool/search-tool.component.html"),
            styles: [__webpack_require__(/*! ./search-tool.component.scss */ "./src/app/dashboard/projects/project/search-tool/search-tool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchToolComponent);
    return SearchToolComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mat-title\">Manage Projects</h3>\n\n<ng-container *ngIf=\"(source$ | async) as source\">\n  <div class=\"grid\">\n    <mat-form-field>\n      <input matInput\n             (keyup)=\"filter(source, $event.target.value)\"\n             placeholder=\"Filter by name, size or client name\">\n    </mat-form-field>\n\n    <div class=\"grid\">\n      <h4 class=\"mat-body-strong\">Add new</h4>\n      <button mat-mini-fab\n              (click)=\"add()\"\n              color=\"primary\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <table mat-table\n         matSort\n         [dataSource]=\"source\">\n\n    <ng-container matColumnDef=\"name\">\n      <th width=\"40%\"\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header>\n        <h4 class=\"mat-body-strong\">Name</h4>\n      </th>\n      <td mat-cell\n          *matCellDef=\"let project\">{{project.name}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"clientName\">\n      <th width=\"40%\"\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header>\n        <h4 class=\"mat-body-strong\">Client Name</h4>\n      </th>\n      <td mat-cell\n          *matCellDef=\"let project\">{{project.clientName}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"size\">\n      <th width=\"20%\"\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header>\n        <h4 class=\"mat-body-strong\">Size</h4>\n      </th>\n      <td mat-cell\n          *matCellDef=\"let project\">{{project.size}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell\n          *matHeaderCellDef>\n        <h4 class=\"mat-body-strong\">Actions</h4>\n      </th>\n      <td class=\"actions\"\n          mat-cell\n          *matCellDef=\"let project\">\n        <button mat-icon-button\n                [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item\n                  (click)=\"edit(project)\">\n            <mat-icon>edit</mat-icon>\n            <span>Edit</span>\n          </button>\n          <button mat-menu-item\n                  (click)=\"delete(project)\">\n            <mat-icon>close</mat-icon>\n            <span>Delete</span>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row\n        *matHeaderRowDef=\"columns\"></tr>\n    <tr mat-row\n        *matRowDef=\"let project; columns: columns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ3VpbGFyL0Rlc2t0b3AvZ2l0L25nLWJvb3RjYW1wL3NyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "./src/app/dashboard/projects/project/project.component.ts");








var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(http, dialog, snackBar) {
        this.http = http;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.projects$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.paginator$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(ProjectsComponent.prototype, "paginator", {
        set: function (paginator) {
            if (paginator)
                this.paginator$.next(paginator);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectsComponent.prototype, "sort", {
        set: function (sort) {
            if (sort)
                this.sort$.next(sort);
        },
        enumerable: true,
        configurable: true
    });
    ProjectsComponent.prototype.ngOnInit = function () {
        this.columns = ['name', 'clientName', 'size', 'actions'];
        this.source$ = this.projects$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (projects) {
            if (projects === void 0) { projects = []; }
            var source = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](projects);
            return source;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.paginator$, this.sort$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.source$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (_a) {
            var item = _a[0], source = _a[1];
            if (item instanceof _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
                source.paginator = item;
            else
                source.sort = item;
        });
        this.fetchProjects();
    };
    ProjectsComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.http.get('api/projects').subscribe(function (projects) {
            _this.projects$.next(projects);
        });
    };
    ProjectsComponent.prototype.add = function () {
        var _this = this;
        this.dialog
            .open(_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"], { data: null, width: '679px' })
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (project) { return !!project; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (project) { return _this.submit(project); });
    };
    ProjectsComponent.prototype.edit = function (project) {
        var _this = this;
        this.dialog
            .open(_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"], { data: project, width: '679px' })
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (project) { return !!project; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (project) { return _this.submit(project); });
    };
    ProjectsComponent.prototype.delete = function (project) {
        var _this = this;
        var name = project.name;
        var dialog = this.dialog.open(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            data: {
                title: 'Delete project',
                description: [
                    "You are about to delete the project " + name + ".",
                    'Are you sure you want to proceed?',
                ],
            },
        });
        dialog
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (confirm) { return confirm; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.http.delete("api/projects/" + project.id); }))
            .subscribe(function () {
            _this.showSnackBar("The project " + name + " has been deleted");
            _this.fetchProjects();
        });
    };
    ProjectsComponent.prototype.submit = function (project) {
        var _this = this;
        var name = project.name;
        var request$;
        if (!project.id) {
            request$ = this.http
                .post("api/projects", project)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.showSnackBar("The project " + name + " has been created"); }));
        }
        else {
            request$ = this.http
                .put("api/projects/" + project.id, project)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.showSnackBar("The project " + name + " has been updated"); }));
        }
        request$.subscribe(function () { return _this.fetchProjects(); });
    };
    ProjectsComponent.prototype.showSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
    };
    ProjectsComponent.prototype.filter = function (source, value) {
        source.filter = value.trim().toLowerCase();
        if (source.paginator) {
            source.paginator.firstPage();
        }
    };
    ProjectsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProjectsComponent.prototype, "paginator", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProjectsComponent.prototype, "sort", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProjectsComponent.prototype, "actions", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/dashboard/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/dashboard/projects/projects.component.scss")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map