describe("Array",function(){function t(e){var t={};return Array.prototype.forEach.call(e,function(e,n){t[n]=e}),t.length=e.length,t}var e;beforeEach(function(){e=[2,3,undefined,!0,"hej",null,!1,0],delete e[1]}),describe("forEach",function(){var n,r;beforeEach(function(){n={0:2,2:undefined,3:!0,4:"hej",5:null,6:!1,7:0},r={}}),it("should pass the right parameters",function(){var e=jasmine.createSpy("callback"),t=["1"];t.forEach(e),expect(e).toHaveBeenCalledWith("1",0,t)}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.forEach(function(n){t++,e.push(n+3)}),expect(e).toEqual([1,2,3,4,5,6]),expect(t).toBe(3)}),it("should set the right context when given none",function(){var e;[1].forEach(function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should iterate all",function(){e.forEach(function(e,t){r[t]=e}),expect(r).toExactlyMatch(n)}),it("should iterate all using a context",function(){var t={a:r};e.forEach(function(e,t){this.a[t]=e},t),expect(r).toExactlyMatch(n)}),it("should iterate all in an array-like object",function(){var i=t(e);Array.prototype.forEach.call(i,function(e,t){r[t]=e}),expect(r).toExactlyMatch(n)}),it("should iterate all in an array-like object using a context",function(){var i=t(e),s={a:r};Array.prototype.forEach.call(i,function(e,t){this.a[t]=e},s),expect(r).toExactlyMatch(n)}),describe("strings",function(){var e="Hello, World!",t=Object.prototype.toString;it("should iterate all in a string",function(){r=[],Array.prototype.forEach.call(e,function(e,t){r[t]=e}),expect(r).toExactlyMatch(e.split(""))}),it("should iterate all in a string using a context",function(){r=[];var t={a:r};Array.prototype.forEach.call(e,function(e,t){this.a[t]=e},t),expect(r).toExactlyMatch(e.split(""))}),it("should have String object for third argument of callback",function(){Array.prototype.forEach.call(e,function(e,t,n){r=n}),expect(typeof r).toBe("object"),expect(t.call(r)).toBe("[object String]")})})}),describe("some",function(){var n,r,i;beforeEach(function(){r={0:2,2:undefined,3:!0},n={},i=0}),it("should pass the correct values along to the callback",function(){var e=jasmine.createSpy("callback"),t=["1"];t.some(e),expect(e).toHaveBeenCalledWith("1",0,t)}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.some(function(n){return t++,e.push(n+3),t>3}),expect(e).toEqual([1,2,3,4,5,6]),expect(t).toBe(3)}),it("should set the right context when given none",function(){var e;[1].some(function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should return false if it runs to the end",function(){n=e.some(function(){}),expect(n).toBeFalsy()}),it("should return true if it is stopped somewhere",function(){n=e.some(function(){return!0}),expect(n).toBeTruthy()}),it("should return false if there are no elements",function(){n=[].some(function(){return!0}),expect(n).toBeFalsy()}),it("should stop after 3 elements",function(){e.some(function(e,t){return n[t]=e,i+=1,i==3?!0:!1}),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements using a context",function(){var t={a:n};e.some(function(e,t){return this.a[t]=e,i+=1,i==3?!0:!1},t),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements in an array-like object",function(){var s=t(e);Array.prototype.some.call(s,function(e,t){return n[t]=e,i+=1,i==3?!0:!1}),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements in an array-like object using a context",function(){var s=t(e),o={a:n};Array.prototype.some.call(s,function(e,t){return this.a[t]=e,i+=1,i==3?!0:!1},o),expect(n).toExactlyMatch(r)})}),describe("every",function(){var n,r,i;beforeEach(function(){r={0:2,2:undefined,3:!0},n={},i=0}),it("should pass the correct values along to the callback",function(){var e=jasmine.createSpy("callback"),t=["1"];t.every(e),expect(e).toHaveBeenCalledWith("1",0,t)}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.every(function(n){return t++,e.push(n+3),t<=3}),expect(e).toEqual([1,2,3,4,5,6]),expect(t).toBe(3)}),it("should set the right context when given none",function(){var e;[1].every(function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should return true if the array is empty",function(){n=[].every(function(){return!0}),expect(n).toBeTruthy(),n=[].every(function(){return!1}),expect(n).toBeTruthy()}),it("should return true if it runs to the end",function(){n=[1,2,3].every(function(){return!0}),expect(n).toBeTruthy()}),it("should return false if it is stopped before the end",function(){n=[1,2,3].every(function(){return!1}),expect(n).toBeFalsy()}),it("should return after 3 elements",function(){e.every(function(e,t){return n[t]=e,i+=1,i==3?!1:!0}),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements using a context",function(){var t={a:n};e.every(function(e,t){return this.a[t]=e,i+=1,i==3?!1:!0},t),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements in an array-like object",function(){var s=t(e);Array.prototype.every.call(s,function(e,t){return n[t]=e,i+=1,i==3?!1:!0}),expect(n).toExactlyMatch(r)}),it("should stop after 3 elements in an array-like object using a context",function(){var s=t(e),o={a:n};Array.prototype.every.call(s,function(e,t){return this.a[t]=e,i+=1,i==3?!1:!0},o),expect(n).toExactlyMatch(r)})}),describe("indexOf",function(){var e,t,n;beforeEach(function(){n=[2,3,undefined,!0,"hej",null,2,!1,0],delete n[1]}),it("should find the element",function(){t=4,e=n.indexOf("hej"),expect(e).toEqual(t)}),it("should not find the element",function(){t=-1,e=n.indexOf("mus"),expect(e).toEqual(t)}),it("should find undefined as well",function(){t=-1,e=n.indexOf(undefined),expect(e).not.toEqual(t)}),it("should skip unset indexes",function(){t=2,e=n.indexOf(undefined),expect(e).toEqual(t)}),it("should use a strict test",function(){e=n.indexOf(null),expect(e).toEqual(5),e=n.indexOf("2"),expect(e).toEqual(-1)}),it("should skip the first if fromIndex is set",function(){expect(n.indexOf(2,2)).toEqual(6),expect(n.indexOf(2,0)).toEqual(0),expect(n.indexOf(2,6)).toEqual(6)}),it("should work with negative fromIndex",function(){expect(n.indexOf(2,-3)).toEqual(6),expect(n.indexOf(2,-9)).toEqual(0)}),it("should work with fromIndex being greater than the length",function(){expect(n.indexOf(0,20)).toEqual(-1)}),it("should work with fromIndex being negative and greater than the length",function(){expect(n.indexOf("hej",-20)).toEqual(4)}),describe("Array-like",function(){var i=Array.prototype.indexOf,s;beforeEach(function(){s={},n=[2,3,undefined,!0,"hej",null,2,!1,0],n.forEach(function(e,t){s[t]=e}),s.length=n.length}),it("should find the element (array-like)",function(){t=4,e=i.call(s,"hej"),expect(e).toEqual(t)}),it("should not find the element (array-like)",function(){t=-1,e=i.call(s,"mus"),expect(e).toEqual(t)}),it("should find undefined as well (array-like)",function(){t=-1,e=i.call(s,undefined),expect(e).not.toEqual(t)}),it("should skip unset indexes (array-like)",function(){t=2,e=i.call(s,undefined),expect(e).toEqual(t)}),it("should use a strict test (array-like)",function(){e=Array.prototype.indexOf.call(s,null),expect(e).toEqual(5),e=Array.prototype.indexOf.call(s,"2"),expect(e).toEqual(-1)}),it("should skip the first if fromIndex is set (array-like)",function(){expect(i.call(s,2,2)).toEqual(6),expect(i.call(s,2,0)).toEqual(0),expect(i.call(s,2,6)).toEqual(6)}),it("should work with negative fromIndex (array-like)",function(){expect(i.call(s,2,-3)).toEqual(6),expect(i.call(s,2,-9)).toEqual(0)}),it("should work with fromIndex being greater than the length (array-like)",function(){expect(i.call(s,0,20)).toEqual(-1)}),it("should work with fromIndex being negative and greater than the length (array-like)",function(){expect(i.call(s,"hej",-20)).toEqual(4)})})}),describe("lastIndexOf",function(){var e,t,n,r;beforeEach(function(){n=[2,3,undefined,!0,"hej",null,2,3,!1,0],delete n[1],delete n[7]}),describe("Array",function(){it("should find the element",function(){t=4,e=n.lastIndexOf("hej"),expect(e).toEqual(t)}),it("should not find the element",function(){t=-1,e=n.lastIndexOf("mus"),expect(e).toEqual(t)}),it("should find undefined as well",function(){t=-1,e=n.lastIndexOf(undefined),expect(e).not.toEqual(t)}),it("should skip unset indexes",function(){t=2,e=n.lastIndexOf(undefined),expect(e).toEqual(t)}),it("should use a strict test",function(){e=n.lastIndexOf(null),expect(e).toEqual(5),e=n.lastIndexOf("2"),expect(e).toEqual(-1)}),it("should skip the first if fromIndex is set",function(){expect(n.lastIndexOf(2,2)).toEqual(0),expect(n.lastIndexOf(2,0)).toEqual(0),expect(n.lastIndexOf(2,6)).toEqual(6)}),it("should work with negative fromIndex",function(){expect(n.lastIndexOf(2,-3)).toEqual(6),expect(n.lastIndexOf(2,-9)).toEqual(0)}),it("should work with fromIndex being greater than the length",function(){expect(n.lastIndexOf(2,20)).toEqual(6)}),it("should work with fromIndex being negative and greater than the length",function(){expect(n.lastIndexOf(2,-20)).toEqual(-1)})}),describe("Array like",function(){var r=Array.prototype.lastIndexOf,i;beforeEach(function(){i={},n.forEach(function(e,t){i[t]=e}),i.length=n.length}),it("should find the element (array-like)",function(){t=4,e=r.call(i,"hej"),expect(e).toEqual(t)}),it("should not find the element (array-like)",function(){t=-1,e=r.call(i,"mus"),expect(e).toEqual(t)}),it("should find undefined as well (array-like)",function(){t=-1,e=r.call(i,undefined),expect(e).not.toEqual(t)}),it("should skip unset indexes (array-like)",function(){t=2,e=r.call(i,undefined),expect(e).toEqual(t)}),it("should use a strict test (array-like)",function(){e=r.call(i,null),expect(e).toEqual(5),e=r.call(i,"2"),expect(e).toEqual(-1)}),it("should skip the first if fromIndex is set",function(){expect(r.call(i,2,2)).toEqual(0),expect(r.call(i,2,0)).toEqual(0),expect(r.call(i,2,6)).toEqual(6)}),it("should work with negative fromIndex",function(){expect(r.call(i,2,-3)).toEqual(6),expect(r.call(i,2,-9)).toEqual(0)}),it("should work with fromIndex being greater than the length",function(){expect(r.call(i,2,20)).toEqual(6)}),it("should work with fromIndex being negative and greater than the length",function(){expect(r.call(i,2,-20)).toEqual(-1)})})}),describe("filter",function(){var n,r=function(t,n,r){return n!=3&&n!=5};beforeEach(function(){e=[2,3,undefined,!0,"hej",3,null,!1,0],delete e[1],n=[2,undefined,"hej",null,!1,0]}),describe("Array object",function(){it("should call the callback with the proper arguments",function(){var e=jasmine.createSpy("callback"),t=["1"];t.filter(e),expect(e).toHaveBeenCalledWith("1",0,t)}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.filter(function(n){return t++,t<=4&&e.push(n+3),!0}),expect(e).toEqual([1,2,3,4,5,6]),expect(t).toBe(3)}),it("should skip non-set values",function(){var t={};e=[1,2,3,4],delete e[1],e.filter(function(e,n){return t[n]=e,!0}),expect(t).toExactlyMatch(e)}),it("should pass the right context to the filter",function(){var t={};e=[1,2,3,4],delete e[1],e.filter(function(e,t){return this[t]=e,!0},t),expect(t).toExactlyMatch(e)}),it("should set the right context when given none",function(){var e;[1].filter(function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should remove only the values for which the callback returns false",function(){var t=e.filter(r);expect(t).toExactlyMatch(n)}),it("should leave the original array untouched",function(){var t=e.slice();e.filter(r),expect(e).toExactlyMatch(t)}),it("should not be affected by same-index mutation",function(){var e=[1,2,3].filter(function(e,t,n){return n[t]="a",!0});expect(e).toEqual([1,2,3])})}),describe("Array like",function(){beforeEach(function(){e=t(e)}),it("should call the callback with the proper arguments",function(){var e=jasmine.createSpy("callback"),n=t(["1"]);Array.prototype.filter.call(n,e),expect(e).toHaveBeenCalledWith("1",0,n)}),it("should not affect elements added to the array after it has begun",function(){var e=t([1,2,3]),n=0;Array.prototype.filter.call(e,function(t){return n++,n<=4&&(e[n+2]=t+3),!0}),delete e.length,expect(e).toExactlyMatch([1,2,3,4,5,6]),expect(n).toBe(3)}),it("should skip non-set values",function(){var n={};e=t([1,2,3,4]),delete e[1],Array.prototype.filter.call(e,function(e,t){return n[t]=e,!0}),delete e.length,expect(n).toExactlyMatch(e)}),it("should set the right context when given none",function(){var e;Array.prototype.filter.call(t([1]),function(){e=this},undefined),expect(e).toBe(function(){return this}.call())}),it("should pass the right context to the filter",function(){var n={};e=t([1,2,3,4]),delete e[1],Array.prototype.filter.call(e,function(e,t){return this[t]=e,!0},n),delete e.length,expect(n).toExactlyMatch(e)}),it("should remove only the values for which the callback returns false",function(){var t=Array.prototype.filter.call(e,r);expect(t).toExactlyMatch(n)}),it("should leave the original array untouched",function(){var n=t(e);Array.prototype.filter.call(e,r),expect(e).toExactlyMatch(n)})})}),describe("map",function(){var n;beforeEach(function(){var e=0;n=function(){return e++}}),describe("Array object",function(){it("should call callback with the right parameters",function(){var e=jasmine.createSpy("callback"),t=[1];t.map(e),expect(e).toHaveBeenCalledWith(1,0,t)}),it("should set the context correctly",function(){var t={};e.map(function(e,t){this[t]=e},t),expect(t).toExactlyMatch(e)}),it("should set the right context when given none",function(){var e;[1].map(function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should not change the array it is called on",function(){var t=e.slice();e.map(n),expect(e).toExactlyMatch(t)}),it("should only run for the number of objects in the array when it started",function(){var e=[1,2,3],t=0;e.map(function(n){return e.push(n+3),t++,n}),expect(e).toExactlyMatch([1,2,3,4,5,6]),expect(t).toBe(3)}),it("should properly translate the values as according to the callback",function(){var t=e.map(n),r=[0,0,1,2,3,4,5,6];delete r[1],expect(t).toExactlyMatch(r)}),it("should skip non-existing values",function(){var e=[1,2,3,4],t=0;delete e[2],e.map(function(){t++}),expect(t).toBe(3)})}),describe("Array-like",function(){beforeEach(function(){e=t(e)}),it("should call callback with the right parameters",function(){var e=jasmine.createSpy("callback"),n=t([1]);Array.prototype.map.call(n,e),expect(e).toHaveBeenCalledWith(1,0,n)}),it("should set the context correctly",function(){var t={};Array.prototype.map.call(e,function(e,t){this[t]=e},t),delete e.length,expect(t).toExactlyMatch(e)}),it("should set the right context when given none",function(){var e;Array.prototype.map.call(t([1]),function(){e=this}),expect(e).toBe(function(){return this}.call())}),it("should not change the array it is called on",function(){var r=t(e);Array.prototype.map.call(e,n),expect(e).toExactlyMatch(r)}),it("should only run for the number of objects in the array when it started",function(){var e=t([1,2,3]),n=0;Array.prototype.map.call(e,function(t){return Array.prototype.push.call(e,t+3),n++,t}),delete e.length,expect(e).toExactlyMatch([1,2,3,4,5,6]),expect(n).toBe(3)}),it("should properly translate the values as according to the callback",function(){var t=Array.prototype.map.call(e,n),r=[0,0,1,2,3,4,5,6];delete r[1],expect(t).toExactlyMatch(r)}),it("should skip non-existing values",function(){var e=t([1,2,3,4]),n=0;delete e[2],Array.prototype.map.call(e,function(){n++}),expect(n).toBe(3)})})}),describe("reduce",function(){beforeEach(function(){e=[1,2,3]}),describe("Array",function(){it("should pass the correct arguments to the callback",function(){var t=jasmine.createSpy().andReturn(0);e.reduce(t),expect(t.calls[0].args).toExactlyMatch([1,2,1,e])}),it("should start with the right initialValue",function(){var t=jasmine.createSpy().andReturn(0);e.reduce(t,0),expect(t.calls[0].args).toExactlyMatch([0,1,0,e])}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.reduce(function(n,r){return t++,t<=4&&e.push(n+3),r}),expect(e).toEqual([1,2,3,4,5]),expect(t).toBe(2)}),it("should work as expected for empty arrays",function(){var e=jasmine.createSpy();expect(function(){[].reduce(e)}).toThrow(),expect(e).not.toHaveBeenCalled()}),it("should throw correctly if no callback is given",function(){expect(function(){e.reduce()}).toThrow()}),it("should return the expected result",function(){expect(e.reduce(function(e,t){return(e||"").toString()+(t||"").toString()})).toEqual(e.join(""))}),it("should not directly affect the passed array",function(){var t=e.slice();e.reduce(function(e,t){return e+t}),expect(e).toEqual(t)}),it("should skip non-set values",function(){delete e[1];var t={};e.reduce(function(e,n){return e&&(t[e]=!0),n&&(t[n]=!0),0}),expect(t).toEqual({1:!0,3:!0})}),it("should have the right length",function(){expect(e.reduce.length).toBe(1)})}),describe("Array-like objects",function(){beforeEach(function(){e=t(e),e.reduce=Array.prototype.reduce}),it("should pass the correct arguments to the callback",function(){var t=jasmine.createSpy().andReturn(0);e.reduce(t),expect(t.calls[0].args).toExactlyMatch([1,2,1,e])}),it("should start with the right initialValue",function(){var t=jasmine.createSpy().andReturn(0);e.reduce(t,0),expect(t.calls[0].args).toExactlyMatch([0,1,0,e])}),it("should not affect elements added to the array after it has begun",function(){var e=t([1,2,3]),n=0;Array.prototype.reduce.call(e,function(t,r){return n++,n<=4&&(e[n+2]=t+3),r}),expect(e).toEqual({0:1,1:2,2:3,3:4,4:5,length:3}),expect(n).toBe(2)}),it("should work as expected for empty arrays",function(){var e=jasmine.createSpy();expect(function(){Array.prototype.reduce.call({length:0},e)}).toThrow(),expect(e).not.toHaveBeenCalled()}),it("should throw correctly if no callback is given",function(){expect(function(){e.reduce()}).toThrow()}),it("should return the expected result",function(){expect(e.reduce(function(e,t){return(e||"").toString()+(t||"").toString()})).toEqual("123")}),it("should not directly affect the passed array",function(){var n=t(e);e.reduce(function(e,t){return e+t}),delete e.reduce,expect(e).toEqual(n)}),it("should skip non-set values",function(){delete e[1];var t={};e.reduce(function(e,n){return e&&(t[e]=!0),n&&(t[n]=!0),0}),expect(t).toEqual({1:!0,3:!0})}),it("should have the right length",function(){expect(e.reduce.length).toBe(1)})})}),describe("reduceRight",function(){beforeEach(function(){e=[1,2,3]}),describe("Array",function(){it("should pass the correct arguments to the callback",function(){var t=jasmine.createSpy().andReturn(0);e.reduceRight(t),expect(t.calls[0].args).toExactlyMatch([3,2,1,e])}),it("should start with the right initialValue",function(){var t=jasmine.createSpy().andReturn(0);e.reduceRight(t,0),expect(t.calls[0].args).toExactlyMatch([0,3,2,e])}),it("should not affect elements added to the array after it has begun",function(){var e=[1,2,3],t=0;e.reduceRight(function(n,r){return t++,t<=4&&e.push(n+3),r}),expect(e).toEqual([1,2,3,6,5]),expect(t).toBe(2)}),it("should work as expected for empty arrays",function(){var e=jasmine.createSpy();expect(function(){[].reduceRight(e)}).toThrow(),expect(e).not.toHaveBeenCalled()}),it("should throw correctly if no callback is given",function(){expect(function(){e.reduceRight()}).toThrow()}),it("should return the expected result",function(){expect(e.reduceRight(function(e,t){return(e||"").toString()+(t||"").toString()})).toEqual("321")}),it("should not directly affect the passed array",function(){var t=e.slice();e.reduceRight(function(e,t){return e+t}),expect(e).toEqual(t)}),it("should skip non-set values",function(){delete e[1];var t={};e.reduceRight(function(e,n){return e&&(t[e]=!0),n&&(t[n]=!0),0}),expect(t).toEqual({1:!0,3:!0})}),it("should have the right length",function(){expect(e.reduceRight.length).toBe(1)})}),describe("Array-like objects",function(){beforeEach(function(){e=t(e),e.reduceRight=Array.prototype.reduceRight}),it("should pass the correct arguments to the callback",function(){var t=jasmine.createSpy().andReturn(0);e.reduceRight(t),expect(t.calls[0].args).toExactlyMatch([3,2,1,e])}),it("should start with the right initialValue",function(){var t=jasmine.createSpy().andReturn(0);e.reduceRight(t,0),expect(t.calls[0].args).toExactlyMatch([0,3,2,e])}),it("should not affect elements added to the array after it has begun",function(){var e=t([1,2,3]),n=0;Array.prototype.reduceRight.call(e,function(t,r){return n++,n<=4&&(e[n+2]=t+3),r}),expect(e).toEqual({0:1,1:2,2:3,3:6,4:5,length:3}),expect(n).toBe(2)}),it("should work as expected for empty arrays",function(){var e=jasmine.createSpy();expect(function(){Array.prototype.reduceRight.call({length:0},e)}).toThrow(),expect(e).not.toHaveBeenCalled()}),it("should throw correctly if no callback is given",function(){expect(function(){e.reduceRight()}).toThrow()}),it("should return the expected result",function(){expect(e.reduceRight(function(e,t){return(e||"").toString()+(t||"").toString()})).toEqual("321")}),it("should not directly affect the passed array",function(){var n=t(e);e.reduceRight(function(e,t){return e+t}),delete e.reduceRight,expect(e).toEqual(n)}),it("should skip non-set values",function(){delete e[1];var t={};e.reduceRight(function(e,n){return e&&(t[e]=!0),n&&(t[n]=!0),0}),expect(t).toEqual({1:!0,3:!0})}),it("should have the right length",function(){expect(e.reduceRight.length).toBe(1)})})}),describe("isArray",function(){it("should work for Array",function(){var e=Array.isArray([]);expect(e).toBe(!0)}),it("should fail for other objects",function(){var e=["someString",!0,!1,42,0,{},Object.create(null),/foo/,arguments,document.getElementsByTagName("div")];e.forEach(function(e){expect(Array.isArray(e)).toBe(!1)})})}),describe("unshift",function(){it("should return length",function(){expect([].unshift(0)).toEqual(1)})}),describe("splice",function(){var e=["b"],t=[1,"a",e],n;beforeEach(function(){n=t.slice(0)}),it("basic implementation test 1",function(){expect(n.splice(0)).toEqual(t)}),it("basic implementation test 2",function(){n.splice(0,2),expect(n).toEqual([e])}),it("should do nothing if method called with no arguments",function(){expect(n.splice()).toEqual([]),expect(n).toEqual(t)}),it("should set first argument to 0 if first argument is set but undefined",function(){var e=n.slice(0);expect(n.splice(void 0,2)).toEqual(e.splice(0,2)),expect(n).toEqual(e)}),it('should deleted and return all items after "start" when second argument is undefined',function(){expect(n.splice(0)).toEqual(t),expect(n).toEqual([])}),it('should deleted and return all items after "start" when second argument is undefined',function(){expect(n.splice(2)).toEqual([e]),expect(n).toEqual([1,"a"])}),it("runshould have the right length",function(){expect(n.splice.length).toBe(2)})})});