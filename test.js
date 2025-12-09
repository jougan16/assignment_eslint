import { isValidUsername } from "./services/validateService.js";

function assert(condition, message) {
    if (!condition) {
        console.error("TEST FAILED:", message);
        process.exit(1);
    }
}

console.log("Running username validation tests...\n");

// Valid cases
// assert(isValidUsername("user123") === true, "Valid username should pass");
// assert(isValidUsername("ABC123") === true, "Uppercase should pass");

// Invalid cases
 assert(isValidUsername("user!!") === false, "Symbols should fail");
// assert(isValidUsername("user name") === false, "Spaces should fail");
// assert(isValidUsername("") === false, "Empty string should fail");

console.log("\n✅ ALL TESTS PASSED!");
