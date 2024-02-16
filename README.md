# Test task
Implementing an embedded widget for ad recommendations.
## Instructions for running
1. git clone https://github.com/greenyalol/widget-demo.git)https://github.com/greenyalol/widget-demo.git
2. npm i
3. npx webpack

The result - module <code>widget.js</code> script file in **dist** directory. Put this script inside the user working directory. After this execute the render() method with container parameter. Example:

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

The ID of the < div> element will match the value defined in the container property.
If these do not match, the widget will not render.
