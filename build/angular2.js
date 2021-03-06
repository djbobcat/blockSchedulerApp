webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(277);
	module.exports = __webpack_require__(279);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	var Subject_1 = __webpack_require__(2);
	exports.Subject = Subject_1.Subject;
	/* tslint:enable:no-unused-variable */
	var Observable_1 = __webpack_require__(3);
	exports.Observable = Observable_1.Observable;
	// statics
	/* tslint:disable:no-use-before-declare */
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(28);
	__webpack_require__(39);
	__webpack_require__(43);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(51);
	__webpack_require__(59);
	__webpack_require__(62);
	__webpack_require__(65);
	__webpack_require__(67);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(90);
	__webpack_require__(93);
	__webpack_require__(97);
	//operators
	__webpack_require__(100);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(117);
	__webpack_require__(119);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(125);
	__webpack_require__(128);
	__webpack_require__(131);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(137);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(143);
	__webpack_require__(145);
	__webpack_require__(147);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(153);
	__webpack_require__(155);
	__webpack_require__(158);
	__webpack_require__(163);
	__webpack_require__(165);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(175);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(190);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(203);
	__webpack_require__(205);
	__webpack_require__(207);
	__webpack_require__(209);
	__webpack_require__(211);
	__webpack_require__(213);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(223);
	__webpack_require__(225);
	__webpack_require__(227);
	__webpack_require__(234);
	__webpack_require__(236);
	__webpack_require__(238);
	__webpack_require__(240);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(247);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(257);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(271);
	__webpack_require__(273);
	__webpack_require__(274);
	/* tslint:disable:no-unused-variable */
	var Operator_1 = __webpack_require__(276);
	exports.Operator = Operator_1.Operator;
	var Subscription_1 = __webpack_require__(10);
	exports.Subscription = Subscription_1.Subscription;
	var Subscriber_1 = __webpack_require__(8);
	exports.Subscriber = Subscriber_1.Subscriber;
	var AsyncSubject_1 = __webpack_require__(24);
	exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
	var ReplaySubject_1 = __webpack_require__(113);
	exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
	var BehaviorSubject_1 = __webpack_require__(196);
	exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
	var ConnectableObservable_1 = __webpack_require__(116);
	exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
	var Notification_1 = __webpack_require__(58);
	exports.Notification = Notification_1.Notification;
	var EmptyError_1 = __webpack_require__(157);
	exports.EmptyError = EmptyError_1.EmptyError;
	var ArgumentOutOfRangeError_1 = __webpack_require__(242);
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	var ObjectUnsubscribedError_1 = __webpack_require__(20);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
	var UnsubscriptionError_1 = __webpack_require__(15);
	exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
	var asap_1 = __webpack_require__(230);
	var async_1 = __webpack_require__(71);
	var queue_1 = __webpack_require__(114);
	var rxSubscriber_1 = __webpack_require__(16);
	var observable_1 = __webpack_require__(6);
	var iterator_1 = __webpack_require__(37);
	/* tslint:enable:no-unused-variable */
	/**
	 * @typedef {Object} Rx.Scheduler
	 * @property {Scheduler} queue Schedules on a queue in the current event frame
	 * (trampoline scheduler). Use this for iteration operations.
	 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
	 * fastest transport mechanism available, either Node.js' `process.nextTick()`
	 * or Web Worker MessageChannel or setTimeout or others. Use this for
	 * asynchronous conversions.
	 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
	 * time-based operations.
	 */
	var Scheduler = {
	    asap: asap_1.asap,
	    async: async_1.async,
	    queue: queue_1.queue
	};
	exports.Scheduler = Scheduler;
	/**
	 * @typedef {Object} Rx.Symbol
	 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
	 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
	 * an object that has all of the traits of an Rx Subscriber, including the
	 * ability to add and remove subscriptions to the subscription chain and
	 * guarantees involving event triggering (can't "next" after unsubscription,
	 * etc).
	 * @property {Symbol|string} observable A symbol to use as a property name to
	 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
	 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
	 * to retrieve an iterator from an object.
	 */
	var Symbol = {
	    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
	    observable: observable_1.$$observable,
	    iterator: iterator_1.$$iterator
	};
	exports.Symbol = Symbol;
	//# sourceMappingURL=Rx.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(10);
	var SubjectSubscription_1 = __webpack_require__(18);
	var rxSubscriber_1 = __webpack_require__(16);
	var throwError_1 = __webpack_require__(19);
	var ObjectUnsubscribedError_1 = __webpack_require__(20);
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasErrored = false;
	        this.dispatching = false;
	        this.hasCompleted = false;
	        this.source = source;
	    }
	    Subject.prototype.lift = function (operator) {
	        var subject = new Subject(this.destination || this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.add = function (subscription) {
	        return Subscription_1.Subscription.prototype.add.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        Subscription_1.Subscription.prototype.remove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        Subscription_1.Subscription.prototype.unsubscribe.call(this);
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	            else if (this.hasErrored) {
	                return subscriber.error(this.errorValue);
	            }
	            else if (this.hasCompleted) {
	                return subscriber.complete();
	            }
	            this.throwIfUnsubscribed();
	            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	            this.observers.push(subscriber);
	            return subscription;
	        }
	    };
	    Subject.prototype._unsubscribe = function () {
	        this.source = null;
	        this.isStopped = true;
	        this.observers = null;
	        this.destination = null;
	    };
	    Subject.prototype.next = function (value) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.hasErrored) {
	            this._error(this.errorValue);
	        }
	        else if (this.hasCompleted) {
	            this._complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasErrored = true;
	        this.errorValue = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	    };
	    Subject.prototype.complete = function () {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasCompleted = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new SubjectObservable(this);
	        return observable;
	    };
	    Subject.prototype._next = function (value) {
	        if (this.destination) {
	            this.destination.next(value);
	        }
	        else {
	            this._finalNext(value);
	        }
	    };
	    Subject.prototype._finalNext = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        if (this.destination) {
	            this.destination.error(err);
	        }
	        else {
	            this._finalError(err);
	        }
	    };
	    Subject.prototype._finalError = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].error(err);
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype._complete = function () {
	        if (this.destination) {
	            this.destination.complete();
	        }
	        else {
	            this._finalComplete();
	        }
	    };
	    Subject.prototype._finalComplete = function () {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype.throwIfUnsubscribed = function () {
	        if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	    };
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new Subscriber_1.Subscriber(this);
	    };
	    Subject.create = function (destination, source) {
	        return new Subject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectObservable = (function (_super) {
	    __extends(SubjectObservable, _super);
	    function SubjectObservable(source) {
	        _super.call(this);
	        this.source = source;
	    }
	    return SubjectObservable;
	}(Observable_1.Observable));
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var observable_1 = __webpack_require__(6);
	var toSubscriber_1 = __webpack_require__(7);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.observable) {
	        exports.$$observable = Symbol.observable;
	    }
	    else {
	        if (typeof Symbol.for === 'function') {
	            exports.$$observable = Symbol.for('observable');
	        }
	        else {
	            exports.$$observable = Symbol('observable');
	        }
	        Symbol.observable = exports.$$observable;
	    }
	}
	else {
	    exports.$$observable = '@@observable';
	}
	//# sourceMappingURL=observable.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(8);
	var rxSubscriber_1 = __webpack_require__(16);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(9);
	var Subscription_1 = __webpack_require__(10);
	var rxSubscriber_1 = __webpack_require__(16);
	var Observer_1 = __webpack_require__(17);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(11);
	var isObject_1 = __webpack_require__(12);
	var isFunction_1 = __webpack_require__(9);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var UnsubscriptionError_1 = __webpack_require__(15);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(14);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        this.name = 'UnsubscriptionError';
	        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(10);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bindCallback_1 = __webpack_require__(22);
	Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundCallbackObservable_1 = __webpack_require__(23);
	exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var AsyncSubject_1 = __webpack_require__(24);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a callback function to an observable sequence.
	     * @param {function} callbackFunc Function with a callback as the last
	     * parameter.
	     * @param {function} selector A selector which takes the arguments from the
	     * callback to produce a single item to yield on next.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule
	     * the callbacks.
	     * @return {function(...params: *): Observable<T>} a function which returns the
	     * Observable that corresponds to the callback.
	     * @static true
	     * @name bindCallback
	     * @owner Observable
	     */
	    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	/**
	 * @class AsyncSubject<T>
	 */
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.apply(this, arguments);
	        this.value = null;
	        this.hasNext = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.hasCompleted && this.hasNext) {
	            subscriber.next(this.value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype._next = function (value) {
	        this.value = value;
	        this.hasNext = true;
	    };
	    AsyncSubject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.isUnsubscribed = true;
	        if (this.hasNext) {
	            while (++index < len) {
	                var o = observers[index];
	                o.next(this.value);
	                o.complete();
	            }
	        }
	        else {
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    return AsyncSubject;
	}(Subject_1.Subject));
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bindNodeCallback_1 = __webpack_require__(26);
	Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundNodeCallbackObservable_1 = __webpack_require__(27);
	exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var AsyncSubject_1 = __webpack_require__(24);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundNodeCallbackObservable = (function (_super) {
	    __extends(BoundNodeCallbackObservable, _super);
	    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a node callback to an Observable.
	     * @param callbackFunc
	     * @param selector
	     * @param scheduler
	     * @return {function(...params: *): Observable<T>}
	     * @static true
	     * @name bindNodeCallback
	     * @owner Observable
	     */
	    BoundNodeCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    var err = innerArgs.shift();
	                    if (err) {
	                        subject.error(err);
	                    }
	                    else if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundNodeCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            var err = innerArgs.shift();
	            if (err) {
	                subject.error(err);
	            }
	            else if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineLatest_1 = __webpack_require__(29);
	Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(30);
	var isArray_1 = __webpack_require__(11);
	var isScheduler_1 = __webpack_require__(33);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from this Observable with values from
	 * Observables passed as arguments. This is done by subscribing to each
	 * Observable, in order, and collecting an array of each of the most recent
	 * values any time any of the input Observables emits, then either taking that
	 * array and passing it as arguments to an optional `project` function and
	 * emitting the return value of that, or just emitting the array of recent
	 * values directly if there is no `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	/**
	 * Combines the values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @return {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 * @static true
	 * @name combineLatest
	 * @owner Observable
	 */
	function combineLatestStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
	}
	exports.combineLatestStatic = combineLatestStatic;
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	        this.toRespond = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        var toRespond = this.toRespond;
	        toRespond.push(toRespond.length);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	        if (toRespond.length === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(31);
	var EmptyObservable_1 = __webpack_require__(32);
	var isScheduler_1 = __webpack_require__(33);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var isArray_1 = __webpack_require__(11);
	var isPromise_1 = __webpack_require__(36);
	var Observable_1 = __webpack_require__(3);
	var iterator_1 = __webpack_require__(37);
	var observable_1 = __webpack_require__(6);
	var InnerSubscriber_1 = __webpack_require__(38);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[observable_1.$$observable] === 'function') {
	        var obs = result[observable_1.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(40);
	Observable_1.Observable.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(41);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(33);
	var ArrayObservable_1 = __webpack_require__(30);
	var mergeAll_1 = __webpack_require__(42);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var defer_1 = __webpack_require__(44);
	Observable_1.Observable.defer = defer_1.defer;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DeferObservable_1 = __webpack_require__(45);
	exports.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var subscribeToResult_1 = __webpack_require__(35);
	var OuterSubscriber_1 = __webpack_require__(34);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    /**
	     * Creates an Observable that, on subscribe, calls an Observable factory to
	     * make an Observable for each new Observer.
	     *
	     * <span class="informal">Creates the Observable lazily, that is, only when it
	     * is subscribed.
	     * </span>
	     *
	     * <img src="./img/defer.png" width="100%">
	     *
	     * `defer` allows you to create the Observable only when the Observer
	     * subscribes, and create a fresh Observable for each Observer. It waits until
	     * an Observer subscribes to it, and then it generates an Observable,
	     * typically with an Observable factory function. It does this afresh for each
	     * subscriber, so although each subscriber may think it is subscribing to the
	     * same Observable, in fact each subscriber gets its own individual
	     * Observable.
	     *
	     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
	     * var clicksOrInterval = Rx.Observable.defer(function () {
	     *   if (Math.random() > 0.5) {
	     *     return Rx.Observable.fromEvent(document, 'click');
	     *   } else {
	     *     return Rx.Observable.interval(1000);
	     *   }
	     * });
	     * clicksOrInterval.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     *
	     * @param {function(): Observable|Promise} observableFactory The Observable
	     * factory function to invoke for each Observer that subscribes to the output
	     * Observable. May also return a Promise, which will be converted on the fly
	     * to an Observable.
	     * @return {Observable} An Observable whose Observers' subscriptions trigger
	     * an invocation of the given Observable factory function.
	     * @static true
	     * @name defer
	     * @owner Observable
	     */
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        return new DeferSubscriber(subscriber, this.observableFactory);
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	var DeferSubscriber = (function (_super) {
	    __extends(DeferSubscriber, _super);
	    function DeferSubscriber(destination, factory) {
	        _super.call(this, destination);
	        this.factory = factory;
	        this.tryDefer();
	    }
	    DeferSubscriber.prototype.tryDefer = function () {
	        try {
	            this._callFactory();
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    DeferSubscriber.prototype._callFactory = function () {
	        var result = this.factory();
	        if (result) {
	            this.add(subscribeToResult_1.subscribeToResult(this, result));
	        }
	    };
	    return DeferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var empty_1 = __webpack_require__(47);
	Observable_1.Observable.empty = empty_1.empty;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EmptyObservable_1 = __webpack_require__(32);
	exports.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var forkJoin_1 = __webpack_require__(49);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(50);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var EmptyObservable_1 = __webpack_require__(32);
	var isArray_1 = __webpack_require__(11);
	var subscribeToResult_1 = __webpack_require__(35);
	var OuterSubscriber_1 = __webpack_require__(34);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var from_1 = __webpack_require__(52);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(53);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(11);
	var isFunction_1 = __webpack_require__(9);
	var isPromise_1 = __webpack_require__(36);
	var isScheduler_1 = __webpack_require__(33);
	var PromiseObservable_1 = __webpack_require__(54);
	var IteratorObservable_1 = __webpack_require__(55);
	var ArrayObservable_1 = __webpack_require__(30);
	var ArrayLikeObservable_1 = __webpack_require__(56);
	var observable_1 = __webpack_require__(6);
	var iterator_1 = __webpack_require__(37);
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(57);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[observable_1.$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[observable_1.$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * @param promise
	     * @param scheduler
	     * @return {PromiseObservable}
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var isObject_1 = __webpack_require__(12);
	var tryCatch_1 = __webpack_require__(13);
	var Observable_1 = __webpack_require__(3);
	var isFunction_1 = __webpack_require__(9);
	var iterator_1 = __webpack_require__(37);
	var errorObject_1 = __webpack_require__(14);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(31);
	var EmptyObservable_1 = __webpack_require__(32);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Notification_1 = __webpack_require__(58);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromEvent_1 = __webpack_require__(60);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(61);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var Subscription_1 = __webpack_require__(10);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    /**
	     * @param sourceObj
	     * @param eventName
	     * @param selector
	     * @return {FromEventObservable}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromEventPattern_1 = __webpack_require__(63);
	Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventPatternObservable_1 = __webpack_require__(64);
	exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscription_1 = __webpack_require__(10);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    /**
	     * @param addHandler
	     * @param removeHandler
	     * @param selector
	     * @return {FromEventPatternObservable}
	     * @static true
	     * @name fromEventPattern
	     * @owner Observable
	     */
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	}(Observable_1.Observable));
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromPromise_1 = __webpack_require__(66);
	Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(54);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var interval_1 = __webpack_require__(68);
	Observable_1.Observable.interval = interval_1.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IntervalObservable_1 = __webpack_require__(69);
	exports.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(70);
	var Observable_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(71);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = async_1.async;
	        }
	    }
	    /**
	     * Creates an Observable that emits sequential numbers every specified
	     * interval of time, on a specified Scheduler.
	     *
	     * <span class="informal">Emits incremental numbers periodically in time.
	     * </span>
	     *
	     * <img src="./img/interval.png" width="100%">
	     *
	     * `interval` returns an Observable that emits an infinite sequence of
	     * ascending integers, with a constant interval of time of your choosing
	     * between those emissions. The first emission is not sent immediately, but
	     * only after the first period has passed. By default, this operator uses the
	     * `async` Scheduler to provide a notion of time, but you may pass any
	     * Scheduler to it.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
	     * var numbers = Rx.Observable.interval(1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link delay}
	     *
	     * @param {number} [period=0] The interval size in milliseconds (by default)
	     * or the time unit determined by the scheduler's clock.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a sequential number each time
	     * interval.
	     * @static true
	     * @name interval
	     * @owner Observable
	     */
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	}(Observable_1.Observable));
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(11);
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(72);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(73);
	var QueueScheduler_1 = __webpack_require__(74);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsyncScheduler.prototype.scheduleNow = function (work, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
	    };
	    return AsyncScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var Subscription_1 = __webpack_require__(10);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(75);
	var FutureAction_1 = __webpack_require__(73);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(73);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(77);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(78);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(30);
	var mergeAll_1 = __webpack_require__(42);
	var isScheduler_1 = __webpack_require__(33);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var race_1 = __webpack_require__(80);
	Observable_1.Observable.race = race_1.raceStatic;
	//# sourceMappingURL=race.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(11);
	var ArrayObservable_1 = __webpack_require__(30);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item
	 * from the combination of this Observable and supplied Observables
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 * @method race
	 * @owner Observable
	 */
	function race() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return raceStatic.apply(this, observables);
	}
	exports.race = race;
	function raceStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1) {
	        if (isArray_1.isArray(observables[0])) {
	            observables = observables[0];
	        }
	        else {
	            return observables[0];
	        }
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
	}
	exports.raceStatic = raceStatic;
	var RaceOperator = (function () {
	    function RaceOperator() {
	    }
	    RaceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RaceSubscriber(subscriber));
	    };
	    return RaceOperator;
	}());
	exports.RaceOperator = RaceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RaceSubscriber = (function (_super) {
	    __extends(RaceSubscriber, _super);
	    function RaceSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasFirst = false;
	        this.observables = [];
	        this.subscriptions = [];
	    }
	    RaceSubscriber.prototype._next = function (observable) {
	        this.observables.push(observable);
	    };
	    RaceSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
	                this.subscriptions.push(subscription);
	                this.add(subscription);
	            }
	            this.observables = null;
	        }
	    };
	    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (!this.hasFirst) {
	            this.hasFirst = true;
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                if (i !== outerIndex) {
	                    var subscription = this.subscriptions[i];
	                    subscription.unsubscribe();
	                    this.remove(subscription);
	                }
	            }
	            this.subscriptions = null;
	        }
	        this.destination.next(innerValue);
	    };
	    return RaceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.RaceSubscriber = RaceSubscriber;
	//# sourceMappingURL=race.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var never_1 = __webpack_require__(82);
	Observable_1.Observable.never = never_1.never;
	//# sourceMappingURL=never.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NeverObservable_1 = __webpack_require__(83);
	exports.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var noop_1 = __webpack_require__(84);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer.
	     *
	     * <span class="informal">An Observable that never emits anything.</span>
	     *
	     * <img src="./img/never.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that emits
	     * neither values nor errors nor the completion notification. It can be used
	     * for testing purposes or for composing with other Observables. Please not
	     * that by never emitting a complete notification, this Observable keeps the
	     * subscription from being disposed automatically. Subscriptions need to be
	     * manually disposed.
	     *
	     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
	     * function info() {
	     *   console.log('Will not be called');
	     * }
	     * var result = Rx.Observable.never().startWith(7);
	     * result.subscribe(x => console.log(x), info, info);
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @return {Observable} A "never" Observable: never emits anything.
	     * @static true
	     * @name never
	     * @owner Observable
	     */
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var of_1 = __webpack_require__(86);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(30);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var range_1 = __webpack_require__(88);
	Observable_1.Observable.range = range_1.range;
	//# sourceMappingURL=range.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RangeObservable_1 = __webpack_require__(89);
	exports.range = RangeObservable_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, count, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this._count = count;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits a sequence of numbers within a specified
	     * range.
	     *
	     * <span class="informal">Emits a sequence of numbers in a range.</span>
	     *
	     * <img src="./img/range.png" width="100%">
	     *
	     * `range` operator emits a range of sequential integers, in order, where you
	     * select the `start` of the range and its `length`. By default, uses no
	     * Scheduler and just delivers the notifications synchronously, but may use
	     * an optional Scheduler to regulate those deliveries.
	     *
	     * @example <caption>Emits the numbers 1 to 10</caption>
	     * var numbers = Rx.Observable.range(1, 10);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link interval}
	     *
	     * @param {number} [start=0] The value of the first integer in the sequence.
	     * @param {number} [count=0] The number of sequential integers to generate.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the notifications.
	     * @return {Observable} An Observable of numbers that emits a finite range of
	     * sequential integers.
	     * @static true
	     * @name range
	     * @owner Observable
	     */
	    RangeObservable.create = function (start, count, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (count === void 0) { count = 0; }
	        return new RangeObservable(start, count, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var count = this._count;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, count: count, start: start, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                if (index++ >= count) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	}(Observable_1.Observable));
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throw_1 = __webpack_require__(91);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(92);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (arg) {
	        var error = arg.error, subscriber = arg.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timer_1 = __webpack_require__(94);
	Observable_1.Observable.timer = timer_1.timer;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TimerObservable_1 = __webpack_require__(95);
	exports.timer = TimerObservable_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(70);
	var Observable_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(71);
	var isScheduler_1 = __webpack_require__(33);
	var isDate_1 = __webpack_require__(96);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = -1;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this.period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = async_1.async;
	        }
	        this.scheduler = scheduler;
	        this.dueTime = isDate_1.isDate(dueTime) ?
	            (+dueTime - this.scheduler.now()) :
	            dueTime;
	    }
	    /**
	     * Creates an Observable that starts emitting after an `initialDelay` and
	     * emits ever increasing numbers after each `period` of time thereafter.
	     *
	     * <span class="informal">Its like {@link interval}, but you can specify when
	     * should the emissions start.</span>
	     *
	     * <img src="./img/timer.png" width="100%">
	     *
	     * `timer` returns an Observable that emits an infinite sequence of ascending
	     * integers, with a constant interval of time, `period` of your choosing
	     * between those emissions. The first emission happens after the specified
	     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
	     * operator uses the `async` Scheduler to provide a notion of time, but you
	     * may pass any Scheduler to it. If `period` is not specified, the output
	     * Observable emits only one value, `0`. Otherwise, it emits an infinite
	     * sequence.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
	     * var numbers = Rx.Observable.timer(3000, 1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @example <caption>Emits one number after five seconds</caption>
	     * var numbers = Rx.Observable.timer(5000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link interval}
	     * @see {@link delay}
	     *
	     * @param {number|Date} initialDelay The initial delay time to wait before
	     * emitting the first value of `0`.
	     * @param {number} [period] The period of time between emissions of the
	     * subsequent numbers.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a `0` after the
	     * `initialDelay` and ever increasing numbers after each `period` of time
	     * thereafter.
	     * @static true
	     * @name timer
	     * @owner Observable
	     */
	    TimerObservable.create = function (initialDelay, period, scheduler) {
	        if (initialDelay === void 0) { initialDelay = 0; }
	        return new TimerObservable(initialDelay, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (period === -1) {
	            return subscriber.complete();
	        }
	        state.index = index + 1;
	        action.schedule(state, period);
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
	        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	            index: index, period: period, subscriber: subscriber
	        });
	    };
	    return TimerObservable;
	}(Observable_1.Observable));
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zip_1 = __webpack_require__(98);
	Observable_1.Observable.zip = zip_1.zip;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(99);
	exports.zip = zip_1.zipStatic;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(30);
	var isArray_1 = __webpack_require__(11);
	var Subscriber_1 = __webpack_require__(8);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	var iterator_1 = __webpack_require__(37);
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @method zip
	 * @owner Observable
	 */
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	exports.zipProto = zipProto;
	/* tslint:enable:max-line-length */
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @static true
	 * @name zip
	 * @owner Observable
	 */
	function zipStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
	}
	exports.zipStatic = zipStatic;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ZipSubscriber(subscriber, this.project));
	    };
	    return ZipOperator;
	}());
	exports.ZipOperator = ZipOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray_1.isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[iterator_1.$$iterator] === 'function') {
	            iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                this.add(iterator.subscribe(iterator, i));
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        if (this.project) {
	            this._tryProject(args);
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    ZipSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return ZipSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	}());
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
	    };
	    return ZipBufferIterator;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=zip.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var buffer_1 = __webpack_require__(101);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Buffers the source Observable values until `closingNotifier` emits.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when another Observable emits.</span>
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * Buffers the incoming Observable values until the given `closingNotifier`
	 * Observable emits a value, at which point it emits the buffer on the output
	 * Observable and starts a new buffer internally, awaiting the next time
	 * `closingNotifier` emits.
	 *
	 * @example <caption>On every click, emit array of most recent interval events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var buffered = interval.buffer(clicks);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link window}
	 *
	 * @param {Observable<any>} closingNotifier An Observable that signals the
	 * buffer to be emitted on the output Observable.
	 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
	 * values.
	 * @method buffer
	 * @owner Observable
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
	    };
	    return BufferOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	    };
	    return BufferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferCount_1 = __webpack_require__(103);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Buffers the source Observable values until the size hits the maximum
	 * `bufferSize` given.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when its size reaches `bufferSize`.</span>
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * Buffers a number of values from the source Observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * @example <caption>Emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>On every click, emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2, 1);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowCount}
	 *
	 * @param {number} bufferSize The maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
	 * For example if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source. A new buffer is started at the
	 * beginning of the source by default.
	 * @return {Observable<T[]>} An Observable of arrays of buffered values.
	 * @method bufferCount
	 * @owner Observable
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
	    };
	    return BufferCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    return BufferCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferTime_1 = __webpack_require__(105);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(71);
	/**
	 * Buffers the source Observable values for a specific time period.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * those arrays periodically in time.</span>
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
	 * Unless the optional argument `bufferCreationInterval` is given, it emits and
	 * resets the buffer every `bufferTimeSpan` milliseconds. If
	 * `bufferCreationInterval` is given, this operator opens the buffer every
	 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
	 * buffer every `bufferTimeSpan` milliseconds.
	 *
	 * @example <caption>Every second, emit an array of the recent click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(1000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(2000, 5000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowTime}
	 *
	 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
	 * @param {number} [bufferCreationInterval] The interval at which to start new
	 * buffers.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine buffer boundaries.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferTime
	 * @owner Observable
	 */
	function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
	    if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler));
	    };
	    return BufferTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	        this.buffers = [];
	        var buffer = this.openBuffer();
	        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
	            var closeState = { subscriber: this, buffer: buffer };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        else {
	            var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
	            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var buffers = this.buffers;
	        var len = buffers.length;
	        for (var i = 0; i < len; i++) {
	            buffers[i].push(value);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.buffers.length = 0;
	        _super.prototype._error.call(this, err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var _a = this, buffers = _a.buffers, destination = _a.destination;
	        while (buffers.length > 0) {
	            destination.next(buffers.shift());
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferTimeSubscriber.prototype._unsubscribe = function () {
	        this.buffers = null;
	    };
	    BufferTimeSubscriber.prototype.openBuffer = function () {
	        var buffer = [];
	        this.buffers.push(buffer);
	        return buffer;
	    };
	    BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
	        this.destination.next(buffer);
	        var buffers = this.buffers;
	        buffers.splice(buffers.indexOf(buffer), 1);
	    };
	    return BufferTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevBuffer = state.buffer;
	    if (prevBuffer) {
	        subscriber.closeBuffer(prevBuffer);
	    }
	    state.buffer = subscriber.openBuffer();
	    if (!subscriber.isUnsubscribed) {
	        this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var buffer = subscriber.openBuffer();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(arg) {
	    var subscriber = arg.subscriber, buffer = arg.buffer;
	    subscriber.closeBuffer(buffer);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferToggle_1 = __webpack_require__(107);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(10);
	var subscribeToResult_1 = __webpack_require__(35);
	var OuterSubscriber_1 = __webpack_require__(34);
	/**
	 * Buffers the source Observable values starting from an emission from
	 * `openings` and ending when the output of `closingSelector` emits.
	 *
	 * <span class="informal">Collects values from the past as an array. Starts
	 * collecting only when `opening` emits, and calls the `closingSelector`
	 * function to get an Observable that tells when to close the buffer.</span>
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * a Subscribable or Promise returned by the `closingSelector` function emits.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var buffered = clicks.bufferToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferWhen}
	 * @see {@link windowToggle}
	 *
	 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
	 * buffers.
	 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
	 * which, when it emits, signals that the associated buffer should be emitted
	 * and cleared.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferToggle
	 * @owner Observable
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return BufferToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, openings));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._error.call(this, err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._complete.call(this);
	    };
	    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
	    };
	    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.closeBuffer(innerSub.context);
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        try {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = closingSelector.call(this, value);
	            if (closingNotifier) {
	                this.trySubscribe(closingNotifier);
	            }
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts && context) {
	            var buffer = context.buffer, subscription = context.subscription;
	            this.destination.next(buffer);
	            contexts.splice(contexts.indexOf(context), 1);
	            this.remove(subscription);
	            subscription.unsubscribe();
	        }
	    };
	    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
	        var contexts = this.contexts;
	        var buffer = [];
	        var subscription = new Subscription_1.Subscription();
	        var context = { buffer: buffer, subscription: subscription };
	        contexts.push(context);
	        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            this.closeBuffer(context);
	        }
	        else {
	            innerSubscription.context = context;
	            this.add(innerSubscription);
	            subscription.add(innerSubscription);
	        }
	    };
	    return BufferToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferWhen_1 = __webpack_require__(109);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(10);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Buffers the source Observable values, using a factory function of closing
	 * Observables to determine when to close, emit, and reset the buffer.
	 *
	 * <span class="informal">Collects values from the past as an array. When it
	 * starts collecting values, it calls a function that returns an Observable that
	 * tells when to close the buffer and restart collecting.</span>
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` function emits a value. When it closes
	 * the buffer, it immediately opens a new buffer and repeats the process.
	 *
	 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferWhen(() =>
	 *   Rx.Observable.interval(1000 + Math.random() * 4000)
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link windowWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals buffer closure.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferWhen
	 * @owner Observable
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
	    };
	    return BufferWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.subscribing = false;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferWhenSubscriber.prototype._unsubscribe = function () {
	        this.buffer = null;
	        this.subscribing = false;
	    };
	    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openBuffer();
	    };
	    BufferWhenSubscriber.prototype.notifyComplete = function () {
	        if (this.subscribing) {
	            this.complete();
	        }
	        else {
	            this.openBuffer();
	        }
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var closingSubscription = this.closingSubscription;
	        if (closingSubscription) {
	            this.remove(closingSubscription);
	            closingSubscription.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (this.buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            closingSubscription = new Subscription_1.Subscription();
	            this.closingSubscription = closingSubscription;
	            this.add(closingSubscription);
	            this.subscribing = true;
	            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.subscribing = false;
	        }
	    };
	    return BufferWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var cache_1 = __webpack_require__(111);
	Observable_1.Observable.prototype.cache = cache_1.cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var publishReplay_1 = __webpack_require__(112);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {Observable<any>}
	 * @method cache
	 * @owner Observable
	 */
	function cache(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
	}
	exports.cache = cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(113);
	var multicast_1 = __webpack_require__(115);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var queue_1 = __webpack_require__(114);
	var observeOn_1 = __webpack_require__(57);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(74);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(116);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(10);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var catch_1 = __webpack_require__(118);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineAll_1 = __webpack_require__(120);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var combineLatest_1 = __webpack_require__(29);
	/**
	 * Converts a higher-order Observable into a first-order Observable by waiting
	 * for the outer Observable to complete, then applying {@link combineLatest}.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by applying
	 * {@link combineLatest} when the Observable-of-Observables completes.</span>
	 *
	 * <img src="./img/combineAll.png" width="100%">
	 *
	 * Takes an Observable of Observables, and collects all Observables from it.
	 * Once the outer Observable completes, it subscribes to all collected
	 * Observables and combines their values using the {@link combineLatest}
	 * strategy, such that:
	 * - Every time an inner Observable emits, the output Observable emits.
	 * - When the returned observable emits, it emits all of the latest values by:
	 *   - If a `project` function is provided, it is called with each recent value
	 *     from each inner Observable in whatever order they arrived, and the result
	 *     of the `project` function is what is emitted by the output Observable.
	 *   - If there is no `project` function, an array of all of the most recent
	 *     values is emitted by the output Observable.
	 *
	 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev =>
	 *   Rx.Observable.interval(Math.random()*2000).take(3)
	 * ).take(2);
	 * var result = higherOrder.combineAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 * @see {@link mergeAll}
	 *
	 * @param {function} [project] An optional function to map the most recent
	 * values from each inner Observable into a new result. Takes each of the most
	 * recent values from each collected inner Observable as arguments, in order.
	 * @return {Observable} An Observable of projected results or arrays of recent
	 * values.
	 * @method combineAll
	 * @owner Observable
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineLatest_1 = __webpack_require__(29);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(41);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatAll_1 = __webpack_require__(124);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(42);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMap_1 = __webpack_require__(126);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(127);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(35);
	var OuterSubscriber_1 = __webpack_require__(34);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMapTo_1 = __webpack_require__(129);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMapTo_1 = __webpack_require__(130);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in a serialized fashion on the output Observable.
	 *
	 * <span class="informal">It's like {@link concatMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/concatMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. Each new `innerObservable`
	 * instance emitted on the output Observable is concatenated with the previous
	 * `innerObservable` instance.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
	 * set to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link mergeMapTo}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An observable of values merged together by joining the
	 * passed observable with itself, one after the other, for each value emitted
	 * from the source.
	 * @method concatMapTo
	 * @owner Observable
	 */
	function concatMapTo(innerObservable, resultSelector) {
	    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in the output Observable.
	 *
	 * <span class="informal">It's like {@link mergeMap}, but maps each value always
	 * to the same inner Observable.</span>
	 *
	 * <img src="./img/mergeMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then merges those resulting Observables into one
	 * single Observable, which is the output Observable.
	 *
	 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeScan}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable.
	 * @method mergeMapTo
	 * @owner Observable
	 */
	function mergeMapTo(innerObservable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
	//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
	    };
	    return MergeMapToOperator;
	}());
	exports.MergeMapToOperator = MergeMapToOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var count_1 = __webpack_require__(132);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Counts the number of emissions on the source and emits that number when the
	 * source completes.
	 *
	 * <span class="informal">Tells how many values were emitted, when the source
	 * completes.</span>
	 *
	 * <img src="./img/count.png" width="100%">
	 *
	 * `count` transforms an Observable that emits values into an Observable that
	 * emits a single value that represents the number of values emitted by the
	 * source Observable. If the source Observable terminates with an error, `count`
	 * will pass this error notification along without emitting an value first. If
	 * the source Observable does not terminate at all, `count` will neither emit
	 * a value nor terminate. This operator takes an optional `predicate` function
	 * as argument, in which case the output emission will represent the number of
	 * source values that matched `true` with the `predicate`.
	 *
	 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var secondsBeforeClick = seconds.takeUntil(clicks);
	 * var result = secondsBeforeClick.count();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
	 * var numbers = Rx.Observable.range(1, 7);
	 * var result = numbers.count(i => i % 2 === 1);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link max}
	 * @see {@link min}
	 * @see {@link reduce}
	 *
	 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
	 * boolean function to select what values are to be counted. It is provided with
	 * arguments of:
	 * - `value`: the value from the source Observable.
	 * - `index`: the (zero-based) "index" of the value from the source Observable.
	 * - `source`: the source Observable instance itself.
	 * @return {Observable} An Observable of one number that represents the count as
	 * described above.
	 * @method count
	 * @owner Observable
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
	    };
	    return CountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        if (this.predicate) {
	            this._tryPredicate(value);
	        }
	        else {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._tryPredicate = function (value) {
	        var result;
	        try {
	            result = this.predicate(value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=count.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var dematerialize_1 = __webpack_require__(134);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that transforms Notification objects into the items or notifications they represent.
	 *
	 * @see {@link Notification}
	 *
	 * @return {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
	 * @method dematerialize
	 * @owner Observable
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DeMaterializeSubscriber(subscriber));
	    };
	    return DeMaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var debounce_1 = __webpack_require__(136);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence as long as the `durationSelector` specifies,
	 * and only then emits the latest source item on the result Observable.
	 * @param {function} durationSelector function for computing the timeout duration for each item.
	 * @return {Observable} an Observable the same as source Observable, but drops items.
	 * @method debounce
	 * @owner Observable
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
	    };
	    return DebounceOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	        this.durationSubscription = null;
	    }
	    DebounceSubscriber.prototype._next = function (value) {
	        try {
	            var result = this.durationSelector.call(this, value);
	            if (result) {
	                this._tryNext(value, result);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.emitValue();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype._tryNext = function (value, duration) {
	        var subscription = this.durationSubscription;
	        this.value = value;
	        this.hasValue = true;
	        if (subscription) {
	            subscription.unsubscribe();
	            this.remove(subscription);
	        }
	        subscription = subscribeToResult_1.subscribeToResult(this, duration);
	        if (!subscription.isUnsubscribed) {
	            this.add(this.durationSubscription = subscription);
	        }
	    };
	    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            var value = this.value;
	            var subscription = this.durationSubscription;
	            if (subscription) {
	                this.durationSubscription = null;
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            this.value = null;
	            this.hasValue = false;
	            _super.prototype._next.call(this, value);
	        }
	    };
	    return DebounceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var debounceTime_1 = __webpack_require__(138);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(71);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence for the `dueTime` length, and only then
	 * emits the latest source item on the result Observable.
	 * Optionally takes a scheduler for manging timers.
	 * @param {number} dueTime the timeout value for the window of time required to not drop the item.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @return {Observable} an Observable the same as source Observable, but drops items.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var defaultIfEmpty_1 = __webpack_require__(140);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that emits the elements of the source or a specified default value if empty.
	 * @param {any} defaultValue the default value used if source is empty; defaults to null.
	 * @return {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
	 * @method defaultIfEmpty
	 * @owner Observable
	 */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	    };
	    return DefaultIfEmptyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var delay_1 = __webpack_require__(142);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(71);
	var isDate_1 = __webpack_require__(96);
	var Subscriber_1 = __webpack_require__(8);
	var Notification_1 = __webpack_require__(58);
	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return DelayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var delayWhen_1 = __webpack_require__(144);
	Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Observable_1 = __webpack_require__(3);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable that delays the emission of items from the source Observable
	 * by a subscription delay and a delay selector function for each element.
	 * @param {Function} selector function to retrieve a sequence indicating the delay for each given element.
	 * @param {Observable} sequence indicating the delay for the subscription to the source.
	 * @return {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
	 * @method delayWhen
	 * @owner Observable
	 */
	function delayWhen(delayDurationSelector, subscriptionDelay) {
	    if (subscriptionDelay) {
	        return new SubscriptionDelayObservable(this, subscriptionDelay)
	            .lift(new DelayWhenOperator(delayDurationSelector));
	    }
	    return this.lift(new DelayWhenOperator(delayDurationSelector));
	}
	exports.delayWhen = delayWhen;
	var DelayWhenOperator = (function () {
	    function DelayWhenOperator(delayDurationSelector) {
	        this.delayDurationSelector = delayDurationSelector;
	    }
	    DelayWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
	    };
	    return DelayWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelayWhenSubscriber = (function (_super) {
	    __extends(DelayWhenSubscriber, _super);
	    function DelayWhenSubscriber(destination, delayDurationSelector) {
	        _super.call(this, destination);
	        this.delayDurationSelector = delayDurationSelector;
	        this.completed = false;
	        this.delayNotifierSubscriptions = [];
	        this.values = [];
	    }
	    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(outerValue);
	        this.removeSubscription(innerSub);
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
	        var value = this.removeSubscription(innerSub);
	        if (value) {
	            this.destination.next(value);
	        }
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype._next = function (value) {
	        try {
	            var delayNotifier = this.delayDurationSelector(value);
	            if (delayNotifier) {
	                this.tryDelay(delayNotifier, value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DelayWhenSubscriber.prototype._complete = function () {
	        this.completed = true;
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
	        subscription.unsubscribe();
	        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
	        var value = null;
	        if (subscriptionIdx !== -1) {
	            value = this.values[subscriptionIdx];
	            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
	            this.values.splice(subscriptionIdx, 1);
	        }
	        return value;
	    };
	    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
	        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
	        this.add(notifierSubscription);
	        this.delayNotifierSubscriptions.push(notifierSubscription);
	        this.values.push(value);
	    };
	    DelayWhenSubscriber.prototype.tryComplete = function () {
	        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
	            this.destination.complete();
	        }
	    };
	    return DelayWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelayObservable = (function (_super) {
	    __extends(SubscriptionDelayObservable, _super);
	    function SubscriptionDelayObservable(source, subscriptionDelay) {
	        _super.call(this);
	        this.source = source;
	        this.subscriptionDelay = subscriptionDelay;
	    }
	    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
	        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
	    };
	    return SubscriptionDelayObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelaySubscriber = (function (_super) {
	    __extends(SubscriptionDelaySubscriber, _super);
	    function SubscriptionDelaySubscriber(parent, source) {
	        _super.call(this);
	        this.parent = parent;
	        this.source = source;
	        this.sourceSubscribed = false;
	    }
	    SubscriptionDelaySubscriber.prototype._next = function (unused) {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype._error = function (err) {
	        this.unsubscribe();
	        this.parent.error(err);
	    };
	    SubscriptionDelaySubscriber.prototype._complete = function () {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
	        if (!this.sourceSubscribed) {
	            this.sourceSubscribed = true;
	            this.unsubscribe();
	            this.source.subscribe(this.parent);
	        }
	    };
	    return SubscriptionDelaySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctUntilChanged_1 = __webpack_require__(146);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var do_1 = __webpack_require__(148);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var expand_1 = __webpack_require__(150);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
	 * resulting in a new value to then be applied again with the function.
	 * @param {function} project the function for projecting the next emitted item of the Observable.
	 * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
	 * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
	 * @return {Observable} an Observable containing the expansions of the source Observable.
	 * @method expand
	 * @owner Observable
	 */
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
	    };
	    return ExpandOperator;
	}());
	exports.ExpandOperator = ExpandOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (arg) {
	        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        this.active++;
	        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._next(innerValue);
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return ExpandSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var filter_1 = __webpack_require__(152);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var finally_1 = __webpack_require__(154);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(10);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var first_1 = __webpack_require__(156);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var EmptyError_1 = __webpack_require__(157);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var groupBy_1 = __webpack_require__(159);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(10);
	var Observable_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(2);
	var Map_1 = __webpack_require__(160);
	var FastMap_1 = __webpack_require__(162);
	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one
	 * {@link GroupedObservable} per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {function(value: T): K} keySelector a function that extracts the key
	 * for each item.
	 * @param {function(value: T): R} [elementSelector] a function that extracts the
	 * return element for each item.
	 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
	 * a function that returns an Observable to determine how long each group should
	 * exist.
	 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
	 * GroupedObservables, each of which corresponds to a unique key value and each
	 * of which emits those items from the source Observable that share that key
	 * value.
	 * @method groupBy
	 * @owner Observable
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}
	exports.groupBy = groupBy;
	var GroupByOperator = (function () {
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
	    };
	    return GroupByOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.attemptedToUnsubscribe = false;
	        this.count = 0;
	        this.destination = destination;
	        this.add(destination);
	    }
	    GroupBySubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            key = this.keySelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this._group(value, key);
	    };
	    GroupBySubscriber.prototype._group = function (value, key) {
	        var groups = this.groups;
	        if (!groups) {
	            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	        }
	        var group = groups.get(key);
	        if (!group) {
	            groups.set(key, group = new Subject_1.Subject());
	            var groupedObservable = new GroupedObservable(key, group, this);
	            if (this.durationSelector) {
	                this._selectDuration(key, group);
	            }
	            this.destination.next(groupedObservable);
	        }
	        if (this.elementSelector) {
	            this._selectElement(value, group);
	        }
	        else {
	            this.tryGroupNext(value, group);
	        }
	    };
	    GroupBySubscriber.prototype._selectElement = function (value, group) {
	        var result;
	        try {
	            result = this.elementSelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.tryGroupNext(result, group);
	    };
	    GroupBySubscriber.prototype._selectDuration = function (key, group) {
	        var duration;
	        try {
	            duration = this.durationSelector(new GroupedObservable(key, group));
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	    };
	    GroupBySubscriber.prototype.tryGroupNext = function (value, group) {
	        if (!group.isUnsubscribed) {
	            group.next(value);
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	            });
	            groups.clear();
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	            });
	            groups.clear();
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    GroupBySubscriber.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
	            this.attemptedToUnsubscribe = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	            }
	        }
	    };
	    return GroupBySubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        this.tryError(err);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype.tryError = function (err) {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.error(err);
	        }
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype.tryComplete = function () {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.complete();
	        }
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * An Observable representing values belonging to the same group represented by
	 * a common key. The values emitted by a GroupedObservable come from the source
	 * Observable. The common key is available as the field `key` on a
	 * GroupedObservable instance.
	 *
	 * @class GroupedObservable<K, T>
	 */
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
	        if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(refCountSubscription));
	        }
	        subscription.add(groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	}(Observable_1.Observable));
	exports.GroupedObservable = GroupedObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        var parent = this.parent;
	        if (!parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            parent.count -= 1;
	            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                parent.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var MapPolyfill_1 = __webpack_require__(161);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";
	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this.size = 0;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	}());
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";
	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	}());
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var ignoreElements_1 = __webpack_require__(164);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var noop_1 = __webpack_require__(84);
	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @return {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 * @method ignoreElements
	 * @owner Observable
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new IgnoreElementsSubscriber(subscriber));
	    };
	    return IgnoreElementsOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var audit_1 = __webpack_require__(166);
	Observable_1.Observable.prototype.audit = audit_1.audit;
	//# sourceMappingURL=audit.js.map

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * @param durationSelector
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method audit
	 * @owner Observable
	 */
	function audit(durationSelector) {
	    return this.lift(new AuditOperator(durationSelector));
	}
	exports.audit = audit;
	var AuditOperator = (function () {
	    function AuditOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    AuditOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
	    };
	    return AuditOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditSubscriber = (function (_super) {
	    __extends(AuditSubscriber, _super);
	    function AuditSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	    }
	    AuditSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	            }
	        }
	    };
	    AuditSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    AuditSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return AuditSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=audit.js.map

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var auditTime_1 = __webpack_require__(168);
	Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(71);
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method auditTime
	 * @owner Observable
	 */
	function auditTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new AuditTimeOperator(delay, scheduler));
	}
	exports.auditTime = auditTime;
	var AuditTimeOperator = (function () {
	    function AuditTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    AuditTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return AuditTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditTimeSubscriber = (function (_super) {
	    __extends(AuditTimeSubscriber, _super);
	    function AuditTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	    }
	    AuditTimeSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
	        }
	    };
	    AuditTimeSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    return AuditTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var last_1 = __webpack_require__(170);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var EmptyError_1 = __webpack_require__(157);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @return {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 * @method last
	 * @owner Observable
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return LastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var let_1 = __webpack_require__(172);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var every_1 = __webpack_require__(174);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    var source = this;
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var map_1 = __webpack_require__(176);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mapTo_1 = __webpack_require__(178);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var materialize_1 = __webpack_require__(180);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Notification_1 = __webpack_require__(58);
	/**
	 * Returns an Observable that represents all of the emissions and notifications
	 * from the source Observable into emissions marked with their original types
	 * within a `Notification` objects.
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * @see {@link Notification}
	 *
	 * @scheduler materialize does not operate by default on a particular Scheduler.
	 * @return {Observable<Notification<T>>} an Observable that emits items that are the result of
	 * materializing the items and notifications of the source Observable.
	 * @method materialize
	 * @owner Observable
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MaterializeSubscriber(subscriber));
	    };
	    return MaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(78);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeAll_1 = __webpack_require__(42);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMap_1 = __webpack_require__(127);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMapTo_1 = __webpack_require__(130);
	Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var multicast_1 = __webpack_require__(115);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(57);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var partition_1 = __webpack_require__(188);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var not_1 = __webpack_require__(189);
	var filter_1 = __webpack_require__(152);
	/**
	 * @param predicate
	 * @param thisArg
	 * @return {Observable<T>[]}
	 * @method partition
	 * @owner Observable
	 */
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";
	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var pluck_1 = __webpack_require__(191);
	Observable_1.Observable.prototype.pluck = pluck_1.pluck;
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(176);
	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publish_1 = __webpack_require__(193);
	Observable_1.Observable.prototype.publish = publish_1.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subject_1 = __webpack_require__(2);
	var multicast_1 = __webpack_require__(115);
	/**
	 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
	 * before it begins emitting items to those Observers that have subscribed to it.
	 *
	 * <img src="./img/publish.png" width="100%">
	 *
	 * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
	 * @method publish
	 * @owner Observable
	 */
	function publish() {
	    return multicast_1.multicast.call(this, new Subject_1.Subject());
	}
	exports.publish = publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishBehavior_1 = __webpack_require__(195);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BehaviorSubject_1 = __webpack_require__(196);
	var multicast_1 = __webpack_require__(115);
	/**
	 * @param value
	 * @return {ConnectableObservable<T>}
	 * @method publishBehavior
	 * @owner Observable
	 */
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var throwError_1 = __webpack_require__(19);
	var ObjectUnsubscribedError_1 = __webpack_require__(20);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasErrored) {
	            throwError_1.throwError(this.errorValue);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    BehaviorSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishReplay_1 = __webpack_require__(112);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishLast_1 = __webpack_require__(199);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncSubject_1 = __webpack_require__(24);
	var multicast_1 = __webpack_require__(115);
	/**
	 * @return {ConnectableObservable<T>}
	 * @method publishLast
	 * @owner Observable
	 */
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var race_1 = __webpack_require__(80);
	Observable_1.Observable.prototype.race = race_1.race;
	//# sourceMappingURL=race.js.map

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var reduce_1 = __webpack_require__(202);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
	 * then feeds the result of that function along with the second item emitted by the source Observable into the same
	 * function, and so on until all items have been emitted by the source Observable, and emits the final result from
	 * the final call to your function as its sole item.
	 * This technique, which is called "reduce" here, is sometimes called "aggregate," "fold," "accumulate," "compress," or
	 * "inject" in other programming contexts.
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * @param {initialValue} the initial (seed) accumulator value
	 * @param {accumulator} an accumulator function to be invoked on each item emitted by the source Observable, the
	 * result of which will be used in the next accumulator call.
	 * @return {Observable} an Observable that emits a single item that is the result of accumulating the output from the
	 * items emitted by the source Observable.
	 * @method reduce
	 * @owner Observable
	 */
	function reduce(project, seed) {
	    return this.lift(new ReduceOperator(project, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(project, seed) {
	        this.project = project;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ReduceSubscriber(subscriber, this.project, this.seed));
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, project, seed) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.acc = seed;
	        this.project = project;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.project(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var repeat_1 = __webpack_require__(204);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var EmptyObservable_1 = __webpack_require__(32);
	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 * @method repeat
	 * @owner Observable
	 */
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    }
	    else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
	    };
	    return RepeatOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RepeatSubscriber = (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RepeatSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.complete.call(this);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RepeatSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var retry_1 = __webpack_require__(206);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @return {Observable} the source Observable modified with the retry logic.
	 * @method retry
	 * @owner Observable
	 */
	function retry(count) {
	    if (count === void 0) { count = -1; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
	    };
	    return RetryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetrySubscriber = (function (_super) {
	    __extends(RetrySubscriber, _super);
	    function RetrySubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RetrySubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.error.call(this, err);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RetrySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=retry.js.map

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var retryWhen_1 = __webpack_require__(208);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @return {Observable} the source Observable modified with retry logic.
	 * @method retryWhen
	 * @owner Observable
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
	    };
	    return RetryWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetryWhenSubscriber = (function (_super) {
	    __extends(RetryWhenSubscriber, _super);
	    function RetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;
	            if (!retries) {
	                errors = new Subject_1.Subject();
	                retries = tryCatch_1.tryCatch(this.notifier)(errors);
	                if (retries === errorObject_1.errorObject) {
	                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
	                }
	                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
	            }
	            else {
	                this.errors = null;
	                this.retriesSubscription = null;
	            }
	            this.unsubscribe();
	            this.isUnsubscribed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            errors.next(err);
	        }
	    };
	    RetryWhenSubscriber.prototype._unsubscribe = function () {
	        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
	        if (errors) {
	            errors.unsubscribe();
	            this.errors = null;
	        }
	        if (retriesSubscription) {
	            retriesSubscription.unsubscribe();
	            this.retriesSubscription = null;
	        }
	        this.retries = null;
	    };
	    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
	        this.errors = null;
	        this.retries = null;
	        this.retriesSubscription = null;
	        this.unsubscribe();
	        this.isStopped = false;
	        this.isUnsubscribed = false;
	        this.errors = errors;
	        this.retries = retries;
	        this.retriesSubscription = retriesSubscription;
	        this.source.subscribe(this);
	    };
	    return RetryWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var sample_1 = __webpack_require__(210);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable that, when the specified sampler Observable emits an item or completes, it then emits the most
	 * recently emitted item (if any) emitted by the source Observable since the previous emission from the sampler
	 * Observable.
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * @param {Observable} sampler - the Observable to use for sampling the source Observable.
	 * @return {Observable<T>} an Observable that emits the results of sampling the items emitted by this Observable
	 * whenever the sampler Observable emits an item or completes.
	 * @method sample
	 * @owner Observable
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
	    };
	    return SampleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.value);
	        }
	    };
	    return SampleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=sample.js.map

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var sampleTime_1 = __webpack_require__(212);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(71);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method sampleTime
	 * @owner Observable
	 */
	function sampleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new SampleTimeOperator(delay, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return SampleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, delay = state.delay;
	    subscriber.notifyNext();
	    this.schedule(state, delay);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var scan_1 = __webpack_require__(214);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Applies an accumulation function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var share_1 = __webpack_require__(216);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(115);
	var Subject_1 = __webpack_require__(2);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var single_1 = __webpack_require__(218);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var EmptyError_1 = __webpack_require__(157);
	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 * @method single
	 * @owner Observable
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
	    };
	    return SingleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        this.index++;
	        if (predicate) {
	            this.tryNext(value);
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype.tryNext = function (value) {
	        try {
	            var result = this.predicate(value, this.index, this.source);
	            if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=single.js.map

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skip_1 = __webpack_require__(220);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipSubscriber(subscriber, this.total));
	    };
	    return SkipOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skipUntil_1 = __webpack_require__(222);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	 *
	 * <img src="./img/skipUntil.png" width="100%">
	 *
	 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	 * be mirrored by the resulting Observable.
	 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	 * an item, then emits the remaining items.
	 * @method skipUntil
	 * @owner Observable
	 */
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
	    };
	    return SkipUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.isInnerStopped = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.hasValue) {
	            _super.prototype._next.call(this, value);
	        }
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.isInnerStopped) {
	            _super.prototype._complete.call(this);
	        }
	        else {
	            this.unsubscribe();
	        }
	    };
	    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.hasValue = true;
	    };
	    SkipUntilSubscriber.prototype.notifyComplete = function () {
	        this.isInnerStopped = true;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skipWhile_1 = __webpack_require__(224);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 * @method skipWhile
	 * @owner Observable
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
	    };
	    return SkipWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var startWith_1 = __webpack_require__(226);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(30);
	var ScalarObservable_1 = __webpack_require__(31);
	var EmptyObservable_1 = __webpack_require__(32);
	var concat_1 = __webpack_require__(41);
	var isScheduler_1 = __webpack_require__(33);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var subscribeOn_1 = __webpack_require__(228);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(229);
	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 * @method subscribeOn
	 * @owner Observable
	 */
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var asap_1 = __webpack_require__(230);
	var isNumeric_1 = __webpack_require__(70);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (arg) {
	        var source = arg.source, subscriber = arg.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        });
	    };
	    return SubscribeOnObservable;
	}(Observable_1.Observable));
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(231);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(232);
	var QueueScheduler_1 = __webpack_require__(74);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(233);
	var FutureAction_1 = __webpack_require__(73);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(4);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switch_1 = __webpack_require__(235);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * subscribing to only the most recently emitted of those inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * previous inner Observable once a new one appears.</span>
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * `switch` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable subscribes to the inner Observable and
	 * begins emitting the items emitted by that. So far, it behaves
	 * like {@link mergeAll}. However, when a new inner Observable is emitted,
	 * `switch` unsubscribes from the earlier-emitted inner Observable and
	 * subscribes to the new inner Observable and begins emitting items from it. It
	 * continues to behave like this for subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * // Each click event is mapped to an Observable that ticks every second
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var switched = higherOrder.switch();
	 * // The outcome is that `switched` is essentially a timer that restarts
	 * // on every click. The interval Observables from older clicks do not merge
	 * // with the current interval Observable.
	 * switched.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switchMap}
	 * @see {@link switchMapTo}
	 * @see {@link zipAll}
	 *
	 * @return {Observable<T>} An Observable that emits the items emitted by the
	 * Observable most recently emitted by the source Observable.
	 * @method switch
	 * @name switch
	 * @owner Observable
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchSubscriber(subscriber));
	    };
	    return SwitchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switch.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMap_1 = __webpack_require__(237);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMapTo_1 = __webpack_require__(239);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	    };
	    return SwitchMapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var take_1 = __webpack_require__(241);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var ArgumentOutOfRangeError_1 = __webpack_require__(242);
	var EmptyObservable_1 = __webpack_require__(32);
	/**
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 * @param total
	 * @return {any}
	 * @method take
	 * @owner Observable
	 */
	function take(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeLast_1 = __webpack_require__(244);
	Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var ArgumentOutOfRangeError_1 = __webpack_require__(242);
	var EmptyObservable_1 = __webpack_require__(32);
	/**
	 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 * @param total
	 * @return {any}
	 * @method takeLast
	 * @owner Observable
	 */
	function takeLast(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeLastOperator(total));
	    }
	}
	exports.takeLast = takeLast;
	var TakeLastOperator = (function () {
	    function TakeLastOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeLastOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
	    };
	    return TakeLastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeLastSubscriber = (function (_super) {
	    __extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.ring = new Array();
	        this.count = 0;
	    }
	    TakeLastSubscriber.prototype._next = function (value) {
	        var ring = this.ring;
	        var total = this.total;
	        var count = this.count++;
	        if (ring.length < total) {
	            ring.push(value);
	        }
	        else {
	            var index = count % total;
	            ring[index] = value;
	        }
	    };
	    TakeLastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var count = this.count;
	        if (count > 0) {
	            var total = this.count >= this.total ? this.total : this.count;
	            var ring = this.ring;
	            for (var i = 0; i < total; i++) {
	                var idx = (count++) % total;
	                destination.next(ring[idx]);
	            }
	        }
	        destination.complete();
	    };
	    return TakeLastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeUntil_1 = __webpack_require__(246);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * @param notifier
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	    };
	    return TakeUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeWhile_1 = __webpack_require__(248);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * @param predicate
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method takeWhile
	 * @owner Observable
	 */
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
	    };
	    return TakeWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result;
	        try {
	            result = this.predicate(value, this.index++);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        this.nextOrComplete(value, result);
	    };
	    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
	        var destination = this.destination;
	        if (Boolean(predicateResult)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throttle_1 = __webpack_require__(250);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * @param durationSelector
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method throttle
	 * @owner Observable
	 */
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
	    };
	    return ThrottleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.tryDurationSelector(value);
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        var duration = null;
	        try {
	            duration = this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.emitAndThrottle(value, duration);
	    };
	    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
	        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	        this.destination.next(value);
	    };
	    ThrottleSubscriber.prototype._unsubscribe = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._unsubscribe();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this._unsubscribe();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throttleTime_1 = __webpack_require__(252);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var async_1 = __webpack_require__(71);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method throttleTime
	 * @owner Observable
	 */
	function throttleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new ThrottleTimeOperator(delay, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return ThrottleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(arg) {
	    var subscriber = arg.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timeout_1 = __webpack_require__(254);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(71);
	var isDate_1 = __webpack_require__(96);
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * @param due
	 * @param errorToSend
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeout
	 * @owner Observable
	 */
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
	    };
	    return TimeoutOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timeoutWith_1 = __webpack_require__(256);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(71);
	var isDate_1 = __webpack_require__(96);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * @param due
	 * @param withObservable
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeoutWith
	 * @owner Observable
	 */
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
	    };
	    return TimeoutWithOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toArray_1 = __webpack_require__(258);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toPromise_1 = __webpack_require__(260);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var window_1 = __webpack_require__(262);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Branch out the source Observable values as a nested Observable whenever
	 * `windowBoundaries` emits.
	 *
	 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
	 * instead of an array.</span>
	 *
	 * <img src="./img/window.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping
	 * windows. It emits the current window and opens a new one whenever the
	 * Observable `windowBoundaries` emits an item. Because each window is an
	 * Observable, the output is a higher-order Observable.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var result = clicks.window(interval)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link buffer}
	 *
	 * @param {Observable<any>} windowBoundaries An Observable that completes the
	 * previous window and starts a new window.
	 * @return {Observable<Observable<T>>} An Observable of windows, which are
	 * Observables emitting values of the source Observable.
	 * @method window
	 * @owner Observable
	 */
	function window(windowBoundaries) {
	    return this.lift(new WindowOperator(windowBoundaries));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(windowBoundaries) {
	        this.windowBoundaries = windowBoundaries;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.windowBoundaries));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, windowBoundaries) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowBoundaries = windowBoundaries;
	        this.add(subscribeToResult_1.subscribeToResult(this, windowBoundaries));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow();
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this._complete();
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=window.js.map

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowCount_1 = __webpack_require__(264);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Subject_1 = __webpack_require__(2);
	/**
	 * Branch out the source Observable values as a nested Observable with each
	 * nested Observable emitting at most `windowSize` values.
	 *
	 * <span class="informal">It's like {@link bufferCount}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowCount.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows every `startWindowEvery`
	 * items, each containing no more than `windowSize` items. When the source
	 * Observable completes or encounters an error, the output Observable emits
	 * the current window and propagates the notification from the source
	 * Observable. If `startWindowEvery` is not provided, then new windows are
	 * started immediately at the start of the source and when each window completes
	 * with size `windowSize`.
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(3)
	 *   .map(win => win.skip(1)) // skip first of every 3 clicks
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(2, 3)
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferCount}
	 *
	 * @param {number} windowSize The maximum number of values emitted by each
	 * window.
	 * @param {number} [startWindowEvery] Interval at which to start a new window.
	 * For example if `startWindowEvery` is `2`, then a new window will be started
	 * on every other value from the source. A new window is started at the
	 * beginning of the source by default.
	 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
	 * are Observable of values.
	 * @method windowCount
	 * @owner Observable
	 */
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
	    };
	    return WindowCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowTime_1 = __webpack_require__(266);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	var Subject_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(71);
	/**
	 * Branch out the source Observable values as a nested Observable periodically
	 * in time.
	 *
	 * <span class="informal">It's like {@link bufferTime}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowTime.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable starts a new window periodically, as
	 * determined by the `windowCreationInterval` argument. It emits each window
	 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
	 * source Observable completes or encounters an error, the output Observable
	 * emits the current window and propagates the notification from the source
	 * Observable. If `windowCreationInterval` is not provided, the output
	 * Observable starts a new window when the previous window of duration
	 * `windowTimeSpan` completes.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000, 5000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferTime}
	 *
	 * @param {number} windowTimeSpan The amount of time to fill each window.
	 * @param {number} [windowCreationInterval] The interval at which to start new
	 * windows.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine window boundaries.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowTime
	 * @owner Observable
	 */
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
	    };
	    return WindowTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            var window_3 = windows[i];
	            if (!window_3.isUnsubscribed) {
	                window_3.next(value);
	            }
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            var window_4 = windows.shift();
	            if (!window_4.isUnsubscribed) {
	                window_4.complete();
	            }
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(arg) {
	    var subscriber = arg.subscriber, window = arg.window, context = arg.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowToggle_1 = __webpack_require__(268);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(10);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Branch out the source Observable values as a nested Observable starting from
	 * an emission from `openings` and ending when the output of `closingSelector`
	 * emits.
	 *
	 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowToggle.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows that contain those items
	 * emitted by the source Observable between the time when the `openings`
	 * Observable emits an item and when the Observable returned by
	 * `closingSelector` emits an item.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var result = clicks.windowToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * ).mergeAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowWhen}
	 * @see {@link bufferToggle}
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * windows.
	 * @param {function(value: O): Observable} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns an Observable,
	 * which, when it emits (either `next` or `complete`), signals that the
	 * associated window should complete.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowToggle
	 * @owner Observable
	 */
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return WindowToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        if (contexts) {
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].window.next(value);
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.error(err);
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._error.call(this, err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.complete();
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    WindowToggleSubscriber.prototype._unsubscribe = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.unsubscribe();
	                context.subscription.unsubscribe();
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (outerValue === this.openings) {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
	            if (closingNotifier === errorObject_1.errorObject) {
	                return this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                var window_1 = new Subject_1.Subject();
	                var subscription = new Subscription_1.Subscription();
	                var context = { window: window_1, subscription: subscription };
	                this.contexts.push(context);
	                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	                if (innerSubscription.isUnsubscribed) {
	                    this.closeWindow(this.contexts.length - 1);
	                }
	                else {
	                    innerSubscription.context = context;
	                    subscription.add(innerSubscription);
	                }
	                this.destination.next(window_1);
	            }
	        }
	        else {
	            this.closeWindow(this.contexts.indexOf(outerValue));
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyError = function (err) {
	        this.error(err);
	    };
	    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
	        if (inner !== this.openSubscription) {
	            this.closeWindow(this.contexts.indexOf(inner.context));
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (index) {
	        if (index === -1) {
	            return;
	        }
	        var contexts = this.contexts;
	        var context = contexts[index];
	        var window = context.window, subscription = context.subscription;
	        contexts.splice(index, 1);
	        window.complete();
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowWhen_1 = __webpack_require__(270);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Branch out the source Observable values as a nested Observable using a
	 * factory function of closing Observables to determine when to start a new
	 * window.
	 *
	 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowWhen.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping windows.
	 * It emits the current window and opens a new one whenever the Observable
	 * produced by the specified `closingSelector` function emits an item. The first
	 * window is opened immediately when subscribing to the output Observable.
	 *
	 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks
	 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link bufferWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals (on either `next` or
	 * `complete`) when to close the previous window and start a new one.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowWhen
	 * @owner Observable
	 */
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
	        if (this.closingNotification) {
	            this.closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function (innerSub) {
	        if (innerSub === void 0) { innerSub = null; }
	        if (innerSub) {
	            this.remove(innerSub);
	            innerSub.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = errorObject_1.errorObject.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var withLatestFrom_1 = __webpack_require__(272);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(34);
	var subscribeToResult_1 = __webpack_require__(35);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zip_1 = __webpack_require__(99);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zipAll_1 = __webpack_require__(275);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(99);
	/**
	 * @param project
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method zipAll
	 * @owner Observable
	 */
	function zipAll(project) {
	    return this.lift(new zip_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(8);
	var Operator = (function () {
	    function Operator() {
	    }
	    Operator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new Subscriber_1.Subscriber(subscriber));
	    };
	    return Operator;
	}());
	exports.Operator = Operator;
	//# sourceMappingURL=Operator.js.map

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && __webpack_require__(278);
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* Starting point to import all public core APIs.
	*/
	__export(__webpack_require__(280));
	__export(__webpack_require__(289));
	__export(__webpack_require__(290));
	var application_ref_1 = __webpack_require__(308);
	exports.createPlatform = application_ref_1.createPlatform;
	exports.assertPlatform = application_ref_1.assertPlatform;
	exports.disposePlatform = application_ref_1.disposePlatform;
	exports.getPlatform = application_ref_1.getPlatform;
	exports.coreBootstrap = application_ref_1.coreBootstrap;
	exports.coreLoadAndBootstrap = application_ref_1.coreLoadAndBootstrap;
	exports.createNgZone = application_ref_1.createNgZone;
	exports.PlatformRef = application_ref_1.PlatformRef;
	exports.ApplicationRef = application_ref_1.ApplicationRef;
	var application_tokens_1 = __webpack_require__(313);
	exports.APP_ID = application_tokens_1.APP_ID;
	exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
	exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
	exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
	__export(__webpack_require__(335));
	__export(__webpack_require__(336));
	__export(__webpack_require__(337));
	var debug_node_1 = __webpack_require__(342);
	exports.DebugElement = debug_node_1.DebugElement;
	exports.DebugNode = debug_node_1.DebugNode;
	exports.asNativeElements = debug_node_1.asNativeElements;
	exports.getDebugNode = debug_node_1.getDebugNode;
	__export(__webpack_require__(314));
	__export(__webpack_require__(343));
	__export(__webpack_require__(344));
	__export(__webpack_require__(345));
	__export(__webpack_require__(346));
	__export(__webpack_require__(299));
	var profile_1 = __webpack_require__(323);
	exports.wtfCreateScope = profile_1.wtfCreateScope;
	exports.wtfLeave = profile_1.wtfLeave;
	exports.wtfStartTimeRange = profile_1.wtfStartTimeRange;
	exports.wtfEndTimeRange = profile_1.wtfEndTimeRange;
	var lang_1 = __webpack_require__(282);
	exports.Type = lang_1.Type;
	exports.enableProdMode = lang_1.enableProdMode;
	var async_1 = __webpack_require__(310);
	exports.EventEmitter = async_1.EventEmitter;
	var exceptions_1 = __webpack_require__(293);
	exports.ExceptionHandler = exceptions_1.ExceptionHandler;
	exports.WrappedException = exceptions_1.WrappedException;
	exports.BaseException = exceptions_1.BaseException;
	__export(__webpack_require__(347));
	//# sourceMappingURL=index.js.map

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* This indirection is needed to free up Component, etc symbols in the public API
	* to be used by the decorator versions of these annotations.
	*/
	var di_1 = __webpack_require__(281);
	exports.QueryMetadata = di_1.QueryMetadata;
	exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
	exports.ContentChildMetadata = di_1.ContentChildMetadata;
	exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
	exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
	exports.ViewChildMetadata = di_1.ViewChildMetadata;
	exports.AttributeMetadata = di_1.AttributeMetadata;
	var directives_1 = __webpack_require__(285);
	exports.ComponentMetadata = directives_1.ComponentMetadata;
	exports.DirectiveMetadata = directives_1.DirectiveMetadata;
	exports.PipeMetadata = directives_1.PipeMetadata;
	exports.InputMetadata = directives_1.InputMetadata;
	exports.OutputMetadata = directives_1.OutputMetadata;
	exports.HostBindingMetadata = directives_1.HostBindingMetadata;
	exports.HostListenerMetadata = directives_1.HostListenerMetadata;
	var view_1 = __webpack_require__(287);
	exports.ViewMetadata = view_1.ViewMetadata;
	exports.ViewEncapsulation = view_1.ViewEncapsulation;
	var di_2 = __webpack_require__(281);
	var directives_2 = __webpack_require__(285);
	var view_2 = __webpack_require__(287);
	var decorators_1 = __webpack_require__(288);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 */
	exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function (fn) { return fn.View = View; });
	// TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 */
	exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 */
	var View = decorators_1.makeDecorator(view_2.ViewMetadata, function (fn) { return fn.View = View; });
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 */
	exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from QueryMetadata.
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	 *     this.panes = panes;
	 *   }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #findMe>...</div>
	 *   <div #findMeToo>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildrenMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildrenMetadata.
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * See also: [ViewChildrenMetadata]
	 */
	exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildMetadata.
	/**
	 * Declares a reference to a child element.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a selector. An element containing the
	 * matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 * multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * See also: [ViewChildMetadata]
	 */
	exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewQueryMetadata.
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @Query(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from PipeMetadata.
	/**
	 * Declare reusable pipe function.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 */
	exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from OutputMetadata.
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 */
	exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostBindingMetadata.
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('[class.valid]') get valid { return this.control.valid; }
	 *   @HostBinding('[class.invalid]') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostListenerMetadata.
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var metadata_1 = __webpack_require__(283);
	var forward_ref_1 = __webpack_require__(284);
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 * @ts2dart_const
	 */
	var AttributeMetadata = (function (_super) {
	    __extends(AttributeMetadata, _super);
	    function AttributeMetadata(attributeName) {
	        _super.call(this);
	        this.attributeName = attributeName;
	    }
	    Object.defineProperty(AttributeMetadata.prototype, "token", {
	        get: function () {
	            // Normally one would default a token to a type of an injected value but here
	            // the type of a variable is "string" and we can't use primitive type as a return value
	            // so we use instance of Attribute instead. This doesn't matter much in practice as arguments
	            // with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
	            // account.
	            return this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AttributeMetadata.prototype.toString = function () { return "@Attribute(" + lang_1.stringify(this.attributeName) + ")"; };
	    return AttributeMetadata;
	}(metadata_1.DependencyMetadata));
	exports.AttributeMetadata = AttributeMetadata;
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	  *    this.panes = panes;
	  *  }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class Seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #find-me>...</div>
	 *   <div #find-me-too>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var QueryMetadata = (function (_super) {
	    __extends(QueryMetadata, _super);
	    function QueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this);
	        this._selector = _selector;
	        this.descendants = descendants;
	        this.first = first;
	        this.read = read;
	    }
	    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `false` to differentiate it with {@link ViewQueryMetadata}.
	         */
	        get: function () { return false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "selector", {
	        /**
	         * what this is querying for.
	         */
	        get: function () { return forward_ref_1.resolveForwardRef(this._selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
	        /**
	         * whether this is querying for a variable binding or a directive.
	         */
	        get: function () { return lang_1.isString(this.selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
	        /**
	         * returns a list of variable bindings this is querying for.
	         * Only applicable if this is a variable bindings query.
	         */
	        get: function () { return this.selector.split(','); },
	        enumerable: true,
	        configurable: true
	    });
	    QueryMetadata.prototype.toString = function () { return "@Query(" + lang_1.stringify(this.selector) + ")"; };
	    return QueryMetadata;
	}(metadata_1.DependencyMetadata));
	exports.QueryMetadata = QueryMetadata;
	// TODO: add an example after ContentChildren and ViewChildren are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildrenMetadata = (function (_super) {
	    __extends(ContentChildrenMetadata, _super);
	    function ContentChildrenMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.read, read = _d === void 0 ? null : _d;
	        _super.call(this, _selector, { descendants: descendants, read: read });
	    }
	    return ContentChildrenMetadata;
	}(QueryMetadata));
	exports.ContentChildrenMetadata = ContentChildrenMetadata;
	// TODO: add an example after ContentChild and ViewChild are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildMetadata = (function (_super) {
	    __extends(ContentChildMetadata, _super);
	    function ContentChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ContentChildMetadata;
	}(QueryMetadata));
	exports.ContentChildMetadata = ContentChildMetadata;
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @ViewQuery(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var ViewQueryMetadata = (function (_super) {
	    __extends(ViewQueryMetadata, _super);
	    function ViewQueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this, _selector, { descendants: descendants, first: first, read: read });
	    }
	    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `true` to differentiate it with {@link QueryMetadata}.
	         */
	        get: function () { return true; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewQueryMetadata.prototype.toString = function () { return "@ViewQuery(" + lang_1.stringify(this.selector) + ")"; };
	    return ViewQueryMetadata;
	}(QueryMetadata));
	exports.ViewQueryMetadata = ViewQueryMetadata;
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildrenMetadata = (function (_super) {
	    __extends(ViewChildrenMetadata, _super);
	    function ViewChildrenMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, read: read });
	    }
	    return ViewChildrenMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildrenMetadata = ViewChildrenMetadata;
	/**
	 *
	 * Declares a reference of child element.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 If the argument is a string, the string is interpreted as a selector. An element containing the
	 matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildMetadata = (function (_super) {
	    __extends(ViewChildMetadata, _super);
	    function ViewChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ViewChildMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildMetadata = ViewChildMetadata;
	//# sourceMappingURL=di.js.map

/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	/**
	 * A parameter metadata that specifies a dependency.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Inject("MyEngine") engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([
	 *  provide("MyEngine", {useClass: Engine}),
	 *  Car
	 * ]);
	 *
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Engine, Car]);
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 * @ts2dart_const
	 */
	var InjectMetadata = (function () {
	    function InjectMetadata(token) {
	        this.token = token;
	    }
	    InjectMetadata.prototype.toString = function () { return "@Inject(" + lang_1.stringify(this.token) + ")"; };
	    return InjectMetadata;
	}());
	exports.InjectMetadata = InjectMetadata;
	/**
	 * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
	 * the dependency is not found.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Optional() engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Car]);
	 * expect(injector.get(Car).engine).toBeNull();
	 * ```
	 * @ts2dart_const
	 */
	var OptionalMetadata = (function () {
	    function OptionalMetadata() {
	    }
	    OptionalMetadata.prototype.toString = function () { return "@Optional()"; };
	    return OptionalMetadata;
	}());
	exports.OptionalMetadata = OptionalMetadata;
	/**
	 * `DependencyMetadata` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 * @ts2dart_const
	 */
	var DependencyMetadata = (function () {
	    function DependencyMetadata() {
	    }
	    Object.defineProperty(DependencyMetadata.prototype, "token", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return DependencyMetadata;
	}());
	exports.DependencyMetadata = DependencyMetadata;
	/**
	 * A marker metadata that marks a class as available to {@link Injector} for creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
	 *
	 * ```typescript
	 * @Injectable()
	 * class UsefulService {}
	 *
	 * @Injectable()
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
	 * ```
	 * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
	 * does not have `@Injectable` marker, as shown in the example below.
	 *
	 * ```typescript
	 * class UsefulService {}
	 *
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(() => injector.get(NeedsService)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var InjectableMetadata = (function () {
	    function InjectableMetadata() {
	    }
	    return InjectableMetadata;
	}());
	exports.InjectableMetadata = InjectableMetadata;
	/**
	 * Specifies that an {@link Injector} should retrieve a dependency only from itself.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@Self() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * var nd = inj.get(NeedsDependency);
	 *
	 * expect(nd.dependency instanceof Dependency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency]);
	 * var child = inj.resolveAndCreateChild([NeedsDependency]);
	 * expect(() => child.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SelfMetadata = (function () {
	    function SelfMetadata() {
	    }
	    SelfMetadata.prototype.toString = function () { return "@Self()"; };
	    return SelfMetadata;
	}());
	exports.SelfMetadata = SelfMetadata;
	/**
	 * Specifies that the dependency resolution should start from the parent injector.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@SkipSelf() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var parent = Injector.resolveAndCreate([Dependency]);
	 * var child = parent.resolveAndCreateChild([NeedsDependency]);
	 * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * expect(() => inj.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SkipSelfMetadata = (function () {
	    function SkipSelfMetadata() {
	    }
	    SkipSelfMetadata.prototype.toString = function () { return "@SkipSelf()"; };
	    return SkipSelfMetadata;
	}());
	exports.SkipSelfMetadata = SkipSelfMetadata;
	/**
	 * Specifies that an injector should retrieve a dependency from any injector until reaching the
	 * closest host.
	 *
	 * In Angular, a component element is automatically declared as a host for all the injectors in
	 * its view.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
	 *
	 * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
	 * So `ParentCmp` is the host of `ChildDirective`.
	 *
	 * `ChildDirective` depends on two services: `HostService` and `OtherService`.
	 * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
	 *
	 *```typescript
	 * class OtherService {}
	 * class HostService {}
	 *
	 * @Directive({
	 *   selector: 'child-directive'
	 * })
	 * class ChildDirective {
	 *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
	 *     console.log("os is null", os);
	 *     console.log("hs is NOT null", hs);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'parent-cmp',
	 *   providers: [HostService],
	 *   template: `
	 *     Dir: <child-directive></child-directive>
	 *   `,
	 *   directives: [ChildDirective]
	 * })
	 * class ParentCmp {
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [OtherService],
	 *   template: `
	 *     Parent: <parent-cmp></parent-cmp>
	 *   `,
	 *   directives: [ParentCmp]
	 * })
	 * class App {
	 * }
	 *
	 * bootstrap(App);
	 *```
	 * @ts2dart_const
	 */
	var HostMetadata = (function () {
	    function HostMetadata() {
	    }
	    HostMetadata.prototype.toString = function () { return "@Host()"; };
	    return HostMetadata;
	}());
	exports.HostMetadata = HostMetadata;
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	/**
	 * Allows to refer to references which are not yet defined.
	 *
	 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
	 * DI is declared,
	 * but not yet defined. It is also used when the `token` which we use when creating a query is not
	 * yet defined.
	 *
	 * ### Example
	 * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
	 */
	function forwardRef(forwardRefFn) {
	    forwardRefFn.__forward_ref__ = forwardRef;
	    forwardRefFn.toString = function () { return lang_1.stringify(this()); };
	    return forwardRefFn;
	}
	exports.forwardRef = forwardRef;
	/**
	 * Lazily retrieves the reference value from a forwardRef.
	 *
	 * Acts as the identity function when given a non-forward-ref value.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
	 *
	 * ```typescript
	 * var ref = forwardRef(() => "refValue");
	 * expect(resolveForwardRef(ref)).toEqual("refValue");
	 * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
	 * ```
	 *
	 * See: {@link forwardRef}
	 */
	function resolveForwardRef(type) {
	    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
	        type.__forward_ref__ === forwardRef) {
	        return type();
	    }
	    else {
	        return type;
	    }
	}
	exports.resolveForwardRef = resolveForwardRef;
	//# sourceMappingURL=forward_ref.js.map

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var metadata_1 = __webpack_require__(283);
	var constants_1 = __webpack_require__(286);
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 * @ts2dart_const
	 */
	var DirectiveMetadata = (function (_super) {
	    __extends(DirectiveMetadata, _super);
	    function DirectiveMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, bindings = _b.bindings, providers = _b.providers, exportAs = _b.exportAs, queries = _b.queries;
	        _super.call(this);
	        this.selector = selector;
	        this._inputs = inputs;
	        this._properties = properties;
	        this._outputs = outputs;
	        this._events = events;
	        this.host = host;
	        this.exportAs = exportAs;
	        this.queries = queries;
	        this._providers = providers;
	        this._bindings = bindings;
	    }
	    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
	        /**
	         * Enumerates the set of data-bound input properties for a directive
	         *
	         * Angular automatically updates input properties during change detection.
	         *
	         * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property where the value is written.
	         * - `bindingProperty` specifies the DOM property where the value is read from.
	         *
	         * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
	         *
	         * The following example creates a component with two data-bound properties.
	         *
	         * ```typescript
	         * @Component({
	         *   selector: 'bank-account',
	         *   inputs: ['bankName', 'id: account-id'],
	         *   template: `
	         *     Bank Name: {{bankName}}
	         *     Account Id: {{id}}
	         *   `
	         * })
	         * class BankAccount {
	         *   bankName: string;
	         *   id: string;
	         *
	         *   // this property is not bound, and won't be automatically updated by Angular
	         *   normalizedBankName: string;
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	         *   `,
	         *   directives: [BankAccount]
	         * })
	         * class App {}
	         *
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties :
	                this._inputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
	        get: function () { return this.inputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
	        /**
	         * Enumerates the set of event-bound output properties.
	         *
	         * When an output property emits an event, an event handler attached to that event
	         * the template is invoked.
	         *
	         * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property that emits events.
	         * - `bindingProperty` specifies the DOM property the event handler is attached to.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
	         *
	         * ```typescript
	         * @Directive({
	         *   selector: 'interval-dir',
	         *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
	         * })
	         * class IntervalDir {
	         *   everySecond = new EventEmitter();
	         *   five5Secs = new EventEmitter();
	         *
	         *   constructor() {
	         *     setInterval(() => this.everySecond.emit("event"), 1000);
	         *     setInterval(() => this.five5Secs.emit("event"), 5000);
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	         *     </interval-dir>
	         *   `,
	         *   directives: [IntervalDir]
	         * })
	         * class App {
	         *   everySecond() { console.log('second'); }
	         *   everyFiveSeconds() { console.log('five seconds'); }
	         * }
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "events", {
	        get: function () { return this.outputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
	        /**
	         * Defines the set of injectable objects that are visible to a Directive and its light DOM
	         * children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'greet',
	         *   bindings: [
	         *     Greeter
	         *   ]
	         * })
	         * class HelloWorld {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings :
	                this._providers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
	        /** @deprecated */
	        get: function () { return this.providers; },
	        enumerable: true,
	        configurable: true
	    });
	    return DirectiveMetadata;
	}(metadata_1.InjectableMetadata));
	exports.DirectiveMetadata = DirectiveMetadata;
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The
	 * `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * For details on the `@View` annotation, see {@link ViewMetadata}.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 * @ts2dart_const
	 */
	var ComponentMetadata = (function (_super) {
	    __extends(ComponentMetadata, _super);
	    function ComponentMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, exportAs = _b.exportAs, moduleId = _b.moduleId, bindings = _b.bindings, providers = _b.providers, viewBindings = _b.viewBindings, viewProviders = _b.viewProviders, _c = _b.changeDetection, changeDetection = _c === void 0 ? constants_1.ChangeDetectionStrategy.Default : _c, queries = _b.queries, templateUrl = _b.templateUrl, template = _b.template, styleUrls = _b.styleUrls, styles = _b.styles, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation;
	        _super.call(this, {
	            selector: selector,
	            inputs: inputs,
	            outputs: outputs,
	            properties: properties,
	            events: events,
	            host: host,
	            exportAs: exportAs,
	            bindings: bindings,
	            providers: providers,
	            queries: queries
	        });
	        this.changeDetection = changeDetection;
	        this._viewProviders = viewProviders;
	        this._viewBindings = viewBindings;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	        this.moduleId = moduleId;
	    }
	    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
	        /**
	         * Defines the set of injectable objects that are visible to its view DOM children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'needs-greeter'
	         * })
	         * class NeedsGreeter {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'greet',
	         *   viewProviders: [
	         *     Greeter
	         *   ],
	         *   template: `<needs-greeter></needs-greeter>`,
	         *   directives: [NeedsGreeter]
	         * })
	         * class HelloWorld {
	         * }
	         *
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings :
	                this._viewProviders;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
	        get: function () { return this.viewProviders; },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentMetadata;
	}(DirectiveMetadata));
	exports.ComponentMetadata = ComponentMetadata;
	/**
	 * Declare reusable pipe function.
	 *
	 * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
	 *
	 * When not specified, pipes default to being pure.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 * @ts2dart_const
	 */
	var PipeMetadata = (function (_super) {
	    __extends(PipeMetadata, _super);
	    function PipeMetadata(_a) {
	        var name = _a.name, pure = _a.pure;
	        _super.call(this);
	        this.name = name;
	        this._pure = pure;
	    }
	    Object.defineProperty(PipeMetadata.prototype, "pure", {
	        get: function () { return lang_1.isPresent(this._pure) ? this._pure : true; },
	        enumerable: true,
	        configurable: true
	    });
	    return PipeMetadata;
	}(metadata_1.InjectableMetadata));
	exports.PipeMetadata = PipeMetadata;
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var InputMetadata = (function () {
	    function InputMetadata(
	        /**
	         * Name used when instantiating a component in the template.
	         */
	        bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return InputMetadata;
	}());
	exports.InputMetadata = InputMetadata;
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var OutputMetadata = (function () {
	    function OutputMetadata(bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return OutputMetadata;
	}());
	exports.OutputMetadata = OutputMetadata;
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('class.valid') get valid { return this.control.valid; }
	 *   @HostBinding('class.invalid') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostBindingMetadata = (function () {
	    function HostBindingMetadata(hostPropertyName) {
	        this.hostPropertyName = hostPropertyName;
	    }
	    return HostBindingMetadata;
	}());
	exports.HostBindingMetadata = HostBindingMetadata;
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostListenerMetadata = (function () {
	    function HostListenerMetadata(eventName, args) {
	        this.eventName = eventName;
	        this.args = args;
	    }
	    return HostListenerMetadata;
	}());
	exports.HostListenerMetadata = HostListenerMetadata;
	//# sourceMappingURL=directives.js.map

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	/**
	 * Describes the current state of the change detector.
	 */
	(function (ChangeDetectorState) {
	    /**
	     * `NeverChecked` means that the change detector has not been checked yet, and
	     * initialization methods should be called during detection.
	     */
	    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
	    /**
	     * `CheckedBefore` means that the change detector has successfully completed at least
	     * one detection previously.
	     */
	    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
	    /**
	     * `Errored` means that the change detector encountered an error checking a binding
	     * or calling a directive lifecycle method and is now in an inconsistent state. Change
	     * detectors in this state will no longer detect changes.
	     */
	    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
	})(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
	var ChangeDetectorState = exports.ChangeDetectorState;
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
	/**
	 * List of possible {@link ChangeDetectionStrategy} values.
	 */
	exports.CHANGE_DETECTION_STRATEGY_VALUES = [
	    ChangeDetectionStrategy.CheckOnce,
	    ChangeDetectionStrategy.Checked,
	    ChangeDetectionStrategy.CheckAlways,
	    ChangeDetectionStrategy.Detached,
	    ChangeDetectionStrategy.OnPush,
	    ChangeDetectionStrategy.Default
	];
	/**
	 * List of possible {@link ChangeDetectorState} values.
	 */
	exports.CHANGE_DETECTOR_STATE_VALUES = [
	    ChangeDetectorState.NeverChecked,
	    ChangeDetectorState.CheckedBefore,
	    ChangeDetectorState.Errored
	];
	function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
	    return lang_1.isBlank(changeDetectionStrategy) ||
	        changeDetectionStrategy === ChangeDetectionStrategy.Default;
	}
	exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
	//# sourceMappingURL=constants.js.map

/***/ },
/* 287 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;
	exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewMetadata = (function () {
	    function ViewMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	    }
	    return ViewMetadata;
	}());
	exports.ViewMetadata = ViewMetadata;
	//# sourceMappingURL=view.js.map

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var _nextClassId = 0;
	function extractAnnotation(annotation) {
	    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
	        // it is a decorator, extract annotation
	        annotation = annotation.annotation;
	    }
	    return annotation;
	}
	function applyParams(fnOrArray, key) {
	    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
	        fnOrArray === Number || fnOrArray === Array) {
	        throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
	    }
	    if (lang_1.isFunction(fnOrArray)) {
	        return fnOrArray;
	    }
	    else if (fnOrArray instanceof Array) {
	        var annotations = fnOrArray;
	        var fn = fnOrArray[fnOrArray.length - 1];
	        if (!lang_1.isFunction(fn)) {
	            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
	        }
	        var annoLength = annotations.length - 1;
	        if (annoLength != fn.length) {
	            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
	        }
	        var paramsAnnotations = [];
	        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	            var paramAnnotations = [];
	            paramsAnnotations.push(paramAnnotations);
	            var annotation = annotations[i];
	            if (annotation instanceof Array) {
	                for (var j = 0; j < annotation.length; j++) {
	                    paramAnnotations.push(extractAnnotation(annotation[j]));
	                }
	            }
	            else if (lang_1.isFunction(annotation)) {
	                paramAnnotations.push(extractAnnotation(annotation));
	            }
	            else {
	                paramAnnotations.push(annotation);
	            }
	        }
	        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	        return fn;
	    }
	    else {
	        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
	    }
	}
	/**
	 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
	 *
	 * ## Basic Example
	 *
	 * ```
	 * var Greeter = ng.Class({
	 *   constructor: function(name) {
	 *     this.name = name;
	 *   },
	 *
	 *   greet: function() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class Greeter {
	 *   constructor(name) {
	 *     this.name = name;
	 *   }
	 *
	 *   greet() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * }
	 * ```
	 *
	 * or equivalent to ES5:
	 *
	 * ```
	 * var Greeter = function (name) {
	 *   this.name = name;
	 * }
	 *
	 * Greeter.prototype.greet = function () {
	 *   alert('Hello ' + this.name + '!');
	 * }
	 * ```
	 *
	 * ### Example with parameter annotations
	 *
	 * ```
	 * var MyService = ng.Class({
	 *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
	 *     ...
	 *   }]
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class MyService {
	 *   constructor(name: string, @Query() queryList: QueryList) {
	 *     ...
	 *   }
	 * }
	 * ```
	 *
	 * ### Example with inheritance
	 *
	 * ```
	 * var Shape = ng.Class({
	 *   constructor: (color) {
	 *     this.color = color;
	 *   }
	 * });
	 *
	 * var Square = ng.Class({
	 *   extends: Shape,
	 *   constructor: function(color, size) {
	 *     Shape.call(this, color);
	 *     this.size = size;
	 *   }
	 * });
	 * ```
	 */
	function Class(clsDef) {
	    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	    var proto = constructor.prototype;
	    if (clsDef.hasOwnProperty('extends')) {
	        if (lang_1.isFunction(clsDef.extends)) {
	            constructor.prototype = proto =
	                Object.create(clsDef.extends.prototype);
	        }
	        else {
	            throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
	        }
	    }
	    for (var key in clsDef) {
	        if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
	            proto[key] = applyParams(clsDef[key], key);
	        }
	    }
	    if (this && this.annotations instanceof Array) {
	        Reflect.defineMetadata('annotations', this.annotations, constructor);
	    }
	    if (!constructor['name']) {
	        constructor['overriddenName'] = "class" + _nextClassId++;
	    }
	    return constructor;
	}
	exports.Class = Class;
	var Reflect = lang_1.global.Reflect;
	// Throw statement at top-level is disallowed by closure compiler in ES6 input.
	// Wrap in an IIFE as a work-around.
	(function checkReflect() {
	    if (!(Reflect && Reflect.getMetadata)) {
	        throw 'reflect-metadata shim is required when using class decorators';
	    }
	})();
	function makeDecorator(annotationCls, chainFn) {
	    if (chainFn === void 0) { chainFn = null; }
	    function DecoratorFactory(objOrType) {
	        var annotationInstance = new annotationCls(objOrType);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
	            chainAnnotation.push(annotationInstance);
	            var TypeDecorator = function TypeDecorator(cls) {
	                var annotations = Reflect.getOwnMetadata('annotations', cls);
	                annotations = annotations || [];
	                annotations.push(annotationInstance);
	                Reflect.defineMetadata('annotations', annotations, cls);
	                return cls;
	            };
	            TypeDecorator.annotations = chainAnnotation;
	            TypeDecorator.Class = Class;
	            if (chainFn)
	                chainFn(TypeDecorator);
	            return TypeDecorator;
	        }
	    }
	    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    DecoratorFactory.annotationCls = annotationCls;
	    return DecoratorFactory;
	}
	exports.makeDecorator = makeDecorator;
	function makeParamDecorator(annotationCls) {
	    function ParamDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var annotationInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotationInstance, args);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	        }
	        function ParamDecorator(cls, unusedKey, index) {
	            var parameters = Reflect.getMetadata('parameters', cls);
	            parameters = parameters || [];
	            // there might be gaps if some in between parameters do not have annotations.
	            // we pad with nulls.
	            while (parameters.length <= index) {
	                parameters.push(null);
	            }
	            parameters[index] = parameters[index] || [];
	            var annotationsForParam = parameters[index];
	            annotationsForParam.push(annotationInstance);
	            Reflect.defineMetadata('parameters', parameters, cls);
	            return cls;
	        }
	    }
	    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    ParamDecoratorFactory.annotationCls = annotationCls;
	    return ParamDecoratorFactory;
	}
	exports.makeParamDecorator = makeParamDecorator;
	function makePropDecorator(annotationCls) {
	    function PropDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var decoratorInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(decoratorInstance, args);
	        if (this instanceof annotationCls) {
	            return decoratorInstance;
	        }
	        else {
	            return function PropDecorator(target, name) {
	                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
	                meta = meta || {};
	                meta[name] = meta[name] || [];
	                meta[name].unshift(decoratorInstance);
	                Reflect.defineMetadata('propMetadata', meta, target.constructor);
	            };
	        }
	    }
	    PropDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    PropDecoratorFactory.annotationCls = annotationCls;
	    return PropDecoratorFactory;
	}
	exports.makePropDecorator = makePropDecorator;
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for util
	var decorators_1 = __webpack_require__(288);
	exports.Class = decorators_1.Class;
	//# sourceMappingURL=util.js.map

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* The `di` module provides dependency injection container services.
	*/
	var metadata_1 = __webpack_require__(283);
	exports.InjectMetadata = metadata_1.InjectMetadata;
	exports.OptionalMetadata = metadata_1.OptionalMetadata;
	exports.InjectableMetadata = metadata_1.InjectableMetadata;
	exports.SelfMetadata = metadata_1.SelfMetadata;
	exports.HostMetadata = metadata_1.HostMetadata;
	exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
	exports.DependencyMetadata = metadata_1.DependencyMetadata;
	// we have to reexport * because Dart and TS export two different sets of types
	__export(__webpack_require__(291));
	var forward_ref_1 = __webpack_require__(284);
	exports.forwardRef = forward_ref_1.forwardRef;
	exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
	var injector_1 = __webpack_require__(292);
	exports.Injector = injector_1.Injector;
	var reflective_injector_1 = __webpack_require__(297);
	exports.ReflectiveInjector = reflective_injector_1.ReflectiveInjector;
	var provider_1 = __webpack_require__(305);
	exports.Binding = provider_1.Binding;
	exports.ProviderBuilder = provider_1.ProviderBuilder;
	exports.bind = provider_1.bind;
	exports.Provider = provider_1.Provider;
	exports.provide = provider_1.provide;
	var reflective_provider_1 = __webpack_require__(298);
	exports.ResolvedReflectiveFactory = reflective_provider_1.ResolvedReflectiveFactory;
	exports.ReflectiveDependency = reflective_provider_1.ReflectiveDependency;
	var reflective_key_1 = __webpack_require__(303);
	exports.ReflectiveKey = reflective_key_1.ReflectiveKey;
	var reflective_exceptions_1 = __webpack_require__(304);
	exports.NoProviderError = reflective_exceptions_1.NoProviderError;
	exports.AbstractProviderError = reflective_exceptions_1.AbstractProviderError;
	exports.CyclicDependencyError = reflective_exceptions_1.CyclicDependencyError;
	exports.InstantiationError = reflective_exceptions_1.InstantiationError;
	exports.InvalidProviderError = reflective_exceptions_1.InvalidProviderError;
	exports.NoAnnotationError = reflective_exceptions_1.NoAnnotationError;
	exports.OutOfBoundsError = reflective_exceptions_1.OutOfBoundsError;
	var opaque_token_1 = __webpack_require__(307);
	exports.OpaqueToken = opaque_token_1.OpaqueToken;
	//# sourceMappingURL=di.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(283);
	var decorators_1 = __webpack_require__(288);
	/**
	 * Factory for creating {@link InjectMetadata}.
	 */
	exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
	/**
	 * Factory for creating {@link OptionalMetadata}.
	 */
	exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
	/**
	 * Factory for creating {@link InjectableMetadata}.
	 */
	exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
	/**
	 * Factory for creating {@link SelfMetadata}.
	 */
	exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
	/**
	 * Factory for creating {@link HostMetadata}.
	 */
	exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
	/**
	 * Factory for creating {@link SkipSelfMetadata}.
	 */
	exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(293);
	var _THROW_IF_NOT_FOUND = new Object();
	exports.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	var Injector = (function () {
	    function Injector() {
	    }
	    /**
	     * Retrieves an instance from the injector based on the provided token.
	     * If not found:
	     * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
	     * Injector.THROW_IF_NOT_FOUND is given
	     * - Returns the `notFoundValue` otherwise
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/HeXSHg?p=preview))
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([
	     *   provide("validToken", {useValue: "Value"})
	     * ]);
	     * expect(injector.get("validToken")).toEqual("Value");
	     * expect(() => injector.get("invalidToken")).toThrowError();
	     * ```
	     *
	     * `Injector` returns itself when given `Injector` as a token.
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([]);
	     * expect(injector.get(Injector)).toBe(injector);
	     * ```
	     */
	    Injector.prototype.get = function (token, notFoundValue) { return exceptions_1.unimplemented(); };
	    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	    return Injector;
	}());
	exports.Injector = Injector;
	//# sourceMappingURL=injector.js.map

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(294);
	var exception_handler_1 = __webpack_require__(295);
	var exception_handler_2 = __webpack_require__(295);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var base_wrapped_exception_1 = __webpack_require__(294);
	var collection_1 = __webpack_require__(296);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(296);
	var reflective_provider_1 = __webpack_require__(298);
	var reflective_exceptions_1 = __webpack_require__(304);
	var exceptions_1 = __webpack_require__(293);
	var reflective_key_1 = __webpack_require__(303);
	var metadata_1 = __webpack_require__(283);
	var injector_1 = __webpack_require__(292);
	var __unused; // avoid unused import when Type union types are erased
	// Threshold for the dynamic version
	var _MAX_CONSTRUCTION_COUNTER = 10;
	var UNDEFINED = new Object();
	var ReflectiveProtoInjectorInlineStrategy = (function () {
	    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
	        this.provider0 = null;
	        this.provider1 = null;
	        this.provider2 = null;
	        this.provider3 = null;
	        this.provider4 = null;
	        this.provider5 = null;
	        this.provider6 = null;
	        this.provider7 = null;
	        this.provider8 = null;
	        this.provider9 = null;
	        this.keyId0 = null;
	        this.keyId1 = null;
	        this.keyId2 = null;
	        this.keyId3 = null;
	        this.keyId4 = null;
	        this.keyId5 = null;
	        this.keyId6 = null;
	        this.keyId7 = null;
	        this.keyId8 = null;
	        this.keyId9 = null;
	        var length = providers.length;
	        if (length > 0) {
	            this.provider0 = providers[0];
	            this.keyId0 = providers[0].key.id;
	        }
	        if (length > 1) {
	            this.provider1 = providers[1];
	            this.keyId1 = providers[1].key.id;
	        }
	        if (length > 2) {
	            this.provider2 = providers[2];
	            this.keyId2 = providers[2].key.id;
	        }
	        if (length > 3) {
	            this.provider3 = providers[3];
	            this.keyId3 = providers[3].key.id;
	        }
	        if (length > 4) {
	            this.provider4 = providers[4];
	            this.keyId4 = providers[4].key.id;
	        }
	        if (length > 5) {
	            this.provider5 = providers[5];
	            this.keyId5 = providers[5].key.id;
	        }
	        if (length > 6) {
	            this.provider6 = providers[6];
	            this.keyId6 = providers[6].key.id;
	        }
	        if (length > 7) {
	            this.provider7 = providers[7];
	            this.keyId7 = providers[7].key.id;
	        }
	        if (length > 8) {
	            this.provider8 = providers[8];
	            this.keyId8 = providers[8].key.id;
	        }
	        if (length > 9) {
	            this.provider9 = providers[9];
	            this.keyId9 = providers[9].key.id;
	        }
	    }
	    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index == 0)
	            return this.provider0;
	        if (index == 1)
	            return this.provider1;
	        if (index == 2)
	            return this.provider2;
	        if (index == 3)
	            return this.provider3;
	        if (index == 4)
	            return this.provider4;
	        if (index == 5)
	            return this.provider5;
	        if (index == 6)
	            return this.provider6;
	        if (index == 7)
	            return this.provider7;
	        if (index == 8)
	            return this.provider8;
	        if (index == 9)
	            return this.provider9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
	        return new ReflectiveInjectorInlineStrategy(injector, this);
	    };
	    return ReflectiveProtoInjectorInlineStrategy;
	}());
	exports.ReflectiveProtoInjectorInlineStrategy = ReflectiveProtoInjectorInlineStrategy;
	var ReflectiveProtoInjectorDynamicStrategy = (function () {
	    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
	        this.providers = providers;
	        var len = providers.length;
	        this.keyIds = collection_1.ListWrapper.createFixedSize(len);
	        for (var i = 0; i < len; i++) {
	            this.keyIds[i] = providers[i].key.id;
	        }
	    }
	    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index < 0 || index >= this.providers.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.providers[index];
	    };
	    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
	        return new ReflectiveInjectorDynamicStrategy(this, ei);
	    };
	    return ReflectiveProtoInjectorDynamicStrategy;
	}());
	exports.ReflectiveProtoInjectorDynamicStrategy = ReflectiveProtoInjectorDynamicStrategy;
	var ReflectiveProtoInjector = (function () {
	    function ReflectiveProtoInjector(providers) {
	        this.numberOfProviders = providers.length;
	        this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
	            new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
	            new ReflectiveProtoInjectorInlineStrategy(this, providers);
	    }
	    ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
	        return new ReflectiveProtoInjector(providers);
	    };
	    ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
	        return this._strategy.getProviderAtIndex(index);
	    };
	    return ReflectiveProtoInjector;
	}());
	exports.ReflectiveProtoInjector = ReflectiveProtoInjector;
	var ReflectiveInjectorInlineStrategy = (function () {
	    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
	        this.injector = injector;
	        this.protoStrategy = protoStrategy;
	        this.obj0 = UNDEFINED;
	        this.obj1 = UNDEFINED;
	        this.obj2 = UNDEFINED;
	        this.obj3 = UNDEFINED;
	        this.obj4 = UNDEFINED;
	        this.obj5 = UNDEFINED;
	        this.obj6 = UNDEFINED;
	        this.obj7 = UNDEFINED;
	        this.obj8 = UNDEFINED;
	        this.obj9 = UNDEFINED;
	    }
	    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        var inj = this.injector;
	        if (p.keyId0 === keyId) {
	            if (this.obj0 === UNDEFINED) {
	                this.obj0 = inj._new(p.provider0);
	            }
	            return this.obj0;
	        }
	        if (p.keyId1 === keyId) {
	            if (this.obj1 === UNDEFINED) {
	                this.obj1 = inj._new(p.provider1);
	            }
	            return this.obj1;
	        }
	        if (p.keyId2 === keyId) {
	            if (this.obj2 === UNDEFINED) {
	                this.obj2 = inj._new(p.provider2);
	            }
	            return this.obj2;
	        }
	        if (p.keyId3 === keyId) {
	            if (this.obj3 === UNDEFINED) {
	                this.obj3 = inj._new(p.provider3);
	            }
	            return this.obj3;
	        }
	        if (p.keyId4 === keyId) {
	            if (this.obj4 === UNDEFINED) {
	                this.obj4 = inj._new(p.provider4);
	            }
	            return this.obj4;
	        }
	        if (p.keyId5 === keyId) {
	            if (this.obj5 === UNDEFINED) {
	                this.obj5 = inj._new(p.provider5);
	            }
	            return this.obj5;
	        }
	        if (p.keyId6 === keyId) {
	            if (this.obj6 === UNDEFINED) {
	                this.obj6 = inj._new(p.provider6);
	            }
	            return this.obj6;
	        }
	        if (p.keyId7 === keyId) {
	            if (this.obj7 === UNDEFINED) {
	                this.obj7 = inj._new(p.provider7);
	            }
	            return this.obj7;
	        }
	        if (p.keyId8 === keyId) {
	            if (this.obj8 === UNDEFINED) {
	                this.obj8 = inj._new(p.provider8);
	            }
	            return this.obj8;
	        }
	        if (p.keyId9 === keyId) {
	            if (this.obj9 === UNDEFINED) {
	                this.obj9 = inj._new(p.provider9);
	            }
	            return this.obj9;
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
	        if (index == 0)
	            return this.obj0;
	        if (index == 1)
	            return this.obj1;
	        if (index == 2)
	            return this.obj2;
	        if (index == 3)
	            return this.obj3;
	        if (index == 4)
	            return this.obj4;
	        if (index == 5)
	            return this.obj5;
	        if (index == 6)
	            return this.obj6;
	        if (index == 7)
	            return this.obj7;
	        if (index == 8)
	            return this.obj8;
	        if (index == 9)
	            return this.obj9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
	    return ReflectiveInjectorInlineStrategy;
	}());
	exports.ReflectiveInjectorInlineStrategy = ReflectiveInjectorInlineStrategy;
	var ReflectiveInjectorDynamicStrategy = (function () {
	    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
	        this.protoStrategy = protoStrategy;
	        this.injector = injector;
	        this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
	        collection_1.ListWrapper.fill(this.objs, UNDEFINED);
	    }
	    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        for (var i = 0; i < p.keyIds.length; i++) {
	            if (p.keyIds[i] === keyId) {
	                if (this.objs[i] === UNDEFINED) {
	                    this.objs[i] = this.injector._new(p.providers[i]);
	                }
	                return this.objs[i];
	            }
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
	        if (index < 0 || index >= this.objs.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.objs[index];
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
	    return ReflectiveInjectorDynamicStrategy;
	}());
	exports.ReflectiveInjectorDynamicStrategy = ReflectiveInjectorDynamicStrategy;
	/**
	 * A ReflectiveDependency injection container used for instantiating objects and resolving
	 * dependencies.
	 *
	 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
	 * constructor dependencies.
	 *
	 * In typical use, application code asks for the dependencies in the constructor and they are
	 * resolved by the `Injector`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
	 *
	 * The following example creates an `Injector` configured to create `Engine` and `Car`.
	 *
	 * ```typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	 * var car = injector.get(Car);
	 * expect(car instanceof Car).toBe(true);
	 * expect(car.engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
	 * resolve all of the object's dependencies automatically.
	 */
	var ReflectiveInjector = (function () {
	    function ReflectiveInjector() {
	    }
	    /**
	     * Turns an array of provider definitions into an array of resolved providers.
	     *
	     * A resolution is a process of flattening multiple nested arrays and converting individual
	     * providers into an array of {@link ResolvedReflectiveProvider}s.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	     *
	     * expect(providers.length).toEqual(2);
	     *
	     * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	     * expect(providers[0].key.displayName).toBe("Car");
	     * expect(providers[0].dependencies.length).toEqual(1);
	     * expect(providers[0].factory).toBeDefined();
	     *
	     * expect(providers[1].key.displayName).toBe("Engine");
	     * });
	     * ```
	     *
	     * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
	     */
	    ReflectiveInjector.resolve = function (providers) {
	        return reflective_provider_1.resolveReflectiveProviders(providers);
	    };
	    /**
	     * Resolves an array of providers and creates an injector from those providers.
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     *
	     * This function is slower than the corresponding `fromResolvedProviders`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
	     */
	    ReflectiveInjector.resolveAndCreate = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
	    };
	    /**
	     * Creates an injector from previously resolved providers.
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, Engine]);
	     * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     */
	    ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
	    };
	    /**
	     * @deprecated
	     */
	    ReflectiveInjector.fromResolvedBindings = function (providers) {
	        return ReflectiveInjector.fromResolvedProviders(providers);
	    };
	    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
	        /**
	         * Parent of this injector.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
	         *
	         * ```typescript
	         * var parent = ReflectiveInjector.resolveAndCreate([]);
	         * var child = parent.resolveAndCreateChild([]);
	         * expect(child.parent).toBe(parent);
	         * ```
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @internal
	     */
	    ReflectiveInjector.prototype.debugContext = function () { return null; };
	    /**
	     * Resolves an array of providers and creates a child injector from those providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	     * var child = parent.resolveAndCreateChild([ChildProvider]);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     *
	     * This function is slower than the corresponding `createChildFromResolved`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
	     */
	    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Creates a child injector from previously resolved providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	     * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	     *
	     * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	     * var child = parent.createChildFromResolved(childProviders);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Resolves a provider and instantiates an object in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     *
	     * var car = injector.resolveAndInstantiate(Car);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	     * ```
	     */
	    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return exceptions_1.unimplemented(); };
	    /**
	     * Instantiates an object using a resolved provider in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     * var carProvider = ReflectiveInjector.resolve([Car])[0];
	     * var car = injector.instantiateResolved(carProvider);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.instantiateResolved = function (provider) { return exceptions_1.unimplemented(); };
	    return ReflectiveInjector;
	}());
	exports.ReflectiveInjector = ReflectiveInjector;
	var ReflectiveInjector_ = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveInjector_(_proto /* ProtoInjector */, _parent, _debugContext) {
	        if (_parent === void 0) { _parent = null; }
	        if (_debugContext === void 0) { _debugContext = null; }
	        this._debugContext = _debugContext;
	        /** @internal */
	        this._constructionCounter = 0;
	        this._proto = _proto;
	        this._parent = _parent;
	        this._strategy = _proto._strategy.createInjectorStrategy(this);
	    }
	    /**
	     * @internal
	     */
	    ReflectiveInjector_.prototype.debugContext = function () { return this._debugContext(); };
	    ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        return this._getByKey(reflective_key_1.ReflectiveKey.get(token), null, null, notFoundValue);
	    };
	    ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
	    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
	        get: function () { return this._parent; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
	        /**
	         * @internal
	         * Internal. Do not use.
	         * We return `any` not to export the InjectorStrategy type.
	         */
	        get: function () { return this._strategy; },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return this.createChildFromResolved(ResolvedReflectiveProviders);
	    };
	    ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
	        var proto = new ReflectiveProtoInjector(providers);
	        var inj = new ReflectiveInjector_(proto);
	        inj._parent = this;
	        return inj;
	    };
	    ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
	        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
	    };
	    ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
	        return this._instantiateProvider(provider);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._new = function (provider) {
	        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	            throw new reflective_exceptions_1.CyclicDependencyError(this, provider.key);
	        }
	        return this._instantiateProvider(provider);
	    };
	    ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
	        if (provider.multiProvider) {
	            var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
	            for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
	            }
	            return res;
	        }
	        else {
	            return this._instantiate(provider, provider.resolvedFactories[0]);
	        }
	    };
	    ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
	        var factory = ResolvedReflectiveFactory.factory;
	        var deps = ResolvedReflectiveFactory.dependencies;
	        var length = deps.length;
	        var d0;
	        var d1;
	        var d2;
	        var d3;
	        var d4;
	        var d5;
	        var d6;
	        var d7;
	        var d8;
	        var d9;
	        var d10;
	        var d11;
	        var d12;
	        var d13;
	        var d14;
	        var d15;
	        var d16;
	        var d17;
	        var d18;
	        var d19;
	        try {
	            d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
	            d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
	            d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
	            d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
	            d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
	            d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
	            d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
	            d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
	            d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
	            d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
	            d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
	            d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
	            d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
	            d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
	            d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
	            d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
	            d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
	            d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
	            d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
	            d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
	        }
	        catch (e) {
	            if (e instanceof reflective_exceptions_1.AbstractProviderError || e instanceof reflective_exceptions_1.InstantiationError) {
	                e.addKey(this, provider.key);
	            }
	            throw e;
	        }
	        var obj;
	        try {
	            switch (length) {
	                case 0:
	                    obj = factory();
	                    break;
	                case 1:
	                    obj = factory(d0);
	                    break;
	                case 2:
	                    obj = factory(d0, d1);
	                    break;
	                case 3:
	                    obj = factory(d0, d1, d2);
	                    break;
	                case 4:
	                    obj = factory(d0, d1, d2, d3);
	                    break;
	                case 5:
	                    obj = factory(d0, d1, d2, d3, d4);
	                    break;
	                case 6:
	                    obj = factory(d0, d1, d2, d3, d4, d5);
	                    break;
	                case 7:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                    break;
	                case 8:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                    break;
	                case 9:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                    break;
	                case 10:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                    break;
	                case 11:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                    break;
	                case 12:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                    break;
	                case 13:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                    break;
	                case 14:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                    break;
	                case 15:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                    break;
	                case 16:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                    break;
	                case 17:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                    break;
	                case 18:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                    break;
	                case 19:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                    break;
	                case 20:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                    break;
	                default:
	                    throw new exceptions_1.BaseException("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
	            }
	        }
	        catch (e) {
	            throw new reflective_exceptions_1.InstantiationError(this, e, e.stack, provider.key);
	        }
	        return obj;
	    };
	    ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
	        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : injector_1.THROW_IF_NOT_FOUND);
	    };
	    ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
	        if (key === INJECTOR_KEY) {
	            return this;
	        }
	        if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
	            return this._getByKeySelf(key, notFoundValue);
	        }
	        else {
	            return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
	        if (notFoundValue !== injector_1.THROW_IF_NOT_FOUND) {
	            return notFoundValue;
	        }
	        else {
	            throw new reflective_exceptions_1.NoProviderError(this, key);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
	        var obj = this._strategy.getObjByKeyId(key.id);
	        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
	        var inj;
	        if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
	            inj = this._parent;
	        }
	        else {
	            inj = this;
	        }
	        while (inj instanceof ReflectiveInjector_) {
	            var inj_ = inj;
	            var obj = inj_._strategy.getObjByKeyId(key.id);
	            if (obj !== UNDEFINED)
	                return obj;
	            inj = inj_._parent;
	        }
	        if (inj !== null) {
	            return inj.get(key.token, notFoundValue);
	        }
	        else {
	            return this._throwOrNull(key, notFoundValue);
	        }
	    };
	    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
	        get: function () {
	            return "ReflectiveInjector(providers: [" + _mapProviders(this, function (b) { return (" \"" + b.key.displayName + "\" "); }).join(", ") + "])";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
	    return ReflectiveInjector_;
	}());
	exports.ReflectiveInjector_ = ReflectiveInjector_;
	var INJECTOR_KEY = reflective_key_1.ReflectiveKey.get(injector_1.Injector);
	function _mapProviders(injector, fn) {
	    var res = [];
	    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	        res.push(fn(injector._proto.getProviderAtIndex(i)));
	    }
	    return res;
	}
	//# sourceMappingURL=reflective_injector.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var reflection_1 = __webpack_require__(299);
	var reflective_key_1 = __webpack_require__(303);
	var metadata_1 = __webpack_require__(283);
	var reflective_exceptions_1 = __webpack_require__(304);
	var forward_ref_1 = __webpack_require__(284);
	var provider_1 = __webpack_require__(305);
	var provider_util_1 = __webpack_require__(306);
	/**
	 * `Dependency` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 */
	var ReflectiveDependency = (function () {
	    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	        this.key = key;
	        this.optional = optional;
	        this.lowerBoundVisibility = lowerBoundVisibility;
	        this.upperBoundVisibility = upperBoundVisibility;
	        this.properties = properties;
	    }
	    ReflectiveDependency.fromKey = function (key) {
	        return new ReflectiveDependency(key, false, null, null, []);
	    };
	    return ReflectiveDependency;
	}());
	exports.ReflectiveDependency = ReflectiveDependency;
	var _EMPTY_LIST = [];
	var ResolvedReflectiveProvider_ = (function () {
	    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
	        this.key = key;
	        this.resolvedFactories = resolvedFactories;
	        this.multiProvider = multiProvider;
	    }
	    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
	        get: function () { return this.resolvedFactories[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    return ResolvedReflectiveProvider_;
	}());
	exports.ResolvedReflectiveProvider_ = ResolvedReflectiveProvider_;
	/**
	 * An internal resolved representation of a factory function created by resolving {@link Provider}.
	 */
	var ResolvedReflectiveFactory = (function () {
	    function ResolvedReflectiveFactory(
	        /**
	         * Factory function which can return an instance of an object represented by a key.
	         */
	        factory, 
	        /**
	         * Arguments (dependencies) to the `factory` function.
	         */
	        dependencies) {
	        this.factory = factory;
	        this.dependencies = dependencies;
	    }
	    return ResolvedReflectiveFactory;
	}());
	exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
	/**
	 * Resolve a single provider.
	 */
	function resolveReflectiveFactory(provider) {
	    var factoryFn;
	    var resolvedDeps;
	    if (lang_1.isPresent(provider.useClass)) {
	        var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
	        factoryFn = reflection_1.reflector.factory(useClass);
	        resolvedDeps = _dependenciesFor(useClass);
	    }
	    else if (lang_1.isPresent(provider.useExisting)) {
	        factoryFn = function (aliasInstance) { return aliasInstance; };
	        resolvedDeps = [ReflectiveDependency.fromKey(reflective_key_1.ReflectiveKey.get(provider.useExisting))];
	    }
	    else if (lang_1.isPresent(provider.useFactory)) {
	        factoryFn = provider.useFactory;
	        resolvedDeps = constructDependencies(provider.useFactory, provider.dependencies);
	    }
	    else {
	        factoryFn = function () { return provider.useValue; };
	        resolvedDeps = _EMPTY_LIST;
	    }
	    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
	}
	exports.resolveReflectiveFactory = resolveReflectiveFactory;
	/**
	 * Converts the {@link Provider} into {@link ResolvedProvider}.
	 *
	 * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
	 * convenience provider syntax.
	 */
	function resolveReflectiveProvider(provider) {
	    return new ResolvedReflectiveProvider_(reflective_key_1.ReflectiveKey.get(provider.token), [resolveReflectiveFactory(provider)], provider.multi);
	}
	exports.resolveReflectiveProvider = resolveReflectiveProvider;
	/**
	 * Resolve a list of Providers.
	 */
	function resolveReflectiveProviders(providers) {
	    var normalized = _normalizeProviders(providers, []);
	    var resolved = normalized.map(resolveReflectiveProvider);
	    return collection_1.MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
	}
	exports.resolveReflectiveProviders = resolveReflectiveProviders;
	/**
	 * Merges a list of ResolvedProviders into a list where
	 * each key is contained exactly once and multi providers
	 * have been merged.
	 */
	function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
	    for (var i = 0; i < providers.length; i++) {
	        var provider = providers[i];
	        var existing = normalizedProvidersMap.get(provider.key.id);
	        if (lang_1.isPresent(existing)) {
	            if (provider.multiProvider !== existing.multiProvider) {
	                throw new reflective_exceptions_1.MixingMultiProvidersWithRegularProvidersError(existing, provider);
	            }
	            if (provider.multiProvider) {
	                for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                }
	            }
	            else {
	                normalizedProvidersMap.set(provider.key.id, provider);
	            }
	        }
	        else {
	            var resolvedProvider;
	            if (provider.multiProvider) {
	                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, collection_1.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
	            }
	            else {
	                resolvedProvider = provider;
	            }
	            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	        }
	    }
	    return normalizedProvidersMap;
	}
	exports.mergeResolvedReflectiveProviders = mergeResolvedReflectiveProviders;
	function _normalizeProviders(providers, res) {
	    providers.forEach(function (b) {
	        if (b instanceof lang_1.Type) {
	            res.push(provider_1.provide(b, { useClass: b }));
	        }
	        else if (b instanceof provider_1.Provider) {
	            res.push(b);
	        }
	        else if (provider_util_1.isProviderLiteral(b)) {
	            res.push(provider_util_1.createProvider(b));
	        }
	        else if (b instanceof Array) {
	            _normalizeProviders(b, res);
	        }
	        else if (b instanceof provider_1.ProviderBuilder) {
	            throw new reflective_exceptions_1.InvalidProviderError(b.token);
	        }
	        else {
	            throw new reflective_exceptions_1.InvalidProviderError(b);
	        }
	    });
	    return res;
	}
	function constructDependencies(typeOrFunc, dependencies) {
	    if (lang_1.isBlank(dependencies)) {
	        return _dependenciesFor(typeOrFunc);
	    }
	    else {
	        var params = dependencies.map(function (t) { return [t]; });
	        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params); });
	    }
	}
	exports.constructDependencies = constructDependencies;
	function _dependenciesFor(typeOrFunc) {
	    var params = reflection_1.reflector.parameters(typeOrFunc);
	    if (lang_1.isBlank(params))
	        return [];
	    if (params.some(lang_1.isBlank)) {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	}
	function _extractToken(typeOrFunc, metadata /*any[] | any*/, params) {
	    var depProps = [];
	    var token = null;
	    var optional = false;
	    if (!lang_1.isArray(metadata)) {
	        if (metadata instanceof metadata_1.InjectMetadata) {
	            return _createDependency(metadata.token, optional, null, null, depProps);
	        }
	        else {
	            return _createDependency(metadata, optional, null, null, depProps);
	        }
	    }
	    var lowerBoundVisibility = null;
	    var upperBoundVisibility = null;
	    for (var i = 0; i < metadata.length; ++i) {
	        var paramMetadata = metadata[i];
	        if (paramMetadata instanceof lang_1.Type) {
	            token = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.InjectMetadata) {
	            token = paramMetadata.token;
	        }
	        else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
	            optional = true;
	        }
	        else if (paramMetadata instanceof metadata_1.SelfMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.HostMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
	            lowerBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
	            if (lang_1.isPresent(paramMetadata.token)) {
	                token = paramMetadata.token;
	            }
	            depProps.push(paramMetadata);
	        }
	    }
	    token = forward_ref_1.resolveForwardRef(token);
	    if (lang_1.isPresent(token)) {
	        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    }
	    else {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	}
	function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
	    return new ReflectiveDependency(reflective_key_1.ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	}
	//# sourceMappingURL=reflective_provider.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reflector_1 = __webpack_require__(300);
	var reflector_2 = __webpack_require__(300);
	exports.Reflector = reflector_2.Reflector;
	exports.ReflectionInfo = reflector_2.ReflectionInfo;
	var reflection_capabilities_1 = __webpack_require__(302);
	/**
	 * The {@link Reflector} used internally in Angular to access metadata
	 * about symbols.
	 */
	exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
	//# sourceMappingURL=reflection.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var collection_1 = __webpack_require__(296);
	var reflector_reader_1 = __webpack_require__(301);
	/**
	 * Reflective information about a symbol, including annotations, interfaces, and other metadata.
	 */
	var ReflectionInfo = (function () {
	    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
	        this.annotations = annotations;
	        this.parameters = parameters;
	        this.factory = factory;
	        this.interfaces = interfaces;
	        this.propMetadata = propMetadata;
	    }
	    return ReflectionInfo;
	}());
	exports.ReflectionInfo = ReflectionInfo;
	/**
	 * Provides access to reflection data about symbols. Used internally by Angular
	 * to power dependency injection and compilation.
	 */
	var Reflector = (function (_super) {
	    __extends(Reflector, _super);
	    function Reflector(reflectionCapabilities) {
	        _super.call(this);
	        /** @internal */
	        this._injectableInfo = new collection_1.Map();
	        /** @internal */
	        this._getters = new collection_1.Map();
	        /** @internal */
	        this._setters = new collection_1.Map();
	        /** @internal */
	        this._methods = new collection_1.Map();
	        this._usedKeys = null;
	        this.reflectionCapabilities = reflectionCapabilities;
	    }
	    Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
	    /**
	     * Causes `this` reflector to track keys used to access
	     * {@link ReflectionInfo} objects.
	     */
	    Reflector.prototype.trackUsage = function () { this._usedKeys = new collection_1.Set(); };
	    /**
	     * Lists types for which reflection information was not requested since
	     * {@link #trackUsage} was called. This list could later be audited as
	     * potential dead code.
	     */
	    Reflector.prototype.listUnusedKeys = function () {
	        var _this = this;
	        if (this._usedKeys == null) {
	            throw new exceptions_1.BaseException('Usage tracking is disabled');
	        }
	        var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
	        return allTypes.filter(function (key) { return !collection_1.SetWrapper.has(_this._usedKeys, key); });
	    };
	    Reflector.prototype.registerFunction = function (func, funcInfo) {
	        this._injectableInfo.set(func, funcInfo);
	    };
	    Reflector.prototype.registerType = function (type, typeInfo) {
	        this._injectableInfo.set(type, typeInfo);
	    };
	    Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
	    Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
	    Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
	    Reflector.prototype.factory = function (type) {
	        if (this._containsReflectionInfo(type)) {
	            var res = this._getReflectionInfo(type).factory;
	            return lang_1.isPresent(res) ? res : null;
	        }
	        else {
	            return this.reflectionCapabilities.factory(type);
	        }
	    };
	    Reflector.prototype.parameters = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).parameters;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.parameters(typeOrFunc);
	        }
	    };
	    Reflector.prototype.annotations = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).annotations;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.annotations(typeOrFunc);
	        }
	    };
	    Reflector.prototype.propMetadata = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).propMetadata;
	            return lang_1.isPresent(res) ? res : {};
	        }
	        else {
	            return this.reflectionCapabilities.propMetadata(typeOrFunc);
	        }
	    };
	    Reflector.prototype.interfaces = function (type) {
	        if (this._injectableInfo.has(type)) {
	            var res = this._getReflectionInfo(type).interfaces;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.interfaces(type);
	        }
	    };
	    Reflector.prototype.getter = function (name) {
	        if (this._getters.has(name)) {
	            return this._getters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.getter(name);
	        }
	    };
	    Reflector.prototype.setter = function (name) {
	        if (this._setters.has(name)) {
	            return this._setters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.setter(name);
	        }
	    };
	    Reflector.prototype.method = function (name) {
	        if (this._methods.has(name)) {
	            return this._methods.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.method(name);
	        }
	    };
	    /** @internal */
	    Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
	        if (lang_1.isPresent(this._usedKeys)) {
	            this._usedKeys.add(typeOrFunc);
	        }
	        return this._injectableInfo.get(typeOrFunc);
	    };
	    /** @internal */
	    Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
	    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	    return Reflector;
	}(reflector_reader_1.ReflectorReader));
	exports.Reflector = Reflector;
	function _mergeMaps(target, config) {
	    collection_1.StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
	}
	//# sourceMappingURL=reflector.js.map

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Provides read-only access to reflection data about symbols. Used internally by Angular
	* to power dependency injection and compilation.
	*/
	var ReflectorReader = (function () {
	    function ReflectorReader() {
	    }
	    return ReflectorReader;
	}());
	exports.ReflectorReader = ReflectorReader;
	//# sourceMappingURL=reflector_reader.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var ReflectionCapabilities = (function () {
	    function ReflectionCapabilities(reflect) {
	        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
	    }
	    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	    ReflectionCapabilities.prototype.factory = function (t) {
	        switch (t.length) {
	            case 0:
	                return function () { return new t(); };
	            case 1:
	                return function (a1) { return new t(a1); };
	            case 2:
	                return function (a1, a2) { return new t(a1, a2); };
	            case 3:
	                return function (a1, a2, a3) { return new t(a1, a2, a3); };
	            case 4:
	                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
	            case 5:
	                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
	            case 6:
	                return function (a1, a2, a3, a4, a5, a6) {
	                    return new t(a1, a2, a3, a4, a5, a6);
	                };
	            case 7:
	                return function (a1, a2, a3, a4, a5, a6, a7) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7);
	                };
	            case 8:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8);
	                };
	            case 9:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
	                };
	            case 10:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
	                };
	            case 11:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
	                };
	            case 12:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
	                };
	            case 13:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
	                };
	            case 14:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
	                };
	            case 15:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
	                };
	            case 16:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
	                };
	            case 17:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
	                };
	            case 18:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
	                };
	            case 19:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
	                };
	            case 20:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
	                };
	        }
	        ;
	        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
	    };
	    /** @internal */
	    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
	        var result;
	        if (typeof paramTypes === 'undefined') {
	            result = new Array(paramAnnotations.length);
	        }
	        else {
	            result = new Array(paramTypes.length);
	        }
	        for (var i = 0; i < result.length; i++) {
	            // TS outputs Object for parameters without types, while Traceur omits
	            // the annotations. For now we preserve the Traceur behavior to aid
	            // migration, but this can be revisited.
	            if (typeof paramTypes === 'undefined') {
	                result[i] = [];
	            }
	            else if (paramTypes[i] != Object) {
	                result[i] = [paramTypes[i]];
	            }
	            else {
	                result[i] = [];
	            }
	            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
	                result[i] = result[i].concat(paramAnnotations[i]);
	            }
	        }
	        return result;
	    };
	    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.parameters)) {
	            return typeOrFunc.parameters;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.ctorParameters)) {
	            var ctorParameters = typeOrFunc.ctorParameters;
	            var paramTypes_1 = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
	            var paramAnnotations_1 = ctorParameters.map(function (ctorParam) { return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators); });
	            return this._zipTypesAndAnnotations(paramTypes_1, paramAnnotations_1);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
	            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
	            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
	                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	            }
	        }
	        // The array has to be filled with `undefined` because holes would be skipped by `some`
	        var parameters = new Array(typeOrFunc.length);
	        parameters.fill(undefined);
	        return parameters;
	    };
	    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.annotations)) {
	            var annotations = typeOrFunc.annotations;
	            if (lang_1.isFunction(annotations) && annotations.annotations) {
	                annotations = annotations.annotations;
	            }
	            return annotations;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.decorators)) {
	            return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	            if (lang_1.isPresent(annotations))
	                return annotations;
	        }
	        return [];
	    };
	    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
	            var propMetadata = typeOrFunc.propMetadata;
	            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
	                propMetadata = propMetadata.propMetadata;
	            }
	            return propMetadata;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.propDecorators)) {
	            var propDecorators_1 = typeOrFunc.propDecorators;
	            var propMetadata_1 = {};
	            Object.keys(propDecorators_1)
	                .forEach(function (prop) {
	                propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
	            });
	            return propMetadata_1;
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	            if (lang_1.isPresent(propMetadata))
	                return propMetadata;
	        }
	        return {};
	    };
	    ReflectionCapabilities.prototype.interfaces = function (type) {
	        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
	    };
	    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	    ReflectionCapabilities.prototype.setter = function (name) {
	        return new Function('o', 'v', 'return o.' + name + ' = v;');
	    };
	    ReflectionCapabilities.prototype.method = function (name) {
	        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	        return new Function('o', 'args', functionBody);
	    };
	    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	    ReflectionCapabilities.prototype.importUri = function (type) { return "./" + lang_1.stringify(type); };
	    return ReflectionCapabilities;
	}());
	exports.ReflectionCapabilities = ReflectionCapabilities;
	function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
	    if (!decoratorInvocations) {
	        return [];
	    }
	    return decoratorInvocations.map(function (decoratorInvocation) {
	        var decoratorType = decoratorInvocation.type;
	        var annotationCls = decoratorType.annotationCls;
	        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
	        var annotation = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotation, annotationArgs);
	        return annotation;
	    });
	}
	//# sourceMappingURL=reflection_capabilities.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var forward_ref_1 = __webpack_require__(284);
	/**
	 * A unique object used for retrieving items from the {@link ReflectiveInjector}.
	 *
	 * Keys have:
	 * - a system-wide unique `id`.
	 * - a `token`.
	 *
	 * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
	 * the
	 * injector to store created objects in a more efficient way.
	 *
	 * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
	 * resolving
	 * providers.
	 */
	var ReflectiveKey = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveKey(token, id) {
	        this.token = token;
	        this.id = id;
	        if (lang_1.isBlank(token)) {
	            throw new exceptions_1.BaseException('Token must be defined!');
	        }
	    }
	    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
	        /**
	         * Returns a stringified token.
	         */
	        get: function () { return lang_1.stringify(this.token); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Retrieves a `Key` for a token.
	     */
	    ReflectiveKey.get = function (token) {
	        return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token));
	    };
	    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
	        /**
	         * @returns the number of keys registered in the system.
	         */
	        get: function () { return _globalKeyRegistry.numberOfKeys; },
	        enumerable: true,
	        configurable: true
	    });
	    return ReflectiveKey;
	}());
	exports.ReflectiveKey = ReflectiveKey;
	/**
	 * @internal
	 */
	var KeyRegistry = (function () {
	    function KeyRegistry() {
	        this._allKeys = new Map();
	    }
	    KeyRegistry.prototype.get = function (token) {
	        if (token instanceof ReflectiveKey)
	            return token;
	        if (this._allKeys.has(token)) {
	            return this._allKeys.get(token);
	        }
	        var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
	        this._allKeys.set(token, newKey);
	        return newKey;
	    };
	    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
	        get: function () { return this._allKeys.size; },
	        enumerable: true,
	        configurable: true
	    });
	    return KeyRegistry;
	}());
	exports.KeyRegistry = KeyRegistry;
	var _globalKeyRegistry = new KeyRegistry();
	//# sourceMappingURL=reflective_key.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(296);
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	function findFirstClosedCycle(keys) {
	    var res = [];
	    for (var i = 0; i < keys.length; ++i) {
	        if (collection_1.ListWrapper.contains(res, keys[i])) {
	            res.push(keys[i]);
	            return res;
	        }
	        else {
	            res.push(keys[i]);
	        }
	    }
	    return res;
	}
	function constructResolvingPath(keys) {
	    if (keys.length > 1) {
	        var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
	        var tokenStrs = reversed.map(function (k) { return lang_1.stringify(k.token); });
	        return " (" + tokenStrs.join(' -> ') + ")";
	    }
	    else {
	        return "";
	    }
	}
	/**
	 * Base class for all errors arising from misconfigured providers.
	 */
	var AbstractProviderError = (function (_super) {
	    __extends(AbstractProviderError, _super);
	    function AbstractProviderError(injector, key, constructResolvingMessage) {
	        _super.call(this, "DI Exception");
	        this.keys = [key];
	        this.injectors = [injector];
	        this.constructResolvingMessage = constructResolvingMessage;
	        this.message = this.constructResolvingMessage(this.keys);
	    }
	    AbstractProviderError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	        this.message = this.constructResolvingMessage(this.keys);
	    };
	    Object.defineProperty(AbstractProviderError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractProviderError;
	}(exceptions_1.BaseException));
	exports.AbstractProviderError = AbstractProviderError;
	/**
	 * Thrown when trying to retrieve a dependency by `Key` from {@link Injector}, but the
	 * {@link Injector} does not have a {@link Provider} for {@link Key}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b:B) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 */
	var NoProviderError = (function (_super) {
	    __extends(NoProviderError, _super);
	    function NoProviderError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
	            return "No provider for " + first + "!" + constructResolvingPath(keys);
	        });
	    }
	    return NoProviderError;
	}(AbstractProviderError));
	exports.NoProviderError = NoProviderError;
	/**
	 * Thrown when dependencies form a cycle.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
	 *
	 * ```typescript
	 * var injector = Injector.resolveAndCreate([
	 *   provide("one", {useFactory: (two) => "two", deps: [[new Inject("two")]]}),
	 *   provide("two", {useFactory: (one) => "one", deps: [[new Inject("one")]]})
	 * ]);
	 *
	 * expect(() => injector.get("one")).toThrowError();
	 * ```
	 *
	 * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
	 */
	var CyclicDependencyError = (function (_super) {
	    __extends(CyclicDependencyError, _super);
	    function CyclicDependencyError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
	        });
	    }
	    return CyclicDependencyError;
	}(AbstractProviderError));
	exports.CyclicDependencyError = CyclicDependencyError;
	/**
	 * Thrown when a constructing type returns with an Error.
	 *
	 * The `InstantiationError` class contains the original error plus the dependency graph which caused
	 * this object to be instantiated.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor() {
	 *     throw new Error('message');
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([A]);
	
	 * try {
	 *   injector.get(A);
	 * } catch (e) {
	 *   expect(e instanceof InstantiationError).toBe(true);
	 *   expect(e.originalException.message).toEqual("message");
	 *   expect(e.originalStack).toBeDefined();
	 * }
	 * ```
	 */
	var InstantiationError = (function (_super) {
	    __extends(InstantiationError, _super);
	    function InstantiationError(injector, originalException, originalStack, key) {
	        _super.call(this, "DI Exception", originalException, originalStack, null);
	        this.keys = [key];
	        this.injectors = [injector];
	    }
	    InstantiationError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	    };
	    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
	        get: function () {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
	            return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "causeKey", {
	        get: function () { return this.keys[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return InstantiationError;
	}(exceptions_1.WrappedException));
	exports.InstantiationError = InstantiationError;
	/**
	 * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
	 * creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
	 * ```
	 */
	var InvalidProviderError = (function (_super) {
	    __extends(InvalidProviderError, _super);
	    function InvalidProviderError(provider) {
	        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " +
	            provider.toString());
	    }
	    return InvalidProviderError;
	}(exceptions_1.BaseException));
	exports.InvalidProviderError = InvalidProviderError;
	/**
	 * Thrown when the class has no annotation information.
	 *
	 * Lack of annotation information prevents the {@link Injector} from determining which dependencies
	 * need to be injected into the constructor.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 *
	 * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
	 *
	 * ```typescript
	 * class B {}
	 *
	 * class A {
	 *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
	 * ```
	 */
	var NoAnnotationError = (function (_super) {
	    __extends(NoAnnotationError, _super);
	    function NoAnnotationError(typeOrFunc, params) {
	        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
	    }
	    NoAnnotationError._genMessage = function (typeOrFunc, params) {
	        var signature = [];
	        for (var i = 0, ii = params.length; i < ii; i++) {
	            var parameter = params[i];
	            if (lang_1.isBlank(parameter) || parameter.length == 0) {
	                signature.push('?');
	            }
	            else {
	                signature.push(parameter.map(lang_1.stringify).join(' '));
	            }
	        }
	        return "Cannot resolve all parameters for '" + lang_1.stringify(typeOrFunc) + "'(" +
	            signature.join(', ') + "). " +
	            "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
	            lang_1.stringify(typeOrFunc) + "' is decorated with Injectable.";
	    };
	    return NoAnnotationError;
	}(exceptions_1.BaseException));
	exports.NoAnnotationError = NoAnnotationError;
	/**
	 * Thrown when getting an object by index.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
	 *
	 * ```typescript
	 * class A {}
	 *
	 * var injector = Injector.resolveAndCreate([A]);
	 *
	 * expect(() => injector.getAt(100)).toThrowError();
	 * ```
	 */
	var OutOfBoundsError = (function (_super) {
	    __extends(OutOfBoundsError, _super);
	    function OutOfBoundsError(index) {
	        _super.call(this, "Index " + index + " is out-of-bounds.");
	    }
	    return OutOfBoundsError;
	}(exceptions_1.BaseException));
	exports.OutOfBoundsError = OutOfBoundsError;
	// TODO: add a working example after alpha38 is released
	/**
	 * Thrown when a multi provider and a regular provider are bound to the same token.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate([
	 *   new Provider("Strings", {useValue: "string1", multi: true}),
	 *   new Provider("Strings", {useValue: "string2", multi: false})
	 * ])).toThrowError();
	 * ```
	 */
	var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
	    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
	    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	        _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " +
	            provider2.toString());
	    }
	    return MixingMultiProvidersWithRegularProvidersError;
	}(exceptions_1.BaseException));
	exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
	//# sourceMappingURL=reflective_exceptions.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	/**
	 * Describes how the {@link Injector} should instantiate a given token.
	 *
	 * See {@link provide}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GNAyj6K6PfYg2NBzgwZ5?p%3Dpreview&p=preview))
	 *
	 * ```javascript
	 * var injector = Injector.resolveAndCreate([
	 *   new Provider("message", { useValue: 'Hello' })
	 * ]);
	 *
	 * expect(injector.get("message")).toEqual('Hello');
	 * ```
	 * @ts2dart_const
	 */
	var Provider = (function () {
	    function Provider(token, _a) {
	        var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.dependencies = deps;
	        this._multi = multi;
	    }
	    Object.defineProperty(Provider.prototype, "multi", {
	        // TODO: Provide a full working example after alpha38 is released.
	        /**
	         * Creates multiple providers matching the same token (a multi-provider).
	         *
	         * Multi-providers are used for creating pluggable service, where the system comes
	         * with some default providers, and the user can register additional providers.
	         * The combination of the default providers and the additional providers will be
	         * used to drive the behavior of the system.
	         *
	         * ### Example
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true}),
	         *   new Provider("Strings", { useValue: "String2", multi: true})
	         * ]);
	         *
	         * expect(injector.get("Strings")).toEqual(["String1", "String2"]);
	         * ```
	         *
	         * Multi-providers and regular providers cannot be mixed. The following
	         * will throw an exception:
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true }),
	         *   new Provider("Strings", { useValue: "String2"})
	         * ]);
	         * ```
	         */
	        get: function () { return lang_1.normalizeBool(this._multi); },
	        enumerable: true,
	        configurable: true
	    });
	    return Provider;
	}());
	exports.Provider = Provider;
	/**
	 * See {@link Provider} instead.
	 *
	 * @deprecated
	 * @ts2dart_const
	 */
	var Binding = (function (_super) {
	    __extends(Binding, _super);
	    function Binding(token, _a) {
	        var toClass = _a.toClass, toValue = _a.toValue, toAlias = _a.toAlias, toFactory = _a.toFactory, deps = _a.deps, multi = _a.multi;
	        _super.call(this, token, {
	            useClass: toClass,
	            useValue: toValue,
	            useExisting: toAlias,
	            useFactory: toFactory,
	            deps: deps,
	            multi: multi
	        });
	    }
	    Object.defineProperty(Binding.prototype, "toClass", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useClass; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toAlias", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useExisting; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toFactory", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useFactory; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toValue", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useValue; },
	        enumerable: true,
	        configurable: true
	    });
	    return Binding;
	}(Provider));
	exports.Binding = Binding;
	/**
	 * Creates a {@link Provider}.
	 *
	 * To construct a {@link Provider}, bind a `token` to either a class, a value, a factory function,
	 * or
	 * to an existing `token`.
	 * See {@link ProviderBuilder} for more details.
	 *
	 * The `token` is most commonly a class or {@link OpaqueToken-class.html}.
	 *
	 * @deprecated
	 */
	function bind(token) {
	    return new ProviderBuilder(token);
	}
	exports.bind = bind;
	/**
	 * Helper class for the {@link bind} function.
	 */
	var ProviderBuilder = (function () {
	    function ProviderBuilder(token) {
	        this.token = token;
	    }
	    /**
	     * Binds a DI token to a class.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ZpBCSYqv6e2ud5KXLdxQ?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toClass = function (type) {
	        if (!lang_1.isType(type)) {
	            throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
	        }
	        return new Provider(this.token, { useClass: type });
	    };
	    /**
	     * Binds a DI token to a value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/G024PFHmDL0cJFgfZK8O?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide('message', {useValue: 'Hello'})
	     * ]);
	     *
	     * expect(injector.get('message')).toEqual('Hello');
	     * ```
	     */
	    ProviderBuilder.prototype.toValue = function (value) { return new Provider(this.token, { useValue: value }); };
	    /**
	     * Binds a DI token to an existing token.
	     *
	     * Angular will return the same instance as if the provided token was used. (This is
	     * in contrast to `useClass` where a separate instance of `useClass` will be returned.)
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/uBaoF2pN5cfc5AfZapNw?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toAlias = function (aliasToken) {
	        if (lang_1.isBlank(aliasToken)) {
	            throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
	        }
	        return new Provider(this.token, { useExisting: aliasToken });
	    };
	    /**
	     * Binds a DI token to a function which computes the value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/OejNIfTT3zb1iBxaIYOb?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide(Number, {useFactory: () => { return 1+2; }}),
	     *   provide(String, {useFactory: (v) => { return "Value: " + v; }, deps: [Number]})
	     * ]);
	     *
	     * expect(injector.get(Number)).toEqual(3);
	     * expect(injector.get(String)).toEqual('Value: 3');
	     * ```
	     */
	    ProviderBuilder.prototype.toFactory = function (factory, dependencies) {
	        if (!lang_1.isFunction(factory)) {
	            throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
	        }
	        return new Provider(this.token, { useFactory: factory, deps: dependencies });
	    };
	    return ProviderBuilder;
	}());
	exports.ProviderBuilder = ProviderBuilder;
	/**
	 * Creates a {@link Provider}.
	 *
	 * See {@link Provider} for more details.
	 *
	 * <!-- TODO: improve the docs -->
	 */
	function provide(token, _a) {
	    var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	    return new Provider(token, {
	        useClass: useClass,
	        useValue: useValue,
	        useExisting: useExisting,
	        useFactory: useFactory,
	        deps: deps,
	        multi: multi
	    });
	}
	exports.provide = provide;
	//# sourceMappingURL=provider.js.map

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var provider_1 = __webpack_require__(305);
	function isProviderLiteral(obj) {
	    return obj && typeof obj == 'object' && obj.provide;
	}
	exports.isProviderLiteral = isProviderLiteral;
	function createProvider(obj) {
	    return new provider_1.Provider(obj.provide, obj);
	}
	exports.createProvider = createProvider;
	//# sourceMappingURL=provider_util.js.map

/***/ },
/* 307 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Creates a token that can be used in a DI Provider.
	*
	* ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
	*
	* ```typescript
	* var t = new OpaqueToken("value");
	*
	* var injector = Injector.resolveAndCreate([
	*   provide(t, {useValue: "bindingValue"})
	* ]);
	*
	* expect(injector.get(t)).toEqual("bindingValue");
	* ```
	*
	* Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
	* caused by multiple providers using the same string as two different tokens.
	*
	* Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
	* error messages.
	* @ts2dart_const
	*/
	var OpaqueToken = (function () {
	    function OpaqueToken(_desc) {
	        this._desc = _desc;
	    }
	    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	    return OpaqueToken;
	}());
	exports.OpaqueToken = OpaqueToken;
	//# sourceMappingURL=opaque_token.js.map

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ng_zone_1 = __webpack_require__(309);
	var lang_1 = __webpack_require__(282);
	var di_1 = __webpack_require__(290);
	var application_tokens_1 = __webpack_require__(313);
	var async_1 = __webpack_require__(310);
	var collection_1 = __webpack_require__(296);
	var testability_1 = __webpack_require__(314);
	var component_resolver_1 = __webpack_require__(315);
	var exceptions_1 = __webpack_require__(293);
	var console_1 = __webpack_require__(334);
	var profile_1 = __webpack_require__(323);
	/**
	 * Create an Angular zone.
	 */
	function createNgZone() {
	    return new ng_zone_1.NgZone({ enableLongStackTrace: lang_1.assertionsEnabled() });
	}
	exports.createNgZone = createNgZone;
	var _platform;
	var _inPlatformCreate = false;
	/**
	 * Creates a platform.
	 * Platforms have to be eagerly created via this function.
	 */
	function createPlatform(injector) {
	    if (_inPlatformCreate) {
	        throw new exceptions_1.BaseException('Already creating a platform...');
	    }
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        throw new exceptions_1.BaseException("There can be only one platform. Destroy the previous one to create a new one.");
	    }
	    lang_1.lockMode();
	    _inPlatformCreate = true;
	    try {
	        _platform = injector.get(PlatformRef);
	    }
	    finally {
	        _inPlatformCreate = false;
	    }
	    return _platform;
	}
	exports.createPlatform = createPlatform;
	/**
	 * Checks that there currently is a platform
	 * which contains the given token as a provider.
	 */
	function assertPlatform(requiredToken) {
	    var platform = getPlatform();
	    if (lang_1.isBlank(platform)) {
	        throw new exceptions_1.BaseException('Not platform exists!');
	    }
	    if (lang_1.isPresent(platform) && lang_1.isBlank(platform.injector.get(requiredToken, null))) {
	        throw new exceptions_1.BaseException('A platform with a different configuration has been created. Please destroy it first.');
	    }
	    return platform;
	}
	exports.assertPlatform = assertPlatform;
	/**
	 * Dispose the existing platform.
	 */
	function disposePlatform() {
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        _platform.dispose();
	    }
	}
	exports.disposePlatform = disposePlatform;
	/**
	 * Returns the current platform.
	 */
	function getPlatform() {
	    return lang_1.isPresent(_platform) && !_platform.disposed ? _platform : null;
	}
	exports.getPlatform = getPlatform;
	/**
	 * Shortcut for ApplicationRef.bootstrap.
	 * Requires a platform the be created first.
	 */
	function coreBootstrap(injector, componentFactory) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.bootstrap(componentFactory);
	}
	exports.coreBootstrap = coreBootstrap;
	/**
	 * Resolves the componentFactory for the given component,
	 * waits for asynchronous initializers and bootstraps the component.
	 * Requires a platform the be created first.
	 */
	function coreLoadAndBootstrap(injector, componentType) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.run(function () {
	        var componentResolver = injector.get(component_resolver_1.ComponentResolver);
	        return async_1.PromiseWrapper
	            .all([componentResolver.resolveComponent(componentType), appRef.waitForAsyncInitializers()])
	            .then(function (arr) { return appRef.bootstrap(arr[0]); });
	    });
	}
	exports.coreLoadAndBootstrap = coreLoadAndBootstrap;
	/**
	 * The Angular platform is the entry point for Angular on a web page. Each page
	 * has exactly one platform, and services (such as reflection) which are common
	 * to every Angular application running on the page are bound in its scope.
	 *
	 * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
	 * explicitly by calling {@link createPlatform}().
	 */
	var PlatformRef = (function () {
	    function PlatformRef() {
	    }
	    Object.defineProperty(PlatformRef.prototype, "injector", {
	        /**
	         * Retrieve the platform {@link Injector}, which is the parent injector for
	         * every Angular application on the page and provides singleton providers.
	         */
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(PlatformRef.prototype, "disposed", {
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformRef;
	}());
	exports.PlatformRef = PlatformRef;
	var PlatformRef_ = (function (_super) {
	    __extends(PlatformRef_, _super);
	    function PlatformRef_(_injector) {
	        _super.call(this);
	        this._injector = _injector;
	        /** @internal */
	        this._applications = [];
	        /** @internal */
	        this._disposeListeners = [];
	        this._disposed = false;
	        if (!_inPlatformCreate) {
	            throw new exceptions_1.BaseException('Platforms have to be created via `createPlatform`!');
	        }
	        var inits = _injector.get(application_tokens_1.PLATFORM_INITIALIZER, null);
	        if (lang_1.isPresent(inits))
	            inits.forEach(function (init) { return init(); });
	    }
	    PlatformRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    Object.defineProperty(PlatformRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformRef_.prototype, "disposed", {
	        get: function () { return this._disposed; },
	        enumerable: true,
	        configurable: true
	    });
	    PlatformRef_.prototype.addApplication = function (appRef) { this._applications.push(appRef); };
	    PlatformRef_.prototype.dispose = function () {
	        collection_1.ListWrapper.clone(this._applications).forEach(function (app) { return app.dispose(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._disposed = true;
	    };
	    /** @internal */
	    PlatformRef_.prototype._applicationDisposed = function (app) { collection_1.ListWrapper.remove(this._applications, app); };
	    PlatformRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    PlatformRef_.ctorParameters = [
	        { type: di_1.Injector, },
	    ];
	    return PlatformRef_;
	}(PlatformRef));
	exports.PlatformRef_ = PlatformRef_;
	/**
	 * A reference to an Angular application running on a page.
	 *
	 * For more about Angular applications, see the documentation for {@link bootstrap}.
	 */
	var ApplicationRef = (function () {
	    function ApplicationRef() {
	    }
	    Object.defineProperty(ApplicationRef.prototype, "injector", {
	        /**
	         * Retrieve the application {@link Injector}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "zone", {
	        /**
	         * Retrieve the application {@link NgZone}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
	        /**
	         * Get a list of component types registered to this application.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ApplicationRef;
	}());
	exports.ApplicationRef = ApplicationRef;
	var ApplicationRef_ = (function (_super) {
	    __extends(ApplicationRef_, _super);
	    function ApplicationRef_(_platform, _zone, _injector) {
	        var _this = this;
	        _super.call(this);
	        this._platform = _platform;
	        this._zone = _zone;
	        this._injector = _injector;
	        /** @internal */
	        this._bootstrapListeners = [];
	        /** @internal */
	        this._disposeListeners = [];
	        /** @internal */
	        this._rootComponents = [];
	        /** @internal */
	        this._rootComponentTypes = [];
	        /** @internal */
	        this._changeDetectorRefs = [];
	        /** @internal */
	        this._runningTick = false;
	        /** @internal */
	        this._enforceNoNewChanges = false;
	        var zone = _injector.get(ng_zone_1.NgZone);
	        this._enforceNoNewChanges = lang_1.assertionsEnabled();
	        zone.run(function () { _this._exceptionHandler = _injector.get(exceptions_1.ExceptionHandler); });
	        this._asyncInitDonePromise = this.run(function () {
	            var inits = _injector.get(application_tokens_1.APP_INITIALIZER, null);
	            var asyncInitResults = [];
	            var asyncInitDonePromise;
	            if (lang_1.isPresent(inits)) {
	                for (var i = 0; i < inits.length; i++) {
	                    var initResult = inits[i]();
	                    if (lang_1.isPromise(initResult)) {
	                        asyncInitResults.push(initResult);
	                    }
	                }
	            }
	            if (asyncInitResults.length > 0) {
	                asyncInitDonePromise =
	                    async_1.PromiseWrapper.all(asyncInitResults).then(function (_) { return _this._asyncInitDone = true; });
	                _this._asyncInitDone = false;
	            }
	            else {
	                _this._asyncInitDone = true;
	                asyncInitDonePromise = async_1.PromiseWrapper.resolve(true);
	            }
	            return asyncInitDonePromise;
	        });
	        async_1.ObservableWrapper.subscribe(zone.onError, function (error) {
	            _this._exceptionHandler.call(error.error, error.stackTrace);
	        });
	        async_1.ObservableWrapper.subscribe(this._zone.onMicrotaskEmpty, function (_) { _this._zone.run(function () { _this.tick(); }); });
	    }
	    ApplicationRef_.prototype.registerBootstrapListener = function (listener) {
	        this._bootstrapListeners.push(listener);
	    };
	    ApplicationRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
	        this._changeDetectorRefs.push(changeDetector);
	    };
	    ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
	        collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
	    };
	    ApplicationRef_.prototype.waitForAsyncInitializers = function () { return this._asyncInitDonePromise; };
	    ApplicationRef_.prototype.run = function (callback) {
	        var _this = this;
	        var zone = this.injector.get(ng_zone_1.NgZone);
	        var result;
	        // Note: Don't use zone.runGuarded as we want to know about
	        // the thrown exception!
	        // Note: the completer needs to be created outside
	        // of `zone.run` as Dart swallows rejected promises
	        // via the onError callback of the promise.
	        var completer = async_1.PromiseWrapper.completer();
	        zone.run(function () {
	            try {
	                result = callback();
	                if (lang_1.isPromise(result)) {
	                    async_1.PromiseWrapper.then(result, function (ref) { completer.resolve(ref); }, function (err, stackTrace) {
	                        completer.reject(err, stackTrace);
	                        _this._exceptionHandler.call(err, stackTrace);
	                    });
	                }
	            }
	            catch (e) {
	                _this._exceptionHandler.call(e, e.stack);
	                throw e;
	            }
	        });
	        return lang_1.isPromise(result) ? completer.promise : result;
	    };
	    ApplicationRef_.prototype.bootstrap = function (componentFactory) {
	        var _this = this;
	        if (!this._asyncInitDone) {
	            throw new exceptions_1.BaseException('Cannot bootstrap as there are still asynchronous initializers running. Wait for them using waitForAsyncInitializers().');
	        }
	        return this.run(function () {
	            _this._rootComponentTypes.push(componentFactory.componentType);
	            var compRef = componentFactory.create(_this._injector, [], componentFactory.selector);
	            compRef.onDestroy(function () { _this._unloadComponent(compRef); });
	            var testability = compRef.injector.get(testability_1.Testability, null);
	            if (lang_1.isPresent(testability)) {
	                compRef.injector.get(testability_1.TestabilityRegistry)
	                    .registerApplication(compRef.location.nativeElement, testability);
	            }
	            _this._loadComponent(compRef);
	            var c = _this._injector.get(console_1.Console);
	            if (lang_1.assertionsEnabled()) {
	                c.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
	            }
	            return compRef;
	        });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._loadComponent = function (componentRef) {
	        this._changeDetectorRefs.push(componentRef.changeDetectorRef);
	        this.tick();
	        this._rootComponents.push(componentRef);
	        this._bootstrapListeners.forEach(function (listener) { return listener(componentRef); });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._unloadComponent = function (componentRef) {
	        if (!collection_1.ListWrapper.contains(this._rootComponents, componentRef)) {
	            return;
	        }
	        this.unregisterChangeDetector(componentRef.changeDetectorRef);
	        collection_1.ListWrapper.remove(this._rootComponents, componentRef);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationRef_.prototype, "zone", {
	        get: function () { return this._zone; },
	        enumerable: true,
	        configurable: true
	    });
	    ApplicationRef_.prototype.tick = function () {
	        if (this._runningTick) {
	            throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
	        }
	        var s = ApplicationRef_._tickScope();
	        try {
	            this._runningTick = true;
	            this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
	            if (this._enforceNoNewChanges) {
	                this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
	            }
	        }
	        finally {
	            this._runningTick = false;
	            profile_1.wtfLeave(s);
	        }
	    };
	    ApplicationRef_.prototype.dispose = function () {
	        // TODO(alxhub): Dispose of the NgZone.
	        collection_1.ListWrapper.clone(this._rootComponents).forEach(function (ref) { return ref.destroy(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._platform._applicationDisposed(this);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
	        get: function () { return this._rootComponentTypes; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
	    ApplicationRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    ApplicationRef_.ctorParameters = [
	        { type: PlatformRef_, },
	        { type: ng_zone_1.NgZone, },
	        { type: di_1.Injector, },
	    ];
	    return ApplicationRef_;
	}(ApplicationRef));
	exports.ApplicationRef_ = ApplicationRef_;
	/**
	 * @internal
	 */
	exports.PLATFORM_CORE_PROVIDERS = 
	/*@ts2dart_const*/ [
	    PlatformRef_,
	    /*@ts2dart_const*/ (
	    /* @ts2dart_Provider */ { provide: PlatformRef, useExisting: PlatformRef_ })
	];
	/**
	 * @internal
	 */
	exports.APPLICATION_CORE_PROVIDERS = [
	    /* @ts2dart_Provider */ { provide: ng_zone_1.NgZone, useFactory: createNgZone, deps: [] },
	    ApplicationRef_,
	    /* @ts2dart_Provider */ { provide: ApplicationRef, useExisting: ApplicationRef_ }
	];
	//# sourceMappingURL=application_ref.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var async_1 = __webpack_require__(310);
	var ng_zone_impl_1 = __webpack_require__(312);
	var exceptions_1 = __webpack_require__(293);
	var ng_zone_impl_2 = __webpack_require__(312);
	exports.NgZoneError = ng_zone_impl_2.NgZoneError;
	/**
	 * An injectable service for executing work inside or outside of the Angular zone.
	 *
	 * The most common use of this service is to optimize performance when starting a work consisting of
	 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
	 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
	 * can reenter the Angular zone via {@link #run}.
	 *
	 * <!-- TODO: add/fix links to:
	 *   - docs explaining zones and the use of zones in Angular and change-detection
	 *   - link to runOutsideAngular/run (throughout this file!)
	 *   -->
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 * ```
	 * import {Component, View, NgZone} from '@angular/core';
	 * import {NgIf} from '@angular/common';
	 *
	 * @Component({
	 *   selector: 'ng-zone-demo'.
	 *   template: `
	 *     <h2>Demo: NgZone</h2>
	 *
	 *     <p>Progress: {{progress}}%</p>
	 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
	 *
	 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
	 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
	 *   `,
	 *   directives: [NgIf]
	 * })
	 * export class NgZoneDemo {
	 *   progress: number = 0;
	 *   label: string;
	 *
	 *   constructor(private _ngZone: NgZone) {}
	 *
	 *   // Loop inside the Angular zone
	 *   // so the UI DOES refresh after each setTimeout cycle
	 *   processWithinAngularZone() {
	 *     this.label = 'inside';
	 *     this.progress = 0;
	 *     this._increaseProgress(() => console.log('Inside Done!'));
	 *   }
	 *
	 *   // Loop outside of the Angular zone
	 *   // so the UI DOES NOT refresh after each setTimeout cycle
	 *   processOutsideOfAngularZone() {
	 *     this.label = 'outside';
	 *     this.progress = 0;
	 *     this._ngZone.runOutsideAngular(() => {
	 *       this._increaseProgress(() => {
	 *       // reenter the Angular zone and display done
	 *       this._ngZone.run(() => {console.log('Outside Done!') });
	 *     }}));
	 *   }
	 *
	 *
	 *   _increaseProgress(doneCallback: () => void) {
	 *     this.progress += 1;
	 *     console.log(`Current progress: ${this.progress}%`);
	 *
	 *     if (this.progress < 100) {
	 *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
	 *     } else {
	 *       doneCallback();
	 *     }
	 *   }
	 * }
	 * ```
	 */
	var NgZone = (function () {
	    /**
	     * @param {bool} enableLongStackTrace whether to enable long stack trace. They should only be
	     *               enabled in development mode as they significantly impact perf.
	     */
	    function NgZone(_a) {
	        var _this = this;
	        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
	        this._hasPendingMicrotasks = false;
	        this._hasPendingMacrotasks = false;
	        /** @internal */
	        this._isStable = true;
	        /** @internal */
	        this._nesting = 0;
	        /** @internal */
	        this._onUnstable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onMicrotaskEmpty = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onStable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onErrorEvents = new async_1.EventEmitter(false);
	        this._zoneImpl = new ng_zone_impl_1.NgZoneImpl({
	            trace: enableLongStackTrace,
	            onEnter: function () {
	                // console.log('ZONE.enter', this._nesting, this._isStable);
	                _this._nesting++;
	                if (_this._isStable) {
	                    _this._isStable = false;
	                    _this._onUnstable.emit(null);
	                }
	            },
	            onLeave: function () {
	                _this._nesting--;
	                // console.log('ZONE.leave', this._nesting, this._isStable);
	                _this._checkStable();
	            },
	            setMicrotask: function (hasMicrotasks) {
	                _this._hasPendingMicrotasks = hasMicrotasks;
	                _this._checkStable();
	            },
	            setMacrotask: function (hasMacrotasks) { _this._hasPendingMacrotasks = hasMacrotasks; },
	            onError: function (error) { return _this._onErrorEvents.emit(error); }
	        });
	    }
	    NgZone.isInAngularZone = function () { return ng_zone_impl_1.NgZoneImpl.isInAngularZone(); };
	    NgZone.assertInAngularZone = function () {
	        if (!ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to be in Angular Zone, but it is not!');
	        }
	    };
	    NgZone.assertNotInAngularZone = function () {
	        if (ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to not be in Angular Zone, but it is!');
	        }
	    };
	    NgZone.prototype._checkStable = function () {
	        var _this = this;
	        if (this._nesting == 0) {
	            if (!this._hasPendingMicrotasks && !this._isStable) {
	                try {
	                    // console.log('ZONE.microtaskEmpty');
	                    this._nesting++;
	                    this._onMicrotaskEmpty.emit(null);
	                }
	                finally {
	                    this._nesting--;
	                    if (!this._hasPendingMicrotasks) {
	                        try {
	                            // console.log('ZONE.stable', this._nesting, this._isStable);
	                            this.runOutsideAngular(function () { return _this._onStable.emit(null); });
	                        }
	                        finally {
	                            this._isStable = true;
	                        }
	                    }
	                }
	            }
	        }
	    };
	    ;
	    Object.defineProperty(NgZone.prototype, "onUnstable", {
	        /**
	         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	         */
	        get: function () { return this._onUnstable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
	        /**
	         * Notifies when there is no more microtasks enqueue in the current VM Turn.
	         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	         * For this reason this event can fire multiple times per VM Turn.
	         */
	        get: function () { return this._onMicrotaskEmpty; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onStable", {
	        /**
	         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
	         * implies we are about to relinquish VM turn.
	         * This event gets called just once.
	         */
	        get: function () { return this._onStable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onError", {
	        /**
	         * Notify that an error has been delivered.
	         */
	        get: function () { return this._onErrorEvents; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMicrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMacrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
	     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * within the Angular zone.
	     *
	     * If a synchronous error happens it will be rethrown and not reported via `onError`.
	     */
	    NgZone.prototype.run = function (fn) { return this._zoneImpl.runInner(fn); };
	    /**
	     * Same as #run, except that synchronous errors are caught and forwarded
	     * via `onError` and not rethrown.
	     */
	    NgZone.prototype.runGuarded = function (fn) { return this._zoneImpl.runInnerGuarded(fn); };
	    /**
	     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
	     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * outside of the Angular zone.
	     *
	     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
	     */
	    NgZone.prototype.runOutsideAngular = function (fn) { return this._zoneImpl.runOuter(fn); };
	    return NgZone;
	}());
	exports.NgZone = NgZone;
	//# sourceMappingURL=ng_zone.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var promise_1 = __webpack_require__(311);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(2);
	var PromiseObservable_1 = __webpack_require__(54);
	var toPromise_1 = __webpack_require__(260);
	var Observable_1 = __webpack_require__(3);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(2);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 311 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 312 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Stores error information; delivered via [NgZone.onError] stream.
	*/
	var NgZoneError = (function () {
	    function NgZoneError(error, stackTrace) {
	        this.error = error;
	        this.stackTrace = stackTrace;
	    }
	    return NgZoneError;
	}());
	exports.NgZoneError = NgZoneError;
	var NgZoneImpl = (function () {
	    function NgZoneImpl(_a) {
	        var _this = this;
	        var trace = _a.trace, onEnter = _a.onEnter, onLeave = _a.onLeave, setMicrotask = _a.setMicrotask, setMacrotask = _a.setMacrotask, onError = _a.onError;
	        this.onEnter = onEnter;
	        this.onLeave = onLeave;
	        this.setMicrotask = setMicrotask;
	        this.setMacrotask = setMacrotask;
	        this.onError = onError;
	        if (Zone) {
	            this.outer = this.inner = Zone.current;
	            if (Zone['wtfZoneSpec']) {
	                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
	            }
	            if (trace && Zone['longStackTraceZoneSpec']) {
	                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
	            }
	            this.inner = this.inner.fork({
	                name: 'angular',
	                properties: { 'isAngularZone': true },
	                onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invokeTask(target, task, applyThis, applyArgs);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invoke(target, callback, applyThis, applyArgs, source);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onHasTask: function (delegate, current, target, hasTaskState) {
	                    delegate.hasTask(target, hasTaskState);
	                    if (current == target) {
	                        // We are only interested in hasTask events which originate from our zone
	                        // (A child hasTask event is not interesting to us)
	                        if (hasTaskState.change == 'microTask') {
	                            _this.setMicrotask(hasTaskState.microTask);
	                        }
	                        else if (hasTaskState.change == 'macroTask') {
	                            _this.setMacrotask(hasTaskState.macroTask);
	                        }
	                    }
	                },
	                onHandleError: function (delegate, current, target, error) {
	                    delegate.handleError(target, error);
	                    _this.onError(new NgZoneError(error, error.stack));
	                    return false;
	                }
	            });
	        }
	        else {
	            throw new Error('Angular requires Zone.js polyfill.');
	        }
	    }
	    NgZoneImpl.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
	    NgZoneImpl.prototype.runInner = function (fn) { return this.inner.run(fn); };
	    ;
	    NgZoneImpl.prototype.runInnerGuarded = function (fn) { return this.inner.runGuarded(fn); };
	    ;
	    NgZoneImpl.prototype.runOuter = function (fn) { return this.outer.run(fn); };
	    ;
	    return NgZoneImpl;
	}());
	exports.NgZoneImpl = NgZoneImpl;
	//# sourceMappingURL=ng_zone_impl.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(290);
	var lang_1 = __webpack_require__(282);
	/**
	 * A DI Token representing a unique string id assigned to the application by Angular and used
	 * primarily for prefixing application attributes and CSS styles when
	 * {@link ViewEncapsulation#Emulated} is being used.
	 *
	 * If you need to avoid randomly generated value to be used as an application id, you can provide
	 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
	 * using this token.
	 */
	exports.APP_ID = new di_1.OpaqueToken('AppId');
	function _appIdRandomProviderFactory() {
	    return "" + _randomChar() + _randomChar() + _randomChar();
	}
	/**
	 * Providers that will generate a random APP_ID_TOKEN.
	 */
	exports.APP_ID_RANDOM_PROVIDER = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: exports.APP_ID,
	    useFactory: _appIdRandomProviderFactory,
	    deps: []
	};
	function _randomChar() {
	    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
	}
	/**
	 * A function that will be executed when a platform is initialized.
	 */
	exports.PLATFORM_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Initializer");
	/**
	 * A function that will be executed when an application is initialized.
	 */
	exports.APP_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Initializer");
	/**
	 * A token which indicates the root directory of the application
	 */
	exports.PACKAGE_ROOT_URL = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Packages Root URL");
	//# sourceMappingURL=application_tokens.js.map

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(296);
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var ng_zone_1 = __webpack_require__(309);
	var async_1 = __webpack_require__(310);
	var decorators_1 = __webpack_require__(291);
	var Testability = (function () {
	    function Testability(_ngZone) {
	        this._ngZone = _ngZone;
	        /** @internal */
	        this._pendingCount = 0;
	        /** @internal */
	        this._isZoneStable = true;
	        /**
	         * Whether any work was done since the last 'whenStable' callback. This is
	         * useful to detect if this could have potentially destabilized another
	         * component while it is stabilizing.
	         * @internal
	         */
	        this._didWork = false;
	        /** @internal */
	        this._callbacks = [];
	        this._watchAngularEvents();
	    }
	    /** @internal */
	    Testability.prototype._watchAngularEvents = function () {
	        var _this = this;
	        async_1.ObservableWrapper.subscribe(this._ngZone.onUnstable, function (_) {
	            _this._didWork = true;
	            _this._isZoneStable = false;
	        });
	        this._ngZone.runOutsideAngular(function () {
	            async_1.ObservableWrapper.subscribe(_this._ngZone.onStable, function (_) {
	                ng_zone_1.NgZone.assertNotInAngularZone();
	                lang_1.scheduleMicroTask(function () {
	                    _this._isZoneStable = true;
	                    _this._runCallbacksIfReady();
	                });
	            });
	        });
	    };
	    Testability.prototype.increasePendingRequestCount = function () {
	        this._pendingCount += 1;
	        this._didWork = true;
	        return this._pendingCount;
	    };
	    Testability.prototype.decreasePendingRequestCount = function () {
	        this._pendingCount -= 1;
	        if (this._pendingCount < 0) {
	            throw new exceptions_1.BaseException('pending async requests below zero');
	        }
	        this._runCallbacksIfReady();
	        return this._pendingCount;
	    };
	    Testability.prototype.isStable = function () {
	        return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
	    };
	    /** @internal */
	    Testability.prototype._runCallbacksIfReady = function () {
	        var _this = this;
	        if (this.isStable()) {
	            // Schedules the call backs in a new frame so that it is always async.
	            lang_1.scheduleMicroTask(function () {
	                while (_this._callbacks.length !== 0) {
	                    (_this._callbacks.pop())(_this._didWork);
	                }
	                _this._didWork = false;
	            });
	        }
	        else {
	            // Not Ready
	            this._didWork = true;
	        }
	    };
	    Testability.prototype.whenStable = function (callback) {
	        this._callbacks.push(callback);
	        this._runCallbacksIfReady();
	    };
	    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
	    Testability.prototype.findBindings = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.prototype.findProviders = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    Testability.ctorParameters = [
	        { type: ng_zone_1.NgZone, },
	    ];
	    return Testability;
	}());
	exports.Testability = Testability;
	var TestabilityRegistry = (function () {
	    function TestabilityRegistry() {
	        /** @internal */
	        this._applications = new collection_1.Map();
	        _testabilityGetter.addToWindow(this);
	    }
	    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
	        this._applications.set(token, testability);
	    };
	    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
	    TestabilityRegistry.prototype.getAllTestabilities = function () { return collection_1.MapWrapper.values(this._applications); };
	    TestabilityRegistry.prototype.getAllRootElements = function () { return collection_1.MapWrapper.keys(this._applications); };
	    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
	        if (findInAncestors === void 0) { findInAncestors = true; }
	        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
	    };
	    TestabilityRegistry.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    TestabilityRegistry.ctorParameters = [];
	    return TestabilityRegistry;
	}());
	exports.TestabilityRegistry = TestabilityRegistry;
	/* @ts2dart_const */
	var _NoopGetTestability = (function () {
	    function _NoopGetTestability() {
	    }
	    _NoopGetTestability.prototype.addToWindow = function (registry) { };
	    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        return null;
	    };
	    return _NoopGetTestability;
	}());
	/**
	 * Set the {@link GetTestability} implementation used by the Angular testing framework.
	 */
	function setTestabilityGetter(getter) {
	    _testabilityGetter = getter;
	}
	exports.setTestabilityGetter = setTestabilityGetter;
	var _testabilityGetter = new _NoopGetTestability();
	//# sourceMappingURL=testability.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var async_1 = __webpack_require__(310);
	var reflection_1 = __webpack_require__(299);
	var component_factory_1 = __webpack_require__(316);
	var decorators_1 = __webpack_require__(291);
	/**
	 * Low-level service for loading {@link ComponentFactory}s, which
	 * can later be used to create and render a Component instance.
	 */
	var ComponentResolver = (function () {
	    function ComponentResolver() {
	    }
	    return ComponentResolver;
	}());
	exports.ComponentResolver = ComponentResolver;
	function _isComponentFactory(type) {
	    return type instanceof component_factory_1.ComponentFactory;
	}
	var ReflectorComponentResolver = (function (_super) {
	    __extends(ReflectorComponentResolver, _super);
	    function ReflectorComponentResolver() {
	        _super.apply(this, arguments);
	    }
	    ReflectorComponentResolver.prototype.resolveComponent = function (componentType) {
	        var metadatas = reflection_1.reflector.annotations(componentType);
	        var componentFactory = metadatas.find(_isComponentFactory);
	        if (lang_1.isBlank(componentFactory)) {
	            throw new exceptions_1.BaseException("No precompiled component " + lang_1.stringify(componentType) + " found");
	        }
	        return async_1.PromiseWrapper.resolve(componentFactory);
	    };
	    ReflectorComponentResolver.prototype.clearCache = function () { };
	    ReflectorComponentResolver.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return ReflectorComponentResolver;
	}(ComponentResolver));
	exports.ReflectorComponentResolver = ReflectorComponentResolver;
	//# sourceMappingURL=component_resolver.js.map

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var view_utils_1 = __webpack_require__(317);
	/**
	 * Represents an instance of a Component created via a {@link ComponentFactory}.
	 *
	 * `ComponentRef` provides access to the Component Instance as well other objects related to this
	 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
	 * method.
	 */
	var ComponentRef = (function () {
	    function ComponentRef() {
	    }
	    Object.defineProperty(ComponentRef.prototype, "location", {
	        /**
	         * Location of the Host Element of this Component Instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "injector", {
	        /**
	         * The injector on which the component instance exists.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "instance", {
	        /**
	         * The instance of the Component.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "hostView", {
	        /**
	         * The {@link ViewRef} of the Host View of this Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
	        /**
	         * The {@link ChangeDetectorRef} of the Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "componentType", {
	        /**
	         * The component type.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentRef;
	}());
	exports.ComponentRef = ComponentRef;
	var ComponentRef_ = (function (_super) {
	    __extends(ComponentRef_, _super);
	    function ComponentRef_(_hostElement, _componentType) {
	        _super.call(this);
	        this._hostElement = _hostElement;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentRef_.prototype, "location", {
	        get: function () { return this._hostElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "injector", {
	        get: function () { return this._hostElement.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "instance", {
	        get: function () { return this._hostElement.component; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "hostView", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    ComponentRef_.prototype.destroy = function () { this._hostElement.parentView.destroy(); };
	    ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	    return ComponentRef_;
	}(ComponentRef));
	exports.ComponentRef_ = ComponentRef_;
	var EMPTY_CONTEXT = new Object();
	/*@ts2dart_const*/
	var ComponentFactory = (function () {
	    function ComponentFactory(selector, _viewFactory, _componentType) {
	        this.selector = selector;
	        this._viewFactory = _viewFactory;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentFactory.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new component.
	     */
	    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
	        var vu = injector.get(view_utils_1.ViewUtils);
	        if (lang_1.isBlank(projectableNodes)) {
	            projectableNodes = [];
	        }
	        // Note: Host views don't need a declarationAppElement!
	        var hostView = this._viewFactory(vu, injector, null);
	        var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
	        return new ComponentRef_(hostElement, this._componentType);
	    };
	    return ComponentFactory;
	}());
	exports.ComponentFactory = ComponentFactory;
	//# sourceMappingURL=component_factory.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var security_1 = __webpack_require__(318);
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var exceptions_1 = __webpack_require__(293);
	var element_1 = __webpack_require__(319);
	var exceptions_2 = __webpack_require__(325);
	var change_detection_1 = __webpack_require__(326);
	var api_1 = __webpack_require__(333);
	var application_tokens_1 = __webpack_require__(313);
	var decorators_1 = __webpack_require__(291);
	var change_detection_util_1 = __webpack_require__(332);
	var ViewUtils = (function () {
	    function ViewUtils(_renderer, _appId, sanitizer) {
	        this._renderer = _renderer;
	        this._appId = _appId;
	        this._nextCompTypeId = 0;
	        this.sanitizer = sanitizer;
	    }
	    /**
	     * Used by the generated code
	     */
	    ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles) {
	        return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles);
	    };
	    /** @internal */
	    ViewUtils.prototype.renderComponent = function (renderComponentType) {
	        return this._renderer.renderComponent(renderComponentType);
	    };
	    ViewUtils.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    ViewUtils.ctorParameters = [
	        { type: api_1.RootRenderer, },
	        { type: undefined, decorators: [{ type: decorators_1.Inject, args: [application_tokens_1.APP_ID,] },] },
	        { type: security_1.SanitizationService, },
	    ];
	    return ViewUtils;
	}());
	exports.ViewUtils = ViewUtils;
	function flattenNestedViewRenderNodes(nodes) {
	    return _flattenNestedViewRenderNodes(nodes, []);
	}
	exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
	function _flattenNestedViewRenderNodes(nodes, renderNodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        if (node instanceof element_1.AppElement) {
	            var appEl = node;
	            renderNodes.push(appEl.nativeElement);
	            if (lang_1.isPresent(appEl.nestedViews)) {
	                for (var k = 0; k < appEl.nestedViews.length; k++) {
	                    _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
	                }
	            }
	        }
	        else {
	            renderNodes.push(node);
	        }
	    }
	    return renderNodes;
	}
	var EMPTY_ARR = [];
	function ensureSlotCount(projectableNodes, expectedSlotCount) {
	    var res;
	    if (lang_1.isBlank(projectableNodes)) {
	        res = EMPTY_ARR;
	    }
	    else if (projectableNodes.length < expectedSlotCount) {
	        var givenSlotCount = projectableNodes.length;
	        res = collection_1.ListWrapper.createFixedSize(expectedSlotCount);
	        for (var i = 0; i < expectedSlotCount; i++) {
	            res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
	        }
	    }
	    else {
	        res = projectableNodes;
	    }
	    return res;
	}
	exports.ensureSlotCount = ensureSlotCount;
	exports.MAX_INTERPOLATION_VALUES = 9;
	function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
	    switch (valueCount) {
	        case 1:
	            return c0 + _toStringWithNull(a1) + c1;
	        case 2:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
	        case 3:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3;
	        case 4:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4;
	        case 5:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
	        case 6:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6;
	        case 7:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7;
	        case 8:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
	        case 9:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) +
	                c9;
	        default:
	            throw new exceptions_1.BaseException("Does not support more than 9 expressions");
	    }
	}
	exports.interpolate = interpolate;
	function _toStringWithNull(v) {
	    return v != null ? v.toString() : '';
	}
	function checkBinding(throwOnChange, oldValue, newValue) {
	    if (throwOnChange) {
	        if (!change_detection_1.devModeEqual(oldValue, newValue)) {
	            throw new exceptions_2.ExpressionChangedAfterItHasBeenCheckedException(oldValue, newValue, null);
	        }
	        return false;
	    }
	    else {
	        return !lang_1.looseIdentical(oldValue, newValue);
	    }
	}
	exports.checkBinding = checkBinding;
	function arrayLooseIdentical(a, b) {
	    if (a.length != b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (!lang_1.looseIdentical(a[i], b[i]))
	            return false;
	    }
	    return true;
	}
	exports.arrayLooseIdentical = arrayLooseIdentical;
	function mapLooseIdentical(m1, m2) {
	    var k1 = collection_1.StringMapWrapper.keys(m1);
	    var k2 = collection_1.StringMapWrapper.keys(m2);
	    if (k1.length != k2.length) {
	        return false;
	    }
	    var key;
	    for (var i = 0; i < k1.length; i++) {
	        key = k1[i];
	        if (!lang_1.looseIdentical(m1[key], m2[key])) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.mapLooseIdentical = mapLooseIdentical;
	function castByValue(input, value) {
	    return input;
	}
	exports.castByValue = castByValue;
	exports.EMPTY_ARRAY = [];
	exports.EMPTY_MAP = {};
	function pureProxy1(fn) {
	    var result;
	    var v0;
	    v0 = change_detection_util_1.uninitialized;
	    return function (p0) {
	        if (!lang_1.looseIdentical(v0, p0)) {
	            v0 = p0;
	            result = fn(p0);
	        }
	        return result;
	    };
	}
	exports.pureProxy1 = pureProxy1;
	function pureProxy2(fn) {
	    var result;
	    var v0, v1;
	    v0 = v1 = change_detection_util_1.uninitialized;
	    return function (p0, p1) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1)) {
	            v0 = p0;
	            v1 = p1;
	            result = fn(p0, p1);
	        }
	        return result;
	    };
	}
	exports.pureProxy2 = pureProxy2;
	function pureProxy3(fn) {
	    var result;
	    var v0, v1, v2;
	    v0 = v1 = v2 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            result = fn(p0, p1, p2);
	        }
	        return result;
	    };
	}
	exports.pureProxy3 = pureProxy3;
	function pureProxy4(fn) {
	    var result;
	    var v0, v1, v2, v3;
	    v0 = v1 = v2 = v3 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            result = fn(p0, p1, p2, p3);
	        }
	        return result;
	    };
	}
	exports.pureProxy4 = pureProxy4;
	function pureProxy5(fn) {
	    var result;
	    var v0, v1, v2, v3, v4;
	    v0 = v1 = v2 = v3 = v4 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            result = fn(p0, p1, p2, p3, p4);
	        }
	        return result;
	    };
	}
	exports.pureProxy5 = pureProxy5;
	function pureProxy6(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5;
	    v0 = v1 = v2 = v3 = v4 = v5 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            result = fn(p0, p1, p2, p3, p4, p5);
	        }
	        return result;
	    };
	}
	exports.pureProxy6 = pureProxy6;
	function pureProxy7(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            result = fn(p0, p1, p2, p3, p4, p5, p6);
	        }
	        return result;
	    };
	}
	exports.pureProxy7 = pureProxy7;
	function pureProxy8(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
	        }
	        return result;
	    };
	}
	exports.pureProxy8 = pureProxy8;
	function pureProxy9(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
	        }
	        return result;
	    };
	}
	exports.pureProxy9 = pureProxy9;
	function pureProxy10(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8) ||
	            !lang_1.looseIdentical(v9, p9)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            v9 = p9;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
	        }
	        return result;
	    };
	}
	exports.pureProxy10 = pureProxy10;
	//# sourceMappingURL=view_utils.js.map

/***/ },
/* 318 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
	* like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
	* handled.
	*
	* See DomSanitizationService for more details on security in Angular applications.
	*/
	(function (SecurityContext) {
	    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
	    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
	    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
	    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
	    SecurityContext[SecurityContext["URL"] = 4] = "URL";
	    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
	})(exports.SecurityContext || (exports.SecurityContext = {}));
	var SecurityContext = exports.SecurityContext;
	/**
	 * SanitizationService is used by the views to sanitize potentially dangerous values. This is a
	 * private API, use code should only refer to DomSanitizationService.
	 */
	var SanitizationService = (function () {
	    function SanitizationService() {
	    }
	    return SanitizationService;
	}());
	exports.SanitizationService = SanitizationService;
	//# sourceMappingURL=security.js.map

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var exceptions_1 = __webpack_require__(293);
	var view_type_1 = __webpack_require__(320);
	var element_ref_1 = __webpack_require__(321);
	var view_container_ref_1 = __webpack_require__(322);
	/**
	 * An AppElement is created for elements that have a ViewContainerRef,
	 * a nested component or a <template> element to keep data around
	 * that is needed for later instantiations.
	 */
	var AppElement = (function () {
	    function AppElement(index, parentIndex, parentView, nativeElement) {
	        this.index = index;
	        this.parentIndex = parentIndex;
	        this.parentView = parentView;
	        this.nativeElement = nativeElement;
	        this.nestedViews = null;
	        this.componentView = null;
	    }
	    Object.defineProperty(AppElement.prototype, "elementRef", {
	        get: function () { return new element_ref_1.ElementRef(this.nativeElement); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "vcRef", {
	        get: function () { return new view_container_ref_1.ViewContainerRef_(this); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.initComponent = function (component, componentConstructorViewQueries, view) {
	        this.component = component;
	        this.componentConstructorViewQueries = componentConstructorViewQueries;
	        this.componentView = view;
	    };
	    Object.defineProperty(AppElement.prototype, "parentInjector", {
	        get: function () { return this.parentView.injector(this.parentIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "injector", {
	        get: function () { return this.parentView.injector(this.index); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.mapNestedViews = function (nestedViewClass, callback) {
	        var result = [];
	        if (lang_1.isPresent(this.nestedViews)) {
	            this.nestedViews.forEach(function (nestedView) {
	                if (nestedView.clazz === nestedViewClass) {
	                    result.push(callback(nestedView));
	                }
	            });
	        }
	        return result;
	    };
	    AppElement.prototype.attachView = function (view, viewIndex) {
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        var nestedViews = this.nestedViews;
	        if (nestedViews == null) {
	            nestedViews = [];
	            this.nestedViews = nestedViews;
	        }
	        collection_1.ListWrapper.insert(nestedViews, viewIndex, view);
	        var refRenderNode;
	        if (viewIndex > 0) {
	            var prevView = nestedViews[viewIndex - 1];
	            refRenderNode = prevView.lastRootNode;
	        }
	        else {
	            refRenderNode = this.nativeElement;
	        }
	        if (lang_1.isPresent(refRenderNode)) {
	            view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	        }
	        view.addToContentChildren(this);
	    };
	    AppElement.prototype.detachView = function (viewIndex) {
	        var view = collection_1.ListWrapper.removeAt(this.nestedViews, viewIndex);
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        view.renderer.detachView(view.flatRootNodes);
	        view.removeFromContentChildren(this);
	        return view;
	    };
	    return AppElement;
	}());
	exports.AppElement = AppElement;
	//# sourceMappingURL=element.js.map

/***/ },
/* 320 */
/***/ function(module, exports) {

	"use strict";
	(function (ViewType) {
	    // A view that contains the host element with bound component directive.
	    // Contains a COMPONENT view
	    ViewType[ViewType["HOST"] = 0] = "HOST";
	    // The view of the component
	    // Can contain 0 to n EMBEDDED views
	    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
	    // A view that is embedded into another View via a <template> element
	    // inside of a COMPONENT view
	    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
	})(exports.ViewType || (exports.ViewType = {}));
	var ViewType = exports.ViewType;
	//# sourceMappingURL=view_type.js.map

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A wrapper around a native element inside of a View.
	*
	* An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
	* element.
	*/
	// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
	// i.e. users have to ask for what they need. With that, we can build better analysis tools
	// and could do better codegen in the future.
	var ElementRef = (function () {
	    function ElementRef(nativeElement) {
	        this.nativeElement = nativeElement;
	    }
	    return ElementRef;
	}());
	exports.ElementRef = ElementRef;
	//# sourceMappingURL=element_ref.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(296);
	var exceptions_1 = __webpack_require__(293);
	var lang_1 = __webpack_require__(282);
	var profile_1 = __webpack_require__(323);
	/**
	 * Represents a container where one or more Views can be attached.
	 *
	 * The container can contain two kinds of Views. Host Views, created by instantiating a
	 * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
	 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
	 *
	 * The location of the View Container within the containing View is specified by the Anchor
	 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
	 * have a single View Container.
	 *
	 * Root elements of Views attached to this container become siblings of the Anchor Element in
	 * the Rendered View.
	 *
	 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
	 * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
	 */
	var ViewContainerRef = (function () {
	    function ViewContainerRef() {
	    }
	    Object.defineProperty(ViewContainerRef.prototype, "element", {
	        /**
	         * Anchor element that specifies the location of this container in the containing View.
	         * <!-- TODO: rename to anchorElement -->
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "length", {
	        /**
	         * Returns the number of Views currently attached to this container.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ViewContainerRef;
	}());
	exports.ViewContainerRef = ViewContainerRef;
	var ViewContainerRef_ = (function () {
	    function ViewContainerRef_(_element) {
	        this._element = _element;
	        /** @internal */
	        this._createComponentInContainerScope = profile_1.wtfCreateScope('ViewContainerRef#createComponent()');
	        /** @internal */
	        this._insertScope = profile_1.wtfCreateScope('ViewContainerRef#insert()');
	        /** @internal */
	        this._removeScope = profile_1.wtfCreateScope('ViewContainerRef#remove()');
	        /** @internal */
	        this._detachScope = profile_1.wtfCreateScope('ViewContainerRef#detach()');
	    }
	    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
	    Object.defineProperty(ViewContainerRef_.prototype, "length", {
	        get: function () {
	            var views = this._element.nestedViews;
	            return lang_1.isPresent(views) ? views.length : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "element", {
	        get: function () { return this._element.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
	        get: function () { return this._element.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
	        get: function () { return this._element.parentInjector; },
	        enumerable: true,
	        configurable: true
	    });
	    // TODO(rado): profile and decide whether bounds checks should be added
	    // to the methods below.
	    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
	        if (context === void 0) { context = null; }
	        if (index === void 0) { index = -1; }
	        var viewRef = templateRef.createEmbeddedView(context);
	        this.insert(viewRef, index);
	        return viewRef;
	    };
	    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
	        if (index === void 0) { index = -1; }
	        if (injector === void 0) { injector = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        var s = this._createComponentInContainerScope();
	        var contextInjector = lang_1.isPresent(injector) ? injector : this._element.parentInjector;
	        var componentRef = componentFactory.create(contextInjector, projectableNodes);
	        this.insert(componentRef.hostView, index);
	        return profile_1.wtfLeave(s, componentRef);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.insert = function (viewRef, index) {
	        if (index === void 0) { index = -1; }
	        var s = this._insertScope();
	        if (index == -1)
	            index = this.length;
	        var viewRef_ = viewRef;
	        this._element.attachView(viewRef_.internalView, index);
	        return profile_1.wtfLeave(s, viewRef_);
	    };
	    ViewContainerRef_.prototype.indexOf = function (viewRef) {
	        return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
	    };
	    // TODO(i): rename to destroy
	    ViewContainerRef_.prototype.remove = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._removeScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        view.destroy();
	        // view is intentionally not returned to the client.
	        profile_1.wtfLeave(s);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.detach = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._detachScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        return profile_1.wtfLeave(s, view.ref);
	    };
	    ViewContainerRef_.prototype.clear = function () {
	        for (var i = this.length - 1; i >= 0; i--) {
	            this.remove(i);
	        }
	    };
	    return ViewContainerRef_;
	}());
	exports.ViewContainerRef_ = ViewContainerRef_;
	//# sourceMappingURL=view_container_ref.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var impl = __webpack_require__(324);
	// Change exports to const once https://github.com/angular/ts2dart/issues/150
	/**
	 * True if WTF is enabled.
	 */
	exports.wtfEnabled = impl.detectWTF();
	function noopScope(arg0, arg1) {
	    return null;
	}
	/**
	 * Create trace scope.
	 *
	 * Scopes must be strictly nested and are analogous to stack frames, but
	 * do not have to follow the stack frames. Instead it is recommended that they follow logical
	 * nesting. You may want to use
	 * [Event
	 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
	 * as they are defined in WTF.
	 *
	 * Used to mark scope entry. The return value is used to leave the scope.
	 *
	 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
	 *
	 *     someMethod() {
	 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
	 *        // DO SOME WORK HERE
	 *        return wtfLeave(s, 123); // Return value 123
	 *     }
	 *
	 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
	 * negatively impact the performance of your application. For this reason we recommend that
	 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
	 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
	 * exception, will produce incorrect trace, but presence of exception signifies logic error which
	 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
	 * an exception is expected during normal execution while profiling.
	 *
	 */
	exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function (signature, flags) { return noopScope; };
	/**
	 * Used to mark end of Scope.
	 *
	 * - `scope` to end.
	 * - `returnValue` (optional) to be passed to the WTF.
	 *
	 * Returns the `returnValue for easy chaining.
	 */
	exports.wtfLeave = exports.wtfEnabled ? impl.leave : function (s, r) { return r; };
	/**
	 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
	 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
	 * enabled.
	 *
	 *     someMethod() {
	 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
	 *        var future = new Future.delay(5).then((_) {
	 *          wtfEndTimeRange(s);
	 *        });
	 *     }
	 */
	exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function (rangeType, action) { return null; };
	/**
	 * Ends a async time range operation.
	 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
	 * enabled.
	 */
	exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function (r) {
	    return null;
	};
	//# sourceMappingURL=profile.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var trace;
	var events;
	function detectWTF() {
	    var wtf = lang_1.global['wtf'];
	    if (wtf) {
	        trace = wtf['trace'];
	        if (trace) {
	            events = trace['events'];
	            return true;
	        }
	    }
	    return false;
	}
	exports.detectWTF = detectWTF;
	function createScope(signature, flags) {
	    if (flags === void 0) { flags = null; }
	    return events.createScope(signature, flags);
	}
	exports.createScope = createScope;
	function leave(scope, returnValue) {
	    trace.leaveScope(scope, returnValue);
	    return returnValue;
	}
	exports.leave = leave;
	function startTimeRange(rangeType, action) {
	    return trace.beginTimeRange(rangeType, action);
	}
	exports.startTimeRange = startTimeRange;
	function endTimeRange(range) {
	    trace.endTimeRange(range);
	}
	exports.endTimeRange = endTimeRange;
	//# sourceMappingURL=wtf_impl.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(293);
	/**
	 * An error thrown if application changes model breaking the top-down data flow.
	 *
	 * This exception is only thrown in dev mode.
	 *
	 * <!-- TODO: Add a link once the dev mode option is configurable -->
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'parent',
	 *   template: `
	 *     <child [prop]="parentProp"></child>
	 *   `,
	 *   directives: [forwardRef(() => Child)]
	 * })
	 * class Parent {
	 *   parentProp = "init";
	 * }
	 *
	 * @Directive({selector: 'child', inputs: ['prop']})
	 * class Child {
	 *   constructor(public parent: Parent) {}
	 *
	 *   set prop(v) {
	 *     // this updates the parent property, which is disallowed during change detection
	 *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
	 *     this.parent.parentProp = "updated";
	 *   }
	 * }
	 * ```
	 */
	var ExpressionChangedAfterItHasBeenCheckedException = (function (_super) {
	    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
	    function ExpressionChangedAfterItHasBeenCheckedException(oldValue, currValue, context) {
	        _super.call(this, "Expression has changed after it was checked. " +
	            ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
	    }
	    return ExpressionChangedAfterItHasBeenCheckedException;
	}(exceptions_1.BaseException));
	exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
	/**
	 * Thrown when an exception was raised during view creation, change detection or destruction.
	 *
	 * This error wraps the original exception to attach additional contextual information that can
	 * be useful for debugging.
	 */
	var ViewWrappedException = (function (_super) {
	    __extends(ViewWrappedException, _super);
	    function ViewWrappedException(originalException, originalStack, context) {
	        _super.call(this, "Error in " + context.source, originalException, originalStack, context);
	    }
	    return ViewWrappedException;
	}(exceptions_1.WrappedException));
	exports.ViewWrappedException = ViewWrappedException;
	/**
	 * Thrown when a destroyed view is used.
	 *
	 * This error indicates a bug in the framework.
	 *
	 * This is an internal Angular error.
	 */
	var ViewDestroyedException = (function (_super) {
	    __extends(ViewDestroyedException, _super);
	    function ViewDestroyedException(details) {
	        _super.call(this, "Attempt to use a destroyed view: " + details);
	    }
	    return ViewDestroyedException;
	}(exceptions_1.BaseException));
	exports.ViewDestroyedException = ViewDestroyedException;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var iterable_differs_1 = __webpack_require__(327);
	var default_iterable_differ_1 = __webpack_require__(328);
	var keyvalue_differs_1 = __webpack_require__(329);
	var default_keyvalue_differ_1 = __webpack_require__(330);
	var default_keyvalue_differ_2 = __webpack_require__(330);
	exports.DefaultKeyValueDifferFactory = default_keyvalue_differ_2.DefaultKeyValueDifferFactory;
	exports.KeyValueChangeRecord = default_keyvalue_differ_2.KeyValueChangeRecord;
	var default_iterable_differ_2 = __webpack_require__(328);
	exports.DefaultIterableDifferFactory = default_iterable_differ_2.DefaultIterableDifferFactory;
	exports.CollectionChangeRecord = default_iterable_differ_2.CollectionChangeRecord;
	var constants_1 = __webpack_require__(286);
	exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
	exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
	exports.ChangeDetectorState = constants_1.ChangeDetectorState;
	exports.CHANGE_DETECTOR_STATE_VALUES = constants_1.CHANGE_DETECTOR_STATE_VALUES;
	exports.isDefaultChangeDetectionStrategy = constants_1.isDefaultChangeDetectionStrategy;
	var change_detector_ref_1 = __webpack_require__(331);
	exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
	var iterable_differs_2 = __webpack_require__(327);
	exports.IterableDiffers = iterable_differs_2.IterableDiffers;
	var keyvalue_differs_2 = __webpack_require__(329);
	exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
	var default_iterable_differ_3 = __webpack_require__(328);
	exports.DefaultIterableDiffer = default_iterable_differ_3.DefaultIterableDiffer;
	var change_detection_util_1 = __webpack_require__(332);
	exports.WrappedValue = change_detection_util_1.WrappedValue;
	exports.ValueUnwrapper = change_detection_util_1.ValueUnwrapper;
	exports.SimpleChange = change_detection_util_1.SimpleChange;
	exports.devModeEqual = change_detection_util_1.devModeEqual;
	exports.looseIdentical = change_detection_util_1.looseIdentical;
	exports.uninitialized = change_detection_util_1.uninitialized;
	/**
	 * Structural diffing for `Object`s and `Map`s.
	 */
	exports.keyValDiff = 
	/*@ts2dart_const*/ [new default_keyvalue_differ_1.DefaultKeyValueDifferFactory()];
	/**
	 * Structural diffing for `Iterable` types such as `Array`s.
	 */
	exports.iterableDiff = 
	/*@ts2dart_const*/ [new default_iterable_differ_1.DefaultIterableDifferFactory()];
	exports.defaultIterableDiffers = new iterable_differs_1.IterableDiffers(exports.iterableDiff);
	exports.defaultKeyValueDiffers = new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff);
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var collection_1 = __webpack_require__(296);
	var di_1 = __webpack_require__(290);
	/**
	 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
	 * @ts2dart_const
	 */
	var IterableDiffers = (function () {
	    /*@ts2dart_const*/
	    function IterableDiffers(factories) {
	        this.factories = factories;
	    }
	    IterableDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new IterableDiffers(factories);
	        }
	        else {
	            return new IterableDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	     * inherited {@link IterableDiffers} instance with the provided factories and return a new
	     * {@link IterableDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link IterableDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     IterableDiffers.extend([new ImmutableListDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    IterableDiffers.extend = function (factories) {
	        return new di_1.Provider(IterableDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
	                }
	                return IterableDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    IterableDiffers.prototype.find = function (iterable) {
	        var factory = this.factories.find(function (f) { return f.supports(iterable); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "' of type '" + lang_1.getTypeNameForDebugging(iterable) + "'");
	        }
	    };
	    return IterableDiffers;
	}());
	exports.IterableDiffers = IterableDiffers;
	//# sourceMappingURL=iterable_differs.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(293);
	var collection_1 = __webpack_require__(296);
	var lang_1 = __webpack_require__(282);
	/* @ts2dart_const */
	var DefaultIterableDifferFactory = (function () {
	    function DefaultIterableDifferFactory() {
	    }
	    DefaultIterableDifferFactory.prototype.supports = function (obj) { return collection_1.isListLikeIterable(obj); };
	    DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
	        return new DefaultIterableDiffer(trackByFn);
	    };
	    return DefaultIterableDifferFactory;
	}());
	exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
	var trackByIdentity = function (index, item) { return item; };
	var DefaultIterableDiffer = (function () {
	    function DefaultIterableDiffer(_trackByFn) {
	        this._trackByFn = _trackByFn;
	        this._length = null;
	        this._collection = null;
	        // Keeps track of the used records at any point in time (during & across `_check()` calls)
	        this._linkedRecords = null;
	        // Keeps track of the removed records at any point in time during `_check()` calls.
	        this._unlinkedRecords = null;
	        this._previousItHead = null;
	        this._itHead = null;
	        this._itTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._movesHead = null;
	        this._movesTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	        // Keeps track of records where custom track by is the same, but item identity has changed
	        this._identityChangesHead = null;
	        this._identityChangesTail = null;
	        this._trackByFn = lang_1.isPresent(this._trackByFn) ? this._trackByFn : trackByIdentity;
	    }
	    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
	        get: function () { return this._collection; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
	        get: function () { return this._length; },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._itHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
	        var record;
	        for (record = this._movesHead; record !== null; record = record._nextMoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
	        var record;
	        for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.diff = function (collection) {
	        if (lang_1.isBlank(collection))
	            collection = [];
	        if (!collection_1.isListLikeIterable(collection)) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
	        }
	        if (this.check(collection)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultIterableDiffer.prototype.onDestroy = function () { };
	    // todo(vicb): optim for UnmodifiableListView (frozen arrays)
	    DefaultIterableDiffer.prototype.check = function (collection) {
	        var _this = this;
	        this._reset();
	        var record = this._itHead;
	        var mayBeDirty = false;
	        var index;
	        var item;
	        var itemTrackBy;
	        if (lang_1.isArray(collection)) {
	            var list = collection;
	            this._length = collection.length;
	            for (index = 0; index < this._length; index++) {
	                item = list[index];
	                itemTrackBy = this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        this._addIdentityChange(record, item);
	                }
	                record = record._next;
	            }
	        }
	        else {
	            index = 0;
	            collection_1.iterateListLike(collection, function (item) {
	                itemTrackBy = _this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = _this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = _this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        _this._addIdentityChange(record, item);
	                }
	                record = record._next;
	                index++;
	            });
	            this._length = index;
	        }
	        this._truncate(record);
	        this._collection = collection;
	        return this.isDirty;
	    };
	    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
	        /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
	         * changes.
	         */
	        get: function () {
	            return this._additionsHead !== null || this._movesHead !== null ||
	                this._removalsHead !== null || this._identityChangesHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Reset the state of the change objects to show no changes. This means set previousKey to
	     * currentKey, and clear all of the queues (additions, moves, removals).
	     * Set the previousIndexes of moved and added items to their currentIndexes
	     * Reset the list of additions, moves and removals
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            var nextRecord;
	            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                record.previousIndex = record.currentIndex;
	            }
	            this._additionsHead = this._additionsTail = null;
	            for (record = this._movesHead; record !== null; record = nextRecord) {
	                record.previousIndex = record.currentIndex;
	                nextRecord = record._nextMoved;
	            }
	            this._movesHead = this._movesTail = null;
	            this._removalsHead = this._removalsTail = null;
	            this._identityChangesHead = this._identityChangesTail = null;
	        }
	    };
	    /**
	     * This is the core function which handles differences between collections.
	     *
	     * - `record` is the record which we saw at this position last time. If null then it is a new
	     *   item.
	     * - `item` is the current item in the collection
	     * - `index` is the position of the item in the collection
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
	        // The previous record after which we will append the current one.
	        var previousRecord;
	        if (record === null) {
	            previousRecord = this._itTail;
	        }
	        else {
	            previousRecord = record._prev;
	            // Remove the record from the collection since we know it does not match the item.
	            this._remove(record);
	        }
	        // Attempt to see if we have seen the item before.
	        record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
	        if (record !== null) {
	            // We have seen this before, we need to move it forward in the collection.
	            // But first we need to check if identity changed, so we can update in view if necessary
	            if (!lang_1.looseIdentical(record.item, item))
	                this._addIdentityChange(record, item);
	            this._moveAfter(record, previousRecord, index);
	        }
	        else {
	            // Never seen it, check evicted list.
	            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	            if (record !== null) {
	                // It is an item which we have evicted earlier: reinsert it back into the list.
	                // But first we need to check if identity changed, so we can update in view if necessary
	                if (!lang_1.looseIdentical(record.item, item))
	                    this._addIdentityChange(record, item);
	                this._reinsertAfter(record, previousRecord, index);
	            }
	            else {
	                // It is a new item: add it.
	                record =
	                    this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
	            }
	        }
	        return record;
	    };
	    /**
	     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
	     *
	     * Use case: `[a, a]` => `[b, a, a]`
	     *
	     * If we did not have this check then the insertion of `b` would:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) leave `a` at index `1` as is. <-- this is wrong!
	     *   3) reinsert `a` at index 2. <-- this is wrong!
	     *
	     * The correct behavior is:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) reinsert `a` at index 1.
	     *   3) move `a` at from `1` to `2`.
	     *
	     *
	     * Double check that we have not evicted a duplicate item. We need to check if the item type may
	     * have already been removed:
	     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
	     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
	     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
	     * at the end.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
	        var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	        if (reinsertRecord !== null) {
	            record = this._reinsertAfter(reinsertRecord, record._prev, index);
	        }
	        else if (record.currentIndex != index) {
	            record.currentIndex = index;
	            this._addToMoves(record, index);
	        }
	        return record;
	    };
	    /**
	     * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
	     *
	     * - `record` The first excess {@link CollectionChangeRecord}.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._truncate = function (record) {
	        // Anything after that needs to be removed;
	        while (record !== null) {
	            var nextRecord = record._next;
	            this._addToRemovals(this._unlink(record));
	            record = nextRecord;
	        }
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.clear();
	        }
	        if (this._additionsTail !== null) {
	            this._additionsTail._nextAdded = null;
	        }
	        if (this._movesTail !== null) {
	            this._movesTail._nextMoved = null;
	        }
	        if (this._itTail !== null) {
	            this._itTail._next = null;
	        }
	        if (this._removalsTail !== null) {
	            this._removalsTail._nextRemoved = null;
	        }
	        if (this._identityChangesTail !== null) {
	            this._identityChangesTail._nextIdentityChange = null;
	        }
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.remove(record);
	        }
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
	        this._unlink(record);
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
	        this._insertAfter(record, prevRecord, index);
	        if (this._additionsTail === null) {
	            // todo(vicb)
	            // assert(this._additionsHead === null);
	            this._additionsTail = this._additionsHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_additionsTail._nextAdded === null);
	            // assert(record._nextAdded === null);
	            this._additionsTail = this._additionsTail._nextAdded = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
	        // todo(vicb)
	        // assert(record != prevRecord);
	        // assert(record._next === null);
	        // assert(record._prev === null);
	        var next = prevRecord === null ? this._itHead : prevRecord._next;
	        // todo(vicb)
	        // assert(next != record);
	        // assert(prevRecord != record);
	        record._next = next;
	        record._prev = prevRecord;
	        if (next === null) {
	            this._itTail = record;
	        }
	        else {
	            next._prev = record;
	        }
	        if (prevRecord === null) {
	            this._itHead = record;
	        }
	        else {
	            prevRecord._next = record;
	        }
	        if (this._linkedRecords === null) {
	            this._linkedRecords = new _DuplicateMap();
	        }
	        this._linkedRecords.put(record);
	        record.currentIndex = index;
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._remove = function (record) {
	        return this._addToRemovals(this._unlink(record));
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._unlink = function (record) {
	        if (this._linkedRecords !== null) {
	            this._linkedRecords.remove(record);
	        }
	        var prev = record._prev;
	        var next = record._next;
	        // todo(vicb)
	        // assert((record._prev = null) === null);
	        // assert((record._next = null) === null);
	        if (prev === null) {
	            this._itHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        if (next === null) {
	            this._itTail = prev;
	        }
	        else {
	            next._prev = prev;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
	        // todo(vicb)
	        // assert(record._nextMoved === null);
	        if (record.previousIndex === toIndex) {
	            return record;
	        }
	        if (this._movesTail === null) {
	            // todo(vicb)
	            // assert(_movesHead === null);
	            this._movesTail = this._movesHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_movesTail._nextMoved === null);
	            this._movesTail = this._movesTail._nextMoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
	        if (this._unlinkedRecords === null) {
	            this._unlinkedRecords = new _DuplicateMap();
	        }
	        this._unlinkedRecords.put(record);
	        record.currentIndex = null;
	        record._nextRemoved = null;
	        if (this._removalsTail === null) {
	            // todo(vicb)
	            // assert(_removalsHead === null);
	            this._removalsTail = this._removalsHead = record;
	            record._prevRemoved = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(_removalsTail._nextRemoved === null);
	            // assert(record._nextRemoved === null);
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = this._removalsTail._nextRemoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
	        record.item = item;
	        if (this._identityChangesTail === null) {
	            this._identityChangesTail = this._identityChangesHead = record;
	        }
	        else {
	            this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
	        }
	        return record;
	    };
	    DefaultIterableDiffer.prototype.toString = function () {
	        var list = [];
	        this.forEachItem(function (record) { return list.push(record); });
	        var previous = [];
	        this.forEachPreviousItem(function (record) { return previous.push(record); });
	        var additions = [];
	        this.forEachAddedItem(function (record) { return additions.push(record); });
	        var moves = [];
	        this.forEachMovedItem(function (record) { return moves.push(record); });
	        var removals = [];
	        this.forEachRemovedItem(function (record) { return removals.push(record); });
	        var identityChanges = [];
	        this.forEachIdentityChange(function (record) { return identityChanges.push(record); });
	        return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n" + "identityChanges: " +
	            identityChanges.join(', ') + "\n";
	    };
	    return DefaultIterableDiffer;
	}());
	exports.DefaultIterableDiffer = DefaultIterableDiffer;
	var CollectionChangeRecord = (function () {
	    function CollectionChangeRecord(item, trackById) {
	        this.item = item;
	        this.trackById = trackById;
	        this.currentIndex = null;
	        this.previousIndex = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._prev = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._prevDup = null;
	        /** @internal */
	        this._nextDup = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextMoved = null;
	        /** @internal */
	        this._nextIdentityChange = null;
	    }
	    CollectionChangeRecord.prototype.toString = function () {
	        return this.previousIndex === this.currentIndex ?
	            lang_1.stringify(this.item) :
	            lang_1.stringify(this.item) + '[' + lang_1.stringify(this.previousIndex) + '->' +
	                lang_1.stringify(this.currentIndex) + ']';
	    };
	    return CollectionChangeRecord;
	}());
	exports.CollectionChangeRecord = CollectionChangeRecord;
	// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
	var _DuplicateItemRecordList = (function () {
	    function _DuplicateItemRecordList() {
	        /** @internal */
	        this._head = null;
	        /** @internal */
	        this._tail = null;
	    }
	    /**
	     * Append the record to the list of duplicates.
	     *
	     * Note: by design all records in the list of duplicates hold the same value in record.item.
	     */
	    _DuplicateItemRecordList.prototype.add = function (record) {
	        if (this._head === null) {
	            this._head = this._tail = record;
	            record._nextDup = null;
	            record._prevDup = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(record.item ==  _head.item ||
	            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
	            this._tail._nextDup = record;
	            record._prevDup = this._tail;
	            record._nextDup = null;
	            this._tail = record;
	        }
	    };
	    // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
	    // CollectionChangeRecord.currentIndex >= afterIndex
	    _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
	        var record;
	        for (record = this._head; record !== null; record = record._nextDup) {
	            if ((afterIndex === null || afterIndex < record.currentIndex) &&
	                lang_1.looseIdentical(record.trackById, trackById)) {
	                return record;
	            }
	        }
	        return null;
	    };
	    /**
	     * Remove one {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * Returns whether the list of duplicates is empty.
	     */
	    _DuplicateItemRecordList.prototype.remove = function (record) {
	        // todo(vicb)
	        // assert(() {
	        //  // verify that the record being removed is in the list.
	        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
	        //    if (identical(cursor, record)) return true;
	        //  }
	        //  return false;
	        //});
	        var prev = record._prevDup;
	        var next = record._nextDup;
	        if (prev === null) {
	            this._head = next;
	        }
	        else {
	            prev._nextDup = next;
	        }
	        if (next === null) {
	            this._tail = prev;
	        }
	        else {
	            next._prevDup = prev;
	        }
	        return this._head === null;
	    };
	    return _DuplicateItemRecordList;
	}());
	var _DuplicateMap = (function () {
	    function _DuplicateMap() {
	        this.map = new Map();
	    }
	    _DuplicateMap.prototype.put = function (record) {
	        // todo(vicb) handle corner cases
	        var key = lang_1.getMapKey(record.trackById);
	        var duplicates = this.map.get(key);
	        if (!lang_1.isPresent(duplicates)) {
	            duplicates = new _DuplicateItemRecordList();
	            this.map.set(key, duplicates);
	        }
	        duplicates.add(record);
	    };
	    /**
	     * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
	     * have already iterated over, we use the afterIndex to pretend it is not there.
	     *
	     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
	     * have any more `a`s needs to return the last `a` not the first or second.
	     */
	    _DuplicateMap.prototype.get = function (trackById, afterIndex) {
	        if (afterIndex === void 0) { afterIndex = null; }
	        var key = lang_1.getMapKey(trackById);
	        var recordList = this.map.get(key);
	        return lang_1.isBlank(recordList) ? null : recordList.get(trackById, afterIndex);
	    };
	    /**
	     * Removes a {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * The list of duplicates also is removed from the map if it gets empty.
	     */
	    _DuplicateMap.prototype.remove = function (record) {
	        var key = lang_1.getMapKey(record.trackById);
	        // todo(vicb)
	        // assert(this.map.containsKey(key));
	        var recordList = this.map.get(key);
	        // Remove the list of duplicates when it gets empty
	        if (recordList.remove(record)) {
	            this.map.delete(key);
	        }
	        return record;
	    };
	    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
	        get: function () { return this.map.size === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
	    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + lang_1.stringify(this.map) + ')'; };
	    return _DuplicateMap;
	}());
	//# sourceMappingURL=default_iterable_differ.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	var collection_1 = __webpack_require__(296);
	var di_1 = __webpack_require__(290);
	/**
	 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
	 * @ts2dart_const
	 */
	var KeyValueDiffers = (function () {
	    /*@ts2dart_const*/
	    function KeyValueDiffers(factories) {
	        this.factories = factories;
	    }
	    KeyValueDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new KeyValueDiffers(factories);
	        }
	        else {
	            return new KeyValueDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	     * {@link KeyValueDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link KeyValueDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    KeyValueDiffers.extend = function (factories) {
	        return new di_1.Provider(KeyValueDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
	                }
	                return KeyValueDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    KeyValueDiffers.prototype.find = function (kv) {
	        var factory = this.factories.find(function (f) { return f.supports(kv); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
	        }
	    };
	    return KeyValueDiffers;
	}());
	exports.KeyValueDiffers = KeyValueDiffers;
	//# sourceMappingURL=keyvalue_differs.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(296);
	var lang_1 = __webpack_require__(282);
	var exceptions_1 = __webpack_require__(293);
	/* @ts2dart_const */
	var DefaultKeyValueDifferFactory = (function () {
	    function DefaultKeyValueDifferFactory() {
	    }
	    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || lang_1.isJsObject(obj); };
	    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
	    return DefaultKeyValueDifferFactory;
	}());
	exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
	var DefaultKeyValueDiffer = (function () {
	    function DefaultKeyValueDiffer() {
	        this._records = new Map();
	        this._mapHead = null;
	        this._previousMapHead = null;
	        this._changesHead = null;
	        this._changesTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	    }
	    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
	        get: function () {
	            return this._additionsHead !== null || this._changesHead !== null ||
	                this._removalsHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
	        var record;
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.diff = function (map) {
	        if (lang_1.isBlank(map))
	            map = collection_1.MapWrapper.createFromPairs([]);
	        if (!(map instanceof Map || lang_1.isJsObject(map))) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
	        }
	        if (this.check(map)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
	    DefaultKeyValueDiffer.prototype.check = function (map) {
	        var _this = this;
	        this._reset();
	        var records = this._records;
	        var oldSeqRecord = this._mapHead;
	        var lastOldSeqRecord = null;
	        var lastNewSeqRecord = null;
	        var seqChanged = false;
	        this._forEach(map, function (value, key) {
	            var newSeqRecord;
	            if (oldSeqRecord !== null && key === oldSeqRecord.key) {
	                newSeqRecord = oldSeqRecord;
	                if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
	                    oldSeqRecord.previousValue = oldSeqRecord.currentValue;
	                    oldSeqRecord.currentValue = value;
	                    _this._addToChanges(oldSeqRecord);
	                }
	            }
	            else {
	                seqChanged = true;
	                if (oldSeqRecord !== null) {
	                    oldSeqRecord._next = null;
	                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	                    _this._addToRemovals(oldSeqRecord);
	                }
	                if (records.has(key)) {
	                    newSeqRecord = records.get(key);
	                }
	                else {
	                    newSeqRecord = new KeyValueChangeRecord(key);
	                    records.set(key, newSeqRecord);
	                    newSeqRecord.currentValue = value;
	                    _this._addToAdditions(newSeqRecord);
	                }
	            }
	            if (seqChanged) {
	                if (_this._isInRemovals(newSeqRecord)) {
	                    _this._removeFromRemovals(newSeqRecord);
	                }
	                if (lastNewSeqRecord == null) {
	                    _this._mapHead = newSeqRecord;
	                }
	                else {
	                    lastNewSeqRecord._next = newSeqRecord;
	                }
	            }
	            lastOldSeqRecord = oldSeqRecord;
	            lastNewSeqRecord = newSeqRecord;
	            oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
	        });
	        this._truncate(lastOldSeqRecord, oldSeqRecord);
	        return this.isDirty;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            // Record the state of the mapping
	            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                record.previousValue = record.currentValue;
	            }
	            for (record = this._additionsHead; record != null; record = record._nextAdded) {
	                record.previousValue = record.currentValue;
	            }
	            // todo(vicb) once assert is supported
	            // assert(() {
	            //  var r = _changesHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextChanged;
	            //    r._nextChanged = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _additionsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextAdded;
	            //    r._nextAdded = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _removalsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextRemoved;
	            //    r._nextRemoved = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  return true;
	            //});
	            this._changesHead = this._changesTail = null;
	            this._additionsHead = this._additionsTail = null;
	            this._removalsHead = this._removalsTail = null;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
	        while (record !== null) {
	            if (lastRecord === null) {
	                this._mapHead = null;
	            }
	            else {
	                lastRecord._next = null;
	            }
	            var nextRecord = record._next;
	            // todo(vicb) assert
	            // assert((() {
	            //  record._next = null;
	            //  return true;
	            //}));
	            this._addToRemovals(record);
	            lastRecord = record;
	            record = nextRecord;
	        }
	        for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
	            rec.previousValue = rec.currentValue;
	            rec.currentValue = null;
	            this._records.delete(rec.key);
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
	        return record === this._removalsHead || record._nextRemoved !== null ||
	            record._prevRemoved !== null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._removalsHead === null) {
	            this._removalsHead = this._removalsTail = record;
	        }
	        else {
	            this._removalsTail._nextRemoved = record;
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
	        var next = record._next;
	        if (prev === null) {
	            this._mapHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        // todo(vicb) assert
	        // assert((() {
	        //  record._next = null;
	        //  return true;
	        //})());
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        record._prevRemoved = record._nextRemoved = null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
	        // todo(vicb): assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._additionsHead === null) {
	            this._additionsHead = this._additionsTail = record;
	        }
	        else {
	            this._additionsTail._nextAdded = record;
	            this._additionsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
	        // todo(vicb) assert
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._changesHead === null) {
	            this._changesHead = this._changesTail = record;
	        }
	        else {
	            this._changesTail._nextChanged = record;
	            this._changesTail = record;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.toString = function () {
	        var items = [];
	        var previous = [];
	        var changes = [];
	        var additions = [];
	        var removals = [];
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            items.push(lang_1.stringify(record));
	        }
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            previous.push(lang_1.stringify(record));
	        }
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            changes.push(lang_1.stringify(record));
	        }
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            additions.push(lang_1.stringify(record));
	        }
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            removals.push(lang_1.stringify(record));
	        }
	        return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n";
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
	        if (obj instanceof Map) {
	            obj.forEach(fn);
	        }
	        else {
	            collection_1.StringMapWrapper.forEach(obj, fn);
	        }
	    };
	    return DefaultKeyValueDiffer;
	}());
	exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
	var KeyValueChangeRecord = (function () {
	    function KeyValueChangeRecord(key) {
	        this.key = key;
	        this.previousValue = null;
	        this.currentValue = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextChanged = null;
	    }
	    KeyValueChangeRecord.prototype.toString = function () {
	        return lang_1.looseIdentical(this.previousValue, this.currentValue) ?
	            lang_1.stringify(this.key) :
	            (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' +
	                lang_1.stringify(this.currentValue) + ']');
	    };
	    return KeyValueChangeRecord;
	}());
	exports.KeyValueChangeRecord = KeyValueChangeRecord;
	//# sourceMappingURL=default_keyvalue_differ.js.map

/***/ },
/* 331 */
/***/ function(module, exports) {

	"use strict";
	var ChangeDetectorRef = (function () {
	    function ChangeDetectorRef() {
	    }
	    return ChangeDetectorRef;
	}());
	exports.ChangeDetectorRef = ChangeDetectorRef;
	//# sourceMappingURL=change_detector_ref.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var lang_2 = __webpack_require__(282);
	exports.looseIdentical = lang_2.looseIdentical;
	exports.uninitialized = new Object();
	function devModeEqual(a, b) {
	    if (collection_1.isListLikeIterable(a) && collection_1.isListLikeIterable(b)) {
	        return collection_1.areIterablesEqual(a, b, devModeEqual);
	    }
	    else if (!collection_1.isListLikeIterable(a) && !lang_1.isPrimitive(a) && !collection_1.isListLikeIterable(b) &&
	        !lang_1.isPrimitive(b)) {
	        return true;
	    }
	    else {
	        return lang_1.looseIdentical(a, b);
	    }
	}
	exports.devModeEqual = devModeEqual;
	/**
	 * Indicates that the result of a {@link PipeMetadata} transformation has changed even though the
	 * reference
	 * has not changed.
	 *
	 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
	 *
	 * Example:
	 *
	 * ```
	 * if (this._latestValue === this._latestReturnedValue) {
	 *    return this._latestReturnedValue;
	 *  } else {
	 *    this._latestReturnedValue = this._latestValue;
	 *    return WrappedValue.wrap(this._latestValue); // this will force update
	 *  }
	 * ```
	 */
	var WrappedValue = (function () {
	    function WrappedValue(wrapped) {
	        this.wrapped = wrapped;
	    }
	    WrappedValue.wrap = function (value) { return new WrappedValue(value); };
	    return WrappedValue;
	}());
	exports.WrappedValue = WrappedValue;
	/**
	 * Helper class for unwrapping WrappedValue s
	 */
	var ValueUnwrapper = (function () {
	    function ValueUnwrapper() {
	        this.hasWrappedValue = false;
	    }
	    ValueUnwrapper.prototype.unwrap = function (value) {
	        if (value instanceof WrappedValue) {
	            this.hasWrappedValue = true;
	            return value.wrapped;
	        }
	        return value;
	    };
	    ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
	    return ValueUnwrapper;
	}());
	exports.ValueUnwrapper = ValueUnwrapper;
	/**
	 * Represents a basic change from a previous to a new value.
	 */
	var SimpleChange = (function () {
	    function SimpleChange(previousValue, currentValue) {
	        this.previousValue = previousValue;
	        this.currentValue = currentValue;
	    }
	    /**
	     * Check whether the new value is the first value assigned.
	     */
	    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === exports.uninitialized; };
	    return SimpleChange;
	}());
	exports.SimpleChange = SimpleChange;
	//# sourceMappingURL=change_detection_util.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(293);
	var RenderComponentType = (function () {
	    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles) {
	        this.id = id;
	        this.templateUrl = templateUrl;
	        this.slotCount = slotCount;
	        this.encapsulation = encapsulation;
	        this.styles = styles;
	    }
	    return RenderComponentType;
	}());
	exports.RenderComponentType = RenderComponentType;
	var RenderDebugInfo = (function () {
	    function RenderDebugInfo() {
	    }
	    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "component", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "references", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "source", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return RenderDebugInfo;
	}());
	exports.RenderDebugInfo = RenderDebugInfo;
	var Renderer = (function () {
	    function Renderer() {
	    }
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	/**
	 * Injectable service that provides a low-level interface for modifying the UI.
	 *
	 * Use this service to bypass Angular's templating and make custom UI changes that can't be
	 * expressed declaratively. For example if you need to set a property or an attribute whose name is
	 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
	 * respectively.
	 *
	 * If you are implementing a custom renderer, you must implement this interface.
	 *
	 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
	 */
	var RootRenderer = (function () {
	    function RootRenderer() {
	    }
	    return RootRenderer;
	}());
	exports.RootRenderer = RootRenderer;
	//# sourceMappingURL=api.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var decorators_1 = __webpack_require__(291);
	// Note: Need to rename warn as in Dart
	// class members and imports can't use the same name.
	var _warnImpl = lang_1.warn;
	var Console = (function () {
	    function Console() {
	    }
	    Console.prototype.log = function (message) { lang_1.print(message); };
	    // Note: for reporting errors use `DOM.logError()` as it is platform specific
	    Console.prototype.warn = function (message) { _warnImpl(message); };
	    Console.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return Console;
	}());
	exports.Console = Console;
	//# sourceMappingURL=console.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for Zone
	var ng_zone_1 = __webpack_require__(309);
	exports.NgZone = ng_zone_1.NgZone;
	exports.NgZoneError = ng_zone_1.NgZoneError;
	//# sourceMappingURL=zone.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for render
	var api_1 = __webpack_require__(333);
	exports.RootRenderer = api_1.RootRenderer;
	exports.Renderer = api_1.Renderer;
	exports.RenderComponentType = api_1.RenderComponentType;
	//# sourceMappingURL=render.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for compiler
	var component_resolver_1 = __webpack_require__(315);
	exports.ComponentResolver = component_resolver_1.ComponentResolver;
	var query_list_1 = __webpack_require__(338);
	exports.QueryList = query_list_1.QueryList;
	var dynamic_component_loader_1 = __webpack_require__(339);
	exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
	var element_ref_1 = __webpack_require__(321);
	exports.ElementRef = element_ref_1.ElementRef;
	var template_ref_1 = __webpack_require__(340);
	exports.TemplateRef = template_ref_1.TemplateRef;
	var view_ref_1 = __webpack_require__(341);
	exports.EmbeddedViewRef = view_ref_1.EmbeddedViewRef;
	exports.ViewRef = view_ref_1.ViewRef;
	var view_container_ref_1 = __webpack_require__(322);
	exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
	var component_factory_1 = __webpack_require__(316);
	exports.ComponentRef = component_factory_1.ComponentRef;
	exports.ComponentFactory = component_factory_1.ComponentFactory;
	var exceptions_1 = __webpack_require__(325);
	exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
	//# sourceMappingURL=linker.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(296);
	var lang_1 = __webpack_require__(282);
	var async_1 = __webpack_require__(310);
	/**
	 * An unmodifiable list of items that Angular keeps up to date when the state
	 * of the application changes.
	 *
	 * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
	 *
	 * Implements an iterable interface, therefore it can be used in both ES6
	 * javascript `for (var i of items)` loops as well as in Angular templates with
	 * `*ngFor="let i of myList"`.
	 *
	 * Changes can be observed by subscribing to the changes `Observable`.
	 *
	 * NOTE: In the future this class will implement an `Observable` interface.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
	 * ```typescript
	 * @Component({...})
	 * class Container {
	 *   constructor(@Query(Item) items: QueryList<Item>) {
	 *     items.changes.subscribe(_ => console.log(items.length));
	 *   }
	 * }
	 * ```
	 */
	var QueryList = (function () {
	    function QueryList() {
	        this._dirty = true;
	        this._results = [];
	        this._emitter = new async_1.EventEmitter();
	    }
	    Object.defineProperty(QueryList.prototype, "changes", {
	        get: function () { return this._emitter; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "length", {
	        get: function () { return this._results.length; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "first", {
	        get: function () { return collection_1.ListWrapper.first(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "last", {
	        get: function () { return collection_1.ListWrapper.last(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * returns a new array with the passed in function applied to each element.
	     */
	    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
	    /**
	     * returns a filtered array.
	     */
	    QueryList.prototype.filter = function (fn) { return this._results.filter(fn); };
	    /**
	     * returns a reduced value.
	     */
	    QueryList.prototype.reduce = function (fn, init) { return this._results.reduce(fn, init); };
	    /**
	     * executes function for each element in a query.
	     */
	    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
	    /**
	     * converts QueryList into an array
	     */
	    QueryList.prototype.toArray = function () { return collection_1.ListWrapper.clone(this._results); };
	    QueryList.prototype[lang_1.getSymbolIterator()] = function () { return this._results[lang_1.getSymbolIterator()](); };
	    QueryList.prototype.toString = function () { return this._results.toString(); };
	    /**
	     * @internal
	     */
	    QueryList.prototype.reset = function (res) {
	        this._results = collection_1.ListWrapper.flatten(res);
	        this._dirty = false;
	    };
	    /** @internal */
	    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
	    /** internal */
	    QueryList.prototype.setDirty = function () { this._dirty = true; };
	    Object.defineProperty(QueryList.prototype, "dirty", {
	        /** internal */
	        get: function () { return this._dirty; },
	        enumerable: true,
	        configurable: true
	    });
	    return QueryList;
	}());
	exports.QueryList = QueryList;
	//# sourceMappingURL=query_list.js.map

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var component_resolver_1 = __webpack_require__(315);
	var lang_1 = __webpack_require__(282);
	var reflective_injector_1 = __webpack_require__(297);
	var decorators_1 = __webpack_require__(291);
	/**
	 * Use ComponentResolver and ViewContainerRef directly.
	 *
	 * @deprecated
	 */
	var DynamicComponentLoader = (function () {
	    function DynamicComponentLoader() {
	    }
	    return DynamicComponentLoader;
	}());
	exports.DynamicComponentLoader = DynamicComponentLoader;
	var DynamicComponentLoader_ = (function (_super) {
	    __extends(DynamicComponentLoader_, _super);
	    function DynamicComponentLoader_(_compiler) {
	        _super.call(this);
	        this._compiler = _compiler;
	    }
	    DynamicComponentLoader_.prototype.loadAsRoot = function (type, overrideSelectorOrNode, injector, onDispose, projectableNodes) {
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var componentRef = componentFactory.create(injector, projectableNodes, lang_1.isPresent(overrideSelectorOrNode) ? overrideSelectorOrNode : componentFactory.selector);
	            if (lang_1.isPresent(onDispose)) {
	                componentRef.onDestroy(onDispose);
	            }
	            return componentRef;
	        });
	    };
	    DynamicComponentLoader_.prototype.loadNextToLocation = function (type, location, providers, projectableNodes) {
	        if (providers === void 0) { providers = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var contextInjector = location.parentInjector;
	            var childInjector = lang_1.isPresent(providers) && providers.length > 0 ?
	                reflective_injector_1.ReflectiveInjector.fromResolvedProviders(providers, contextInjector) :
	                contextInjector;
	            return location.createComponent(componentFactory, location.length, childInjector, projectableNodes);
	        });
	    };
	    DynamicComponentLoader_.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    DynamicComponentLoader_.ctorParameters = [
	        { type: component_resolver_1.ComponentResolver, },
	    ];
	    return DynamicComponentLoader_;
	}(DynamicComponentLoader));
	exports.DynamicComponentLoader_ = DynamicComponentLoader_;
	//# sourceMappingURL=dynamic_component_loader.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var EMPTY_CONTEXT = new Object();
	/**
	 * Represents an Embedded Template that can be used to instantiate Embedded Views.
	 *
	 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
	 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
	 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
	 * `TemplateRef` from a Component or a Directive via {@link Query}.
	 *
	 * To instantiate Embedded Views based on a Template, use
	 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
	 * View Container.
	 */
	var TemplateRef = (function () {
	    function TemplateRef() {
	    }
	    Object.defineProperty(TemplateRef.prototype, "elementRef", {
	        /**
	         * The location in the View where the Embedded View logically belongs to.
	         *
	         * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
	         * inherit from the contexts of this location.
	         *
	         * Typically new Embedded Views are attached to the View Container of this location, but in
	         * advanced use-cases, the View can be attached to a different container while keeping the
	         * data-binding and injection context from the original location.
	         *
	         */
	        // TODO(i): rename to anchor or location
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef;
	}());
	exports.TemplateRef = TemplateRef;
	var TemplateRef_ = (function (_super) {
	    __extends(TemplateRef_, _super);
	    function TemplateRef_(_appElement, _viewFactory) {
	        _super.call(this);
	        this._appElement = _appElement;
	        this._viewFactory = _viewFactory;
	    }
	    TemplateRef_.prototype.createEmbeddedView = function (context) {
	        var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
	        if (lang_1.isBlank(context)) {
	            context = EMPTY_CONTEXT;
	        }
	        view.create(context, null, null);
	        return view.ref;
	    };
	    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	        get: function () { return this._appElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef_;
	}(TemplateRef));
	exports.TemplateRef_ = TemplateRef_;
	//# sourceMappingURL=template_ref.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(293);
	var constants_1 = __webpack_require__(286);
	var ViewRef = (function () {
	    function ViewRef() {
	    }
	    Object.defineProperty(ViewRef.prototype, "destroyed", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ViewRef;
	}());
	exports.ViewRef = ViewRef;
	/**
	 * Represents an Angular View.
	 *
	 * <!-- TODO: move the next two paragraphs to the dev guide -->
	 * A View is a fundamental building block of the application UI. It is the smallest grouping of
	 * Elements which are created and destroyed together.
	 *
	 * Properties of elements in a View can change, but the structure (number and order) of elements in
	 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
	 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
	 * <!-- /TODO -->
	 *
	 * ### Example
	 *
	 * Given this template...
	 *
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <li *ngFor="let  item of items">{{item}}</li>
	 * </ul>
	 * ```
	 *
	 * ... we have two {@link TemplateRef}s:
	 *
	 * Outer {@link TemplateRef}:
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <template ngFor let-item [ngForOf]="items"></template>
	 * </ul>
	 * ```
	 *
	 * Inner {@link TemplateRef}:
	 * ```
	 *   <li>{{item}}</li>
	 * ```
	 *
	 * Notice that the original template is broken down into two separate {@link TemplateRef}s.
	 *
	 * The outer/inner {@link TemplateRef}s are then assembled into views like so:
	 *
	 * ```
	 * <!-- ViewRef: outer-0 -->
	 * Count: 2
	 * <ul>
	 *   <template view-container-ref></template>
	 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
	 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
	 * </ul>
	 * <!-- /ViewRef: outer-0 -->
	 * ```
	 */
	var EmbeddedViewRef = (function (_super) {
	    __extends(EmbeddedViewRef, _super);
	    function EmbeddedViewRef() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return EmbeddedViewRef;
	}(ViewRef));
	exports.EmbeddedViewRef = EmbeddedViewRef;
	var ViewRef_ = (function () {
	    function ViewRef_(_view) {
	        this._view = _view;
	        this._view = _view;
	    }
	    Object.defineProperty(ViewRef_.prototype, "internalView", {
	        get: function () { return this._view; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
	        get: function () { return this._view.flatRootNodes; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "destroyed", {
	        get: function () { return this._view.destroyed; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
	    ViewRef_.prototype.detach = function () { this._view.cdMode = constants_1.ChangeDetectionStrategy.Detached; };
	    ViewRef_.prototype.detectChanges = function () { this._view.detectChanges(false); };
	    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
	    ViewRef_.prototype.reattach = function () {
	        this._view.cdMode = constants_1.ChangeDetectionStrategy.CheckAlways;
	        this.markForCheck();
	    };
	    ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
	    ViewRef_.prototype.destroy = function () { this._view.destroy(); };
	    return ViewRef_;
	}());
	exports.ViewRef_ = ViewRef_;
	//# sourceMappingURL=view_ref.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var EventListener = (function () {
	    function EventListener(name, callback) {
	        this.name = name;
	        this.callback = callback;
	    }
	    ;
	    return EventListener;
	}());
	exports.EventListener = EventListener;
	var DebugNode = (function () {
	    function DebugNode(nativeNode, parent, _debugInfo) {
	        this._debugInfo = _debugInfo;
	        this.nativeNode = nativeNode;
	        if (lang_1.isPresent(parent) && parent instanceof DebugElement) {
	            parent.addChild(this);
	        }
	        else {
	            this.parent = null;
	        }
	        this.listeners = [];
	    }
	    Object.defineProperty(DebugNode.prototype, "injector", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.injector : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "componentInstance", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.component : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "context", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.context : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "references", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.references : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "providerTokens", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "source", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.source : null; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Use injector.get(token) instead.
	     *
	     * @deprecated
	     */
	    DebugNode.prototype.inject = function (token) { return this.injector.get(token); };
	    return DebugNode;
	}());
	exports.DebugNode = DebugNode;
	var DebugElement = (function (_super) {
	    __extends(DebugElement, _super);
	    function DebugElement(nativeNode, parent, _debugInfo) {
	        _super.call(this, nativeNode, parent, _debugInfo);
	        this.properties = {};
	        this.attributes = {};
	        this.childNodes = [];
	        this.nativeElement = nativeNode;
	    }
	    DebugElement.prototype.addChild = function (child) {
	        if (lang_1.isPresent(child)) {
	            this.childNodes.push(child);
	            child.parent = this;
	        }
	    };
	    DebugElement.prototype.removeChild = function (child) {
	        var childIndex = this.childNodes.indexOf(child);
	        if (childIndex !== -1) {
	            child.parent = null;
	            this.childNodes.splice(childIndex, 1);
	        }
	    };
	    DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
	        var siblingIndex = this.childNodes.indexOf(child);
	        if (siblingIndex !== -1) {
	            var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
	            var nextChildren = this.childNodes.slice(siblingIndex + 1);
	            this.childNodes =
	                collection_1.ListWrapper.concat(collection_1.ListWrapper.concat(previousChildren, newChildren), nextChildren);
	            for (var i = 0; i < newChildren.length; ++i) {
	                var newChild = newChildren[i];
	                if (lang_1.isPresent(newChild.parent)) {
	                    newChild.parent.removeChild(newChild);
	                }
	                newChild.parent = this;
	            }
	        }
	    };
	    DebugElement.prototype.query = function (predicate) {
	        var results = this.queryAll(predicate);
	        return results.length > 0 ? results[0] : null;
	    };
	    DebugElement.prototype.queryAll = function (predicate) {
	        var matches = [];
	        _queryElementChildren(this, predicate, matches);
	        return matches;
	    };
	    DebugElement.prototype.queryAllNodes = function (predicate) {
	        var matches = [];
	        _queryNodeChildren(this, predicate, matches);
	        return matches;
	    };
	    Object.defineProperty(DebugElement.prototype, "children", {
	        get: function () {
	            var children = [];
	            this.childNodes.forEach(function (node) {
	                if (node instanceof DebugElement) {
	                    children.push(node);
	                }
	            });
	            return children;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
	        this.listeners.forEach(function (listener) {
	            if (listener.name == eventName) {
	                listener.callback(eventObj);
	            }
	        });
	    };
	    return DebugElement;
	}(DebugNode));
	exports.DebugElement = DebugElement;
	function asNativeElements(debugEls) {
	    return debugEls.map(function (el) { return el.nativeElement; });
	}
	exports.asNativeElements = asNativeElements;
	function _queryElementChildren(element, predicate, matches) {
	    element.childNodes.forEach(function (node) {
	        if (node instanceof DebugElement) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            _queryElementChildren(node, predicate, matches);
	        }
	    });
	}
	function _queryNodeChildren(parentNode, predicate, matches) {
	    if (parentNode instanceof DebugElement) {
	        parentNode.childNodes.forEach(function (node) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            if (node instanceof DebugElement) {
	                _queryNodeChildren(node, predicate, matches);
	            }
	        });
	    }
	}
	// Need to keep the nodes in a global Map so that multiple angular apps are supported.
	var _nativeNodeToDebugNode = new Map();
	function getDebugNode(nativeNode) {
	    return _nativeNodeToDebugNode.get(nativeNode);
	}
	exports.getDebugNode = getDebugNode;
	function getAllDebugNodes() {
	    return collection_1.MapWrapper.values(_nativeNodeToDebugNode);
	}
	exports.getAllDebugNodes = getAllDebugNodes;
	function indexDebugNode(node) {
	    _nativeNodeToDebugNode.set(node.nativeNode, node);
	}
	exports.indexDebugNode = indexDebugNode;
	function removeDebugNodeFromIndex(node) {
	    _nativeNodeToDebugNode.delete(node.nativeNode);
	}
	exports.removeDebugNodeFromIndex = removeDebugNodeFromIndex;
	//# sourceMappingURL=debug_node.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* Change detection enables data binding in Angular.
	*/
	var change_detection_1 = __webpack_require__(326);
	exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
	exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
	exports.WrappedValue = change_detection_1.WrappedValue;
	exports.SimpleChange = change_detection_1.SimpleChange;
	exports.DefaultIterableDiffer = change_detection_1.DefaultIterableDiffer;
	exports.IterableDiffers = change_detection_1.IterableDiffers;
	exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
	exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
	exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(290);
	/**
	 * A token that can be provided when bootstraping an application to make an array of directives
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_DIRECTIVES} from '@angular/core';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     <!-- can use other directive even though the component does not list it in `directives` -->
	 *     <other-directive></other-directive>
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_DIRECTIVES, {useValue: [OtherDirective], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_DIRECTIVES = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Directives");
	/**
	 * A token that can be provided when bootstraping an application to make an array of pipes
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_PIPES} from '@angular/core';
	 * import {OtherPipe} from './myPipe';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     {{123 | other-pipe}}
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_PIPES, {useValue: [OtherPipe], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_PIPES = new di_1.OpaqueToken("Platform Pipes");
	//# sourceMappingURL=platform_directives_and_pipes.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var console_1 = __webpack_require__(334);
	var reflection_1 = __webpack_require__(299);
	var reflector_reader_1 = __webpack_require__(301);
	var testability_1 = __webpack_require__(314);
	var application_ref_1 = __webpack_require__(308);
	function _reflector() {
	    return reflection_1.reflector;
	}
	var __unused; // prevent missing use Dart warning.
	/**
	 * A default set of providers which should be included in any Angular platform.
	 */
	exports.PLATFORM_COMMON_PROVIDERS = [
	    application_ref_1.PLATFORM_CORE_PROVIDERS,
	    /*@ts2dart_Provider*/ { provide: reflection_1.Reflector, useFactory: _reflector, deps: [] },
	    /*@ts2dart_Provider*/ { provide: reflector_reader_1.ReflectorReader, useExisting: reflection_1.Reflector },
	    testability_1.TestabilityRegistry,
	    console_1.Console
	];
	//# sourceMappingURL=platform_common_providers.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var application_tokens_1 = __webpack_require__(313);
	var application_ref_1 = __webpack_require__(308);
	var change_detection_1 = __webpack_require__(326);
	var view_utils_1 = __webpack_require__(317);
	var component_resolver_1 = __webpack_require__(315);
	var dynamic_component_loader_1 = __webpack_require__(339);
	var __unused; // avoid unused import when Type union types are erased
	/**
	 * A default set of providers which should be included in any Angular
	 * application, regardless of the platform it runs onto.
	 */
	exports.APPLICATION_COMMON_PROVIDERS = 
	/*@ts2dart_const*/ [
	    application_ref_1.APPLICATION_CORE_PROVIDERS,
	    /* @ts2dart_Provider */ { provide: component_resolver_1.ComponentResolver, useClass: component_resolver_1.ReflectorComponentResolver },
	    application_tokens_1.APP_ID_RANDOM_PROVIDER,
	    view_utils_1.ViewUtils,
	    /* @ts2dart_Provider */ { provide: change_detection_1.IterableDiffers, useValue: change_detection_1.defaultIterableDiffers },
	    /* @ts2dart_Provider */ { provide: change_detection_1.KeyValueDiffers, useValue: change_detection_1.defaultKeyValueDiffers },
	    /* @ts2dart_Provider */ { provide: dynamic_component_loader_1.DynamicComponentLoader, useClass: dynamic_component_loader_1.DynamicComponentLoader_ }
	];
	//# sourceMappingURL=application_common_providers.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants = __webpack_require__(286);
	var security = __webpack_require__(318);
	var reflective_provider = __webpack_require__(298);
	var lifecycle_hooks = __webpack_require__(348);
	var reflector_reader = __webpack_require__(301);
	var component_resolver = __webpack_require__(315);
	var element = __webpack_require__(319);
	var view = __webpack_require__(349);
	var view_type = __webpack_require__(320);
	var view_utils = __webpack_require__(317);
	var metadata_view = __webpack_require__(287);
	var debug_context = __webpack_require__(350);
	var change_detection_util = __webpack_require__(332);
	var api = __webpack_require__(333);
	var template_ref = __webpack_require__(340);
	var wtf_init = __webpack_require__(352);
	var reflection_capabilities = __webpack_require__(302);
	var decorators = __webpack_require__(288);
	var debug = __webpack_require__(353);
	var provider_util = __webpack_require__(306);
	var console = __webpack_require__(334);
	exports.__core_private__ = {
	    isDefaultChangeDetectionStrategy: constants.isDefaultChangeDetectionStrategy,
	    ChangeDetectorState: constants.ChangeDetectorState,
	    CHANGE_DETECTION_STRATEGY_VALUES: constants.CHANGE_DETECTION_STRATEGY_VALUES,
	    constructDependencies: reflective_provider.constructDependencies,
	    LifecycleHooks: lifecycle_hooks.LifecycleHooks,
	    LIFECYCLE_HOOKS_VALUES: lifecycle_hooks.LIFECYCLE_HOOKS_VALUES,
	    ReflectorReader: reflector_reader.ReflectorReader,
	    ReflectorComponentResolver: component_resolver.ReflectorComponentResolver,
	    AppElement: element.AppElement,
	    AppView: view.AppView,
	    DebugAppView: view.DebugAppView,
	    ViewType: view_type.ViewType,
	    MAX_INTERPOLATION_VALUES: view_utils.MAX_INTERPOLATION_VALUES,
	    checkBinding: view_utils.checkBinding,
	    flattenNestedViewRenderNodes: view_utils.flattenNestedViewRenderNodes,
	    interpolate: view_utils.interpolate,
	    ViewUtils: view_utils.ViewUtils,
	    VIEW_ENCAPSULATION_VALUES: metadata_view.VIEW_ENCAPSULATION_VALUES,
	    DebugContext: debug_context.DebugContext,
	    StaticNodeDebugInfo: debug_context.StaticNodeDebugInfo,
	    devModeEqual: change_detection_util.devModeEqual,
	    uninitialized: change_detection_util.uninitialized,
	    ValueUnwrapper: change_detection_util.ValueUnwrapper,
	    RenderDebugInfo: api.RenderDebugInfo,
	    SecurityContext: security.SecurityContext,
	    SanitizationService: security.SanitizationService,
	    TemplateRef_: template_ref.TemplateRef_,
	    wtfInit: wtf_init.wtfInit,
	    ReflectionCapabilities: reflection_capabilities.ReflectionCapabilities,
	    makeDecorator: decorators.makeDecorator,
	    DebugDomRootRenderer: debug.DebugDomRootRenderer,
	    createProvider: provider_util.createProvider,
	    isProviderLiteral: provider_util.isProviderLiteral,
	    EMPTY_ARRAY: view_utils.EMPTY_ARRAY,
	    EMPTY_MAP: view_utils.EMPTY_MAP,
	    pureProxy1: view_utils.pureProxy1,
	    pureProxy2: view_utils.pureProxy2,
	    pureProxy3: view_utils.pureProxy3,
	    pureProxy4: view_utils.pureProxy4,
	    pureProxy5: view_utils.pureProxy5,
	    pureProxy6: view_utils.pureProxy6,
	    pureProxy7: view_utils.pureProxy7,
	    pureProxy8: view_utils.pureProxy8,
	    pureProxy9: view_utils.pureProxy9,
	    pureProxy10: view_utils.pureProxy10,
	    castByValue: view_utils.castByValue,
	    Console: console.Console,
	};
	//# sourceMappingURL=private_export.js.map

/***/ },
/* 348 */
/***/ function(module, exports) {

	"use strict";
	(function (LifecycleHooks) {
	    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
	var LifecycleHooks = exports.LifecycleHooks;
	/**
	 * @internal
	 */
	exports.LIFECYCLE_HOOKS_VALUES = [
	    LifecycleHooks.OnInit,
	    LifecycleHooks.OnDestroy,
	    LifecycleHooks.DoCheck,
	    LifecycleHooks.OnChanges,
	    LifecycleHooks.AfterContentInit,
	    LifecycleHooks.AfterContentChecked,
	    LifecycleHooks.AfterViewInit,
	    LifecycleHooks.AfterViewChecked
	];
	//# sourceMappingURL=lifecycle_hooks.js.map

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(296);
	var element_1 = __webpack_require__(319);
	var lang_1 = __webpack_require__(282);
	var async_1 = __webpack_require__(310);
	var view_ref_1 = __webpack_require__(341);
	var view_type_1 = __webpack_require__(320);
	var view_utils_1 = __webpack_require__(317);
	var change_detection_1 = __webpack_require__(326);
	var profile_1 = __webpack_require__(323);
	var exceptions_1 = __webpack_require__(325);
	var debug_context_1 = __webpack_require__(350);
	var element_injector_1 = __webpack_require__(351);
	var _scope_check = profile_1.wtfCreateScope("AppView#check(ascii id)");
	/**
	 * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	 *
	 */
	var AppView = (function () {
	    function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
	        this.clazz = clazz;
	        this.componentType = componentType;
	        this.type = type;
	        this.viewUtils = viewUtils;
	        this.parentInjector = parentInjector;
	        this.declarationAppElement = declarationAppElement;
	        this.cdMode = cdMode;
	        this.contentChildren = [];
	        this.viewChildren = [];
	        this.viewContainerElement = null;
	        // The names of the below fields must be kept in sync with codegen_name_util.ts or
	        // change detection will fail.
	        this.cdState = change_detection_1.ChangeDetectorState.NeverChecked;
	        this.destroyed = false;
	        this.ref = new view_ref_1.ViewRef_(this);
	        if (type === view_type_1.ViewType.COMPONENT || type === view_type_1.ViewType.HOST) {
	            this.renderer = viewUtils.renderComponent(componentType);
	        }
	        else {
	            this.renderer = declarationAppElement.parentView.renderer;
	        }
	    }
	    AppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this.context = context;
	        var projectableNodes;
	        switch (this.type) {
	            case view_type_1.ViewType.COMPONENT:
	                projectableNodes = view_utils_1.ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
	                break;
	            case view_type_1.ViewType.EMBEDDED:
	                projectableNodes = this.declarationAppElement.parentView.projectableNodes;
	                break;
	            case view_type_1.ViewType.HOST:
	                // Note: Don't ensure the slot count for the projectableNodes as we store
	                // them only for the contained component view (which will later check the slot count...)
	                projectableNodes = givenProjectableNodes;
	                break;
	        }
	        this._hasExternalHostElement = lang_1.isPresent(rootSelectorOrNode);
	        this.projectableNodes = projectableNodes;
	        return this.createInternal(rootSelectorOrNode);
	    };
	    /**
	     * Overwritten by implementations.
	     * Returns the AppElement for the host element for ViewType.HOST.
	     */
	    AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	    AppView.prototype.init = function (rootNodesOrAppElements, allNodes, disposables, subscriptions) {
	        this.rootNodesOrAppElements = rootNodesOrAppElements;
	        this.allNodes = allNodes;
	        this.disposables = disposables;
	        this.subscriptions = subscriptions;
	        if (this.type === view_type_1.ViewType.COMPONENT) {
	            // Note: the render nodes have been attached to their host element
	            // in the ViewFactory already.
	            this.declarationAppElement.parentView.viewChildren.push(this);
	            this.dirtyParentQueriesInternal();
	        }
	    };
	    AppView.prototype.selectOrCreateHostElement = function (elementName, rootSelectorOrNode, debugInfo) {
	        var hostElement;
	        if (lang_1.isPresent(rootSelectorOrNode)) {
	            hostElement = this.renderer.selectRootElement(rootSelectorOrNode, debugInfo);
	        }
	        else {
	            hostElement = this.renderer.createElement(null, elementName, debugInfo);
	        }
	        return hostElement;
	    };
	    AppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        return this.injectorGetInternal(token, nodeIndex, notFoundResult);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	        return notFoundResult;
	    };
	    AppView.prototype.injector = function (nodeIndex) {
	        if (lang_1.isPresent(nodeIndex)) {
	            return new element_injector_1.ElementInjector(this, nodeIndex);
	        }
	        else {
	            return this.parentInjector;
	        }
	    };
	    AppView.prototype.destroy = function () {
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        this._destroyRecurse();
	    };
	    AppView.prototype._destroyRecurse = function () {
	        if (this.destroyed) {
	            return;
	        }
	        var children = this.contentChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        children = this.viewChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        this.destroyLocal();
	        this.destroyed = true;
	    };
	    AppView.prototype.destroyLocal = function () {
	        var hostElement = this.type === view_type_1.ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
	        for (var i = 0; i < this.disposables.length; i++) {
	            this.disposables[i]();
	        }
	        for (var i = 0; i < this.subscriptions.length; i++) {
	            async_1.ObservableWrapper.dispose(this.subscriptions[i]);
	        }
	        this.destroyInternal();
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        else {
	            this.dirtyParentQueriesInternal();
	        }
	        this.renderer.destroyView(hostElement, this.allNodes);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.destroyInternal = function () { };
	    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	        get: function () { return this.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "parent", {
	        get: function () {
	            return lang_1.isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "flatRootNodes", {
	        get: function () { return view_utils_1.flattenNestedViewRenderNodes(this.rootNodesOrAppElements); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "lastRootNode", {
	        get: function () {
	            var lastNode = this.rootNodesOrAppElements.length > 0 ?
	                this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] :
	                null;
	            return _findLastRenderNode(lastNode);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.dirtyParentQueriesInternal = function () { };
	    AppView.prototype.detectChanges = function (throwOnChange) {
	        var s = _scope_check(this.clazz);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.Detached ||
	            this.cdMode === change_detection_1.ChangeDetectionStrategy.Checked ||
	            this.cdState === change_detection_1.ChangeDetectorState.Errored)
	            return;
	        if (this.destroyed) {
	            this.throwDestroyedError('detectChanges');
	        }
	        this.detectChangesInternal(throwOnChange);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.CheckOnce)
	            this.cdMode = change_detection_1.ChangeDetectionStrategy.Checked;
	        this.cdState = change_detection_1.ChangeDetectorState.CheckedBefore;
	        profile_1.wtfLeave(s);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.detectChangesInternal = function (throwOnChange) {
	        this.detectContentChildrenChanges(throwOnChange);
	        this.detectViewChildrenChanges(throwOnChange);
	    };
	    AppView.prototype.detectContentChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.contentChildren.length; ++i) {
	            this.contentChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.detectViewChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.viewChildren.length; ++i) {
	            this.viewChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.addToContentChildren = function (renderAppElement) {
	        renderAppElement.parentView.contentChildren.push(this);
	        this.viewContainerElement = renderAppElement;
	        this.dirtyParentQueriesInternal();
	    };
	    AppView.prototype.removeFromContentChildren = function (renderAppElement) {
	        collection_1.ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
	        this.dirtyParentQueriesInternal();
	        this.viewContainerElement = null;
	    };
	    AppView.prototype.markAsCheckOnce = function () { this.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce; };
	    AppView.prototype.markPathToRootAsCheckOnce = function () {
	        var c = this;
	        while (lang_1.isPresent(c) && c.cdMode !== change_detection_1.ChangeDetectionStrategy.Detached) {
	            if (c.cdMode === change_detection_1.ChangeDetectionStrategy.Checked) {
	                c.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce;
	            }
	            var parentEl = c.type === view_type_1.ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
	            c = lang_1.isPresent(parentEl) ? parentEl.parentView : null;
	        }
	    };
	    AppView.prototype.eventHandler = function (cb) { return cb; };
	    AppView.prototype.throwDestroyedError = function (details) { throw new exceptions_1.ViewDestroyedException(details); };
	    return AppView;
	}());
	exports.AppView = AppView;
	var DebugAppView = (function (_super) {
	    __extends(DebugAppView, _super);
	    function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
	        _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
	        this.staticNodeDebugInfos = staticNodeDebugInfos;
	        this._currentDebugContext = null;
	    }
	    DebugAppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this._resetDebug();
	        try {
	            return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        this._resetDebug();
	        try {
	            return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.destroyLocal = function () {
	        this._resetDebug();
	        try {
	            _super.prototype.destroyLocal.call(this);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.detectChanges = function (throwOnChange) {
	        this._resetDebug();
	        try {
	            _super.prototype.detectChanges.call(this, throwOnChange);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
	    DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
	        return this._currentDebugContext = new debug_context_1.DebugContext(this, nodeIndex, rowNum, colNum);
	    };
	    DebugAppView.prototype._rethrowWithContext = function (e, stack) {
	        if (!(e instanceof exceptions_1.ViewWrappedException)) {
	            if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
	                this.cdState = change_detection_1.ChangeDetectorState.Errored;
	            }
	            if (lang_1.isPresent(this._currentDebugContext)) {
	                throw new exceptions_1.ViewWrappedException(e, stack, this._currentDebugContext);
	            }
	        }
	    };
	    DebugAppView.prototype.eventHandler = function (cb) {
	        var _this = this;
	        var superHandler = _super.prototype.eventHandler.call(this, cb);
	        return function (event) {
	            _this._resetDebug();
	            try {
	                return superHandler(event);
	            }
	            catch (e) {
	                _this._rethrowWithContext(e, e.stack);
	                throw e;
	            }
	        };
	    };
	    return DebugAppView;
	}(AppView));
	exports.DebugAppView = DebugAppView;
	function _findLastRenderNode(node) {
	    var lastNode;
	    if (node instanceof element_1.AppElement) {
	        var appEl = node;
	        lastNode = appEl.nativeElement;
	        if (lang_1.isPresent(appEl.nestedViews)) {
	            // Note: Views might have no root nodes at all!
	            for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
	                var nestedView = appEl.nestedViews[i];
	                if (nestedView.rootNodesOrAppElements.length > 0) {
	                    lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
	                }
	            }
	        }
	    }
	    else {
	        lastNode = node;
	    }
	    return lastNode;
	}
	//# sourceMappingURL=view.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var collection_1 = __webpack_require__(296);
	var view_type_1 = __webpack_require__(320);
	/* @ts2dart_const */
	var StaticNodeDebugInfo = (function () {
	    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
	        this.providerTokens = providerTokens;
	        this.componentToken = componentToken;
	        this.refTokens = refTokens;
	    }
	    return StaticNodeDebugInfo;
	}());
	exports.StaticNodeDebugInfo = StaticNodeDebugInfo;
	var DebugContext = (function () {
	    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	        this._tplRow = _tplRow;
	        this._tplCol = _tplCol;
	    }
	    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
	        get: function () {
	            return lang_1.isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "component", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo) && lang_1.isPresent(staticNodeInfo.componentToken)) {
	                return this.injector.get(staticNodeInfo.componentToken);
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
	        get: function () {
	            var componentView = this._view;
	            while (lang_1.isPresent(componentView.declarationAppElement) &&
	                componentView.type !== view_type_1.ViewType.COMPONENT) {
	                componentView = componentView.declarationAppElement.parentView;
	            }
	            return lang_1.isPresent(componentView.declarationAppElement) ?
	                componentView.declarationAppElement.nativeElement :
	                null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "injector", {
	        get: function () { return this._view.injector(this._nodeIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "renderNode", {
	        get: function () {
	            if (lang_1.isPresent(this._nodeIndex) && lang_1.isPresent(this._view.allNodes)) {
	                return this._view.allNodes[this._nodeIndex];
	            }
	            else {
	                return null;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "providerTokens", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            return lang_1.isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "source", {
	        get: function () {
	            return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "references", {
	        get: function () {
	            var _this = this;
	            var varValues = {};
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo)) {
	                var refs = staticNodeInfo.refTokens;
	                collection_1.StringMapWrapper.forEach(refs, function (refToken, refName) {
	                    var varValue;
	                    if (lang_1.isBlank(refToken)) {
	                        varValue = lang_1.isPresent(_this._view.allNodes) ? _this._view.allNodes[_this._nodeIndex] : null;
	                    }
	                    else {
	                        varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
	                    }
	                    varValues[refName] = varValue;
	                });
	            }
	            return varValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DebugContext;
	}());
	exports.DebugContext = DebugContext;
	//# sourceMappingURL=debug_context.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var injector_1 = __webpack_require__(292);
	var _UNDEFINED = new Object();
	var ElementInjector = (function (_super) {
	    __extends(ElementInjector, _super);
	    function ElementInjector(_view, _nodeIndex) {
	        _super.call(this);
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	    }
	    ElementInjector.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        var result = _UNDEFINED;
	        if (result === _UNDEFINED) {
	            result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
	        }
	        if (result === _UNDEFINED) {
	            result = this._view.parentInjector.get(token, notFoundValue);
	        }
	        return result;
	    };
	    return ElementInjector;
	}(injector_1.Injector));
	exports.ElementInjector = ElementInjector;
	//# sourceMappingURL=element_injector.js.map

/***/ },
/* 352 */
/***/ function(module, exports) {

	"use strict";
	/**
	* This is here because DART requires it. It is noop in JS.
	*/
	function wtfInit() { }
	exports.wtfInit = wtfInit;
	//# sourceMappingURL=wtf_init.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(282);
	var debug_node_1 = __webpack_require__(342);
	var DebugDomRootRenderer = (function () {
	    function DebugDomRootRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	        return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
	    };
	    return DebugDomRootRenderer;
	}());
	exports.DebugDomRootRenderer = DebugDomRootRenderer;
	var DebugDomRenderer = (function () {
	    function DebugDomRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	        var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, null, debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
	        var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debugEl.name = name;
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	        var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(comment, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return comment;
	    };
	    DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	        var text = this._delegate.createText(parentElement, value, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(text, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return text;
	    };
	    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        var debugParent = debug_node_1.getDebugNode(parentElement);
	        if (lang_1.isPresent(debugParent) && debugParent instanceof debug_node_1.DebugElement) {
	            var debugElement_1 = debugParent;
	            nodes.forEach(function (node) { debugElement_1.addChild(debug_node_1.getDebugNode(node)); });
	        }
	        this._delegate.projectNodes(parentElement, nodes);
	    };
	    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        var debugNode = debug_node_1.getDebugNode(node);
	        if (lang_1.isPresent(debugNode)) {
	            var debugParent = debugNode.parent;
	            if (viewRootNodes.length > 0 && lang_1.isPresent(debugParent)) {
	                var debugViewRootNodes = [];
	                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(debug_node_1.getDebugNode(rootNode)); });
	                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	            }
	        }
	        this._delegate.attachViewAfter(node, viewRootNodes);
	    };
	    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	        viewRootNodes.forEach(function (node) {
	            var debugNode = debug_node_1.getDebugNode(node);
	            if (lang_1.isPresent(debugNode) && lang_1.isPresent(debugNode.parent)) {
	                debugNode.parent.removeChild(debugNode);
	            }
	        });
	        this._delegate.detachView(viewRootNodes);
	    };
	    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        viewAllNodes.forEach(function (node) { debug_node_1.removeDebugNodeFromIndex(debug_node_1.getDebugNode(node)); });
	        this._delegate.destroyView(hostElement, viewAllNodes);
	    };
	    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl)) {
	            debugEl.listeners.push(new debug_node_1.EventListener(name, callback));
	        }
	        return this._delegate.listen(renderElement, name, callback);
	    };
	    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._delegate.listenGlobal(target, name, callback);
	    };
	    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.properties[propertyName] = propertyValue;
	        }
	        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.attributes[attributeName] = attributeValue;
	        }
	        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	    };
	    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        this._delegate.setElementClass(renderElement, className, isAdd);
	    };
	    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        this._delegate.setElementStyle(renderElement, styleName, styleValue);
	    };
	    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        this._delegate.invokeElementMethod(renderElement, methodName, args);
	    };
	    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	    return DebugDomRenderer;
	}());
	exports.DebugDomRenderer = DebugDomRenderer;
	//# sourceMappingURL=debug_renderer.js.map

/***/ }
]);
//# sourceMappingURL=angular2.js.map