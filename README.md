# Consigliere
Don't let API rate limiting ruin your day: Consigliere tracks token freshness and timeouts so your app can scrape to its heart's content while still abiding the site's TOS.

## How it Works
1. Load tokens into `Consigliere()` object.
2. Retrieve token(s) like `Consigliere.getToken('token-type')`.
3. Use tokens for app like normal.
4. When requests indicate expired or timed out, indicate so:
...`Consigliere.setToken('token-id','reset-timestamp')` or:
...`Consigliere.expireTokenPermanent('token-id')`
5. Retrieve new token(s) as needed.

## Installation
`$ npm install consigliere`

## Implementation
- Experimenting with JS/ES6 and Python 3.X on Postgres variations.

## Considerations
1. Since an app can acquire 0 or more keys before initiating API requests the app must know how many requests before it should switch.
...-> Store the rate limit with the token (eg. `timeoutAfterRequestCount(1000)` for 1000 requests).
2. Not economical to request new token for each request.
3. Support up to 1,000,000 tokens?
4. When multiple client apps, how to select API key not 1) in-use and 2) not recently used.
5. Validation for all stored keys when possible.
6. Manipulating tokens carries security risk. Need to encrypt all phases to prevent loss of tokens. Maybe only store references in memory and explicitly retrieve from database?

## Operations
1. Read/Write tokens from disk into memory
2. Exhaust/Expire tokens
3. Test tokens
4. Group/ungroup tokens into collections 
5. Database and file-based key retrieval

## License
Available under the [MIT License](https://opensource.org/licenses/MIT).
