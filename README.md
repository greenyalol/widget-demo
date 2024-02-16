# Test task
Implementing an embedded widget for ad recommendations.
## Instructions for running
1. git clone https://github.com/greenyalol/widget-demo.git)https://github.com/greenyalol/widget-demo.git
2. npm i
3. npx webpack

The result is the module <code>widget.js</code> located in the **dist** directory. Place this script inside the user's working directory. After that, execute the render() method with the container property. For example:

### User website
```
  <body>
    <div id="widget-container"></div>
    <script type="module">
        import Widget from "/path-to-script/widget.js"
        await Widget.render({
            container: "widget-container"
        });
    </script>
  </body>
```

The ID of the `<div>` element will match the value defined in the container property.
If these do not match, the widget will not render.
