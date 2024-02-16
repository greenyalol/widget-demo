# Test task
Implementing an embedded widget for ad recommendations. The widget supports many media content extensions: 
```
'.png', '.pdf', '.svg', '.jpg', '.jpeg', '.mp4', '.avi', '.gif', '.htm', '.html', '.mpeg', '.pptx', '.ppt', '.3gp', '.webm', '.webp'
```
## Instructions for running this demo:
1. git clone https://github.com/greenyalol/widget-demo.git
2. cd widget-demo
3. npm i
4. npx webpack
5. npx webpack serve
6. go to http://localhost:9000/

### Description

The result is the module <code>widget.js</code>(module contains styles) located in the **dist** directory. Place this script inside the user's working directory. After that, execute the render() method with the container property. For example:

```
  <body>
    <div id="widget-container"></div>
    <script type="module">
        import Widget from "./dist/widget.js"
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

