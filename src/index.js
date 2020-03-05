import React from "react";

// aspectFit

/**
 * 
 * @param {*} props 
 * mode.aspectFit 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
 * mode.aspectFill 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
 * mode.src
 */

 class ImageView extends React.Component {
    state = { }
    componentDidMount() {
        this.loadImg()
    }
    componentWillReceiveProps(nextProps) {
        this.loadImg()
    }
    loadImg() {
        
        const _load = new Image()
        _load.src = this.props.src
        _load.onload = () => {
            let { width, height } = _load
            
            if (this.props.style && this.props.style.height && this.props.style.width){
                
                const fitScalc = Math.min(this.props.style.width / width , this.props.style.height / height)
                const fillScalc = Math.max(this.props.style.width / width , this.props.style.height / height)
                
                if (this.props.mode === 'aspectFit') {
                    width = width * fitScalc
                    height = height * fitScalc
                }
                if (this.props.mode === 'aspectFill') {
                    width = width * fillScalc
                    height = height * fillScalc
                }
                
            } else if(this.props.style && this.props.style.width) {
                const scalc = this.props.style.width / width
                width = width * scalc
                height = height * scalc
                
            }else if(this.props.style && this.props.style.height) {
                const scalc = this.props.style.height / height
                width = width * scalc
                height = height * scalc
            }

            this.setState({imgSrc: this.props.src, width, height})
        }
    }
    render() {
        const blockStyle = {
            display: 'inline-block',
            overflow: 'hidden',
            ...this.props.style
        }
        return (
            
            <span  style={blockStyle}>
                {this.state.imgSrc ? <img src={this.state.imgSrc} alt="" style={{width:this.state.width, height: this.state.height}} /> : null}
            </span>
        )
     }
 }



export default ImageView