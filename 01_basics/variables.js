const accountId=78964
let accountEmail="ama.google.com"
var accountPassword="4552"
let accountState;
// try to avoid var, never use it
/* | Feature                | `var`                                      | `let`                                    |
| ---------------------- | ------------------------------------------ | ---------------------------------------- |
| **Scope**              | Function-scoped                            | Block-scoped (inside `{}`)               |
| **Hoisting**           | Hoisted with *undefined* initialization    | Hoisted but not initialized              |
| **Re-declaration**     | Allowed within the same scope              | Not allowed in the same scope            |
| **Temporal Dead Zone** | Not affected                               | Exists — can't access before declaration |
| **Global object**      | Becomes a property of `window` in browsers | Doesn't become a `window` property       |
*/
console.table([accountId, accountEmail, accountPassword, accountState])