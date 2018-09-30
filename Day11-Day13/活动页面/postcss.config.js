const postcssPxToViewport = require('postcss-px-to-viewport');

module.exports={
    plugins:[
        postcssPxToViewport({ 
            viewportWidth: 640, 
            viewportHeight: 1136, 
            unitPrecision: 3, 
            viewportUnit: 'vw', 
            selectorBlackList: ['.ignore', '.hairlines'], 
            minPixelValue: 1, 
            mediaQuery: false 
          })
    
    ]
}