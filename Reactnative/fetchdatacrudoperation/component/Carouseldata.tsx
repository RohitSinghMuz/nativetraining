import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Left from "react-native-vector-icons/AntDesign"
import Right from "react-native-vector-icons/AntDesign"
interface IProps{

}
interface IState{
    currentIndex:any;
}


const images = [
    "https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-blue-technology-web-banner-image_122453.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg",
    "https://png.pngtree.com/thumb_back/fh260/back_pic/03/93/16/9057e520ba9e1a6.jpg",
    "https://i.pinimg.com/564x/89/e1/b7/89e1b7a45d8f06ff3d0371668e25c646.jpg",
  ];

class Carouseldata extends Component<IProps,IState> {
    constructor(props:any) {
        super(props);
    
        this.state = {
          currentIndex: 0,
        };
      }

      componentDidMount() {
        setInterval(() => {
          // this.setState({
          //   currentIndex:
          //     // this.state.currentIndex ? this.state.currentIndex+1
          //     //      : this.setState({currentIndex:1})
          // });
          if(this.state.currentIndex<3){
            this.setState({currentIndex:this.state.currentIndex+1})
          }else{
            this.setState({currentIndex:0})
          }
        }, 1000);
      }
    
    
 
    
  render() {
    return (
      <View style={{flex:1, backgroundColor:"black", justifyContent:"center",alignItems:"center"}}>
          <Image source={{uri:images[this.state.currentIndex]}} style={{height:"50%", width:"100%"}} />
          <TouchableOpacity style={{position:"absolute",top:"50%",left:0,backgroundColor:"black"}}>
          <Left name='left' size={40} color="red" />
          </TouchableOpacity>
         <TouchableOpacity  style={{position:"absolute",top:"50%",right:0,backgroundColor:"black"}}>
         <Left name='right' size={40} color="red" />
         </TouchableOpacity>
      </View>
    )
  }
}

export default Carouseldata;




