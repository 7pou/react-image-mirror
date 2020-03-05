import React from "react";

// aspectFit

/**
 * 
 * @param {*} props 
 * mode.contain 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
 * mode.cover 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
 * mode.src
 */

 class ImageView extends React.Component {
    
   
    render() {
        const blockStyle = {
            display: 'inline-block',
            overflow: 'hidden',
            backgroundImage:'url('+ this.props.src +')',
            backgroundSize: this.props.mode || 'cover',
            backgroundPosition: this.props.position || 'center',
            backgroundRepeat: this.props.repeat || 'no-repeat',
            
            ...this.props.style
        }
        return (
            
            <span style={blockStyle}>
                {this.props.children}
            </span>
        )
     }
 }



export default ImageView