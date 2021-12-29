(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"], {
    /***/
    "+ksK":
    /*!***********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ksK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Niramit:300,300i,700\");\nion-content {\n  font-family: \"K2D\", sans-serif;\n  --background: #00b3f0 !important;\n  letter-spacing: 1px;\n}\n.container {\n  margin: 35px 20px 15px 20px;\n  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);\n  background: #6fcbfd !important;\n  border-radius: 10px;\n}\np {\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 14px;\n  opacity: 0.8;\n  margin: 0px !important;\n}\n.title-r {\n  font-size: 16px !important;\n  font-weight: 700 !important;\n}\n.timeline {\n  position: relative;\n  padding-left: 0;\n  margin: 0 0 0 30px;\n  color: #fff;\n}\n.timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0px;\n  height: 100%;\n  border-left: 2px dotted;\n}\n.timeline .timeline-container {\n  position: relative;\n}\n.timeline .timeline-container .timeline-icon {\n  position: absolute;\n  left: -25px;\n  top: 10%;\n  width: 50px;\n  height: 50px;\n  border-radius: 30%;\n  text-align: center;\n  font-size: 1.5rem;\n  background: #fff;\n}\n.timeline .timeline-container .timeline-icon i {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: #6fcbfd;\n}\n.timeline .timeline-container .timeline-icon img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.timeline .timeline-container .timeline-body {\n  border-radius: 10px;\n  padding: 15px 5px 15px 45px;\n}\n.timeline .timeline-container .timeline-body .timeline-title {\n  margin-bottom: 1.4rem;\n}\n.timeline .timeline-container .timeline-body .timeline-title .badge {\n  background: #45b4f0;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: bold;\n}\n.timeline .timeline-container .timeline-body .timeline-subtitle {\n  font-weight: 300;\n  font-style: italic;\n  opacity: 0.4;\n  margin-top: 16px;\n  font-size: 11px;\n}\n.timeline .timeline-container.primary .badge,\n.timeline .timeline-container.primary .timeline-icon {\n  background: #1d8cf8 !important;\n  color: #fff !important;\n}\nion-footer {\n  --background: #00b3f0 !important;\n}\nion-footer ion-toolbar {\n  --background: #00b3f0 !important;\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  background: #fff;\n  color: #000;\n  border-radius: 7px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 7px;\n}\nion-label {\n  display: block;\n}\n.card_div2 {\n  padding: 10px 20px;\n}\n.card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.card_div2 .card_div4 .flex_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  border-bottom: 1px dashed lightgray;\n}\n.card_div2 .card_div4 .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.card_div2 .card_div4 .flex_div .food_price {\n  font-size: 15px;\n}\n.card_div2 .card_div4 .flex_div ion-label {\n  color: #fff;\n}\n.card_div2 .order_detail h4 {\n  color: #fff;\n  font-weight: 700;\n}\n.card_div2 .order_detail .head_gray {\n  color: #fff;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.card_div2 .order_detail .small_lbl {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.card_div2 .order_detail .small_lbl span {\n  font-weight: 300;\n}\n.card_div2 .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 10px;\n}\n.card_div2 .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.card_div2 .order_detail .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.card_div2 .order_detail .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.card_div2 .order_detail .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.card_div2 .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: #fff;\n  font-size: 12px;\n}\n.card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: #fff;\n}\n.card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.card_div2 .order_detail .red_color {\n  color: var(--ion-color-primary);\n}\n.card_div2 .order_detail .small_lbl2 {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFpQlI7RUFDSSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQW1CQTtFQUNJLDJCQUFBO0VBQ0EsMENBWG1CO0VBWW5CLDhCQUFBO0VBQ0EsbUJBQUE7QUFoQko7QUFvQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWpCSjtBQW1CQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUFoQko7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFqQko7QUFtQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFqQlI7QUFvQkk7RUFDSSxrQkFBQTtBQWxCUjtBQW9CUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbEJaO0FBb0JZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQWxCaEI7QUFxQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbkJoQjtBQXVCUTtFQUNJLG1CQTdFVTtFQThFViwyQkFBQTtBQXJCWjtBQXNCWTtFQUNJLHFCQUFBO0FBcEJoQjtBQXNCZ0I7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQnBCO0FBd0JZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF0QmhCO0FBNEJZOztFQUVJLDhCQUFBO0VBQ0Esc0JBQUE7QUExQmhCO0FBaUNBO0VBQ0ksZ0NBQUE7QUE5Qko7QUErQkk7RUFDSSxnQ0FBQTtBQTdCUjtBQWlDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTlCSjtBQWdDSTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQTlCUjtBQWlDSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUEvQlI7QUFtQ0E7RUFDSSxjQUFBO0FBaENKO0FBa0NBO0VBQ0ksa0JBQUE7QUEvQko7QUFnQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBOUJSO0FBZ0NRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBOUJaO0FBZ0NRO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQTlCWjtBQWdDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQTlCWjtBQWtDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtBQWhDWjtBQWlDWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQS9CaEI7QUFpQ1k7RUFDSSxlQUFBO0FBL0JoQjtBQWlDWTtFQUNJLFdBQUE7QUEvQmhCO0FBcUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBbkNaO0FBcUNRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW5DWjtBQXFDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQ1o7QUFvQ1k7RUFDSSxnQkFBQTtBQWxDaEI7QUFxQ1E7RUFDSSxtQ0FBQTtFQUNBLG9CQUFBO0FBbkNaO0FBb0NZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBbENoQjtBQW1DZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWpDcEI7QUFtQ2dCO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQ3BCO0FBb0NZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFsQ2hCO0FBbUNnQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWpDcEI7QUFzQ1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFwQ1o7QUF1Q1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFyQ1o7QUF1Q1E7RUFDSSwrQkFBQTtBQXJDWjtBQXdDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXRDWiIsImZpbGUiOiJvcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OaXJhbWl0OjMwMCwzMDBpLDcwMCcpO1xuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjMWQ4Y2Y4O1xuJHNlY29uZGFyeTogIzRmNTM3YjtcbiRpbmZvOiAjMTFjZGVmO1xuJHN1Y2Nlc3M6ICMwMGJmOWE7XG4kd2FybmluZzogI2ZmOGQ3MjtcbiRkYW5nZXI6ICNmZDVkOTM7XG5cbi8vIHRpbWVsaW5lIHZhcmlhYmxlc1xuJGJvZHktYmc6ICMxZTFlMmY7XG4kdGltZWxpbmUtYmVmb3JlLWJnIDogIzIyMmE0MjtcbiR0aW1lbGluZS1ib2R5LWJnOiAjMjcyOTNkO1xuJHRpbWVsaW5lLWJvZHktcm91bmQ6IDEwcHg7XG4kdGltZWxpbmUtYm9keS1zaGFkb3c6IDFweCAzcHggOXB4IHJnYmEoMCwwLDAsIC4xKTtcblxuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnSzJEJywgc2Fucy1zZXJpZjtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGIzZjAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4vLyBwYWdlIGNvbnRhaW5lclxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAzNXB4IDIwcHggMTVweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6ICR0aW1lbGluZS1ib2R5LXNoYWRvdztcbiAgICBiYWNrZ3JvdW5kOiAjNmZjYmZkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLy8gdHlwb2dyYXBoeVxucCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvcGFjaXR5OiAuODtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnRpdGxlLXJ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4vLyB0aW1lbGluZSBzdHlsZVxuLnRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAwIDAgMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggZG90dGVkO1xuICAgIH1cblxuICAgIC50aW1lbGluZS1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLnRpbWVsaW5lLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNmZjYmZkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZS1ib2R5IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0aW1lbGluZS1ib2R5LXJvdW5kO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCA1cHggMTVweCA0NXB4O1xuICAgICAgICAgICAgLnRpbWVsaW5lLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XG5cbiAgICAgICAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDViNGYwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGltZWxpbmUtc3VidGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpbWFyeSBUaW1lbGluZVxuICAgICAgICAmLnByaW1hcnkge1xuICAgICAgICAgICAgLmJhZGdlLFxuICAgICAgICAgICAgLnRpbWVsaW5lLWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBiM2YwICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjNmMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIH1cbn1cblxuaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkX2RpdjIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAucGVyc29uYWxfZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc19uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfZGl2NCB7XG4gICAgICAgIC5mbGV4X2RpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAuZm9vZF90aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb2RfcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vcmRlcl9kZXRhaWwge1xuICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZF9ncmF5IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3ViTmFtZXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIC5mb29kX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgLnZlZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yYXRlX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGV4X3RpdGxlcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAuc3ViX25hbWUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJpemUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcml6ZTEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLnJlZF9jb2xvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtYWxsX2xibDIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "982l":
    /*!***********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
      \***********************************************************/

    /*! exports provided: OrderDetailPageModule */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function () {
        return OrderDetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-detail-routing.module */
      "t1E5");
      /* harmony import */


      var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-detail.page */
      "E4co");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var OrderDetailPageModule = function OrderDetailPageModule() {
        _classCallCheck(this, OrderDetailPageModule);
      };

      OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
      })], OrderDetailPageModule);
      /***/
    },

    /***/
    "E4co":
    /*!*********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
      \*********************************************************/

    /*! exports provided: OrderDetailPage */

    /***/
    function E4co(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function () {
        return OrderDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-detail.page.html */
      "eKVw");
      /* harmony import */


      var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-detail.page.scss */
      "+ksK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _verify_verify_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../verify/verify.page */
      "TCp9");

      var OrderDetailPage = /*#__PURE__*/function () {
        function OrderDetailPage(route, api, router, util, navCtrl, iab, modalCtrl) {
          _classCallCheck(this, OrderDetailPage);

          this.route = route;
          this.api = api;
          this.router = router;
          this.util = util;
          this.navCtrl = navCtrl;
          this.iab = iab;
          this.modalCtrl = modalCtrl;
          this.orders = [];
          this.orderNotes = '';
          this.rest = {};
          this.loaded = false;
        }

        _createClass(OrderDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              _this.tabId = data.id;
              _this.id = data.id;
              _this.myname = _this.util.userInfo && _this.util.userInfo.first_name ? _this.util.userInfo.first_name + ' ' + _this.util.userInfo.last_name : '';

              _this.getOrder();
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this2 = this;

            var param = {
              id: this.id
            };
            this.api.post('orders/getById', param).then(function (datas) {
              _this2.loaded = true;

              if (datas && datas.status === 200 && datas.data.length) {
                var data = datas.data[0];
                _this2.grandTotal = data.grand_total;
                _this2.orders = JSON.parse(data.orders);
                _this2.restId = data.restId;
                _this2.serviceTax = data.serviceTax;
                _this2.status = data.status;
                _this2.time = moment__WEBPACK_IMPORTED_MODULE_9__(data.time).format('llll');
                _this2.total = data.total;
                _this2.payment = data.pay_method;
                _this2.address = data.str_address;
                _this2.orderNotes = data.notes;

                if (data && data.address && data.address !== '') {
                  var addr = JSON.parse(data.address);
                  _this2.addresDeliveryCoord = addr;
                  _this2.deliveryAddress = addr.house + ' ' + addr.landmark + ' ' + addr.address + ' ' + addr.pincode;
                }

                _this2.deliveryCharge = data.delivery_charge;

                _this2.getUserInfo(data.uid);

                _this2.getRestInfo(_this2.restId);

                _this2.restName = data.str_name;
              }
            }, function (error) {
              _this2.loaded = true;

              _this2.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this2.loaded = true;

              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "getRestInfo",
          value: function getRestInfo(id) {
            var _this3 = this;

            var param = {
              id: id
            };
            this.api.post('stores/getByUid', param).then(function (data) {
              _this3.rest = data.data[0];
            }, function (error) {
              _this3.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this3.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo(uid) {
            var _this4 = this;

            var param = {
              id: uid
            };
            this.api.post('users/getById', param).then(function (data) {
              if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                _this4.userInfo = info;
                _this4.username = info.first_name + ' ' + info.last_name;
                _this4.useremail = info.email;
                _this4.userphone = info.mobile;
                _this4.usercover = info.cover;
                _this4.token = info.fcm_token;
              }
            }, function (error) {
              _this4.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this4.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_11__["VerifyPage"],
                        componentProps: {
                          code: this.userInfo.country_code,
                          phone: this.userInfo.mobile
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data && data.role === 'ok') {
                          // ok
                          var value = 'entregada';
                          var param = {
                            id: _this5.id,
                            status: value
                          };

                          _this5.util.show('Por favor espera');

                          _this5.api.post('orders/editList', param).then(function (order) {
                            if (order && order.status === 200) {
                              var driverParam = {
                                id: localStorage.getItem('uid'),
                                current: 'active'
                              };

                              _this5.api.post('drivers/edit_profile', driverParam).then(function (driver) {
                                if (driver && driver.status === 200) {
                                  _this5.util.hide();

                                  var msg = 'Orden ' + value + ' por ' + _this5.restName;

                                  _this5.api.sendNotification(msg, 'Orden ' + value, _this5.token);

                                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                    title: 'Genial!',
                                    text: 'El estado de la orden ha cambiado a ' + value,
                                    icon: 'success',
                                    timer: 2000,
                                    backdrop: false,
                                    background: 'white'
                                  });

                                  _this5.util.publishOrder();

                                  _this5.navCtrl.back();
                                } else {
                                  _this5.util.hide();

                                  _this5.util.errorToast('Algo ha ido mal');

                                  _this5.navCtrl.back();
                                }
                              }, function (error) {
                                console.log(error);

                                _this5.util.hide();

                                _this5.util.errorToast('Algo ha ido mal');
                              })["catch"](function (error) {
                                console.log(error);

                                _this5.util.hide();

                                _this5.util.errorToast('Algo ha ido mal');
                              }); // edit_profile

                            } else {
                              _this5.util.hide();

                              _this5.util.errorToast('Algo ha ido mal');

                              _this5.navCtrl.back();
                            }
                          }, function (error) {
                            _this5.util.hide();

                            _this5.util.errorToast('Algo ha ido mal');
                          })["catch"](function (error) {
                            _this5.util.hide();

                            _this5.util.errorToast('Algo ha ido mal');
                          });
                        }
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(value) {
            var _this6 = this;

            if (value === 'en camino') {
              var param = {
                id: this.id,
                status: value
              };
              this.util.show('Por favor espera...');
              this.api.post('orders/editList', param).then(function (order) {
                _this6.util.hide();

                if (order && order.status === 200) {
                  var msg = 'Orden ' + value + ' por ' + _this6.restName;

                  _this6.api.sendNotification(msg, 'Orden ' + value, _this6.token);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Genial',
                    text: 'Estado de la orden cambiado a ' + value,
                    icon: 'success',
                    timer: 2000,
                    backdrop: false,
                    background: 'white'
                  });

                  _this6.util.publishOrder();

                  _this6.navCtrl.back();
                } else {
                  _this6.util.hide();

                  _this6.util.errorToast('Algo ha ido mal');

                  _this6.navCtrl.back();
                }
              }, function (error) {
                console.log(error);

                _this6.util.hide();

                _this6.util.errorToast('Algo ha ido mal');
              })["catch"](function (error) {
                console.log(error);

                _this6.util.hide();

                _this6.util.errorToast('Algo ha ido mal');
              });
            } else if (value === 'entregada' && this.util.delivery === '1') {
              console.log('delivery with =>');
              this.openModal();
            } else {
              var _param = {
                id: this.id,
                status: value
              };
              this.util.show('Por favor espera');
              this.api.post('orders/editList', _param).then(function (order) {
                if (order && order.status === 200) {
                  var driverParam = {
                    id: localStorage.getItem('uid'),
                    current: 'active'
                  };

                  _this6.api.post('drivers/edit_profile', driverParam).then(function (driver) {
                    if (driver && driver.status === 200) {
                      _this6.util.hide();

                      var msg = 'Orden ' + value + ' por ' + _this6.restName;

                      _this6.api.sendNotification(msg, 'Order ' + value, _this6.token);

                      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                        title: 'Genial!',
                        text: 'El estado de la orden ha cambiado a ' + value,
                        icon: 'success',
                        timer: 2000,
                        backdrop: false,
                        background: 'white'
                      });

                      _this6.util.publishOrder();

                      _this6.navCtrl.back();
                    } else {
                      _this6.util.hide();

                      _this6.util.errorToast('Algo ha ido mal');

                      _this6.navCtrl.back();
                    }
                  }, function (error) {
                    _this6.util.hide();

                    _this6.util.errorToast('Algo ha ido mal');
                  })["catch"](function (error) {
                    _this6.util.hide();

                    _this6.util.errorToast('Algo ha ido mal');
                  }); // edit_profile

                } else {
                  _this6.util.hide();

                  _this6.util.errorToast('Algo ha ido mal');

                  _this6.navCtrl.back();
                }
              }, function (error) {
                _this6.util.hide();

                _this6.util.errorToast('Algo ha ido mal');
              })["catch"](function (error) {
                _this6.util.hide();

                _this6.util.errorToast('Algo ha ido mal');
              });
            }
          }
        }, {
          key: "changeOrderStatus",
          value: function changeOrderStatus() {
            if (this.changeStatusOrder) {
              this.changeStatus(this.changeStatusOrder);
            }
          }
        }, {
          key: "goToTracker",
          value: function goToTracker() {
            var destination = "".concat(this.rest.lat, ",").concat(this.rest.lng);
            window.open('https://waze.com/ul?ll=' + destination + '&navigate=yes&z=10');
          }
        }, {
          key: "goToVenue",
          value: function goToVenue() {
            var destination = "".concat(this.addresDeliveryCoord.lat, ",").concat(this.addresDeliveryCoord.lng); //`${localStorage.getItem('lat')},${localStorage.getItem('lng')}`;

            window.open('https://waze.com/ul?ll=' + destination + '&navigate=yes&z=10');
          }
        }, {
          key: "call",
          value: function call() {
            this.iab.create('tel:' + this.userphone, '_system');
          }
        }, {
          key: "mail",
          value: function mail() {
            this.iab.create('mailto:' + this.useremail, '_system');
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }]);

        return OrderDetailPage;
      }();

      OrderDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])], OrderDetailPage);
      /***/
    },

    /***/
    "eKVw":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eKVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Orden #{{id}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n        <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n    </div>\n    <div class=\"container\" *ngIf=\"loaded\">\n        <div class=\"timeline\">\n            <div class=\"timeline-container\">\n                <div class=\"timeline-icon\">\n                    <i class=\"fas fa-store-alt\"></i>\n                </div>\n                <div class=\"timeline-body\">\n                    <p class=\"title-r\">{{restName}}</p>\n                    <p class=\"address\">{{address}}</p>\n                    <h4 class=\"timeline-title\"\n                        *ngIf=\"status =='en camino' || status =='creada' || status =='picked' || status =='aceptada'\">\n                        <span class=\"badge primary\" (click)=\"goToTracker()\"><i class=\"fas fa-compass\"></i> Ver ubicacion</span>\n                    </h4>\n                </div>\n            </div>\n            <div class=\"timeline-container\">\n                <div class=\"timeline-icon\">\n                    <i class=\"fas fa-map-marker-alt\"></i>\n                </div>\n                <div class=\"timeline-body\">\n                    <p class=\"title-r\">{{username}}</p>\n                    <p class=\"address\">{{deliveryAddress}}</p>\n                    <h4 class=\"timeline-title\"\n                        *ngIf=\"status =='en camino' || status =='creada' || status =='picked' || status =='aceptada'\">\n                        <span class=\"badge primary\" (click)=\"goToVenue()\"><i class=\"fas fa-compass\"></i> Ver ubicacion</span> &nbsp;\n                        <span class=\"badge primary\" (click)=\"call()\"><i class=\"fas fa-headset\"></i> Llamar ahora</span>\n                    </h4>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"loaded\">\n        <div class=\"card_div2\">\n            <div class=\"order_detail\">\n                <h4>Productos</h4>\n                <br>\n                <span *ngFor=\"let item of orders\">\n                    <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n                        <ion-label class=\"food_title\">\n                            {{item.name}} X\n                            {{item.selectedItem[j].total}}</ion-label>\n                        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                            <p class=\"sub_name\">\n                                - {{addods.name}}\n                            </p>\n                            <p class=\"sub_name\">\n                                <span *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{addods.value}}</span>\n                                <span *ngIf=\"util.cside ==='right'\"> {{addods.value}} {{util.currecny}}</span>\n\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"card_div4\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n                        <div class=\"flex_div\">\n                            <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n                            <ion-label class=\"food_price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.quantiy\n                                * item.price}}\n                            </ion-label>\n                            <ion-label class=\"food_price\" *ngIf=\"util.cside ==='right'\">{{item.quantiy * item.price}}\n                                {{util.currecny}}</ion-label>\n                        </div>\n\n                    </div>\n\n                </span>\n\n\n            </div>\n        </div>\n        <div class=\"line_div\"></div>\n        <div class=\"card_div2\">\n            <div class=\"order_detail\">\n                <ion-label class=\" small_lbl\">Ordenado en</ion-label>\n                <ion-label class=\"head_gray\">{{time}} </ion-label>\n                <br>\n                <ion-label class=\"small_lbl\">Notas</ion-label>\n                <ion-label class=\" head_gray\">{{orderNotes}} </ion-label>\n            </div>\n\n        </div>\n\n        <div class=\"line_div\"></div>\n        <div class=\"card_div2\">\n\n            <div class=\"order_detail\">\n                <ion-label class=\"small_lbl2\">Total\n                    <span class=\"prize1\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{total}}</span>\n                    <span class=\"prize1\" *ngIf=\"util.cside ==='right'\"> {{total}} {{util.currecny}}</span>\n                </ion-label>\n                <ion-label class=\"small_lbl2\">Precio por envío\n                    <span class=\"prize1\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{deliveryCharge}}</span>\n                    <span class=\"prize1\" *ngIf=\"util.cside ==='right'\"> {{deliveryCharge}} {{util.currecny}}</span>\n                </ion-label>\n\n\n                <ion-label class=\"small_lbl2\">Método de pago\n                    <span class=\"prize1 red_color\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{payment}}</span>\n\n\n                </ion-label>\n\n            </div>\n\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n        <div class=\"status_div\" *ngIf=\"status == 'aceptada' || status == 'en camino' \">\n            <div style=\"width: 200px;\">\n                <ion-select placeholder=\"Estado\" [(ngModel)]=\"changeStatusOrder\" mode=\"ios\" size=\"medium\">\n                    <ion-select-option value=\"en camino\">En camino</ion-select-option>\n                    <ion-select-option value=\"cancelada\">Cancelar</ion-select-option>\n                    <ion-select-option value=\"entregada\">Entregada</ion-select-option>\n                </ion-select>\n            </div>\n\n            <div>\n                <ion-button (click)=\"changeOrderStatus()\" size=\"medium\">\n                    Actualizar estado\n                </ion-button>\n            </div>\n        </div>\n        <ion-label class=\"green\" *ngIf=\"status ==='entregada'\"> Estado : {{status}}</ion-label>\n    </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "t1E5":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: OrderDetailPageRoutingModule */

    /***/
    function t1E5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function () {
        return OrderDetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-detail.page */
      "E4co");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var routes = [{
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
      }];

      var OrderDetailPageRoutingModule = function OrderDetailPageRoutingModule() {
        _classCallCheck(this, OrderDetailPageRoutingModule);
      };

      OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-order-detail-order-detail-module-es5.js.map