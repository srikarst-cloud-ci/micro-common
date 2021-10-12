"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgStatus = void 0;
var OrgStatus;
(function (OrgStatus) {
    // When the order has been created, but the
    // ticket it is trying to order has not been reserved
    OrgStatus["Created"] = "created";
    // The ticket the order is trying to reserve has already
    // been reserved, or when the user has cancelled the order.
    // The order expires before payment
    OrgStatus["Cancelled"] = "cancelled";
    // The order has successfully reserved the ticket
    OrgStatus["AwaitingPayment"] = "awaiting:payment";
    // The order has reserved the ticket and the user has
    // provided payment successfully
    OrgStatus["Complete"] = "complete";
})(OrgStatus = exports.OrgStatus || (exports.OrgStatus = {}));
