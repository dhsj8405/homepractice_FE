const path = require('path');

module.exports = {
    mode: 'development', 
    
    // 의존성 분석을 src밑에 index.js부터한다 == entry 속성은 최상위 자바스크립트를 의미
    // 이 속성에 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번틀 파일을 만든다.
    entry: path.resolve('./src/index'),     

    // output 속성: 컴파일 + 번들링 된 js 파일이 저장될 경로와 이름을 지정한다.
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'       //모듈에 이미지 걸리면 퍼블릭으로 옮기면서 이름 해싱해서보냄
    },
    
    // module 속성은 로더를 설정해주는 역할
    // webpack은 js뿐만 아니라 Loader를 이용하여 CSS나 이미지, 웹폰트, jSX, VUE 등 
    // 다양한 종류의 파일을 함께 번들링 할 수 있는데 그 설정을 여기서 하는 것이다.
    module:{
        rules: [{
            test: /\.js$/i,      
            exclude: /node_modules/, //정규표현식 //트랜스파일링(코드변환)하는데 node_modules라이브러리들은 빼라 
            use: ['babel-loader'] 
        },{
            test : /\.(sa|sc|c)ss$/i,                          //sass,scss,css로 끝나는 모든파일 : .을 쓰기위해 이스케이프(\) 써줌 i:ignorecase, sass가 scss편하게쓰게해주는것
            use : ['style-loader', 'css-loader','sass-loader'] //use 배열안에 여러 로더를 설정할 경우 로더의 실행 순서는 오른쪽에서 왼쪽순으로 실행
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,         //$ :끝        e?g e가없어도됨 
            type: 'asset/resource'
        }]
    },
    devtool: "eval-source-map",                     //에러났을때 에러위치를 번들링.js로 표시해서 원래소스랑 매핑해주는것
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 3000,
        // inline: true,
        proxy: {
            '/api': 'http://localhost:9099'
        },
        hot: false,
        compress: true,
        historyApiFallback: true            // 가상~~ 404 났을때 메인으로도림
    }
}