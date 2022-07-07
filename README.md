# Fetcher
`fetcher` downoads the resource at the URL to the local path on your machine. Upon completion, it should print out a message like `Downloaded and saved 1235 bytes to ./index.html`.

```bash
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
```

- You need to make an http request and wait for the response.
- After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.


> Edge Case 1: File Already Exists:
> If the file path already exists, right now your app will overwrite it! If you want to change this, let the user know and prompt them to type in `y` (followed by the `enter` key) to overwrite the file, otherwise skip and exit the app. We suggest using the readline module, which we've previously used.

> Edge Case 2: File Path is Invalid:
>If the file path is invalid, the app should fail and let the user know about this issue.

> Edge Case 3: URL is Invalid
> If the URL is invalid, terminate the app explaining to the user what went wrong, and not write the response body to the file.

## Tools used:
- [request module](https://www.npmjs.com/package/request) 
- [fs](https://nodejs.org/api/fs.html)
- [readline](https://nodejs.org/docs/latest-v16.x/api/readline.html)
- [chalk v4.1.2](https://www.npmjs.com/package/chalk)