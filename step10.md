# Step 10 - Save your blog posts

```bash
git checkout step10
git merge step9
 ```
---

There's a new file in the public folder, `script.js`.  Don't worry about what all the code means, just know that it's responsible for sending a request to `GET` old blog posts and display them on the page underneath "Recent Posts".  

You probably want to handle the request from that `script.js` file in your server code...


## Saving data to a file

At the moment, your blog posts are reaching the server, but aren't being saved anywhere.  They just disappear into a cloud of bits and bytes.  We need to find a way to save them so that you can retrieve them later.

You'll note that in the `src` folder there's a new file called `posts.json`.  

JSON is a type of file for structuring data in a readable way.  They're also a really popular format for sending data across the web.

JSON is a string representation of a Javascript object.  JSON objects convert really easily to Javascript objects, and vice versa, with `JSON.parse()` and `JSON.stringify()`.  

(If you're not sure about Javascript objects, have a chat with your mentor and your team.)

You'll see there's already one blog post sitting in `posts.json`.  The format is:
```js
{
    [timestamp]: [blog post message]
}
```
We've used a timestamp as the key so that the blog posts are listed in chronological order.  Also, it's a record of when the blog post was created.  

To add your own blog posts to `posts.json`, you will need to read the file from the hard drive, add to it, then write it back.  

You'll remember that `fs.readFile()` is the method responsible for reading files from your hard drive.  Well, `fs.writeFile()` is a method that allows you to write data into a file.

```js
fs.writeFile('path/to/file', yourData, (error) {

    // do something after the file has been written
});
```


**Modify your server code to:**

1. **Save your blog post data into `posts.json`**

2. **Handle the `script.js` request coming into the server**

3. **Retrieve all your posts and send them back to `script.js`**


* You'll want to make sure your blog posts are also added with a timestamp.  You can get the current unix timestamp using `Date.now()`.

* `fs.writeFile()` automatically overwrites the whole file.  Chances are you don't want to lose all your old blog posts, so think about how you can use both `fs.readFile()` and `fs.writeFile()` to prevent overwriting.

* The code in `script.js` is expecting to receive a JSON object.  Remember your http headers!
---

If all goes well, you should have a fully functional CMS!


🎉CONGRATULATIONS!!🎉
===


Want more?  Then head over to...  

## [**Stretch goals >>> **](stretch.md)
---
## Keywords
* [JSON](http://www.w3schools.com/js/js_json.asp)
* [timestamp](http://www.w3schools.com/jsref/jsref_now.asp)