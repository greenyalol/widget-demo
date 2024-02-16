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

![image](https://github.com/greenyalol/widget-demo/assets/19665630/ab5a26c7-bf3a-46d9-8e5e-effeace8dc41)
![image](https://github.com/greenyalol/widget-demo/assets/19665630/d02c60a5-098c-4412-b7c5-8d6509e97b94)
![image](https://github.com/greenyalol/widget-demo/assets/19665630/134385b1-79e1-4b7a-bbe9-d78372441237)

