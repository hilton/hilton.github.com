## Add a pirate to a ship’s crew

Assigns a pirate to a ship, creating a new pirate resource with basic metadata.

Request - crew member details:

* `ShpOWZxvR3mxMndyC2aJ3A` - ship ID
* `KiMwscRpnoSOQwTm` - developer-specific API key that grants access to update a single ship, until its expiry date

```http
POST /ship/ShpOWZxvR3mxMndyC2aJ3A/crew HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer KiMwscRpnoSOQwTm

{
  "name": "Long John Silver",
  "rank": "Pirate captain",
  "born": {
    "town": "Bristol",
    "year": 1883
  },
  "familiar": {
    "type": "parrot",
    "name": "Captain Flint"
  }
}
```

Success response - crew member added:

* `P3jJuhcUJoWLFsYdjLZ3Ww` - pirate ID


```http
HTTP/1.1 201 Created
Location: /pirate/P3jJuhcUJoWLFsYdjLZ3Ww
```

Error response - ship not found:

```http
HTTP/1.1 404 Not Found
Content-Type: application/problem+json
Content-Language: en

{
  "title": "Ship not found",
  "detail": "No ship with ID ‘ShpOWZxvR3mxMndyC2aJ3A’ sails",
  "ship_id": "ShpOWZxvR3mxMndyC2aJ3A"
}
```
