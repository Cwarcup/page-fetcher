# Fetcher

```
fetcher(URL, localPath)
```
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like `Downloaded and saved 1235 bytes to ./index.html`.

```bash
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
```

- You need to make an http request and wait for the response.
- After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
