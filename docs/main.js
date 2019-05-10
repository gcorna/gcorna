(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todoList_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList/todo-list/todo-list.component */ "./src/app/todoList/todo-list/todo-list.component.ts");
/* harmony import */ var _todoList_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList/todo-detail/todo-detail.component */ "./src/app/todoList/todo-detail/todo-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _todoList_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"] },
    { path: 'todo/:id', component: _todoList_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_3__["TodoDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card id=\"principal\">\r\n  <router-outlet></router-outlet>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todoList_state_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList/state/todo.actions */ "./src/app/todoList/state/todo.actions.ts");
/* harmony import */ var _todoList_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList/state/todo.reducer */ "./src/app/todoList/state/todo.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'testTodo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _todoList_state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["LoadTodo"]());
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_todoList_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__["getTodos"]))
            .subscribe(function (todoList) { return _this.todoList = todoList; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _todoList_todoList_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todoList/todoList.module */ "./src/app/todoList/todoList.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _todoList_todos_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todoList/todos-data */ "./src/app/todoList/todos-data.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["HttpClientInMemoryWebApiModule"].forRoot(_todoList_todos_data__WEBPACK_IMPORTED_MODULE_11__["TodoListData"]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _todoList_todoList_module__WEBPACK_IMPORTED_MODULE_9__["TodoListModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    name: 'APM Demo App DevTools',
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'noop' }]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/todo-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-list.service.ts ***!
  \***********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListService = /** @class */ (function () {
    function TodoListService(http) {
        this.http = http;
        this.baseUrl = 'api/todoList';
    }
    /**
     * GetTodoList
     * Retrieve the todoList from backend
     *
     * @returns {Observable<TodoList>}
     * @memberof TodoListService
     */
    TodoListService.prototype.getTodoList = function () {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * createTodo
     * Create a todo
     *
     * @param {Todo} todo
     * @returns {Observable<Todo>}
     * @memberof TodoListService
     */
    TodoListService.prototype.createTodo = function (todo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        todo.id = null;
        console.log(todo);
        return this.http.post(this.baseUrl, todo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            console.log('createTodo: ' + JSON.stringify(data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * updateTodo
     * Updates a Todo
     *
     * @param {Todo} todo
     * @returns {Observable<Todo>}
     * @memberof TodoListService
     */
    TodoListService.prototype.updateTodo = function (todo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(this.baseUrl + "/" + todo.id, todo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return console.log('updateTodo: ' + todo.id); }), 
        // Return the todo on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return todo; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * deleteTodo
     * Deletes a Todo
     *
     * @param {number} todoId
     * @returns {Observable<{}>}
     * @memberof TodoListService
     */
    TodoListService.prototype.deleteTodo = function (todoId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(this.baseUrl + "/" + todoId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log('deleteTodo: ' + todoId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * handleError
     * Throw error messages
     *
     * @private
     * @param {*} err
     * @returns
     * @memberof TodoListService
     */
    TodoListService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    TodoListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoListService);
    return TodoListService;
}());



/***/ }),

/***/ "./src/app/todoList/create/create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todoList/create/create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card @fadeIn>\r\n  <form [formGroup]=\"todoForm\">\r\n    <p>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Title\" value=\"{{title}}\" id=\"title\">\r\n      </mat-form-field>\r\n    </p>\r\n    <p>\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" value=\"{{description}}\" id=\"description\"></textarea>\r\n      </mat-form-field>\r\n    </p>\r\n    <p class=\"right\">\r\n      <button mat-flat-button color=\"primary\" (click)=\"addTodo()\">{{buttonText}}</button>\r\n    </p>\r\n</form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/todoList/create/create.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/todoList/create/create.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  background: dimgray;\n  margin-top: 20px; }\n\n:host {\n  display: block; }\n\n.full-width {\n  width: 100%; }\n\n.right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb0xpc3QvY3JlYXRlL0M6XFxBcHBzXFx0ZXN0R2VvXFx0ZXN0R2VvXFx0ZXN0R2VvL3NyY1xcYXBwXFx0b2RvTGlzdFxcY3JlYXRlXFxjcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdG9kb0xpc3QvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBkaW1ncmF5O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todoList/create/create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todoList/create/create.component.ts ***!
  \*****************************************************/
/*! exports provided: FADEIN_ANIMATION, CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADEIN_ANIMATION", function() { return FADEIN_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/todo.actions */ "./src/app/todoList/state/todo.actions.ts");
/* harmony import */ var _state_todo_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/todo.reducer */ "./src/app/todoList/state/todo.reducer.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FADEIN_ANIMATION = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
    ])
]);
var CreateComponent = /** @class */ (function () {
    function CreateComponent(store, snackBar, fb) {
        this.store = store;
        this.snackBar = snackBar;
        this.fb = fb;
        this.componentActive = true;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_6__["getButtonText"])).subscribe(function (text) { return _this.buttonText = text; });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_6__["getCurrentItemId"])).subscribe(function (itemId) {
            _this.currentItemId = itemId;
            if (itemId !== null) {
                _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_6__["getTodos"])).subscribe(function (todos) {
                    _this.todo = todos[itemId];
                    _this.title = _this.todo !== undefined ? todos[itemId].title : '';
                    _this.description = _this.todo !== undefined ? todos[itemId].description : '';
                });
            }
        });
        this.todoForm = this.fb.group({
            id: [this.currentItemId],
            title: [this.title],
            description: [this.description]
        });
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        this.componentActive = false;
    };
    CreateComponent.prototype.addTodo = function (title, description) {
        if (title !== '') {
            var newTodo = __assign({}, this.todo, this.todoForm.value);
            newTodo.status = false;
            newTodo.priority = 'green';
            if (this.todoForm.value.id === null) {
                this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_5__["CreateTodo"](newTodo));
            }
            else {
                this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTodo"](newTodo));
            }
        }
        else {
            this.snackBar.open('Title cannot be empty !', '', { duration: 2000, verticalPosition: 'top' });
        }
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            animations: [FADEIN_ANIMATION],
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/todoList/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/todoList/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/todoList/state/todo.actions.ts":
/*!************************************************!*\
  !*** ./src/app/todoList/state/todo.actions.ts ***!
  \************************************************/
/*! exports provided: TodoActionTypes, InitializeCurrentTodo, CreateTodo, CreateTodoSuccess, CreateTodoFail, RemoveTodo, RemoveTodoSucces, RemoveTodoFail, EditTodo, SetPriority, SetStatus, LoadTodo, LoadTodoFail, LoadTodoSuccess, UpdateTodo, UpdateTodoFail, UpdateTodoSuccess, ToggleAddTodo, TogglePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionTypes", function() { return TodoActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeCurrentTodo", function() { return InitializeCurrentTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodo", function() { return CreateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoSuccess", function() { return CreateTodoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoFail", function() { return CreateTodoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodo", function() { return RemoveTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodoSucces", function() { return RemoveTodoSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodoFail", function() { return RemoveTodoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodo", function() { return EditTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPriority", function() { return SetPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStatus", function() { return SetStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodo", function() { return LoadTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoFail", function() { return LoadTodoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoSuccess", function() { return LoadTodoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodo", function() { return UpdateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoFail", function() { return UpdateTodoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoSuccess", function() { return UpdateTodoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAddTodo", function() { return ToggleAddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePanel", function() { return TogglePanel; });
var TodoActionTypes;
(function (TodoActionTypes) {
    TodoActionTypes["InitializeCurrentTodo"] = "[Todo] Initialize current Todo";
    TodoActionTypes["CreateTodo"] = "[Todo] Create Todo";
    TodoActionTypes["CreateTodoSuccess"] = "[Todo] Create Todo success";
    TodoActionTypes["CreateTodoFail"] = "[Todo] Create Todo fail";
    TodoActionTypes["RemoveTodo"] = "[Todo] Remove Todo";
    TodoActionTypes["RemoveTodoSucces"] = "[Todo] Remove Todo success";
    TodoActionTypes["RemoveTodoFail"] = "[Todo] Remove Todo fail";
    TodoActionTypes["EditTodo"] = "[Todo] Edit Todo";
    TodoActionTypes["SetPriority"] = "[Todo] Set Priority";
    TodoActionTypes["SetStatus"] = "[Todo] Set Status";
    TodoActionTypes["LoadTodo"] = "[Todo] Load TodoList";
    TodoActionTypes["LoadTodoFail"] = "[Todo] Load TodoList Fail";
    TodoActionTypes["LoadTodoSuccess"] = "[Todo] Load TodoList Succes";
    TodoActionTypes["UpdateTodo"] = "[Todo] Update TodoList";
    TodoActionTypes["UpdateTodoFail"] = "[Todo] Update TodoList Fail";
    TodoActionTypes["UpdateTodoSuccess"] = "[Todo] Update TodoList Success";
    TodoActionTypes["ToggleAddTodo"] = "[Todo] Toggle Add Todo";
    TodoActionTypes["TogglePanel"] = "[Todo] Toggle Panel";
})(TodoActionTypes || (TodoActionTypes = {}));
var InitializeCurrentTodo = /** @class */ (function () {
    function InitializeCurrentTodo() {
        this.type = TodoActionTypes.InitializeCurrentTodo;
    }
    return InitializeCurrentTodo;
}());

var CreateTodo = /** @class */ (function () {
    function CreateTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.CreateTodo; // Create
    }
    return CreateTodo;
}());

var CreateTodoSuccess = /** @class */ (function () {
    function CreateTodoSuccess(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.CreateTodoSuccess;
    }
    return CreateTodoSuccess;
}());

var CreateTodoFail = /** @class */ (function () {
    function CreateTodoFail(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.CreateTodoFail;
    }
    return CreateTodoFail;
}());

var RemoveTodo = /** @class */ (function () {
    function RemoveTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.RemoveTodo;
    }
    return RemoveTodo;
}());

var RemoveTodoSucces = /** @class */ (function () {
    function RemoveTodoSucces(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.RemoveTodoSucces;
    }
    return RemoveTodoSucces;
}());

var RemoveTodoFail = /** @class */ (function () {
    function RemoveTodoFail(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.RemoveTodoFail;
    }
    return RemoveTodoFail;
}());

var EditTodo = /** @class */ (function () {
    function EditTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.EditTodo;
    }
    return EditTodo;
}());

var SetPriority = /** @class */ (function () {
    function SetPriority(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.SetPriority;
    }
    return SetPriority;
}());

var SetStatus = /** @class */ (function () {
    function SetStatus(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.SetStatus;
    }
    return SetStatus;
}());

var LoadTodo = /** @class */ (function () {
    function LoadTodo() {
        this.type = TodoActionTypes.LoadTodo;
    }
    return LoadTodo;
}());

var LoadTodoFail = /** @class */ (function () {
    function LoadTodoFail(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.LoadTodoFail;
    }
    return LoadTodoFail;
}());

var LoadTodoSuccess = /** @class */ (function () {
    function LoadTodoSuccess(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.LoadTodoSuccess;
    }
    return LoadTodoSuccess;
}());

var UpdateTodo = /** @class */ (function () {
    function UpdateTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.UpdateTodo; // Update
    }
    return UpdateTodo;
}());

var UpdateTodoFail = /** @class */ (function () {
    function UpdateTodoFail(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.UpdateTodoFail;
    }
    return UpdateTodoFail;
}());

var UpdateTodoSuccess = /** @class */ (function () {
    function UpdateTodoSuccess(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.UpdateTodoSuccess;
    }
    return UpdateTodoSuccess;
}());

var ToggleAddTodo = /** @class */ (function () {
    function ToggleAddTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.ToggleAddTodo;
    }
    return ToggleAddTodo;
}());

var TogglePanel = /** @class */ (function () {
    function TogglePanel(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.TogglePanel;
    }
    return TogglePanel;
}());



/***/ }),

/***/ "./src/app/todoList/state/todo.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/todoList/state/todo.reducer.ts ***!
  \************************************************/
/*! exports provided: getCurrentItemId, getTodos, getError, getAllOf, getButtonText, getShowPanel, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentItemId", function() { return getCurrentItemId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodos", function() { return getTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOf", function() { return getAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonText", function() { return getButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowPanel", function() { return getShowPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todoList/state/todo.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var initialState = {
    currentItemId: null,
    todoList: [],
    error: '',
    allOf: false,
    buttonText: 'Add',
    showPanel: false
};
var getTodoListFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('todoList');
var getCurrentItemId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.currentItemId; });
var getTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.todoList; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.error; });
var getAllOf = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.allOf; });
var getButtonText = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.buttonText; });
var getShowPanel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTodoListFeatureState, function (state) { return state.showPanel; });
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // case TodoActions.TodoActionTypes.AddTodo: {
        //   action.payload.id = action.payload.id === null ? state.todoList.length : action.payload.id;
        //   return {
        //     ...state,
        //     todoList: [action.payload, ...state.todoList],
        //     currentItemId: action.payload.id,
        //     error: ''
        //   };
        // }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].RemoveTodo: {
            var newTodoList = state.todoList.slice(0, action.payload).concat(state.todoList.slice(action.payload + 1));
            return __assign({}, state, { todoList: newTodoList, currentItemId: null, error: '' });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].SetPriority: {
            var newState = __assign({}, state);
            var todo = state.todoList[action.payload];
            switch (todo.priority) {
                case 'red':
                    newState.todoList[action.payload].priority = 'green';
                    break;
                case 'orange':
                    newState.todoList[action.payload].priority = 'red';
                    break;
                case 'green':
                    newState.todoList[action.payload].priority = 'orange';
            }
            return newState;
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].SetStatus: { // Move item down the list if crossed out or on top if uncrossed
            var newState = __assign({}, state);
            newState.todoList[action.payload].status = !newState.todoList[action.payload].status;
            var item = newState.todoList[action.payload];
            var allItem = state.todoList.slice(0, action.payload).concat(state.todoList.slice(action.payload + 1));
            if (newState.todoList[action.payload].status === true) {
                newState.todoList = allItem.concat([item]);
            }
            else {
                newState.todoList = [item].concat(allItem);
            }
            return newState;
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].LoadTodoSuccess: {
            return __assign({}, state, { todoList: action.payload, error: '' });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].LoadTodoFail: {
            return __assign({}, state, { todoList: [], error: action.payload });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].CreateTodoSuccess: {
            return __assign({}, state, { todoList: state.todoList.concat([action.payload]), currentItemId: action.payload.id, error: '' });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].CreateTodoFail: {
            return __assign({}, state, { error: action.payload });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].UpdateTodoSuccess: {
            var updatedTodoList = state.todoList.map(function (item) { return action.payload.id === item.id ? action.payload : item; });
            return __assign({}, state, { todoList: updatedTodoList, error: '' });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].UpdateTodoFail: {
            return __assign({}, state, { todoList: state.todoList, error: action.payload });
        }
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].TogglePanel: {
            return __assign({}, state, { currentItemId: (action.payload === null) ? null : action.payload, error: '', allOf: !state.allOf, buttonText: (action.payload === null) ? 'Add' : 'Update', showPanel: !state.showPanel });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/todoList/state/todoList.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/todoList/state/todoList.effects.ts ***!
  \****************************************************/
/*! exports provided: TodoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function() { return TodoEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todo-list.service */ "./src/app/services/todo-list.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todoList/state/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoEffects = /** @class */ (function () {
    function TodoEffects(todoListService, actions$) {
        var _this = this;
        this.todoListService = todoListService;
        this.actions$ = actions$;
        this.loadTodos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["TodoActionTypes"].LoadTodo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.todoListService.getTodoList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (todoList) { return (new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTodoSuccess"](todoList)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTodoFail"](err)); }));
        }));
        this.updateTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["TodoActionTypes"].UpdateTodo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (todo) {
            return _this.todoListService.updateTodo(todo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (updatedTodo) { return [
                new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTodoSuccess"](updatedTodo),
                new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["TogglePanel"](null)
            ]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTodoFail"](err)); }));
        }));
        this.createTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["TodoActionTypes"].CreateTodo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (todo) {
            return _this.todoListService.createTodo(todo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (newTodo) { return [
                new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["CreateTodoSuccess"](newTodo),
                new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["TogglePanel"](null)
            ]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return (new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["TogglePanel"](null)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["CreateTodoFail"](err)); }));
        }));
        this.deleteProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_todo_actions__WEBPACK_IMPORTED_MODULE_5__["TodoActionTypes"].RemoveTodo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (todoId) {
            return _this.todoListService.deleteTodo(todoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return (new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveTodoSucces"](todoId)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveTodoFail"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TodoEffects.prototype, "loadTodos$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TodoEffects.prototype, "updateTodo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TodoEffects.prototype, "createTodo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TodoEffects.prototype, "deleteProduct$", void 0);
    TodoEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_todo_list_service__WEBPACK_IMPORTED_MODULE_3__["TodoListService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], TodoEffects);
    return TodoEffects;
}());



/***/ }),

/***/ "./src/app/todoList/todo-detail/todo-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/todoList/todo-detail/todo-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    <button mat-flat-button color=\"accent\" [routerLink]=\"['/']\">\r\n      <mat-icon aria-label=\"Back\">arrow_back</mat-icon>\r\n    </button>\r\n  </span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <span>{{todo.title}}</span>  \r\n</mat-toolbar>\r\n<mat-card-content>\r\n    <p>{{todo.description}}</p>\r\n</mat-card-content>\r\n"

/***/ }),

/***/ "./src/app/todoList/todo-detail/todo-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/todoList/todo-detail/todo-detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\n  margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb0xpc3QvdG9kby1kZXRhaWwvQzpcXEFwcHNcXHRlc3RHZW9cXHRlc3RHZW9cXHRlc3RHZW8vc3JjXFxhcHBcXHRvZG9MaXN0XFx0b2RvLWRldGFpbFxcdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC90b2RvTGlzdC90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todoList/todo-detail/todo-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/todoList/todo-detail/todo-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(store, route) {
        this.store = store;
        this.route = route;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.index = +params['id']; });
        this.store.select('todoList').subscribe(function (todoList) { return _this.todo = todoList.todoList[_this.index]; });
    };
    TodoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-detail',
            template: __webpack_require__(/*! ./todo-detail.component.html */ "./src/app/todoList/todo-detail/todo-detail.component.html"),
            styles: [__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/todoList/todo-detail/todo-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/todoList/todo-item/todo-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/todoList/todo-item/todo-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item>\r\n  <mat-checkbox [checked]=\"todo.status\" [ngClass]=\"{'done': todo.status}\" (click)=\"toggleStatus()\" [disabled]=\"allOff\">\r\n    {{todo.title}} </mat-checkbox>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <span>\r\n    <button mat-icon-button (click)=\"togglePriority()\" [disabled]=\"allOff\">\r\n      <mat-icon aria-label=\"Priority\" [ngClass]=\"todo.priority\">fiber_manual_record</mat-icon>\r\n    </button>|\r\n    <button mat-icon-button (click)=\"editTodo()\" [disabled]=\"allOff\">\r\n      <mat-icon aria-label=\"Edit Todo\">edit</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)=\"removeTodo()\" [disabled]=allOff>\r\n      <mat-icon aria-label=\"Remove Todo\">delete</mat-icon>\r\n    </button>|\r\n    <button mat-icon-button [routerLink]=\"['/todo', index]\" [disabled]='allOff'>\r\n      <mat-icon aria-label=\"Open\">launch</mat-icon>\r\n    </button>\r\n  </span>\r\n  <mat-divider></mat-divider>\r\n</mat-list-item>\r\n"

/***/ }),

/***/ "./src/app/todoList/todo-item/todo-item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/todoList/todo-item/todo-item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item-content {\n  justify-content: space-between; }\n\n.red {\n  color: #FF0000; }\n\n.green {\n  color: green; }\n\n.orange {\n  color: orange; }\n\nbutton:disabled .mat-icon {\n  color: gray; }\n\n.done {\n  text-decoration: line-through; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb0xpc3QvdG9kby1pdGVtL0M6XFxBcHBzXFx0ZXN0R2VvXFx0ZXN0R2VvXFx0ZXN0R2VvL3NyY1xcYXBwXFx0b2RvTGlzdFxcdG9kby1pdGVtXFx0b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG9MaXN0L3RvZG8taXRlbS9DOlxcQXBwc1xcdGVzdEdlb1xcdGVzdEdlb1xcdGVzdEdlby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksK0JBQThCLEVBQ2pDOztBQUVEO0VBQ0ksZUNQZSxFRFFsQjs7QUFDRDtFQUNJLGFDVGUsRURVbEI7O0FBQ0Q7RUFDSSxjQ1hpQixFRFlwQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLDhCQUE2QixFQUNoQyIsImZpbGUiOiJzcmMvYXBwL3RvZG9MaXN0L3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4ubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmVlbjtcclxufVxyXG4ub3JhbmdlIHtcclxuICAgIGNvbG9yOiAkY29sb3Itb3JhbmdlO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCAubWF0LWljb257XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4uZG9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSIsIiRjb2xvci1yZWQ6ICNGRjAwMDA7XHJcbiRjb2xvci1ncmVlbjogZ3JlZW47XHJcbiRjb2xvci1vcmFuZ2U6IG9yYW5nZTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/todoList/todo-item/todo-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todoList/todo-item/todo-item.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/todo.actions */ "./src/app/todoList/state/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store) {
        this.store = store;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () { };
    TodoItemComponent.prototype.editTodo = function () {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["TogglePanel"](this.index));
    };
    TodoItemComponent.prototype.togglePriority = function () {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["SetPriority"](this.index));
    };
    TodoItemComponent.prototype.removeTodo = function () {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveTodo"](this.index));
    };
    TodoItemComponent.prototype.toggleStatus = function () {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["SetStatus"](this.index));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TodoItemComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TodoItemComponent.prototype, "allOff", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "open", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todoList/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.scss */ "./src/app/todoList/todo-item/todo-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todoList/todo-list/todo-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/todoList/todo-list/todo-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>Todo List</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <span>\r\n    <button mat-mini-fab (click)=\"openAddTodo()\">\r\n      <mat-icon aria-label=\"Add-new\">add_circle_outline</mat-icon>\r\n    </button>\r\n  </span>\r\n</mat-toolbar>\r\n<app-create *ngIf=\"showPanel\" (closePanel)=\"onClosePanel($event)\"></app-create>\r\n<mat-card-content>\r\n  <mat-selection-list role=\"list\" *ngFor=\"let todo of todoList; let i = index\">\r\n    <app-todo-item [allOff]=\"allOff\" [todo]=\"todo\" [index]=\"i\" role=\"listitem\" (remove)=\"onRemove($event)\" (open)=\"openToEdit($event)\"></app-todo-item>\r\n  </mat-selection-list>\r\n</mat-card-content>\r\n"

/***/ }),

/***/ "./src/app/todoList/todo-list/todo-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/todoList/todo-list/todo-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9MaXN0L3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/todoList/todo-list/todo-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todoList/todo-list/todo-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/todo.actions */ "./src/app/todoList/state/todo.actions.ts");
/* harmony import */ var _state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/todo.reducer */ "./src/app/todoList/state/todo.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        var _this = this;
        this.store = store;
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["LoadTodo"]());
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__["getTodos"]))
            .subscribe(function (todoList) { return _this.todoList = todoList; });
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__["getTodos"])).subscribe(function (todos) { return _this.todoList = todos; });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__["getAllOf"])).subscribe(function (allOf) { return _this.allOff = allOf; });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_todo_reducer__WEBPACK_IMPORTED_MODULE_3__["getShowPanel"])).subscribe(function (showPanel) { return _this.showPanel = showPanel; });
    };
    TodoListComponent.prototype.addTodo = function (todo) {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["CreateTodo"](todo));
    };
    TodoListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveTodo"](index));
    };
    TodoListComponent.prototype.onClosePanel = function () {
        this.allOff = !this.allOff;
        this.showPanel = false;
    };
    TodoListComponent.prototype.openAddTodo = function () {
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["TogglePanel"](null));
    };
    TodoListComponent.prototype.openToEdit = function (todoId) {
        this.allOff = !this.allOff;
        this.showPanel = true;
        this.buttonText = 'Update';
        this.store.dispatch(new _state_todo_actions__WEBPACK_IMPORTED_MODULE_2__["EditTodo"](todoId));
        console.log('openToEdit');
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todoList/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/todoList/todo-list/todo-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());

// this.store.pipe(select(fromTodoList.getCurrentItemId)).subscribe(
//   todo => {
//     this.currentItemId = todo;
//     this.allOff = !this.allOff;
//     this.showPanel = !this.showPanel;
//     this.buttonText = action;
//     if (todo === null) {
//       // add todo
//       console.log('Add');
//     } else {
//       // update todo
//       console.log('Update');
//     }
//    });


/***/ }),

/***/ "./src/app/todoList/todoList.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todoList/todoList.module.ts ***!
  \*********************************************/
/*! exports provided: TodoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModule", function() { return TodoListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todoList/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todoList/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-detail/todo-detail.component */ "./src/app/todoList/todo-detail/todo-detail.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/todoList/create/create.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _state_todo_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/todo.reducer */ "./src/app/todoList/state/todo.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_todoList_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/todoList.effects */ "./src/app/todoList/state/todoList.effects.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([]),
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('todoList', _state_todo_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_todoList_effects__WEBPACK_IMPORTED_MODULE_11__["TodoEffects"]])
            ],
            declarations: [
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
                _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__["TodoItemComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
                _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__["TodoDetailComponent"]
            ]
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ }),

/***/ "./src/app/todoList/todos-data.ts":
/*!****************************************!*\
  !*** ./src/app/todoList/todos-data.ts ***!
  \****************************************/
/*! exports provided: TodoListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListData", function() { return TodoListData; });
var TodoListData = /** @class */ (function () {
    function TodoListData() {
    }
    TodoListData.prototype.createDb = function () {
        var todoList = [
            {
                id: 0,
                title: 'Go swimming',
                description: 'Don\'t forget speedo.',
                priority: 'red',
                status: false
            },
            {
                id: 1,
                title: 'Get a medical appointment',
                description: 'Dr Shepard',
                priority: 'orange',
                status: false
            },
            {
                id: 2,
                title: 'Have a coffee',
                description: 'Find time',
                priority: 'green',
                status: false
            },
            {
                id: 3,
                title: 'Get the kids',
                description: 'School\'s ending at 5pm',
                priority: 'orange',
                status: true
            }
        ];
        return { todoList: todoList };
    };
    return TodoListData;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Apps\testGeo\testGeo\testGeo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map